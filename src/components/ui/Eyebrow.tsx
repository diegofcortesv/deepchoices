import { clsx } from "clsx";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "block font-body text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[--accent] mb-3",
        className
      )}
    >
      {children}
    </span>
  );
}
