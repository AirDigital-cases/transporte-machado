import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { useElementSize } from "../hooks/useElementSize";
import { GlobeVisualFallback } from "./GlobeVisualFallback";

const hubs = [
  { name: "Manaus", lat: -3.119, lng: -60.021, size: 1.08 },
  { name: "Belém", lat: -1.4558, lng: -48.4902, size: 0.95 },
  { name: "Fortaleza", lat: -3.7319, lng: -38.5267, size: 0.92 },
  { name: "Recife", lat: -8.0476, lng: -34.877, size: 0.9 },
  { name: "Salvador", lat: -12.9777, lng: -38.5016, size: 0.95 },
  { name: "Brasília", lat: -15.7942, lng: -47.8822, size: 1.02 },
  { name: "Goiânia", lat: -16.6869, lng: -49.2648, size: 0.88 },
  { name: "Cuiabá", lat: -15.6014, lng: -56.0979, size: 0.84 },
  { name: "Belo Horizonte", lat: -19.9167, lng: -43.9345, size: 0.92 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, size: 1.03 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333, size: 1.2 },
  { name: "Curitiba", lat: -25.4284, lng: -49.2733, size: 0.96 },
  { name: "Porto Alegre", lat: -30.0346, lng: -51.2177, size: 0.92 },
];

const routesDefinition = [
  ["São Paulo", "Manaus"],
  ["São Paulo", "Belém"],
  ["São Paulo", "Fortaleza"],
  ["São Paulo", "Recife"],
  ["São Paulo", "Salvador"],
  ["São Paulo", "Brasília"],
  ["São Paulo", "Goiânia"],
  ["São Paulo", "Cuiabá"],
  ["São Paulo", "Belo Horizonte"],
  ["São Paulo", "Rio de Janeiro"],
  ["São Paulo", "Curitiba"],
  ["São Paulo", "Porto Alegre"],
  ["Brasília", "Belém"],
  ["Brasília", "Fortaleza"],
  ["Brasília", "Salvador"],
  ["Curitiba", "Porto Alegre"],
  ["Goiânia", "Cuiabá"],
  ["Belo Horizonte", "Salvador"],
];

const hubLookup = new Map(hubs.map((hub) => [hub.name, hub]));

const routes = routesDefinition.map(([from, to], index) => {
  const start = hubLookup.get(from);
  const end = hubLookup.get(to);

  return {
    startLat: start.lat,
    startLng: start.lng,
    endLat: end.lat,
    endLng: end.lng,
    altitude: 0.1 + (index % 4) * 0.025,
    color:
      index % 3 === 0 ? ["#ff9b57", "#d50000"] : ["#d50000", "#ff6d3d"],
  };
});

const rings = hubs.filter((_, index) => index % 2 === 0);

function createTexture() {
  if (typeof document === "undefined") {
    return undefined;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return undefined;
  }

  const background = ctx.createLinearGradient(0, 0, 0, canvas.height);
  background.addColorStop(0, "#060606");
  background.addColorStop(0.55, "#0b0b0b");
  background.addColorStop(1, "#030303");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += 128) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= canvas.height; y += 128) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  const glowPoints = [
    [0.24, 0.34, "rgba(213,0,0,0.18)", 180],
    [0.39, 0.42, "rgba(255,155,87,0.14)", 220],
    [0.56, 0.56, "rgba(213,0,0,0.16)", 210],
    [0.73, 0.31, "rgba(255,155,87,0.12)", 190],
  ];

  glowPoints.forEach(([x, y, color, size]) => {
    const gradient = ctx.createRadialGradient(
      canvas.width * x,
      canvas.height * y,
      0,
      canvas.width * x,
      canvas.height * y,
      size,
    );
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(canvas.width * x, canvas.height * y, size, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.strokeStyle = "rgba(213,0,0,0.16)";
  ctx.lineWidth = 2;

  for (let index = 0; index < 18; index += 1) {
    const startX = 120 + index * 90;
    const startY = 170 + ((index * 47) % 480);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 180, startY + 42);
    ctx.stroke();
  }

  return canvas.toDataURL("image/png");
}

function supportsGlobeRendering() {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    typeof HTMLCanvasElement === "undefined"
  ) {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const webgl2 =
      typeof WebGL2RenderingContext !== "undefined"
        ? canvas.getContext("webgl2")
        : null;
    const webgl =
      canvas.getContext("webgl", {
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }) || canvas.getContext("experimental-webgl");

    return Boolean(webgl2 || webgl);
  } catch (error) {
    console.error("WebGL support check failed:", error);
    return false;
  }
}

export default function GlobeCanvas() {
  const wrapperRef = useRef(null);
  const globeRef = useRef(null);
  const { width } = useElementSize(wrapperRef);
  const [GlobeComponent, setGlobeComponent] = useState(null);
  const [texture, setTexture] = useState(null);
  const [mode, setMode] = useState("loading");
  const height = width >= 1024 ? 620 : width >= 768 ? 520 : 380;

  useEffect(() => {
    let isCancelled = false;

    async function prepareGlobe() {
      if (!supportsGlobeRendering()) {
        if (!isCancelled) {
          setMode("unsupported");
        }
        return;
      }

      try {
        const textureUrl = createTexture();

        if (!isCancelled) {
          setTexture(textureUrl);
        }

        const module = await import("react-globe.gl");

        if (!isCancelled) {
          setGlobeComponent(() => module.default);
          setMode("ready");
        }
      } catch (error) {
        console.error("Unable to load globe component safely:", error);

        if (!isCancelled) {
          setMode("error");
        }
      }
    }

    prepareGlobe();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (
      mode !== "ready" ||
      !globeRef.current ||
      !width ||
      typeof window === "undefined"
    ) {
      return;
    }

    try {
      const globe = globeRef.current;
      const controls = globe.controls();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.42;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.minDistance = width < 768 ? 300 : 360;
      controls.maxDistance = width < 768 ? 300 : 360;

      const material = globe.globeMaterial();
      material.color = new Color("#131313");
      material.emissive = new Color("#2a0505");
      material.emissiveIntensity = 0.78;
      material.shininess = 14;
      material.specular = new Color("#6d2712");

      globe.pointOfView(
        { lat: -15, lng: -55, altitude: width < 768 ? 1.85 : 1.58 },
        0,
      );

      const renderer = globe.renderer();

      if (renderer) {
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
      }
    } catch (error) {
      console.error("Globe renderer setup failed, switching to fallback:", error);
      setMode("error");
    }
  }, [mode, width]);

  return (
    <div
      ref={wrapperRef}
      className="relative min-h-[380px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] sm:min-h-[520px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,0,0,0.16),transparent_55%)]" />
      {mode === "ready" && width && GlobeComponent ? (
        <GlobeComponent
          ref={globeRef}
          width={width}
          height={height}
          animateIn={false}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl={texture}
          bumpImageUrl={texture}
          showAtmosphere
          atmosphereColor="#d50000"
          atmosphereAltitude={0.12}
          enablePointerInteraction={false}
          arcsData={routes}
          arcStroke={width < 768 ? 0.45 : 0.55}
          arcAltitude="altitude"
          arcColor="color"
          arcDashLength={0.3}
          arcDashGap={0.7}
          arcDashInitialGap={() => Math.random()}
          arcDashAnimateTime={2300}
          pointsData={hubs}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#ff6d3d"}
          pointAltitude={0.065}
          pointRadius={(point) => 0.18 * point.size}
          ringsData={rings}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => (t) => `rgba(255, 110, 70, ${1 - t})`}
          ringMaxRadius={5}
          ringPropagationSpeed={1.8}
          ringRepeatPeriod={900}
        />
      ) : (
        <GlobeVisualFallback mode={mode} embedded />
      )}
    </div>
  );
}
