"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/lib/products";

type CartLine = { id: string; quantity: number };
export type CartItem = { product: Product; quantity: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  add: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  open: () => void;
  close: () => void;
  /** Latest change, read by the polite live region. */
  announcement: string;
};

const STORAGE_KEY = "vivora-bag";
const MAX_QUANTITY = 10;

const CartContext = createContext<CartContextValue | null>(null);

function readStored(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((entry) => {
      if (typeof entry !== "object" || entry === null) return [];
      const { id, quantity } = entry as Partial<CartLine>;
      if (typeof id !== "string" || !getProduct(id)) return [];
      if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1) return [];
      return [{ id, quantity: Math.min(quantity, MAX_QUANTITY) }];
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  // Storage is read after mount so server and first client render match.
  useEffect(() => {
    setLines(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage can be unavailable in private modes; the bag still works for this visit */
    }
  }, [lines, hydrated]);

  const add = useCallback((id: string) => {
    const product = getProduct(id);
    if (!product) return;
    setLines((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, quantity: Math.min(line.quantity + 1, MAX_QUANTITY) } : line,
        );
      }
      return [...current, { id, quantity: 1 }];
    });
    setAnnouncement(`${product.name} added to your bag.`);
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const next = Math.max(0, Math.min(quantity, MAX_QUANTITY));
    setLines((current) =>
      next === 0
        ? current.filter((line) => line.id !== id)
        : current.map((line) => (line.id === id ? { ...line, quantity: next } : line)),
    );
    const product = getProduct(id);
    if (product) {
      setAnnouncement(
        next === 0 ? `${product.name} removed from your bag.` : `${product.name} quantity ${next}.`,
      );
    }
  }, []);

  const remove = useCallback((id: string) => setQuantity(id, 0), [setQuantity]);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const items = lines.flatMap((line) => {
      const product = getProduct(line.id);
      return product ? [{ product, quantity: line.quantity }] : [];
    });
    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      isOpen,
      add,
      setQuantity,
      remove,
      open,
      close,
      announcement,
    };
  }, [lines, isOpen, add, setQuantity, remove, open, close, announcement]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export { MAX_QUANTITY };
