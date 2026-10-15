type ArrowIconProps = {
  direction?: "left" | "right";
};

export function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BagIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 22 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 7.5V6.5C5.5 3.73858 7.73858 1.5 10.5 1.5C13.2614 1.5 15.5 3.73858 15.5 6.5V7.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M3 7.5H18L16.5 22H5L3 7.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function PauseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <rect x="2" y="1.5" width="2.5" height="9" rx="0.5" />
      <rect x="7.5" y="1.5" width="2.5" height="9" rx="0.5" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M3 1.8V10.2C3 10.6 3.45 10.85 3.8 10.6L10 6.4C10.3 6.2 10.3 5.8 10 5.6L3.8 1.4C3.45 1.15 3 1.4 3 1.8Z" />
    </svg>
  );
}
