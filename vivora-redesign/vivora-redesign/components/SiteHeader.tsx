'use client'

import { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const links = [
  { label: "Shop", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Bundles", href: "#bundles" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  // solid: header leaves the hero and takes a cream surface
  // hidden: header slides away while scrolling down, returns on scroll up
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;

      setSolid(y > window.innerHeight * 0.6);

      if (Math.abs(delta) > 6) {
        setHidden(y > 120 && delta > 0);
        lastY.current = y;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Native <dialog> does not lock page scroll, so do it while the menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };

  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-40 mx-auto flex h-16 w-full max-w-[430px]
          items-center justify-between border-b px-3
          transition-[transform,background-color,color,border-color] duration-300
          ${
            solid
              ? "border-vivora-driftwood/40 bg-vivora-cream text-vivora-ink"
              : "border-transparent text-white"
          }
          ${hidden && !open ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <button
          type="button"
          onClick={openMenu}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          className="flex h-11 w-11 cursor-pointer flex-col items-start justify-center gap-[6px] pl-2.5"
        >
          <span className="h-[1.5px] w-[22px] bg-current" />
          <span className="h-[1.5px] w-[22px] bg-current" />
        </button>

        <a href="#main" aria-label="Vivora — back to top" className="cursor-pointer">
          <BrandLogo className="text-[1.15rem] tracking-[0.18em]" />
        </a>

        {/* No cart exists yet, so this takes people to the products instead of pretending to open a bag. */}
        <a
          href="#products"
          aria-label="Shop products"
          className="flex h-11 w-11 cursor-pointer items-center justify-end pr-2.5"
        >
          <svg width="20" height="22" viewBox="0 0 22 24" fill="none" aria-hidden="true">
            <path
              d="M5.5 7.5V6.5C5.5 3.73858 7.73858 1.5 10.5 1.5C13.2614 1.5 15.5 3.73858 15.5 6.5V7.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M3 7.5H18L16.5 22H5L3 7.5Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </header>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
        className="menu-drawer m-0 h-dvh max-h-none w-[min(86vw,360px)] bg-vivora-cream p-0 text-vivora-ink backdrop:bg-black/45"
      >
        <div className="flex h-full flex-col px-5 pb-8 pt-3">
          <div className="flex h-12 items-center justify-between">
            <BrandLogo className="text-[1.05rem] tracking-[0.18em]" />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Primary" className="mt-12">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block cursor-pointer py-2 font-display text-[40px] italic leading-[1.1] transition-opacity duration-200 hover:opacity-60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-auto text-[13px] leading-[1.6] text-vivora-stone">
            True to oneself, kind to nature.
          </p>
        </div>
      </dialog>
    </>
  );
}
