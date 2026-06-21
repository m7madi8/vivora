'use client'

import { useEffect, useRef, useState } from "react";

export default function DecorativeArc() {
  const pathRef = useRef<SVGPathElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let raf: number;

    const handleScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const y = window.scrollY;

        const start = 300;
        const end = 900;

        let value = (y - start) / (end - start);
        value = Math.max(0, Math.min(1, value));

        setProgress(value);

        const path = pathRef.current;
        if (!path) return;

        const length = path.getTotalLength();
        const current = length * value;

        // ✅ النقطة الحقيقية على المسار
        const p = path.getPointAtLength(current);
        const p2 = path.getPointAtLength(
          Math.min(current + 0.5, length)
        );

        // ✅ حساب الزاوية بدقة
        const ang =
          (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;

        setPoint({ x: p.x, y: p.y });
        setAngle(ang);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none">

      {/* ✨ المسار */}
      <path
        ref={pathRef}
        d="M95 20C65 20 25 60 25 125"
        stroke="#1a1a1a"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="220"
        strokeDashoffset={220 - progress * 220}
      />

      {/* 💣 رأس السهم الحقيقي (ملتصق بالخط) */}
      <g
        transform={`translate(${point.x}, ${point.y}) rotate(${angle})`}
        style={{
          opacity: progress,
          transition: "opacity 0.2s ease-out"
        }}
      >
        <path
          d="M0 0 L-10 -6 L-10 6 Z"
          fill="#1a1a1a"
        />
      </g>

    </svg>
  );
}