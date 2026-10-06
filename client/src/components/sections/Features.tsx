"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import {
  GraduationCap,
  HeartHandshake,
  Mic,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Workshops",
    desc: "Hands-on sessions where members build real projects and pick up practical skills.",
    Icon: Wrench,
  },
  {
    title: "Teaching",
    desc: "Peer-led classes and mentorship that help juniors learn from seniors.",
    Icon: GraduationCap,
  },
  {
    title: "Tech Talks",
    desc: "Industry experts and researchers share what's new in engineering and tech.",
    Icon: Mic,
  },
  {
    title: "Welfare",
    desc: "Community programs that support members and give back to society.",
    Icon: HeartHandshake,
  },
];

// monospace font for the feature titles (WORKSHOPS, TEACHING ...)
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const HEADING = "Learn by building, grow by sharing";

const cell = "bg-black p-8 md:p-10 lg:min-h-[340px]";

/* stagger index → animation delay (set through a CSS variable) */
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;


export default function Features() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  /* start the entrance animation once the section is on screen */
  useEffect(() => {
    const el = rootRef.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes ftGridIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          @keyframes ftRise {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: none; }
          }

          /* heading: each word fades in, rises and goes blur -> sharp */
          @keyframes ftWord {
            from { opacity: 0; transform: translateY(0.55em); filter: blur(8px); }
            to   { opacity: 1; transform: none; filter: blur(0); }
          }

          /* grid lines fade in first, then the content rises in one by one.
             Only the content is animated (not the cells), so the zinc
             background never shows through the black cells. */
          .ft-grid { opacity: 0; }
          .ft-in .ft-grid {
            animation: ftGridIn 0.8s ease both;
          }

          .ft-rv { opacity: 0; }
          .ft-in .ft-rv {
            animation: ftRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: calc(var(--i, 0) * 110ms + 250ms);
          }

          .ft-word { opacity: 0; }
          .ft-in .ft-word {
            animation: ftWord 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: calc(var(--i, 0) * 70ms + 300ms);
          }

          @media (prefers-reduced-motion: reduce) {
            .ft-grid, .ft-rv, .ft-word { opacity: 1 !important; }
            .ft-in .ft-grid, .ft-in .ft-rv, .ft-in .ft-word { animation: none !important; }
          }
        `}
      </style>

      <section className="w-full bg-black text-white">
        {/*
          Hero draws its two vertical guide lines inside a box with
          "px-4 md:px-16 lg:px-24 xl:px-32". We use the exact same padding,
          and draw the lines with border-x, so they land on the same pixels
          and continue straight down from the Hero lines.
        */}
        <div className="px-4 md:px-16 lg:px-24 xl:px-32">
          {/* Side lines (left + right), full height of this section */}
          <div className="w-full border-x border-zinc-800">
            {/*
              No top border: the Hero's bottom border already draws that line.
              gap-px over a zinc background draws the lines between the cells.
            */}
            <div ref={rootRef} className={shown ? "ft-in" : ""}>
              <div className="ft-grid grid grid-cols-1 gap-px border-b border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
                {/* Heading cell — word by word animation */}
                <div className={`${cell} flex items-center sm:col-span-2`}>
                  <h2
                    className="max-w-lg text-4xl font-medium leading-[1.15] tracking-tight md:text-5xl"
                    aria-label={HEADING}
                  >
                    {HEADING.split(" ").map((word, i) => (
                      <span key={`${i}-${word}`} aria-hidden="true">
                        <span
                          className="ft-word inline-block"
                          style={stagger(i)}
                        >
                          {word}
                        </span>{" "}
                      </span>
                    ))}
                  </h2>
                </div>

                {/* Feature cells */}
                {features.map(({ title, desc, Icon }, i) => (
                  <article
                    key={title}
                    className={`${cell} flex flex-col gap-7`}
                  >
                    <div
                      className="ft-rv flex h-16 w-16 items-center justify-center border border-zinc-700 bg-zinc-950"
                      style={stagger(i + 1)}
                    >
                      <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
                    </div>
                    <div className="ft-rv space-y-3" style={stagger(i + 1)}>
                      <h3
                        className={`${mono.className} text-sm font-medium uppercase tracking-[0.08em]`}
                      >
                        {title}
                      </h3>
                      <p className="text-base leading-relaxed text-zinc-400">
                        {desc}
                      </p>
                    </div>
                  </article>
                ))}

                {/* CTA cell */}
                <div
                  className={`${cell} flex flex-col items-center justify-center gap-6 text-center sm:col-span-2`}
                >
                  <p
                    className="ft-rv max-w-sm text-xl font-medium leading-snug md:text-2xl"
                    style={stagger(5)}
                  >
                    Join IEEE and take part in workshops, talks, and community
                    work.
                  </p>
                  <Link
                    href="/events"
                    className="ft-rv inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 bg-black px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                    style={stagger(6)}
                  >
                    View events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}