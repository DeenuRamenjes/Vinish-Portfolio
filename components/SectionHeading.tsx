'use client';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({
  title,
  className = '',
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl lg:text-4xl font-display font-normal tracking-tight text-white ${className}`}
    >
      {title}
    </h2>
  );
}
