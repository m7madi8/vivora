import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  bg?: string;
  rounded?: string;
  padding?: string;
  className?: string;
  imageClassName?: string;
};

export default function ResponsiveImage({
  src,
  alt,
  width = 1080,
  height = 1350,
  sizes = "(max-width: 430px) 100vw, 430px",
  priority = false,
  bg = "#f5f0eb",
  rounded = "rounded-[28px]",
  padding = "p-0",
  className = "",
  imageClassName = "",
}: ResponsiveImageProps) {
  return (
    <div
      className={`image-showcase ${rounded} ${padding} ${className}`}
      style={{ backgroundColor: bg }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`h-auto w-full ${imageClassName}`}
      />
    </div>
  );
}

type ResponsiveImageFrameProps = {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  bg?: string;
  rounded?: string;
  className?: string;
  fit?: "contain" | "cover";
};

export function ResponsiveImageFrame({
  src,
  alt,
  aspect = "4/5",
  sizes = "(max-width: 430px) 85vw, 280px",
  bg = "#f5f0eb",
  rounded = "rounded-[20px]",
  className = "",
  fit = "contain",
}: ResponsiveImageFrameProps) {
  return (
    <div
      className={`image-frame ${rounded} ${className}`}
      style={{ backgroundColor: bg, aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={fit === "cover" ? "object-cover object-center" : "object-contain p-3"}
        sizes={sizes}
      />
    </div>
  );
}
