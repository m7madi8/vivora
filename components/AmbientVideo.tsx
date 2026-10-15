"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

type AmbientVideoProps = {
  src: string;
  poster: string;
  /** Above-the-fold video starts loading immediately. */
  eager?: boolean;
  className?: string;
  label: string;
};

/**
 * Muted looping film that only plays while on screen, never for
 * reduced-motion visitors, and always offers a pause control.
 */
export default function AmbientVideo({ src, poster, eager = false, className = "", label }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const shouldPlay = !reduced && !userPaused;
    let visible = false;

    const apply = () => {
      if (shouldPlay && visible) {
        video.play().catch(() => {
          /* autoplay can be refused; the poster stays visible */
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        apply();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced, userPaused]);

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster}
        preload={eager ? "auto" : "none"}
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!reduced ? (
        <button
          type="button"
          onClick={() => {
            if (playing) {
              setUserPaused(true);
            } else {
              setUserPaused(false);
              videoRef.current?.play().catch(() => {});
            }
          }}
          aria-label={playing ? `Pause ${label}` : `Play ${label}`}
          className="video-toggle"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      ) : null}
    </>
  );
}
