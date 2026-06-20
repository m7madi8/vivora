import BrandLogo from "@/components/BrandLogo";

const footerLinks = {
  Shop: ["Face", "Body", "Sets", "All"],
  Support: ["FAQ", "Shipping", "Returns"],
  About: ["Our Story", "Contact Us"],
};

export default function SiteFooter() {
  return (
    <footer className="bg-white px-4 pb-10 pt-10">
      <div className="grid grid-cols-3 gap-4 border-b border-[#e8e8e8] pb-8">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2a2a2a]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {title}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10px] text-[#777] hover:text-[#2a2a2a]"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <BrandLogo className="text-[1rem] tracking-[0.2em] text-[#2a2a2a]" showTm />
        <p
          className="mx-auto mt-3 max-w-[240px] text-[11px] leading-[1.5] text-[#888]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Clean, conscious, performance skincare.
        </p>
      </div>

      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[9px] text-[#aaa]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <span>© 2026 Vivora Beauty. All rights reserved.</span>
        <a href="#" className="underline underline-offset-2">
          Privacy Policy
        </a>
        <a href="#" className="underline underline-offset-2">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
