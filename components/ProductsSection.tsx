import { ResponsiveImageFrame } from "@/components/ResponsiveImage";

const products = [
  {
    image: "/2.jpg",
    label: "GLOW",
    name: "VITAMIN RICH BODY OIL",
    price: "₪100",
    bg: "#e8ddd4",
    aspect: "3/4",
  },
  {
    image: "/3.jpg",
    label: "ESSENCE",
    name: "BODY BUTTER",
    price: "₪100",
    bg: "#d9c8c4",
    aspect: "3/4",
  },
  {
    image: "/4.jpg",
    label: "ESSENCE",
    name: "SHOWER GEL WITH SCRUB EFFECT",
    price: "₪110",
    bg: "#ddd2c8",
    aspect: "3/4",
  },

];

function BagIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 22 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 7.5V6.5C5.5 3.73858 7.73858 1.5 10.5 1.5C13.2614 1.5 15.5 3.73858 15.5 6.5V7.5"
        stroke="#6b6b6b"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3 7.5H18L16.5 22H5L3 7.5Z"
        stroke="#6b6b6b"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowButton() {
  return (
    <button
      type="button"
      aria-label="Explore products"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3b3b3b]"
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8H13M13 8L9 4M13 8L9 12"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="bg-[#f8f7f4] pb-10 pt-10">
      <div className="px-4">
        <div className="mb-6 text-center">
          <p
            className="text-[17px] uppercase leading-none tracking-[0.02em] text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
          >
            EXPLORE
          </p>
          <p
            className="-mt-1 text-[34px] italic leading-none text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            pure potency
          </p>
        </div>

        <div className="mb-5 flex items-start justify-between">
          <div>
            <p
              className="text-[18px] leading-[1.05] text-[#3d3d3d]"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
            >
              Vivora
            </p>
            <p
              className="-mt-1 text-[28px] italic leading-none text-[#3d3d3d]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
            >
              Collection
            </p>
          </div>
          <ArrowButton />
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto pl-4 pr-3">
        <div className="flex snap-x snap-mandatory gap-3">
          {products.map((product) => (
        <article
        key={product.image}
        className="
          group
          relative
          w-[min(78vw,260px)]
          shrink-0
          snap-center
          [perspective:1000px]
        "
      >
        {/* Elevation shadow (realistic depth) */}
        <div className="absolute inset-0 translate-y-6 scale-[0.94] rounded-[22px] bg-black/10 blur-2xl opacity-40 transition-all duration-700 group-hover:translate-y-8 group-hover:blur-3xl group-hover:opacity-60"></div>
      
        {/* Main card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            transition-all duration-700 ease-out
            will-change-transform
            group-hover:[transform:rotateX(3deg)_rotateY(-3deg)_scale(1.02)]
          "
          style={{
            backgroundColor: product.bg,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Inner surface layer */}
          <div className="relative z-10 h-full w-full">
      
            {/* TOP BAR */}
            <div className="flex items-center justify-between p-3 pb-2">
              <span
                className="
                  rounded-full
                  bg-white/90
                  px-4 py-1
                  text-[8px]
                  tracking-[0.12em]
                  text-[#555]
                  backdrop-blur
                  transition
                  group-hover:scale-105
                "
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {product.label}
              </span>
      
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:scale-110">
                <BagIcon />
              </span>
            </div>
      
            {/* IMAGE */}
            <div
              className="
                relative
                z-10
                transition-all duration-700
                group-hover:translate-y-[-4px]
                group-hover:scale-[1.07]
              "
            >
              <ResponsiveImageFrame
                src={product.image}
                alt={product.name}
                aspect={product.aspect}
                bg={product.bg}
                rounded="rounded-none"
                className="shadow-none"
                sizes="78vw"
                fit="cover"
              />
            </div>
      
            {/* BOTTOM */}
            <div className="flex items-end justify-between gap-3 p-3 pt-3">
              <p
                className="
                  max-w-[70%]
                  text-[11.5px]
                  leading-[1.28]
                  text-[#3e3e3e]
                  tracking-[-0.01em]
                "
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {product.name}
              </p>
      
              <span
                className="
                  shrink-0
                  text-[12.5px]
                  text-[#2c2c2c]
                  font-medium
                  tracking-[0.01em]
                "
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {product.price}
              </span>
            </div>
          </div>
      
          {/* Light reflection (top gloss) */}
          <div className="
            pointer-events-none
            absolute
            inset-0
            rounded-[22px]
            bg-[linear-gradient(120deg,rgba(255,255,255,0.35),transparent_40%)]
            opacity-40
            transition-all duration-700
            group-hover:opacity-60
          "></div>
      
          {/* Edge highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/50"></div>
        </div>
      </article>
          ))}
        </div>
      </div>

      <p
        className="px-4 pt-4 text-[11px] uppercase leading-[1.28] tracking-[0.01em] text-[#474747]"
        style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
      >
        Stay glowing and healthy without having to think about it.
      </p>
    </section>
  );
}
