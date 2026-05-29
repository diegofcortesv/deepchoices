import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost";

type ButtonBaseProps = {
  variant?: Variant;
  size?: "sm" | "md";
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold leading-none transition-all duration-200 ease-out cursor-pointer select-none rounded-full whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-[--accent] text-[#F5F3EF] hover:bg-[--accent-dk] active:scale-[0.98] hover:-translate-y-px",
  ghost:
    "text-[--text-2] border border-[--border] hover:text-[--text] hover:border-[--text-3] active:scale-[0.98] hover:-translate-y-px",
};

const sizes = {
  sm: "text-sm px-4 py-2.5",
  md: "text-[0.88rem] px-6 py-3",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    const { ...linkProps } = props as Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
