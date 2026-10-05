// "use client";

// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   display: "swap",
// });

// interface BannerProps {
//   badgeText?: string;
//   title?: string;
//   ctaText?: string;
//   ctaLink?: string;
//   secondaryText?: string;
//   secondaryLink?: string;
// }

// const scanlinePattern =
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.03' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E";

// export default function AnnouncementBanner({
//   badgeText = "Live Event",
//   title = "CircuitHack 2026: 24-Hour Hackathon Registrations are Now Open",
//   ctaText = "Register Now",
//   ctaLink = "/events",
//   secondaryText = "Dismiss",
//   secondaryLink = "#",
// }: BannerProps) {
//   return (
//     <>
//       <style>
//         {`
//           /* a thin light that slides along the bottom line of the banner */
//           @keyframes bannerSlide {
//             from { transform: translateX(-100%); }
//             to   { transform: translateX(400%); }
//           }

//           @media (prefers-reduced-motion: reduce) {
//             .banner-slide { animation: none !important; }
//           }
//         `}
//       </style>

//       <aside
//         aria-label="Announcement"
//         className={`
//           ${poppins.className}
//           sticky top-0 z-100
//           w-full
//           bg-neutral-950
//           border-b border-neutral-800
//           text-neutral-100
//           overflow-hidden
//           shadow-lg shadow-black/20
//         `}
//       >
//         {/* Scanline Texture */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: `url(${scanlinePattern})`,
//             backgroundRepeat: "repeat",
//           }}
//         />

//         {/* Top Glimmer */}
//         <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-neutral-400 to-transparent opacity-40" />

//         {/* Colorful Glow (wider, since the star is gone) */}
//         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-10 bg-linear-to-r from-cyan-500/10 via-fuchsia-500/20 to-yellow-500/10 blur-2xl pointer-events-none" />

//         {/* Bottom light that slides across the line */}
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
//           <div className="banner-slide h-full w-1/4 bg-linear-to-r from-transparent via-neutral-300 to-transparent animate-[bannerSlide_5s_linear_infinite]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
//           {/* Left Content */}
//           <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center md:text-left">
//             {/* Live badge: pulsing dot instead of the star */}
//             <span
//               className="
//                 inline-flex items-center gap-2
//                 rounded-full
//                 bg-neutral-900/80
//                 border border-neutral-700
//                 px-3 py-1
//                 text-[11px] font-medium
//                 uppercase tracking-[0.18em]
//                 text-neutral-300
//               "
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
//               </span>

//               <span>{badgeText}</span>
//             </span>

//             {/* thin divider between badge and title (desktop only) */}
//             <span className="hidden md:block h-4 w-px bg-neutral-700" />

//             {/* Title */}
//             <p className="text-sm text-neutral-300 font-light tracking-wide">
//               {title}
//             </p>
//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-4 shrink-0">
//             {/* Primary CTA with a light sweep on hover */}
//             <Link
//               href={ctaLink}
//               className="
//                 group
//                 relative overflow-hidden
//                 inline-flex items-center gap-1.5
//                 rounded-md
//                 bg-white
//                 text-black
//                 px-5 py-1.5
//                 text-xs font-semibold
//                 uppercase tracking-wider
//                 hover:bg-neutral-200
//                 transition-colors duration-200
//               "
//             >
//               <span
//                 aria-hidden="true"
//                 className="
//                   pointer-events-none absolute inset-y-0 -left-full w-1/2
//                   -skew-x-12
//                   bg-linear-to-r from-transparent via-neutral-400/50 to-transparent
//                   transition-transform duration-700 ease-out
//                   group-hover:translate-x-[400%]
//                 "
//               />

//               <span className="relative">{ctaText}</span>

//               <ArrowRight
//                 className="
//                   relative
//                   w-3.5 h-3.5
//                   group-hover:translate-x-0.5
//                   transition-transform
//                 "
//               />
//             </Link>

//             {/* Secondary Action */}
//             <Link
//               href={secondaryLink}
//               className="
//                 text-xs
//                 text-neutral-500
//                 hover:text-white
//                 transition-colors
//                 relative group
//               "
//             >
//               {secondaryText}

//               <span
//                 className="
//                   absolute -bottom-0.5 left-0
//                   w-0 h-px
//                   bg-white
//                   group-hover:w-full
//                   transition-all duration-300
//                 "
//               />
//             </Link>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }






"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

interface BannerProps {
  badgeText?: string;
  title?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
}

const scanlinePattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.03' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E";

export default function AnnouncementBanner({
  badgeText = "Live Event",
  title = "CircuitHack 2026: 24-Hour Hackathon Registrations are Now Open",
  ctaText = "Register Now",
  ctaLink = "/events",
  secondaryText = "Dismiss",
  secondaryLink = "#",
}: BannerProps) {
  const lightRef = useRef<HTMLDivElement | null>(null);

  /* The white light on the bottom line follows the page scroll:
     scrolling down moves it slowly to the right, scrolling back up moves it
     back to the left (0% = top of the page, 100% = bottom of the page). */
  useEffect(() => {
    const el = lightRef.current;

    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let target = 0;
    let current = 0;
    let raf = 0;

    const apply = () => {
      // light is 25% of the bar wide, so 300% of itself = the full bar
      el.style.transform = `translate3d(${current * 300}%, 0, 0)`;
    };

    const tick = () => {
      current += (target - current) * 0.08; // easing = slow, smooth glide

      if (Math.abs(target - current) < 0.0005) {
        current = target;
        raf = 0;
      } else {
        raf = requestAnimationFrame(tick);
      }

      apply();
    };

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      target = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;

      if (reduce) {
        current = target;
        apply();
        return;
      }

      if (!raf) raf = requestAnimationFrame(tick);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <aside
        aria-label="Announcement"
        className={`
          ${poppins.className}
          sticky top-0 z-100
          w-full
          bg-neutral-950
          border-b border-neutral-800
          text-neutral-100
          overflow-hidden
          shadow-lg shadow-black/20
        `}
      >
        {/* Scanline Texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${scanlinePattern})`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Top Glimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-neutral-400 to-transparent opacity-40" />

        {/* Colorful Glow (wider, since the star is gone) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-10 bg-linear-to-r from-cyan-500/10 via-fuchsia-500/20 to-yellow-500/10 blur-2xl pointer-events-none" />

        {/* Bottom white light: position follows the page scroll */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <div
            ref={lightRef}
            className="h-full w-1/4 bg-linear-to-r from-transparent via-neutral-300 to-transparent will-change-transform"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          {/* Left Content */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center md:text-left">
            {/* Live badge: pulsing dot instead of the star */}
            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-neutral-900/80
                border border-neutral-700
                px-3 py-1
                text-[11px] font-medium
                uppercase tracking-[0.18em]
                text-neutral-300
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              </span>

              <span>{badgeText}</span>
            </span>

            {/* thin divider between badge and title (desktop only) */}
            <span className="hidden md:block h-4 w-px bg-neutral-700" />

            {/* Title */}
            <p className="text-sm text-neutral-300 font-light tracking-wide">
              {title}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Primary CTA with a light sweep on hover */}
            <Link
              href={ctaLink}
              className="
                group
                relative overflow-hidden
                inline-flex items-center gap-1.5
                rounded-md
                bg-white
                text-black
                px-5 py-1.5
                text-xs font-semibold
                uppercase tracking-wider
                hover:bg-neutral-200
                transition-colors duration-200
              "
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-y-0 -left-full w-1/2
                  -skew-x-12
                  bg-linear-to-r from-transparent via-neutral-400/50 to-transparent
                  transition-transform duration-700 ease-out
                  group-hover:translate-x-[400%]
                "
              />

              <span className="relative">{ctaText}</span>

              <ArrowRight
                className="
                  relative
                  w-3.5 h-3.5
                  group-hover:translate-x-0.5
                  transition-transform
                "
              />
            </Link>

            {/* Secondary Action */}
            <Link
              href={secondaryLink}
              className="
                text-xs
                text-neutral-500
                hover:text-white
                transition-colors
                relative group
              "
            >
              {secondaryText}

              <span
                className="
                  absolute -bottom-0.5 left-0
                  w-0 h-px
                  bg-white
                  group-hover:w-full
                  transition-all duration-300
                "
              />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}