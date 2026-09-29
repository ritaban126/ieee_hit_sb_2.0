
"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

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
  return (
    <aside
      aria-label="Announcement"
      className="
        sticky top-0 z-100
        w-full
        bg-neutral-950
        border-b border-neutral-800
        text-neutral-100
        overflow-hidden
        shadow-lg shadow-black/20
      "
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

      {/* Colorful Star Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-8 bg-linear-to-r from-cyan-500/10 via-fuchsia-500/20 to-yellow-500/10 blur-xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
        
        {/* Left Content */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center md:text-left">
          
          {/* Update Badge */}
          <span
            className="
              inline-flex items-center gap-1.5
              bg-neutral-900
              border border-neutral-700
              px-3 py-1
              text-xs font-mono
              uppercase tracking-wider
              text-neutral-300
            "
          >
            {/* Colorful Update Star */}
            <Star
              className="
                w-3.5 h-3.5
                fill-yellow-400
                text-yellow-400
                drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]
                animate-pulse
              "
            />

            <span>{badgeText}</span>
          </span>

          {/* Title */}
          <p className="text-sm text-neutral-300 font-light tracking-wide">
            {title}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Primary CTA */}
          <Link
            href={ctaLink}
            className="
              group
              inline-flex items-center gap-1.5
              bg-white
              text-black
              px-5 py-1.5
              text-xs font-semibold
              uppercase tracking-wider
              hover:bg-neutral-200
              transition-colors duration-200
            "
          >
            {ctaText}

            <ArrowRight
              className="
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
  );
}
