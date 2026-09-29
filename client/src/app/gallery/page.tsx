import Footer from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import Navbar from "@/components/sections/Navbar";
import React from "react";

export default function Page() {
  return (
    <>
    <Navbar/>
    {/* // relative wrapper: the two guide lines below are absolutely
    // positioned against THIS element, so they run the full height of
    // the page (header + gallery) and scroll together with the content —
    // they no longer jump around relative to a small inner box. */}
    <div className="relative min-h-screen bg-black text-white">

      {/* side guide lines — same x-position pattern used across the rest of the site */}
      <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="w-px bg-zinc-800"></div>
        <div className="w-px bg-zinc-800"></div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between">

        {/* Gallery Header Section (Centered on screen as requested) */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Top small badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono tracking-widest text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              IEEE HIT SB • Visual Archive
            </div>

            {/* Main Huge Center Header */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Moments of innovation, workshops, and technical excellence.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              A glimpse into our journey of building, learning, and leading the tech community forward. Explore our events, hackathons, and collaborative milestones.
            </p>

          </div>
        </section>

        {/* Gallery — confined between the two guide lines (same padding as every
            other section) and given a fixed-height box, so images can never
            drag past the lines or cover them */}
        <section className="w-full px-8 pb-24 md:px-20 lg:px-28 xl:px-36">
          <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-zinc-800 md:h-[80vh]">
            <Gallery />
          </div>
        </section>

      </div>
      <Footer/>
    </div>
    </>
  );
}
