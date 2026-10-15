"use client";

import Image from "next/image";
import { type FormEvent, useId, useState } from "react";

type Notice = { tone: "error" | "info"; message: string } | null;

/** No mailing backend is connected. This never reports success. */
function submitNewsletter(_email: string): { ok: false; message: string } {
  return {
    ok: false,
    message: "Sign-up isn't open yet. This form is not connected to a mailing service.",
  };
}

export default function NewsletterSection() {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setNotice({ tone: "error", message: "Enter an email address like name@example.com." });
      return;
    }

    setNotice({ tone: "info", message: submitNewsletter(value).message });
  }

  const invalid = notice?.tone === "error";

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="page-x py-[clamp(4rem,3rem+4vw,8rem)]"
    >
      <div className="mx-auto grid max-w-site gap-[var(--gutter)] md:grid-cols-2 lg:grid-cols-12">
        <div className="panel aspect-[4/5] bg-vivora-glow md:aspect-auto md:min-h-[32rem] lg:col-span-5">
          <Image
            src="/vivora.beauty.official-20260620-0008.jpg"
            alt="Vivora Essence body butter and body mist with Glow elixir body mist and body butter on pink plinths"
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className="reveal-media object-cover"
          />
        </div>

        <div className="flex flex-col justify-center py-6 md:px-[var(--pad)] lg:col-span-7">
          <p className="t-label text-vivora-stone">Newsletter</p>
          <h2 id="newsletter-title" className="t-h2 mt-4 max-w-[12ch]">
            A more refined kind of <span className="t-accent">care</span>
          </h2>
          <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.6] text-vivora-bark">
            Be the first to hear about new rituals and releases from Vivora.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-10 max-w-[30rem]">
            <label htmlFor={inputId} className="block text-[14px] font-medium">
              Email address
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id={inputId}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                value={email}
                aria-invalid={invalid || undefined}
                aria-describedby={invalid ? errorId : undefined}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (notice) setNotice(null);
                }}
                placeholder="name@example.com"
                className="h-12 w-full min-w-0 rounded-full sm:flex-1 border border-vivora-ink/25 bg-transparent px-5 text-[16px] text-vivora-ink transition-colors placeholder:text-vivora-stone/70 hover:border-vivora-ink/50 focus:border-vivora-ink aria-[invalid]:border-vivora-error"
              />
              <button type="submit" className="btn btn-primary shrink-0">
                Subscribe
              </button>
            </div>
            <p
              id={errorId}
              role="status"
              aria-live="polite"
              className={`mt-3 min-h-6 text-[14px] leading-[1.5] ${invalid ? "text-vivora-error" : "text-vivora-espresso"}`}
            >
              {notice?.message}
            </p>
          </form>

          <p className="mt-2 max-w-[40ch] text-[13px] leading-[1.5] text-vivora-stone">
            By subscribing, you agree to receive occasional updates from Vivora.
          </p>
        </div>
      </div>
    </section>
  );
}
