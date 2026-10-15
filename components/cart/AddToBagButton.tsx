"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/products";

export default function AddToBagButton({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      onClick={() => {
        add(product.id);
        setAdded(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setAdded(false), 1800);
      }}
      aria-label={`Add ${product.name} to bag`}
      className="btn btn-outline add-btn mt-4 w-full"
      data-added={added || undefined}
    >
      <span className="add-btn-label" aria-hidden="true">
        <span>Add to bag</span>
        <span>Added</span>
      </span>
    </button>
  );
}
