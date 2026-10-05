"use client";

import React, { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import SectionWrapper from "../ui/SectionWrapper";

interface EventItem {
    title: string;
    tag: string;
    date: string;
    description: string;
    stats: string;
    image: string;
    stat1Title: string;
    stat1Desc: string;
    stat2Title: string;
    stat2Desc: string;
    stat3Title: string;
    stat3Desc: string;
}

const eventsData: EventItem[] = [
    {
        title: "Aero-Botix 1.0",
        tag: "Technical",
        date: "13th–15th September 2025",
        description:
            "HIT SB successfully hosted Aero-Botix 1.0, an immersive three-day drone workshop that brought the excitement of aerial robotics to HIT for the very first time.",
        stats: "500+ active student participants per month",
        image: "/events/aero-botix4.jpeg",
        stat1Title: "540+ Active Members",
        stat1Desc:
            "Registered across computer science and engineering branches.",
        stat2Title: "62 Events Hosted",
        stat2Desc:
            "Hackathons, coding bootcamps, and expert sessions last year.",
        stat3Title: "Core Focus Areas",
        stat3Desc:
            "Full-Stack Web, AI Integrations, Embedded Hardware & Systems.",
    },
    {
        title: "Pscpice",
        tag: " Technical Workshop",
        date: "October 2026",
        description:
            "IEEE HIT SB successfully conducted a two-day immersive PSpice Workshop on 8th and 9th August 2025.",
        stats: "$5,000+ in prizes and open-source grants",
        image: "/events/pspice_event2.png",
        stat1Title: "36 Hours Straight",
        stat1Desc:
            "Continuous live hacking, mentorship, and project pitching.",
        stat2Title: "$5,000+ Grants",
        stat2Desc:
            "Prizes distributed to top open-source contributors and innovators.",
        stat3Title: "Multi-Domain",
        stat3Desc:
            "AI/ML, Web3, Cloud Infrastructure, and IoT Tracks.",
    },
    {
        title:
            "Virtual Talk Session on Edge Device Development &Their Advantages",
        tag: "Technical Talk",
        date: "Bi-Monthly",
        description:
            "IEEE HIT SB proudly hosted an exclusive online session with Mr. Sai Yamanoor on the 26th of July 2025.",
        stats: "18+ specialized hardware labs hosted annually",
        image: "/events/vitual_tal_event3.png",
        stat1Title: "18+ Hardware Labs",
        stat1Desc:
            "Hands-on microcontrollers and digital logic experiments.",
        stat2Title: "Expert Led",
        stat2Desc:
            "Guided sessions by senior electronics and core engineers.",
        stat3Title: "Practical Kits",
        stat3Desc:
            "Direct hardware implementation and prototype testing.",
    },
    {
        title: "SHE: Strength.Hope.Empowerment.",
        tag: "Celebrating Women in Engineering",
        date: "Monthly",
        description:
            "IEEE HIT SB proudly hosted SHE: Strength. Hope. Empowerment , encouraging participations from 1st July 2025 to 15th July 2025, as part of WIE Week, celebrating the brilliance, resilience, and leadership of women in engineering.",
        stats: "300+ successful PRs merged globally",
        image: "/events/SHE3.jpg",
        stat1Title: "Global Programs",
        stat1Desc:
            "Mentorship for GirlScript Summer of Code and other initiatives.",
        stat2Title: "Version Control",
        stat2Desc:
            "Advanced Git workflows, branching strategies, and issues tracking.",
        stat3Title: "Peer Reviews",
        stat3Desc:
            "Collaborative code reviews and standardization fixes.",
    },
];

const Events = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        if (openIndex === index) return;
        setOpenIndex(index);
    };

    return (
        <>
            <section className="relative text-white bg-black pt-20 pb-16 w-full selection:bg-indigo-500 selection:text-white">

                <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
                    <div className="w-px bg-zinc-800"></div>
                    <div className="w-px bg-zinc-800"></div>
                </div>

                <div className="relative z-10 px-8 md:px-20 lg:px-28 xl:px-36">

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-16">

                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                                Transforming student potential with
                                <span className="text-zinc-400 block mt-1">
                                    practical engineering events
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-md">
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                                Over 50% of our active members have contributed to hands-on technical
                                initiatives, turning ideas into working systems through hardware design,
                                embedded technologies, robotics, electronics, and IoT innovation.
                            </p>

                            <div className="mt-6">
                                <Link href="/events">
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-300">
                                        Explore all events
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-0 border-t border-zinc-800">

                        {eventsData.map((event, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-t border-zinc-800 transition-colors duration-300 hover:bg-zinc-950/30"
                                >

                                    {/* ACCORDION HEADER */}
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-8 px-4 md:px-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                                    >

                                        <div className="flex items-center gap-6 pr-4">

                                            <div>
                                                <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase block mb-1">
                                                    {event.tag}
                                                </span>

                                                <motion.h4
                                                    animate={{
                                                        color: isOpen ? "#e0e7ff" : "#ffffff",
                                                        x: isOpen ? 4 : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.35,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    className="text-xl md:text-4xl font-bold"
                                                >
                                                    {event.title}
                                                </motion.h4>
                                            </div>

                                        </div>

                                        {/* PLUS BUTTON */}
                                        <motion.div
                                            animate={{
                                                rotate: isOpen ? 45 : 0,
                                                scale: isOpen ? 1.05 : 1,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-colors duration-300 shrink-0"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </motion.div>

                                    </button>

                                    {/* ACCORDION CONTENT */}
                                    <AnimatePresence initial={false} mode="wait">

                                        {isOpen && (
                                            <motion.div
                                                key={`content-${index}`}
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    height: {
                                                        duration: 0.65,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    },
                                                    opacity: {
                                                        duration: 0.35,
                                                        ease: "easeOut",
                                                    },
                                                }}
                                                className="overflow-hidden"
                                            >

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    transition={{
                                                        duration: 0.55,
                                                        delay: 0.08,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    className="px-4 md:px-6 pb-12 pt-2"
                                                >

                                                    <div className="mb-8">

                                                        {/* TOP INFO ROW */}
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: 8,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.4,
                                                                delay: 0.12,
                                                                ease: "easeOut",
                                                            }}
                                                            className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs md:text-sm"
                                                        >

                                                            <div className="flex items-center gap-3">
                                                                <span className="font-medium text-white tracking-wide">
                                                                    IEEE HIT Student Branch powers technical excellence.
                                                                </span>
                                                            </div>

                                                            <Link
                                                                href="https://edu.ieee.org/in-hit/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer"
                                                            >
                                                                VIEW ON DRIVE
                                                                <motion.span
                                                                    whileHover={{ x: 3 }}
                                                                    transition={{
                                                                        duration: 0.25,
                                                                        ease: "easeOut",
                                                                    }}
                                                                >
                                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                                </motion.span>
                                                            </Link>

                                                        </motion.div>

                                                        {/* IMAGE */}
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.985,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                duration: 0.7,
                                                                delay: 0.16,
                                                                ease: [0.22, 1, 0.36, 1],
                                                            }}
                                                            className="relative w-full h-80 md:h-105 overflow-hidden bg-zinc-900 rounded-none group my-2"
                                                        >

                                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-indigo-950/60 via-zinc-950 to-black z-10 opacity-70" />

                                                            <Image
                                                                src={event.image}
                                                                alt={event.title}
                                                                fill
                                                                sizes="100vw"
                                                                className="object-cover object-center opacity-60 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                                            />

                                                            <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent">

                                                                <motion.span
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: 10,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.4,
                                                                        delay: 0.3,
                                                                    }}
                                                                    className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-950/80 border border-indigo-800/50 rounded-full w-max"
                                                                >
                                                                    {event.tag}
                                                                </motion.span>

                                                                <motion.h3
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: 15,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.5,
                                                                        delay: 0.35,
                                                                        ease: [0.22, 1, 0.36, 1],
                                                                    }}
                                                                    className="text-xl md:text-3xl font-semibold text-white max-w-2xl"
                                                                >
                                                                    {event.description}
                                                                </motion.h3>

                                                            </div>

                                                        </motion.div>

                                                        {/* STATS */}
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: 15,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: 0.3,
                                                                ease: [0.22, 1, 0.36, 1],
                                                            }}
                                                            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 pb-2 border-b border-zinc-800 text-sm"
                                                        >

                                                            <div className="text-zinc-400">
                                                                <strong className="text-white font-semibold text-base block mb-0.5">
                                                                    {event.stat1Title}
                                                                </strong>
                                                                {event.stat1Desc}
                                                            </div>

                                                            <div className="text-zinc-400">
                                                                <strong className="text-white font-semibold text-base block mb-0.5">
                                                                    {event.stat2Title}
                                                                </strong>
                                                                {event.stat2Desc}
                                                            </div>

                                                            <div className="text-zinc-400">
                                                                <strong className="text-white font-semibold text-base block mb-0.5">
                                                                    {event.stat3Title}
                                                                </strong>
                                                                {event.stat3Desc}
                                                            </div>

                                                        </motion.div>

                                                    </div>

                                                </motion.div>

                                            </motion.div>
                                        )}

                                    </AnimatePresence>

                                </div>
                            );
                        })}

                        <div className="border-t border-zinc-800"></div>

                    </div>
                </div>

            </section>

            <SectionWrapper className="z-10">
                <div className="w-full border-t border-zinc-800"></div>
            </SectionWrapper>
        </>
    );
};

export default Events;