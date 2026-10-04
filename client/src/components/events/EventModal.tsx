"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
    X,
    Tag,
    Calendar,
    MapPin,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

/* The data one event needs for the modal. Every event in the `events` array
   (in Events.tsx) has these fields. */
export interface EventItem {
    id: number;
    title: string; // 1. event title
    eventType?: string; // e.g. "Formal", "Hackathon"
    eventDate: string; // 2. event date, e.g. "9th April 2025"
    eventTime?: string; //    optional, e.g. "5:00 PM"
    eventLocation: string; // 3. event location
    description: string[]; // 4. event description, one string per paragraph
    images: string[]; //    main image first, then the other images
    knowMoreLink: string; //    where the "Know More" button goes
}

interface EventModalProps {
    event: EventItem;
    onClose: () => void;
}

/* small pill: icon + text (instead of the old tall info box) */
const Chip = ({
    icon,
    text,
    label,
}: {
    icon: React.ReactNode;
    text: string;
    label: string;
}) => (
    <span
        title={label}
        className="inline-flex max-w-full items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-200 md:text-[13px]"
    >
        <span className="shrink-0 text-zinc-500">{icon}</span>
        <span className="sr-only">{label}: </span>
        <span className="truncate">{text}</span>
    </span>
);

export default function EventModal({ event, onClose }: EventModalProps) {
    const [index, setIndex] = useState(0);
    const total = event.images.length;

    const go = useCallback(
        (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
        [total]
    );

    // Esc closes, arrow keys change the image
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (total > 1 && e.key === "ArrowRight") go(1);
            if (total > 1 && e.key === "ArrowLeft") go(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, go, total]);

    const external = /^https?:\/\//.test(event.knowMoreLink);
    const knowMoreClass =
        "inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium tracking-tight text-black transition-colors hover:bg-zinc-200";

    const dateText = event.eventTime
        ? `${event.eventDate} · ${event.eventTime}`
        : event.eventDate;

    /* Rendered straight into <body> with a very high z-index, so the sticky
       banner / navbar (z-100 / z-50) can never cover the top of the modal. */
    return createPortal(
        <>
            <style>
                {`
                    @keyframes emFade { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes emPop {
                        from { opacity: 0; transform: translateY(16px) scale(0.97); }
                        to   { opacity: 1; transform: none; }
                    }
                    .em-bg   { animation: emFade 0.25s ease both; }
                    .em-card { animation: emPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
                    .em-scroll { scrollbar-width: thin; scrollbar-color: #3f3f46 transparent; }
                    @media (prefers-reduced-motion: reduce) {
                        .em-bg, .em-card { animation: none !important; }
                    }
                `}
            </style>

            <div
                className={`${poppins.className} fixed inset-0 z-200 flex items-center justify-center p-3 antialiased md:p-6`}
                role="dialog"
                aria-modal="true"
                aria-label={event.title}
            >
                {/* Blurred Backdrop */}
                <div
                    className="em-bg absolute inset-0 bg-black/85 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* The modal always fits inside the screen. On phones the whole card
                    scrolls; on desktop it has a fixed height and only the description
                    scrolls, so a long description can never make the modal bigger. */}
                <div className="em-card relative z-10 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#0a0a0c] text-white shadow-2xl md:max-h-[calc(100dvh-3rem)] lg:h-[min(78vh,620px)]">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 shadow-lg transition-colors hover:border-zinc-500 hover:text-white"
                        aria-label="Close modal"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="em-scroll grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)] lg:overflow-hidden">
                        {/* ===== Left: title, small info chips, description, Know More ===== */}
                        <div className="flex min-h-0 flex-col p-6 md:p-8 lg:col-span-6">
                            <h2 className="pr-10 text-2xl leading-tight font-bold tracking-tight text-white md:text-3xl">
                                {event.title}
                            </h2>

                            {/* event type / date (+time) / location as small chips */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {event.eventType && (
                                    <Chip
                                        icon={<Tag className="h-3.5 w-3.5" />}
                                        label="Event type"
                                        text={event.eventType}
                                    />
                                )}
                                <Chip
                                    icon={<Calendar className="h-3.5 w-3.5" />}
                                    label="Event date"
                                    text={dateText}
                                />
                                <Chip
                                    icon={<MapPin className="h-3.5 w-3.5" />}
                                    label="Location"
                                    text={event.eventLocation}
                                />
                            </div>

                            {/* description: scrolls inside if it is long */}
                            <div className="em-scroll mt-5 min-h-0 flex-1 space-y-4 text-sm leading-relaxed font-light text-zinc-300 md:text-[15px] lg:overflow-y-auto lg:pr-3">
                                {event.description.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="pt-5">
                                {external ? (
                                    <a
                                        href={event.knowMoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={knowMoreClass}
                                    >
                                        Know More <ArrowRight className="h-4 w-4" />
                                    </a>
                                ) : (
                                    <Link href={event.knowMoreLink} className={knowMoreClass}>
                                        Know More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* ===== Right: image slider (fills the height, never cut) ===== */}
                        <div className="flex min-h-0 flex-col gap-3 p-6 pt-0 md:p-8 md:pt-0 lg:col-span-6 lg:py-8 lg:pr-8 lg:pl-0">
                            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl lg:aspect-auto lg:min-h-0 lg:flex-1">
                                <Image
                                    key={event.images[index]}
                                    src={event.images[index]}
                                    alt={`${event.title} photo ${index + 1}`}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />

                                {total > 1 && (
                                    <>
                                        <button
                                            onClick={() => go(-1)}
                                            aria-label="Previous image"
                                            className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition-colors hover:bg-white hover:text-black"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => go(1)}
                                            aria-label="Next image"
                                            className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition-colors hover:bg-white hover:text-black"
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </button>

                                        <span className="absolute right-3 bottom-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] text-zinc-200">
                                            {index + 1} / {total}
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* thumbnails of the other images */}
                            {total > 1 && (
                                <div className="flex shrink-0 gap-2 overflow-x-auto">
                                    {event.images.map((src, i) => (
                                        <button
                                            key={src + i}
                                            onClick={() => setIndex(i)}
                                            aria-label={`Show image ${i + 1}`}
                                            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all ${
                                                i === index
                                                    ? "border-white opacity-100"
                                                    : "border-zinc-800 opacity-60 hover:opacity-100"
                                            }`}
                                        >
                                            <Image
                                                src={src}
                                                alt=""
                                                fill
                                                sizes="80px"
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}