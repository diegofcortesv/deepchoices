export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1"  y="1"  width="11" height="11" rx="3.2" fill="var(--accent)"/>
      <rect x="14" y="1"  width="11" height="11" rx="3.2" fill="var(--accent)" opacity=".45"/>
      <rect x="1"  y="14" width="11" height="11" rx="3.2" fill="var(--accent)" opacity=".45"/>
      <rect x="14" y="14" width="11" height="11" rx="3.2" fill="var(--accent)" opacity=".18"/>
    </svg>
  );
}
