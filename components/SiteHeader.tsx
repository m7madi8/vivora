"use client";

import { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { useCart } from "@/components/cart/CartProvider";
import { BagIcon, CloseIcon } from "@/components/icons";
import { useScrollLock } from "@/components/useScrollLock";
import { navLinks } from "@/lib/navigation";

export default function SiteHeader() {
  const { count, open: openBag, isOpen: bagOpen } = useCart();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bump, setBump] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastY = useRef(0);
  const lastCount = useRef(count);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) > 8) {
        setHidden(y > 240 && delta > 0);
        lastY.current = y;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // A growing count confirms an add even when the button is out of view.
  useEffect(() => {
    if (count > lastCount.current) {
      setBump(true);
      setHidden(false);
      const timer = window.setTimeout(() => setBump(false), 450);
      lastCount.current = count;
      return () => window.clearTimeout(timer);
    }
    lastCount.current = count;
  }, [count]);

  useScrollLock(menuOpen);

  const openMenu = () => {
    dialogRef.current?.showModal();
    setMenuOpen(true);
  };
  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <header
        className="site-header sticky top-0 z-40 bg-vivora-linen page-x"
        data-hidden={(hidden && !menuOpen && !bagOpen) || undefined}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="mx-auto grid h-[var(--header-h)] max-w-site grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center">
            <button
              type="button"
              onClick={openMenu}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="icon-btn -ml-2.5 flex-col items-start gap-[6px] pl-2.5 lg:hidden"
            >
              <span className="h-[1.5px] w-[22px] bg-current" />
              <span className="h-[1.5px] w-[15px] bg-current" />
            </button>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex gap-7">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="link-underline min-h-11 text-[14px]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <a href="#top" aria-label="Vivora, back to top" className="flex min-h-11 items-center">
            <BrandLogo className="text-[1.05rem] tracking-[0.24em] lg:text-[1.2rem]" />
          </a>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={openBag}
              aria-haspopup="dialog"
              aria-label={`Open bag, ${count} ${count === 1 ? "item" : "items"}`}
              className="icon-btn -mr-2.5 gap-2 px-2.5 text-[14px]"
            >
              <span className="hidden lg:inline">Bag</span>
              <span className="lg:hidden">
                <BagIcon />
              </span>
              <span
                className="bag-count tabular inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-vivora-ink px-1.5 text-[12px] font-medium leading-none text-vivora-linen"
                data-bump={bump || undefined}
                aria-hidden="true"
              >
                {count}
              </span>
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="drawer drawer-left bg-vivora-linen text-vivora-ink"
      >
        <div className="flex h-full flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between">
            <BrandLogo className="text-[1.05rem] tracking-[0.24em]" />
            <button type="button" onClick={closeMenu} aria-label="Close menu" className="icon-btn -mr-2.5">
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Menu" className="mt-10">
            <ul>
              {navLinks.map((link, index) => (
                <li key={link.href} className="border-b border-vivora-ink/10">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-baseline justify-between py-4 text-[28px] font-medium tracking-[-0.03em]"
                  >
                    {link.label}
                    <span className="tabular text-[12px] font-normal tracking-normal text-vivora-stone">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => {
              closeMenu();
              openBag();
            }}
            className="btn btn-primary mt-8 w-full"
          >
            View bag ({count})
          </button>

          <p className="mt-auto t-label text-vivora-stone">Your beauty code</p>
        </div>
      </dialog>
    </>
  );
}
