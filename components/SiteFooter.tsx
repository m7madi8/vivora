import BrandLogo from "@/components/BrandLogo";

const footerLinks = {
  Shop: ["Face", "Body", "Sets", "All"],
  Support: ["FAQ", "Shipping", "Returns"],
  About: ["Our Story", "Contact Us"],
};

export default function SiteFooter() {
  return (
    <footer className="bg-white px-4 pb-12 pt-14">

      {/* TOP GRID */}
      <div className="grid grid-cols-3 gap-6 border-b border-[#eceae6] pb-10">

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>

            <h3
              className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#3a3a3a]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {title}
            </h3>

            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      relative inline-block
                      text-[11px] text-[#7a7a7a]
                      transition-all duration-300
                      hover:text-[#2a2a2a]
                    "
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    <span className="relative z-10">{link}</span>

                    {/* subtle underline animation */}
                    <span className="
                      absolute left-0 bottom-0 h-[1px] w-0 bg-[#2a2a2a]
                      transition-all duration-300 group-hover:w-full
                    "></span>
                  </a>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

      {/* BRAND BLOCK */}
      <div className="mt-10 text-center">

        <div className="inline-block transition duration-500 hover:scale-105">
          <BrandLogo className="text-[1.1rem] tracking-[0.28em] text-[#2a2a2a]" showTm />
        </div>

        <p
  className="mx-auto mt-4 max-w-[260px] text-[12.5px] leading-[1.7] text-[#6a6a6a] tracking-[0.01em]"
  style={{ fontFamily: "var(--font-inter), sans-serif" }}
>
  Your daily dose of
  <span className="block font-medium text-[#3a3a3a]">
    soft, honest care.
  </span>
</p>
      </div>

      {/* DIVIDER */}
      <div className="mx-auto mt-10 h-px w-[80%] bg-[#eceae6]"></div>

      {/* BOTTOM BAR */}
      <div
        className="mt-6 flex flex-col items-center gap-3 text-[10px] text-[#9a9a9a]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >

        <span className="tracking-[0.05em]">
          © 2026 Vivora Beauty. All rights reserved.
        </span>

        <div className="flex gap-4">
          <a
            href="#"
            className="relative transition hover:text-[#2a2a2a]"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="relative transition hover:text-[#2a2a2a]"
          >
            Terms & Conditions
          </a>
        </div>

      </div>

    </footer>
  );
}