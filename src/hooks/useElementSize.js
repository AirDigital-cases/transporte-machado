import { useEffect, useState } from "react";

export function useElementSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const node = ref.current;

    const updateSize = () => {
      setSize({
        width: Math.round(node.clientWidth),
        height: Math.round(node.clientHeight),
      });
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return size;
}
