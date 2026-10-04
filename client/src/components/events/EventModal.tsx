"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

interface EventItem {
    id: number;
    title: string;
    desc: string;
    fullDesc: string;
    author: string;
    date: string;
    image: string;
    category: string;
    mode?: string;
    location?: string;
}

interface EventModalProps {
    event: EventItem;
    onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className={`${poppins.className} fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 antialiased`}>
            {/* Blurred Backdrop */}
            <div 
                className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Box (Centered, fixed sizing, no scrollbar needed) */}
            <div className="relative z-10 w-full max-w-5xl rounded-2xl border border-zinc-800 bg-[#0a0a0c] p-6 md:p-10 text-white shadow-2xl">
                
                {/* Properly Aligned Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 md:top-4 md:right-4 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white shadow-lg z-20"
                    aria-label="Close modal"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Side: Information & Details */}
                    <div className="lg:col-span-7 flex flex-col space-y-4">
                        
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-zinc-400 uppercase w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            IEEE HIT SB • {event.category}
                        </div> */}

                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                            {event.title}
                        </h2>

                        <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed line-clamp-5">
                            {event.fullDesc}
                        </p>

                        {/* Metadata Badges */}
                        <div className="flex flex-wrap gap-3 pt-1">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                                <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                                <Clock className="h-3.5 w-3.5 text-zinc-400" />
                                <span>{event.mode || "Offline Session"}</span>
                            </div>
                        </div>

                        {event.location && (
                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                                <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                                <span>{event.location}</span>
                            </div>
                        )}

                        {/* Action CTA Button */}
                        <div className="pt-2">
                            <button 
                                onClick={onClose}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium tracking-tight transition-all hover:bg-zinc-200"
                            >
                                Know More <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                    </div>

                    {/* Right Side: Larger Event Poster Thumbnail Image */}
                    <div className="lg:col-span-5 relative aspect-16/11 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}