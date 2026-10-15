"use client";

import { useCart } from "@/components/cart/CartProvider";

export default function BagAnnouncer() {
  const { announcement } = useCart();
  return (
    <p role="status" aria-live="polite" className="sr-only">
      {announcement}
    </p>
  );
}
