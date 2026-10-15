export type LineId = "glow" | "essence";

export type Product = {
  id: string;
  line: LineId;
  name: string;
  /** Price in Israeli new shekels, as listed by the brand. */
  price: number;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: "vitamin-rich-body-oil",
    line: "glow",
    name: "Vitamin Rich Body Oil",
    price: 100,
    image: "/2.jpg",
    alt: "Hand holding a Vivora Glow vitamin rich body oil bottle",
  },
  {
    id: "body-butter",
    line: "essence",
    name: "Body Butter",
    price: 100,
    image: "/3.jpg",
    alt: "Hands holding an open Vivora Essence body butter jar",
  },
  {
    id: "shower-gel",
    line: "essence",
    name: "Shower Gel with Scrub Effect",
    price: 110,
    image: "/4.jpg",
    alt: "Hands holding a Vivora Essence shower gel bottle",
  },
];

/** Products named on the packaging in brand photography; only those above have published prices. */
export const lines: Record<LineId, { name: string; range: string[] }> = {
  glow: {
    name: "Glow",
    range: ["Vitamin Rich Body Oil", "Elixir Body Mist", "Body Butter"],
  },
  essence: {
    name: "Essence",
    range: ["Shower Gel with Scrub Effect", "Body Butter", "Body Mist", "Body Cream"],
  },
};

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

const shekel = new Intl.NumberFormat("en-IL", {
  style: "currency",
  currency: "ILS",
  maximumFractionDigits: 0,
});

export function formatPrice(value: number) {
  return shekel.format(value);
}
