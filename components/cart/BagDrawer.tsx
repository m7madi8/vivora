"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useCart, MAX_QUANTITY } from "@/components/cart/CartProvider";
import { formatPrice, lines } from "@/lib/products";
import { CloseIcon } from "@/components/icons";
import { useScrollLock } from "@/components/useScrollLock";

export default function BagDrawer() {
  const { items, count, subtotal, isOpen, close, setQuantity, remove } = useCart();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useScrollLock(isOpen);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="bag-title"
      onClose={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className="drawer drawer-right bg-vivora-linen text-vivora-ink"
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-vivora-ink/10 px-5">
          <h2 id="bag-title" className="text-[15px] font-medium">
            Your bag{count > 0 ? <span className="text-vivora-stone"> ({count})</span> : null}
          </h2>
          <button type="button" onClick={close} aria-label="Close bag" className="icon-btn -mr-2.5">
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-start justify-center px-5 pb-16">
            <p className="t-h3">Your bag is empty.</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-vivora-bark">
              Glow and Essence body care, ready when you are.
            </p>
            <a href="#shop" onClick={close} className="btn btn-primary mt-8">
              Shop the collection
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-vivora-ink/10 overflow-y-auto px-5">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <div className="relative aspect-[4/5] w-[84px] shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-vivora-sand">
                    <Image src={product.image} alt="" fill sizes="84px" className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="t-label text-vivora-stone">{lines[product.line].name}</p>
                        <p className="mt-1 text-[15px] leading-snug">{product.name}</p>
                      </div>
                      <p className="tabular text-[15px]">{formatPrice(product.price * quantity)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div
                        role="group"
                        aria-label={`Quantity of ${product.name}`}
                        className="flex h-11 items-center rounded-full border border-vivora-ink/20"
                      >
                        <button
                          type="button"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="stepper-btn"
                        >
                          <span aria-hidden="true">−</span>
                        </button>
                        <span className="tabular w-6 text-center text-[15px]" aria-live="off">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          disabled={quantity >= MAX_QUANTITY}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="stepper-btn"
                        >
                          <span aria-hidden="true">+</span>
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        className="link-underline min-h-11 text-[14px] text-vivora-bark"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="shrink-0 border-t border-vivora-ink/10 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5">
              <div className="flex items-baseline justify-between">
                <p className="text-[15px]">Subtotal</p>
                <p className="tabular text-[18px] font-medium">{formatPrice(subtotal)}</p>
              </div>
              <p className="mt-4 rounded-[var(--radius-sm)] bg-vivora-parchment px-4 py-3 text-[14px] leading-[1.55] text-vivora-espresso">
                Online checkout isn&apos;t connected yet. Your bag is saved on this device.
              </p>
              <button type="button" onClick={close} className="btn btn-outline mt-3 w-full">
                Continue browsing
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
