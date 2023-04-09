"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div
      className={
        center ? "flex flex-col text-center" : "flex flex-col text-start"
      }
    >
      <strong className="text-2xl font-bold">{title}</strong>
      <span className="font-light text-neutral-500 mt-2">{subtitle}</span>
    </div>
  );
}
