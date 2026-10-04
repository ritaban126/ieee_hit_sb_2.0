
// "use client";

// import {
//     ArrowLeft,
//     ArrowRight,
//     ChevronRight,
//     ImageOff,
//     Maximize2,
//     X,
// } from "lucide-react";
// import Link from "next/link";
// import { useCallback, useEffect, useRef, useState } from "react";
// import type {
//     CSSProperties,
//     MouseEvent as ReactMouseEvent,
//     PointerEvent as ReactPointerEvent,
// } from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// type Achievement = {
//     event: string;
//     title: string;
//     quote: string;
//     name: string;
//     role: string;
//     year: string;
//     result: string;
//     desc?: string;
//     image?: string;
//     href?: string;
// };

// const READ_MORE_URL = "https://edu.ieee.org/in-hit/";

// const achievements: Achievement[] = [
//     {
//         event: "CircuitHack",
//         title: "Team Volt wins the 24-hour CircuitHack with a self-balancing robot",
//         quote:
//             "We had 24 hours, one bench and almost no sleep. Watching the robot balance on stage made every hour worth it.",
//         name: "Aarav Mehta",
//         role: "Team Lead, Team Volt",
//         year: "2025",
//         result: "1st Place",
//         desc:
//             "Out of 60+ teams, Team Volt built and demoed a self-balancing robot in 24 hours and took home the top prize.",
//         image: "/events/2026_event1.jpg",
//         href: READ_MORE_URL,
//     },
//     {
//         event: "IEEE Conference",
//         title: "Low-power IoT research paper presented at an IEEE conference",
//         quote:
//             "Our first paper felt impossible until our seniors walked us through every single review round.",
//         name: "Riya Sharma",
//         role: "Research Lead",
//         year: "2025",
//         result: "Paper Presented",
//         desc:
//             "Our members presented their first research paper on low-power IoT sensing, mentored by senior students and faculty.",
//         image: "/events/2026_event2.jpg",
//         href: READ_MORE_URL,
//     },
//     {
//         event: "Branch Award",
//         title: "Our student branch is recognised for outstanding activity",
//         quote:
//             "Every event and every late-night lab session added up. This award belongs to the whole branch.",
//         name: "Dr. Anil Rao",
//         role: "Branch Counsellor",
//         year: "2024",
//         result: "Best Branch",
//         desc:
//             "The branch was recognised for consistent events, member growth, and technical output across the year.",
//         image: "/spotlight/spotlight_1.png",
//         href: READ_MORE_URL,
//     },
//     {
//         event: "PCB Workshop",
//         title: "200+ students join our hands-on PCB design workshop",
//         quote:
//             "I had never held a soldering iron before. By the end of the day I had a working board on my desk.",
//         name: "Kabir Das",
//         role: "First-year member",
//         year: "2025",
//         result: "200+ Participants",
//         desc:
//             "A two-day, hands-on workshop that took first-years from schematic to a fabricated board.",
//         image: "/spotlight/spotlight_2.jpg",
//         href: READ_MORE_URL,
//     },
//     {
//         event: "IEEE Global",
//         title: "Our chapter joins the IEEE global student network",
//         quote:
//             "Being part of the global network opened doors to labs and mentors we never had access to.",
//         name: "Neha Iyer",
//         role: "Branch Chairperson",
//         year: "2024",
//         result: "Connected",
//         desc:
//             "Our branch is now part of the worldwide IEEE student network, sharing resources, labs, and events.",
//         image: "/events/2026_event3.jpg",
//         href: READ_MORE_URL,
//     },
//     {
//         event: "SwarmBot",
//         title: "SwarmBot takes the Best Hardware Project award",
//         quote:
//             "Ten small robots talking to each other and moving as one. That was the moment it all clicked.",
//         name: "Vikram Nair",
//         role: "Hardware Lead",
//         year: "2025",
//         result: "Best Hardware",
//         desc:
//             "A swarm of small robots coordinating over a mesh network, built entirely by student members.",
//         image: "/events/2026_event4.jpg",
//         href: READ_MORE_URL,
//     },
//     {
//         event: "Robo Finals",
//         title: "Two members selected for the national robotics finals",
//         quote:
//             "Making the national finals taught us more than any classroom ever could.",
//         name: "Sara Khan",
//         role: "Robotics Team",
//         year: "2024",
//         result: "Top 10",
//         desc:
//             "Two members made it through the national qualifiers and finished in the top ten at the finals.",
//         image: "/events/2025_event4.jpg",
//         href: READ_MORE_URL,
//     },
// ];

// /* -------------------------------------------------------------------------- */
// /*  Hover effect: a grid of blocks that fills the card one by one             */
// /* -------------------------------------------------------------------------- */

// const COLS = 8;
// const ROWS = 9;

// const BLOCK_DELAYS: number[] = [];

// for (let r = 0; r < ROWS; r++) {
//     for (let c = 0; c < COLS; c++) {
//         const wave = (r + c) * 24;
//         const noise = ((r * 7 + c * 13 + r * c * 3) % 9) * 14;
//         BLOCK_DELAYS.push(wave + noise);
//     }
// }

// /* -------------------------------------------------------------------------- */
// /*  Card visual                                                               */
// /* -------------------------------------------------------------------------- */

// const CardVisual = ({ a }: { a: Achievement }) => {
//     if (a.image) {
//         return (
//             // eslint-disable-next-line @next/next/no-img-element
//             <img
//                 src={a.image}
//                 alt={a.title}
//                 loading="lazy"
//                 draggable={false}
//                 className="absolute inset-0 h-full w-full object-cover grayscale"
//             />
//         );
//     }

//     return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(255,255,255,0.09),transparent_62%)]" />

//             <ImageOff
//                 className="relative h-10 w-10 text-zinc-700"
//                 strokeWidth={1.2}
//                 aria-hidden="true"
//             />
//         </div>
//     );
// };



// const Spotlight = () => {
//     const sectionRef = useRef<HTMLElement | null>(null);
//     const rootRef = useRef<HTMLDivElement | null>(null);
//     const scrollRef = useRef<HTMLDivElement | null>(null);
//     const closeRef = useRef<HTMLButtonElement | null>(null);

//     const drag = useRef({
//         active: false,
//         startX: 0,
//         startLeft: 0,
//         moved: false,
//     });

//     const [shown, setShown] = useState(false);
//     const [canLeft, setCanLeft] = useState(false);
//     const [canRight, setCanRight] = useState(true);
//     const [selected, setSelected] = useState<Achievement | null>(null);

//     /* ---- reveal on first view ---- */

//     useEffect(() => {
//         const el = rootRef.current;

//         if (!el) return;

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setShown(true);
//                     io.disconnect();
//                 }
//             },
//             {
//                 threshold: 0.1,
//                 rootMargin: "0px 0px -40px 0px",
//             }
//         );

//         io.observe(el);

//         return () => io.disconnect();
//     }, []);

//     /* ---- arrows state ---- */

//     const update = useCallback(() => {
//         const el = scrollRef.current;

//         if (!el) return;

//         const max = el.scrollWidth - el.clientWidth;

//         setCanLeft(el.scrollLeft > 4);
//         setCanRight(el.scrollLeft < max - 4);
//     }, []);

//     useEffect(() => {
//         const el = scrollRef.current;

//         if (!el) return;

//         let raf = 0;

//         const schedule = () => {
//             cancelAnimationFrame(raf);
//             raf = requestAnimationFrame(update);
//         };

//         el.addEventListener("scroll", schedule, {
//             passive: true,
//         });

//         const ro = new ResizeObserver(schedule);

//         ro.observe(el);
//         schedule();

//         return () => {
//             cancelAnimationFrame(raf);
//             el.removeEventListener("scroll", schedule);
//             ro.disconnect();
//         };
//     }, [update]);

//     /* ---- expand popup: Esc to close, lock page scroll ---- */

//     useEffect(() => {
//         if (!selected) return;

//         const prev = document.body.style.overflow;

//         document.body.style.overflow = "hidden";

//         const onKey = (e: KeyboardEvent) => {
//             if (e.key === "Escape") {
//                 setSelected(null);
//             }
//         };

//         window.addEventListener("keydown", onKey);

//         closeRef.current?.focus();

//         return () => {
//             document.body.style.overflow = prev;
//             window.removeEventListener("keydown", onKey);
//         };
//     }, [selected]);

//     /* ---- arrow buttons: move exactly one card ---- */

//     const scrollByCard = (dir: 1 | -1) => {
//         const el = scrollRef.current;

//         if (!el) return;

//         const card = el.querySelector<HTMLElement>("[data-card]");

//         const gap =
//             parseFloat(getComputedStyle(el).columnGap) || 24;

//         const step = card
//             ? card.offsetWidth + gap
//             : 340;

//         el.scrollBy({
//             left: dir * step,
//             behavior: "smooth",
//         });
//     };

//     /* ---- mouse drag (touch uses native swipe) ---- */

//     const onPointerDown = (
//         e: ReactPointerEvent<HTMLDivElement>
//     ) => {
//         if (e.pointerType !== "mouse") return;

//         const el = scrollRef.current;

//         if (!el) return;

//         drag.current = {
//             active: true,
//             startX: e.clientX,
//             startLeft: el.scrollLeft,
//             moved: false,
//         };
//     };

//     const onPointerMove = (
//         e: ReactPointerEvent<HTMLDivElement>
//     ) => {
//         const d = drag.current;
//         const el = scrollRef.current;

//         if (!d.active || !el) return;

//         const dx = e.clientX - d.startX;

//         if (!d.moved && Math.abs(dx) > 5) {
//             d.moved = true;

//             el.style.scrollSnapType = "none";
//             el.style.cursor = "grabbing";

//             el.setPointerCapture(e.pointerId);
//         }

//         if (d.moved) {
//             el.scrollLeft = d.startLeft - dx;
//         }
//     };

//     const endDrag = () => {
//         const d = drag.current;
//         const el = scrollRef.current;

//         if (!d.active) return;

//         d.active = false;

//         if (el && d.moved) {
//             el.style.scrollSnapType = "";
//             el.style.cursor = "";
//         }

//         setTimeout(() => {
//             d.moved = false;
//         }, 60);
//     };

//     const onClickCapture = (
//         e: ReactMouseEvent<HTMLDivElement>
//     ) => {
//         if (drag.current.moved) {
//             e.preventDefault();
//             e.stopPropagation();
//         }
//     };

//     const arrowBtn =
//         "flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-black text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:text-zinc-700 disabled:hover:border-zinc-800 disabled:hover:text-zinc-700";

//     return (
//         <>
//             <style>
//                 {`
//                     @keyframes achRise {
//                         from {
//                             opacity: 0;
//                             transform: translateY(28px);
//                         }

//                         to {
//                             opacity: 1;
//                             transform: none;
//                         }
//                     }

//                     @keyframes achFade {
//                         from {
//                             opacity: 0;
//                         }

//                         to {
//                             opacity: 1;
//                         }
//                     }

//                     @keyframes achPop {
//                         from {
//                             opacity: 0;
//                             transform: translateY(16px) scale(0.97);
//                         }

//                         to {
//                             opacity: 1;
//                             transform: none;
//                         }
//                     }

//                     .ach-rv {
//                         opacity: 0;
//                     }

//                     .ach-in .ach-rv {
//                         animation: achRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
//                         animation-delay: calc(var(--i, 0) * 90ms + 100ms);
//                     }

//                     .ach-blk {
//                         transform: scale(0);
//                         transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
//                         transition-delay: var(--bd, 0ms);
//                     }

//                     .ach-hover-zone:hover .ach-blk,
//                     .ach-card:focus-within .ach-blk {
//                         transform: scale(1.04);
//                     }

//                     .ach-quote {
//                         opacity: 0;
//                         transform: translateY(10px);
//                         transition:
//                             opacity 0.2s ease,
//                             transform 0.2s ease;
//                     }

//                     .ach-hover-zone:hover .ach-quote,
//                     .ach-card:focus-within .ach-quote {
//                         opacity: 1;
//                         transform: none;
//                         transition:
//                             opacity 0.4s ease 0.45s,
//                             transform 0.4s ease 0.45s;
//                     }

//                     .ach-modal-bg {
//                         animation: achFade 0.25s ease both;
//                     }

//                     .ach-modal-card {
//                         animation: achPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
//                     }

//                     .ach-scroll {
//                         scrollbar-width: none;
//                         -ms-overflow-style: none;
//                     }

//                     .ach-scroll::-webkit-scrollbar {
//                         display: none;
//                     }

//                     @media (prefers-reduced-motion: reduce) {
//                         .ach-rv {
//                             opacity: 1 !important;
//                         }

//                         .ach-in .ach-rv,
//                         .ach-modal-bg,
//                         .ach-modal-card {
//                             animation: none !important;
//                         }

//                         .ach-blk,
//                         .ach-quote {
//                             transition: none !important;
//                         }
//                     }
//                 `}
//             </style>

//             <section
//                 ref={sectionRef}
//                 className="relative w-full overflow-hidden bg-black pt-24 pb-14 text-white"
//             >
//                 {/* vertical guide lines */}
//                 <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
//                     <div className="w-px bg-zinc-800" />
//                     <div className="w-px bg-zinc-800" />
//                 </div>

//                 <div
//                     ref={rootRef}
//                     className={`relative z-10 px-8 md:px-20 lg:px-28 xl:px-36 ${
//                         shown ? "ach-in" : ""
//                     }`}
//                 >
//                     {/* ===== HEADER ===== */}

//                     <div className="mb-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
//                         <div
//                             className="ach-rv max-w-2xl"
//                             style={
//                                 {
//                                     "--i": 0,
//                                 } as CSSProperties
//                             }
//                         >
//                             <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
//                                 <span>Chapter Achievements</span>
//                             </h2>

//                             <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
//                                 Explore how our student members turn rigorous labs,
//                                 collaborative hackathons, and technical initiatives
//                                 into award-winning projects and research papers.
//                             </p>

//                             <Link
//                                 href={READ_MORE_URL}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group/all mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-zinc-300"
//                             >
//                                 View all chapter milestones

//                                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/all:translate-x-1" />
//                             </Link>
//                         </div>

//                         <div
//                             className="ach-rv flex shrink-0 gap-2"
//                             style={
//                                 {
//                                     "--i": 1,
//                                 } as CSSProperties
//                             }
//                         >
//                             <button
//                                 type="button"
//                                 onClick={() => scrollByCard(-1)}
//                                 disabled={!canLeft}
//                                 aria-label="Previous achievements"
//                                 className={arrowBtn}
//                             >
//                                 <ArrowLeft className="h-4 w-4" />
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={() => scrollByCard(1)}
//                                 disabled={!canRight}
//                                 aria-label="Next achievements"
//                                 className={arrowBtn}
//                             >
//                                 <ArrowRight className="h-4 w-4" />
//                             </button>
//                         </div>
//                     </div>

//                     {/* ===== CAROUSEL ===== */}

//                     <div className="relative -mx-4">
//                         <div
//                             className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-black to-transparent transition-opacity duration-300 ${
//                                 canLeft
//                                     ? "opacity-100"
//                                     : "opacity-0"
//                             }`}
//                         />

//                         <div
//                             className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l from-black to-transparent transition-opacity duration-300 ${
//                                 canRight
//                                     ? "opacity-100"
//                                     : "opacity-0"
//                             }`}
//                         />

//                         <div
//                             ref={scrollRef}
//                             role="region"
//                             aria-label="Achievements"
//                             onPointerDown={onPointerDown}
//                             onPointerMove={onPointerMove}
//                             onPointerUp={endDrag}
//                             onPointerCancel={endDrag}
//                             onClickCapture={onClickCapture}
//                             onDragStart={(e) => e.preventDefault()}
//                             className="ach-scroll flex cursor-grab snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-2 select-none"
//                         >
//                             {achievements.map((a, i) => (
//                                 <div
//                                     key={a.event}
//                                     data-card
//                                     className="ach-rv ach-card group relative w-72 shrink-0 snap-start sm:w-80 lg:w-88 xl:w-96"
//                                     style={
//                                         {
//                                             "--i": i + 2,
//                                         } as CSSProperties
//                                     }
//                                 >
//                                     <Link
//                                         href={
//                                             a.href ??
//                                             READ_MORE_URL
//                                         }
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         draggable={false}
//                                         className="block"
//                                     >
//                                         {/* ---- card face ---- */}

//                                         <div className="ach-hover-zone relative aspect-10/11 overflow-hidden rounded-xl border border-zinc-800 bg-black">
//                                             <div className="absolute inset-0">
//                                                 <CardVisual a={a} />
//                                             </div>

//                                             {/* readable bottom */}

//                                             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

//                                             <p className="absolute bottom-6 left-6 text-3xl font-semibold tracking-tight text-white">
//                                                 {a.event}
//                                             </p>

//                                             {/* hover blocks */}

//                                             <div
//                                                 aria-hidden="true"
//                                                 className="pointer-events-none absolute inset-0 z-20 grid grid-cols-8 grid-rows-9"
//                                             >
//                                                 {BLOCK_DELAYS.map(
//                                                     (d, k) => (
//                                                         <span
//                                                             key={k}
//                                                             className="ach-blk bg-[#1f1f1f]"
//                                                             style={
//                                                                 {
//                                                                     "--bd": `${d}ms`,
//                                                                 } as CSSProperties
//                                                             }
//                                                         />
//                                                     )
//                                                 )}
//                                             </div>

//                                             {/* quote */}

//                                             <div className="ach-quote pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-7 text-white">
//                                                 <p className="line-clamp-8 text-[19px] leading-snug">
//                                                     &ldquo;{a.quote}&rdquo;
//                                                 </p>

//                                                 <div>
//                                                     <p className="text-[15px] font-medium">
//                                                         {a.name}
//                                                     </p>

//                                                     <p className="mt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">
//                                                         {a.role}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* ---- text + read story ---- */}

//                                         <div className="pt-6">
//                                             <h3 className="text-[17px] leading-snug text-white">
//                                                 {a.title}{" "}
//                                                 <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
//                                                     ↘
//                                                 </span>
//                                             </h3>

//                                             <span className="mt-4 inline-flex items-center gap-1 rounded-lg border border-zinc-800 px-3.5 py-2 text-sm font-medium text-zinc-300 transition-colors group-hover:border-zinc-500 group-hover:text-white">
//                                                 Read story

//                                                 <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//                                             </span>
//                                         </div>
//                                     </Link>

//                                     {/* expand button */}

//                                     <button
//                                         type="button"
//                                         onClick={() =>
//                                             setSelected(a)
//                                         }
//                                         aria-label={`Expand ${a.event}`}
//                                         className="absolute top-4 right-4 z-40 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
//                                     >
//                                         <Maximize2 className="h-3.5 w-3.5" />
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ===== EXPAND POPUP ===== */}

//             {selected && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
//                     role="dialog"
//                     aria-modal="true"
//                     aria-label={selected.event}
//                 >
//                     <div
//                         className="ach-modal-bg absolute inset-0 bg-black/80 backdrop-blur-sm"
//                         onClick={() => setSelected(null)}
//                     />

//                     <div className="ach-modal-card relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#0a0a0a] md:grid-cols-2">
//                         {/* visual side */}

//                         <div className="relative h-72 overflow-hidden bg-black md:h-auto md:min-h-130">
//                             <CardVisual a={selected} />

//                             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black via-black/70 to-transparent" />

//                             <p className="absolute right-6 bottom-6 left-6 text-3xl font-semibold tracking-tight text-white">
//                                 {selected.event}
//                             </p>
//                         </div>

//                         {/* details side */}

//                         <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
//                             <div>
//                                 <p className="text-xs tracking-widest text-zinc-500">
//                                     {selected.year} ·{" "}
//                                     {selected.result}
//                                 </p>

//                                 <h3 className="mt-3 text-2xl leading-snug font-semibold text-white">
//                                     {selected.title}
//                                 </h3>

//                                 <p className="mt-4 text-sm leading-relaxed text-zinc-400">
//                                     {selected.desc ??
//                                         "More details about this achievement will be added soon."}
//                                 </p>

//                                 <div className="mt-6 rounded-xl border border-zinc-800 bg-[#1a1a1a] p-5">
//                                     <p className="text-[15px] leading-snug text-zinc-200">
//                                         &ldquo;{selected.quote}&rdquo;
//                                     </p>

//                                     <p className="mt-4 text-sm font-medium text-white">
//                                         {selected.name}
//                                     </p>

//                                     <p className="mt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">
//                                         {selected.role}
//                                     </p>
//                                 </div>
//                             </div>

//                             <Link
//                                 href={
//                                     selected.href ??
//                                     READ_MORE_URL
//                                 }
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group/link inline-flex w-fit items-center gap-1 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
//                             >
//                                 Read full story

//                                 <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//                             </Link>
//                         </div>

//                         <button
//                             ref={closeRef}
//                             type="button"
//                             onClick={() => setSelected(null)}
//                             aria-label="Close"
//                             className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
//                         >
//                             <X className="h-4 w-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <SectionWrapper className="z-10">
//                 <div className="w-full border-t border-zinc-800" />
//             </SectionWrapper>
//         </>
//     );
// };

// export default Spotlight;







// new fixed code of spotlight
"use client";

import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    ImageOff,
    Maximize2,
    X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type {
    CSSProperties,
    MouseEvent as ReactMouseEvent,
    PointerEvent as ReactPointerEvent,
} from "react";
import SectionWrapper from "../ui/SectionWrapper";

type Achievement = {
    id: number;
    title: string;
    desc?: string;
    image?: string;
    href?: string;
    year: string;
};

const READ_MORE_URL = "https://edu.ieee.org/in-hit/";

/* Auto-scroll speed in pixels per second (lower = slower) */
const AUTO_SPEED = 25;

const achievements: Achievement[] = [
    {
        id: 1,
        title: "IEEE HIT SB performed best among all the branches.",
        desc: "IEEE HIT SB performed best among all branches under Kharagpur Section.",
        year: "2025",
        image: "/events/2026_event1.jpg",
        href: READ_MORE_URL,
    },
    {
        id: 2,
        title: "Low-power IoT research paper presented at an IEEE conference",
        desc: "Our members presented their first research paper on low-power IoT sensing, mentored by senior students and faculty.",
        year: "2025",
        image: "/events/2026_event2.jpg",
        href: READ_MORE_URL,
    },
    {
        id: 3,
        title: "Our student branch is recognised for outstanding activity",
        desc: "The branch was recognised for consistent events, member growth, and technical output across the year.",
        year: "2024",
        image: "/spotlight/spotlight_1.png",
        href: READ_MORE_URL,
    },
    {
        id: 4,
        title: "200+ students join our hands-on PCB design workshop",
        desc: "A two-day, hands-on workshop that took first-years from schematic to a fabricated board.",
        year: "2025",
        image: "/spotlight/spotlight_2.jpg",
        href: READ_MORE_URL,
    },
    {
        id: 5,
        title: "Our chapter joins the IEEE global student network",
        desc: "Our branch is now part of the worldwide IEEE student network, sharing resources, labs, and events.",
        year: "2024",
        image: "/events/2026_event3.jpg",
        href: READ_MORE_URL,
    },
    {
        id: 6,
        title: "SwarmBot takes the Best Hardware Project award",
        desc: "A swarm of small robots coordinating over a mesh network, built entirely by student members.",
        year: "2025",
        image: "/events/2026_event4.jpg",
        href: READ_MORE_URL,
    },
    {
        id: 7,
        title: "Two members selected for the national robotics finals",
        desc: "Two members made it through the national qualifiers and finished in the top ten at the finals.",
        year: "2024",
        image: "/events/2025_event4.jpg",
        href: READ_MORE_URL,
    },
];

/* -------------------------------------------------------------------------- */
/*  Hover effect: a grid of blocks that fills the card one by one             */
/* -------------------------------------------------------------------------- */

const COLS = 8;
const ROWS = 9;

const BLOCK_DELAYS: number[] = [];

for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
        const wave = (r + c) * 24;
        const noise = ((r * 7 + c * 13 + r * c * 3) % 9) * 14;
        BLOCK_DELAYS.push(wave + noise);
    }
}

/* -------------------------------------------------------------------------- */
/*  Card visual                                                               */
/* -------------------------------------------------------------------------- */

const CardVisual = ({ a }: { a: Achievement }) => {
    if (a.image) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={a.image}
                alt={a.title}
                loading="eager"
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover grayscale"
            />
        );
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(255,255,255,0.09),transparent_62%)]" />

            <ImageOff
                className="relative h-10 w-10 text-zinc-700"
                strokeWidth={1.2}
                aria-hidden="true"
            />
        </div>
    );
};

/* -------------------------------------------------------------------------- */
/*  One card (used for the real set and for the looped clone set)             */
/* -------------------------------------------------------------------------- */

type CardProps = {
    a: Achievement;
    index: number;
    set: "a" | "b";
    onExpand: (a: Achievement) => void;
};

const Card = ({ a, index, set, onExpand }: CardProps) => {
    const clone = set === "b";

    return (
        <div
            data-card
            data-id={a.id}
            data-set={set}
            aria-hidden={clone || undefined}
            className="ach-rv ach-card group relative w-72 shrink-0 sm:w-80 lg:w-88 xl:w-96"
            style={{ "--i": index + 2 } as CSSProperties}
        >
            <Link
                href={a.href ?? READ_MORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                tabIndex={clone ? -1 : undefined}
                className="block cursor-none"
            >
                {/* ---- card face ---- */}

                <div className="ach-hover-zone relative aspect-10/11 overflow-hidden rounded-xl border border-zinc-800 bg-black">
                    <div className="absolute inset-0">
                        <CardVisual a={a} />
                    </div>

                    {/* readable bottom */}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute inset-x-6 bottom-6">
                        <p className="text-xs font-medium tracking-[0.14em] text-cyan-300 uppercase">
                            Achievement
                        </p>
                    </div>

                    {/* hover blocks (blue) */}

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-20 grid grid-cols-8 grid-rows-9"
                    >
                        {BLOCK_DELAYS.map((d, k) => (
                            <span
                                key={k}
                                className="ach-blk bg-[#0033cc]"
                                style={{ "--bd": `${d}ms` } as CSSProperties}
                            />
                        ))}
                    </div>

                    {/* hover text: description + year */}

                    <div className="ach-quote pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-7 text-white">
                        <p className="line-clamp-8 text-[19px] leading-snug">
                            {a.desc ?? a.title}
                        </p>

                        <p className="font-mono text-xs tracking-wider text-blue-200 uppercase">
                            Achievement · {a.year}
                        </p>
                    </div>

                    {/* blue line on the bottom edge of the card */}

                    <span
                        aria-hidden="true"
                        className="ach-spot pointer-events-none absolute inset-x-0 bottom-0 z-40"
                    />
                </div>

                {/* ---- title below the card ---- */}

                <div className="pt-6">
                    <h3 className="text-[17px] leading-snug text-white">
                        {a.title}
                    </h3>
                </div>

            </Link>

            {/* expand button */}

            <button
                type="button"
                onClick={() => onExpand(a)}
                tabIndex={clone ? -1 : undefined}
                aria-label={`Expand ${a.title}`}
                className="absolute top-4 right-4 z-40 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:bg-white hover:text-black"
            >
                <Maximize2 className="h-3.5 w-3.5" />
            </button>
        </div>
    );
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

const Spotlight = () => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const pillRef = useRef<HTMLDivElement | null>(null);
    const closeRef = useRef<HTMLButtonElement | null>(null);

    /* All carousel state lives in a ref so animating never re-renders React */
    const motion = useRef({
        pos: 0, // current scroll offset in px (float)
        rate: 1, // 0..1 speed multiplier (eases to 0 on hover)
        glide: 0, // remaining distance of an arrow-button glide
        setW: 0, // width of one full set of cards (for the seamless loop)
        hover: false,
        down: false,
        drag: false,
        moved: false,
        modal: false,
        inView: true,
        startX: 0,
        startPos: 0,
    });

    const hoveredRef = useRef<string | null>(null);

    const [shown, setShown] = useState(false);
    const [selected, setSelected] = useState<Achievement | null>(null);

    /* ---- reveal on first view ---- */

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
            {
                threshold: 0.1,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        io.observe(el);

        return () => io.disconnect();
    }, []);

    /* ---- smooth auto-scroll loop (transform based, runs on the GPU) ---- */

    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!viewport || !track) return;

        const m = motion.current;

        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const measure = () => {
            const first = track.querySelector<HTMLElement>('[data-set="a"]');
            const clone = track.querySelector<HTMLElement>('[data-set="b"]');

            if (first && clone) {
                m.setW = clone.offsetLeft - first.offsetLeft;
            }
        };

        const ro = new ResizeObserver(measure);

        ro.observe(viewport);
        measure();

        const io = new IntersectionObserver(([entry]) => {
            m.inView = entry.isIntersecting;
        });

        io.observe(viewport);

        let raf = 0;
        let last = performance.now();
        let lastX = Number.NaN;

        const tick = (now: number) => {
            const dt = Math.min(now - last, 50);

            last = now;

            if (m.setW > 0 && m.inView) {
                const stop = m.hover || m.drag || m.modal || reduce;
                const target = stop ? 0 : 1;

                // ease speed in/out so hover pause never feels abrupt
                m.rate += (target - m.rate) * (1 - Math.exp(-dt / 200));

                if (stop && m.rate < 0.002) m.rate = 0;

                if (!m.drag) {
                    m.pos += (AUTO_SPEED * m.rate * dt) / 1000;

                    // arrow-button glide (exponential ease-out)
                    if (m.glide !== 0) {
                        const step = m.glide * (1 - Math.exp(-dt / 140));

                        m.glide -= step;
                        m.pos += step;

                        if (Math.abs(m.glide) < 0.2) {
                            m.pos += m.glide;
                            m.glide = 0;
                        }
                    }
                }

                // seamless wrap
                m.pos = ((m.pos % m.setW) + m.setW) % m.setW;

                // when fully stopped, snap to a whole pixel so text stays sharp
                const x = m.rate === 0 && m.glide === 0 ? Math.round(m.pos) : m.pos;

                if (x !== lastX) {
                    track.style.transform = `translate3d(${-x}px,0,0)`;
                    lastX = x;
                }
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
        };
    }, []);

    /* ---- expand popup: Esc to close, lock page scroll, pause carousel ---- */

    useEffect(() => {
        if (!selected) return;

        const m = motion.current;
        const prev = document.body.style.overflow;

        m.modal = true;
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelected(null);
            }
        };

        window.addEventListener("keydown", onKey);

        closeRef.current?.focus();

        return () => {
            m.modal = false;
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [selected]);

    /* ---- arrow buttons: glide exactly one card ---- */

    const scrollByCard = (dir: 1 | -1) => {
        const m = motion.current;

        if (!m.setW) return;

        m.glide += (dir * m.setW) / achievements.length;
    };

    /* ---- blue line: shown on the card the cursor just left ---- */

    const trackHover = (name: string | null) => {
        const prev = hoveredRef.current;

        if (prev === name) return;

        hoveredRef.current = name;

        // entering a card clears every line; leaving marks the card we left
        const mark = name ? null : prev;

        trackRef.current
            ?.querySelectorAll<HTMLElement>("[data-card]")
            .forEach((el) => {
                if (mark && el.dataset.id === mark) {
                    el.dataset.visited = "1";
                } else {
                    delete el.dataset.visited;
                }
            });
    };

    /* ---- "READ STORY" cursor ---- */

    const updatePill = (e: ReactPointerEvent<HTMLDivElement>) => {
        const pill = pillRef.current;

        if (!pill) return;

        if (e.pointerType !== "mouse") {
            pill.dataset.show = "0";
            return;
        }

        const t = e.target as HTMLElement;

        const hoveredCard = motion.current.drag
            ? null
            : t.closest<HTMLElement>("[data-card]");

        trackHover(hoveredCard?.dataset.id ?? null);

        const overCard =
            !!t.closest("[data-card]") &&
            !t.closest("button") &&
            !motion.current.drag;

        pill.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        pill.dataset.show = overCard ? "1" : "0";
    };

    /* ---- mouse / touch drag ---- */

    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;

        const m = motion.current;

        m.down = true;
        m.moved = false;
        m.startX = e.clientX;
        m.startPos = m.pos;
    };

    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        const m = motion.current;

        if (m.down) {
            if (!m.drag) {
                if (Math.abs(e.clientX - m.startX) > 6) {
                    m.drag = true;
                    m.moved = true;
                    m.glide = 0;
                    m.startX = e.clientX;
                    m.startPos = m.pos;

                    if (viewportRef.current) {
                        viewportRef.current.dataset.drag = "1";
                    }

                    e.currentTarget.setPointerCapture(e.pointerId);
                }
            } else {
                m.pos = m.startPos - (e.clientX - m.startX);
            }
        }

        updatePill(e);
    };

    const endDrag = () => {
        const m = motion.current;

        m.down = false;

        if (m.drag) {
            m.drag = false;

            if (viewportRef.current) {
                viewportRef.current.dataset.drag = "0";
            }

            setTimeout(() => {
                m.moved = false;
            }, 60);
        }
    };

    const onPointerEnter = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (e.pointerType === "mouse") motion.current.hover = true;
    };

    const onPointerLeave = () => {
        motion.current.hover = false;
        trackHover(null);

        if (pillRef.current) pillRef.current.dataset.show = "0";
    };

    const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
        if (motion.current.moved) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const arrowBtn =
        "flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-black text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white";

    return (
        <>
            <style>
                {`
                    @keyframes achRise {
                        from {
                            opacity: 0;
                            transform: translateY(28px);
                        }

                        to {
                            opacity: 1;
                            transform: none;
                        }
                    }

                    @keyframes achFade {
                        from {
                            opacity: 0;
                        }

                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes achPop {
                        from {
                            opacity: 0;
                            transform: translateY(16px) scale(0.97);
                        }

                        to {
                            opacity: 1;
                            transform: none;
                        }
                    }

                    .ach-rv {
                        opacity: 0;
                    }

                    .ach-in .ach-rv {
                        animation: achRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: calc(var(--i, 0) * 90ms + 100ms);
                    }

                    .ach-blk {
                        transform: scale(0);
                        transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
                        transition-delay: var(--bd, 0ms);
                    }

                    .ach-hover-zone:hover .ach-blk,
                    .ach-card:focus-within .ach-blk {
                        transform: scale(1.04);
                    }

                    .ach-quote {
                        opacity: 0;
                        transform: translateY(10px);
                        transition:
                            opacity 0.2s ease,
                            transform 0.2s ease;
                    }

                    .ach-hover-zone:hover .ach-quote,
                    .ach-card:focus-within .ach-quote {
                        opacity: 1;
                        transform: none;
                        transition:
                            opacity 0.4s ease 0.45s,
                            transform 0.4s ease 0.45s;
                    }

                    /* blue line on the bottom edge: only on the card the cursor just left */
                    .ach-spot {
                        height: 2px;
                        opacity: 0;
                        transform: scaleX(0);
                        transform-origin: center;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            #2f5bff 12%,
                            #2f5bff 88%,
                            transparent
                        );
                        box-shadow: 0 0 14px 2px rgba(47, 91, 255, 0.7);
                        transition:
                            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                            opacity 0.4s ease;
                    }

                    .ach-card[data-visited="1"] .ach-spot {
                        opacity: 1;
                        transform: none;
                    }

                    /* carousel track */
                    .ach-track {
                        will-change: transform;
                        backface-visibility: hidden;
                    }

                    .ach-viewport[data-drag="1"],
                    .ach-viewport[data-drag="1"] * {
                        cursor: grabbing !important;
                    }

                    /* READ STORY cursor */
                    .ach-pill {
                        opacity: 0;
                        transform: scale(0.85);
                        transition:
                            opacity 0.18s ease,
                            transform 0.18s ease;
                    }

                    [data-show="1"] > div > .ach-pill {
                        opacity: 1;
                        transform: none;
                    }

                    .ach-modal-bg {
                        animation: achFade 0.25s ease both;
                    }

                    .ach-modal-card {
                        animation: achPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .ach-rv {
                            opacity: 1 !important;
                        }

                        .ach-in .ach-rv,
                        .ach-modal-bg,
                        .ach-modal-card {
                            animation: none !important;
                        }

                        .ach-blk,
                        .ach-quote,
                        .ach-spot,
                        .ach-pill {
                            transition: none !important;
                        }
                    }
                `}
            </style>

            <section className="relative w-full overflow-hidden bg-black pt-24 pb-14 text-white">
                {/* vertical guide lines */}
                <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="w-px bg-zinc-800" />
                    <div className="w-px bg-zinc-800" />
                </div>

                <div
                    ref={rootRef}
                    className={`relative z-10 px-8 md:px-20 lg:px-28 xl:px-36 ${
                        shown ? "ach-in" : ""
                    }`}
                >
                    {/* ===== HEADER ===== */}

                    <div className="mb-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div
                            className="ach-rv max-w-2xl"
                            style={{ "--i": 0 } as CSSProperties}
                        >
                            <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
                                <span>Chapter Achievements</span>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                                Explore how our student members turn rigorous labs,
                                collaborative hackathons, and technical initiatives
                                into award-winning projects and research papers.
                            </p>

                            <Link
                                href={READ_MORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
                            >
                                See all stories
                            </Link>
                        </div>

                        <div
                            className="ach-rv flex shrink-0 gap-2"
                            style={{ "--i": 1 } as CSSProperties}
                        >
                            <button
                                type="button"
                                onClick={() => scrollByCard(-1)}
                                aria-label="Previous achievements"
                                className={arrowBtn}
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollByCard(1)}
                                aria-label="Next achievements"
                                className={arrowBtn}
                            >
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* ===== CAROUSEL ===== */}

                    <div className="relative -mx-4">
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-black to-transparent" />

                        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l from-black to-transparent" />

                        <div
                            ref={viewportRef}
                            role="region"
                            aria-label="Achievements"
                            data-drag="0"
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={endDrag}
                            onPointerCancel={endDrag}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onClickCapture={onClickCapture}
                            onDragStart={(e) => e.preventDefault()}
                            className="ach-viewport cursor-grab touch-pan-y overflow-hidden select-none"
                        >
                            <div
                                ref={trackRef}
                                className="ach-track flex w-max gap-6 pl-4"
                            >
                                {achievements.map((a, i) => (
                                    <Card
                                        key={`a-${a.id}`}
                                        a={a}
                                        index={i}
                                        set="a"
                                        onExpand={setSelected}
                                    />
                                ))}

                                {/* clone set → makes the auto-scroll loop seamless */}
                                {achievements.map((a, i) => (
                                    <Card
                                        key={`b-${a.id}`}
                                        a={a}
                                        index={i}
                                        set="b"
                                        onExpand={setSelected}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== READ STORY CURSOR ===== */}

            <div
                ref={pillRef}
                aria-hidden="true"
                data-show="0"
                className="pointer-events-none fixed top-0 left-0 z-60"
            >
                <div className="-translate-x-1/2 -translate-y-1/2">
                    <span className="ach-pill block rounded-md border border-white/10 bg-black px-3.5 py-2 font-mono text-xs font-medium tracking-[0.14em] whitespace-nowrap text-white uppercase shadow-lg">
                        Read story
                    </span>
                </div>
            </div>

            {/* ===== EXPAND POPUP ===== */}

            {selected && (
                <div
                    className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selected.title}
                >
                    <div
                        className="ach-modal-bg absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    />

                    <div className="ach-modal-card relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#0a0a0a] md:grid-cols-2">
                        {/* visual side */}

                        <div className="relative h-72 overflow-hidden bg-black md:h-auto md:min-h-110">
                            <CardVisual a={selected} />
                        </div>

                        {/* details side (short: label, title, description, button) */}

                        <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
                            <div>
                                <p className="text-xs font-medium tracking-[0.14em] text-cyan-300 uppercase">
                                    Achievement · {selected.year}
                                </p>

                                <h3 className="mt-4 text-2xl leading-snug font-semibold text-white md:text-3xl">
                                    {selected.title}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                                    {selected.desc ??
                                        "More details about this achievement will be added soon."}
                                </p>
                            </div>

                            <Link
                                href={selected.href ?? READ_MORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex w-fit items-center gap-1 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                            >
                                Read full story

                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                            </Link>
                        </div>

                        <button
                            ref={closeRef}
                            type="button"
                            onClick={() => setSelected(null)}
                            aria-label="Close"
                            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}

            <SectionWrapper className="z-10">
                <div className="w-full border-t border-zinc-800" />
            </SectionWrapper>
        </>
    );
};

export default Spotlight;


