import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-mist sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
