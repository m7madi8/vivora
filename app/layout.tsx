import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CartProvider } from "@/components/cart/CartProvider";
import "./globals.css";

// Self-hosted: next/font/google cannot reach Google Fonts from every build machine.
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
  variable: "--font-dm",
  display: "swap",
});

const montserrat = localFont({
  src: [
    { path: "./fonts/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivora — Glow & Essence body care",
  description:
    "Vivora body care in two lines, Glow and Essence: body oil, body butter and shower gel. True to oneself, kind to nature.",
  openGraph: {
    title: "Vivora — Glow & Essence body care",
    description: "Body care in two lines, Glow and Essence. True to oneself, kind to nature.",
    type: "website",
    siteName: "Vivora",
  },
};

// Zoom stays enabled (WCAG 1.4.4).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F5EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
