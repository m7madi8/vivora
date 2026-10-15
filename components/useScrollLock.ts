"use client";

import { useEffect } from "react";

let locks = 0;

/** Native <dialog> does not stop the page behind it from scrolling. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    locks += 1;
    document.documentElement.style.overflow = "hidden";
    return () => {
      locks -= 1;
      if (locks === 0) document.documentElement.style.overflow = "";
    };
  }, [active]);
}
