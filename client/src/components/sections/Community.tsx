"use client";

import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";


const IMAGE_SRC = "/heroparallex/N.jpg";

const communityData = {
    // category: "Community",
    title: "Build, learn, and grow together.",
    cardOrg: "IEEE HIT STUDENT BRANCH",
    cardLine1: "Open to all branches",
    cardLine2: "500+ Members",
    heading: "Join a community built for builders",
    desc: "From late-night hackathons to weekend workshops, our community is where students pick up real skills, real friends, and real momentum — no experience required, just curiosity.",
    benefits: [
        "Hackathons & build nights every month",
        "Hands-on workshops in hardware & software",
        "Mentorship from seniors, alumni & faculty",
        "A network of 500+ builders across every branch",
    ],
    links: [
        { label: "Join our community", href: "/about", primary: true },
        { label: "Explore events", href: "/events", primary: false },
    ],
};

const Community = () => {
    return (
        <>
            <style>
            {`
                @keyframes communityTitle {
                from {
                    opacity: 0;
                    transform: translateY(18px);
                    filter: blur(6px);
                }

                to {
                    opacity: 1;
                    transform: translateY(0);
                    filter: blur(0);
                }
                }
            `}
            </style>
            <section className="relative text-white pt-24 pb-16 w-full bg-black overflow-hidden">

                {/* full height side lines — matches global page lines */}
                <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
                    <div className="w-px bg-zinc-800"></div>
                    <div className="w-px bg-zinc-800"></div>
                </div>

                <div className="relative z-10 px-8 md:px-20 lg:px-28 xl:px-36">

                    <div className="max-w-2xl mb-12">
                        {/* <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">{communityData.category}</p> */}
                        <h2
                        className="
                            text-4xl
                            md:text-[48px]
                            lg:text-[52px]
                            font-semibold
                            leading-[1.08]
                            tracking-tight
                            animate-[communityTitle_0.8s_cubic-bezier(0.16,1,0.3,1)_both]
                        "
                        >
                        <span className="text-white">
                            {communityData.title}
                        </span>
                        </h2>
                    </div>
                    <div className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] overflow-hidden flex flex-col lg:flex-row items-stretch">

                        {/* ===== LEFT: red card, restored from the original book design ===== */}
                        <div className="lg:w-1/2 bg-[#581c25] p-10 md:p-16 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent pointer-events-none"></div>

                  <div className="relative z-10 shadow-2xl rounded-lg overflow-hidden max-w-70 w-full transform transition-transform hover:scale-105 duration-300 ring-1 ring-white/10">
    <div className="relative bg-linear-to-b from-[#c4232a] to-[#5c0f14] p-6 text-white flex flex-col justify-between aspect-3/4 border border-red-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.65)]">

                                    <div className="font-bold tracking-tighter text-2xl uppercase leading-none">
                                        {communityData.cardOrg}
                                        {/* <span className="text-xs block font-normal tracking-normal text-red-200 mt-1">
                                            {communityData.cardTag}
                                        </span> */}
                                    </div>

                                    {/* image slot — swap IMAGE_SRC at the top of this file once you have a photo */}
                                    <div className="my-auto flex justify-center py-4">
                                        {IMAGE_SRC ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={IMAGE_SRC}
                                                alt={communityData.cardOrg}
                                                className="h-36 w-full rounded-md object-cover border border-red-900/40"
                                            />
                                        ) : (
                                            <div className="flex h-36 w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-red-300/30 text-red-200/70">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                                    <circle cx="8.5" cy="10" r="1.5" />
                                                    <path d="M21 15l-5-5-11 9" />
                                                </svg>
                                                <span className="text-[10px] uppercase tracking-widest">Your photo here</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-end text-[9px] text-red-300 uppercase tracking-wider">
                                        <span>{communityData.cardLine1}</span>
                                        <span>{communityData.cardLine2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===== RIGHT: benefits + CTA ===== */}
                        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-[#0e1013]">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-white mb-4">
                                    {communityData.heading}
                                </h3>

                                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8">
                                    {communityData.desc}
                                </p>

                                <ul className="space-y-3.5">
                                    {communityData.benefits.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                                                <Check className="h-3 w-3 text-white" />
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <div className="flex flex-wrap gap-3">
                                    {communityData.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.href}
                                            className={
                                                link.primary
                                                    ? "group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                                                    : "inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
                                            }
                                        >
                                            {link.label}
                                            {link.primary && (
                                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="w-full h-px bg-zinc-700"></div> */}
             <SectionWrapper className="z-10">
                <div className="w-full border-t border-zinc-800"></div>
            </SectionWrapper>
        </>
    );
};

export default Community;