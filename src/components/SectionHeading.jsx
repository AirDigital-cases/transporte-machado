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
      <h2 className="text-balance text-[2rem] font-semibold leading-[1.05] text-white sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[0.98rem] leading-7 text-mist sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
