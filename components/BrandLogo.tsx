type BrandLogoProps = {
  className?: string;
  showTm?: boolean;
};

export default function BrandLogo({ className = "", showTm = false }: BrandLogoProps) {
  return (
    <span
      className={`font-brand text-[1.05rem] font-bold uppercase tracking-[0.16em] ${className}`}
    >
      VIVORA
      {showTm ? (
        <sup className="ml-0.5 inline-flex h-[0.85em] w-[0.85em] items-center justify-center rounded-full border border-current text-[0.28em] font-bold leading-none tracking-normal">
          TM
        </sup>
      ) : null}
    </span>
  );
}
