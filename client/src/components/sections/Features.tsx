// import SectionWrapper from "../ui/SectionWrapper";

// const features = [
//     {
//         title: "Run workshops that actually stick",
//         desc: "Hands-on sessions in PCB design, embedded C, and robotics — led by seniors, open to first-years.",
//         icon: "◧",
//     },
//     {
//         title: "Host hackathons end to end",
//         desc: "From registration to judging — our 24-hour CircuitHack runs on tools built by the branch itself.",
//         icon: "◨",
//     },
// ];

// const tallFeatures = [
//     {
//         title: "Bring in real engineers to talk",
//         desc: "Alumni and industry speakers on signal processing, embedded systems, and career paths.",
//     },
//     {
//         title: "Mentor every first paper",
//         desc: "Pair students with seniors to get a first research paper submitted, reviewed, and presented.",
//     },
//     {
//         title: "Track member progress",
//         desc: "Certificates, event attendance, and project history — all visible from one member dashboard.",
//     },
// ];

// const bigFeature = {
//     title: "Connect chapters and clubs",
//     desc: "Robotics, WIE, and Computer Society share resources, labs, and event calendars.",
// };

// const Features = () => {
//     return (
//         <>
//             <section className="text-white pt-24 pb-6 w-full">
//                 <div className="px-8 md:px-20 lg:px-28 xl:px-36">

//                     <div className="max-w-2xl mb-16">
//                         <h2 className="text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
//                             <span className="text-white">Everything a technical branch needs. </span>
//                             <span className="text-zinc-500">Workshops, hackathons, and mentorship — designed to work individually or together.</span>
//                         </h2>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                         {features.map((f, i) => (
//                             <div key={i} className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] overflow-hidden min-h-105 flex flex-col">
//                                 <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 text-xs z-10">↗</div>
//                                 <div className="p-7 pb-0 relative z-10">
//                                     <h3 className="text-lg font-semibold max-w-[85%] leading-snug">{f.title}</h3>
//                                 </div>
//                                 <div className="relative flex-1 mt-6 mx-4 mb-0 rounded-t-xl border border-zinc-800 border-b-0 bg-black/50 flex items-center justify-center text-4xl text-zinc-600">{f.icon}</div>
//                                 <p className="absolute bottom-5 left-7 right-7 text-sm text-zinc-400 leading-relaxed bg-[#0e1013]/90 backdrop-blur-sm">{f.desc}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                         {tallFeatures.map((f, i) => (
//                             <div key={i} className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] hover:bg-[#141518] transition-colors duration-200 min-h-140 flex flex-col">
//                                 <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 text-xs">↗</div>
//                                 <div className="p-7">
//                                     <h3 className="text-lg font-semibold max-w-[85%] leading-snug">{f.title}</h3>
//                                 </div>
//                                 <p className="mt-auto p-7 pt-0 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] overflow-hidden min-h-85 flex flex-col md:flex-row items-stretch">
//                         <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 text-xs z-10">↗</div>
//                         <div className="p-8 md:w-1/3 flex flex-col justify-center">
//                             <h3 className="text-xl font-semibold leading-snug mb-3">{bigFeature.title}</h3>
//                             <p className="text-sm text-zinc-400 leading-relaxed">{bigFeature.desc}</p>
//                         </div>
//                         <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-zinc-800 bg-black/40 flex items-center justify-center text-5xl text-zinc-600 min-h-50 md:min-h-full">▤</div>
//                     </div>

//                 </div>
//             </section>

//                <SectionWrapper className="z-10">
//                     <div className="w-full border-t border-zinc-800"></div>
//                 </SectionWrapper>
//              {/* <div className="w-full h-px bg-zinc-700"></div> */}

//         </>
//     );
// };

// export default Features;







// full fixed features
"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import SectionWrapper from "../ui/SectionWrapper";

/* -------------------------------------------------------------------------- */
/*  Reveal — fades/rises an element in the first time it scrolls into view    */
/*  Children marked with .rv / .rg / .ieee-* classes animate in a stagger     */
/*  once the parent Reveal becomes visible.                                   */
/* -------------------------------------------------------------------------- */

const Reveal = ({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
            style={{ "--d": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
};

/** sets the stagger index used by the .rv / .rg classes */
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/* -------------------------------------------------------------------------- */
/*  Small shared pieces                                                       */
/* -------------------------------------------------------------------------- */

const TONES = [
    "from-zinc-400 to-zinc-700",
    "from-zinc-500 to-zinc-800",
    "from-zinc-300 to-zinc-600",
    "from-zinc-600 to-zinc-900",
];

const Avatar = ({
    label,
    tone = 0,
    className = "h-8 w-8 text-[11px]",
}: {
    label: string;
    tone?: number;
    className?: string;
}) => (
    <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-linear-to-br ${TONES[tone % TONES.length]} font-semibold text-white ring-1 ring-white/15 ${className}`}
    >
        {label}
    </div>
);

const Check = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
        <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ExpandBtn = ({ className = "" }: { className?: string }) => (
    <div
        className={`absolute top-5 right-5 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-zinc-400 transition-colors hover:bg-white/10 hover:text-white ${className}`}
    >
        ↗
    </div>
);

/** faint dotted grid + soft top glow used behind visuals */
const DotGrid = () => (
    <>
        <div
            className="pointer-events-none absolute inset-0"
            style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
    </>
);

/* -------------------------------------------------------------------------- */
/*  ROW 1 — visual 1: Workshop / meeting card                                 */
/* -------------------------------------------------------------------------- */

const WorkshopVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center px-6 pt-8 pb-18">
        <DotGrid />

        <div className="relative w-full max-w-sm">
            {/* stacked ghost cards for depth */}
            <div className="rv absolute inset-0" style={stagger(0)}>
                <div className="absolute inset-x-5 -top-2.5 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 opacity-60" />
                <div className="absolute inset-x-10 -top-5 h-10 rounded-xl border border-zinc-800 bg-zinc-900/40 opacity-35" />
            </div>

            {/* main card */}
            <div
                className="rv relative z-10 rounded-xl border border-zinc-800 bg-[#0e1013] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.65)]"
                style={stagger(1)}
            >
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        Starting soon
                    </span>
                    <span className="rounded-full border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                        Embedded C
                    </span>
                </div>

                <p className="mt-2.5 text-[15px] font-semibold text-white">PCB Design Workshop</p>
                <p className="text-xs text-zinc-500">2:30 – 4:00 PM · Lab 204</p>

                <div className="mt-3 flex items-center justify-between">
                    <div className="flex -space-x-2">
                        {["AM", "RS", "KD", "SP"].map((n, i) => (
                            <div key={n} className="rv" style={stagger(3 + i)}>
                                <Avatar label={n} tone={i} className="h-7 w-7 text-[9px] ring-2 ring-[#0e1013]" />
                            </div>
                        ))}
                        <div
                            className="rv flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[9px] text-zinc-400 ring-2 ring-[#0e1013]"
                            style={stagger(7)}
                        >
                            +38
                        </div>
                    </div>
                    <span className="text-[11px] text-zinc-500">Hands-on · Open to first-years</span>
                </div>

                <div className="mt-3.5">
                    <div className="flex justify-between text-[11px] text-zinc-500">
                        <span>Seats filled</span>
                        <span className="text-zinc-300">42 / 60</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                        <div className="ieee-bar h-full w-[70%] rounded-full bg-linear-to-r from-zinc-500 to-white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* -------------------------------------------------------------------------- */
/*  ROW 1 — visual 2: Hackathon browser window (chart + leaderboard)         */
/* -------------------------------------------------------------------------- */

const leaderboard = [
    { rank: 1, team: "Team Volt", track: "Embedded", score: "942" },
    { rank: 2, team: "Nova Circuit", track: "IoT", score: "918" },
    { rank: 3, team: "Byte Forge", track: "Robotics", score: "887" },
    { rank: 4, team: "Signal Sync", track: "DSP", score: "861" },
    { rank: 5, team: "Gate Keepers", track: "VLSI", score: "840" },
];

const HackathonVisual = () => (
    <div className="absolute inset-0">
        <DotGrid />

        <div
            className="rv absolute inset-x-5 top-5 bottom-0 overflow-hidden rounded-t-lg border border-b-0 border-zinc-800 bg-[#0a0b0d]"
            style={stagger(0)}
        >
            {/* window bar */}
            <div className="flex items-center gap-3 border-b border-zinc-800 px-3 py-2">
                <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-zinc-700" />
                    <span className="h-2 w-2 rounded-full bg-zinc-700" />
                    <span className="h-2 w-2 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto flex w-3/5 items-center justify-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-0.5 text-[10px] text-zinc-500">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <rect x="4" y="10" width="16" height="11" rx="2" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                    circuithack.live
                </div>
            </div>

            <div className="px-4 pt-3">
                {/* header */}
                <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">CircuitHack · 24h</p>
                    <span className="flex items-center gap-1.5 rounded-full border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        LIVE · 14:32 left
                    </span>
                </div>

                {/* submissions + chart */}
                <div className="mt-2.5 flex items-end gap-4">
                    <div className="rv shrink-0" style={stagger(2)}>
                        <p className="text-[10px] uppercase tracking-wider text-zinc-500">Submissions</p>
                        <p className="text-2xl font-semibold leading-none text-white">128</p>
                        <p className="mt-1 text-[10px] text-zinc-400">↑ 18 this hour</p>
                    </div>
                    <svg viewBox="0 0 300 64" preserveAspectRatio="none" className="ieee-wipe h-14 w-full" aria-hidden="true">
                        <defs>
                            <linearGradient id="hackFill" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
                                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 58 L25 54 L50 56 L75 44 L100 47 L125 36 L150 38 L175 26 L200 29 L225 17 L250 19 L275 8 L300 5 L300 64 L0 64 Z"
                            fill="url(#hackFill)"
                        />
                        <path
                            d="M0 58 L25 54 L50 56 L75 44 L100 47 L125 36 L150 38 L175 26 L200 29 L225 17 L250 19 L275 8 L300 5"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>

                {/* leaderboard */}
                <div className="mt-3">
                    <div className="grid grid-cols-[1.5fr_1fr_0.6fr] border-b border-zinc-800 pb-1.5 text-[10px] uppercase tracking-wider text-zinc-600">
                        <span>Team</span>
                        <span>Track</span>
                        <span className="text-right">Score</span>
                    </div>
                    {leaderboard.map((r) => (
                        <div
                            key={r.rank}
                            className={`rv grid grid-cols-[1.5fr_1fr_0.6fr] items-center border-b border-zinc-900 py-1.5 text-[11px] ${
                                r.rank === 1 ? "bg-white/4" : ""
                            }`}
                            style={stagger(3 + r.rank)}
                        >
                            <span className="flex items-center gap-2 text-zinc-200">
                                <span className="w-3 text-zinc-600">{r.rank}</span>
                                {r.team}
                            </span>
                            <span className="text-zinc-500">{r.track}</span>
                            <span className="text-right font-mono text-zinc-300">{r.score}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* soft fade so the description sits cleanly on top */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0e1013] via-[#0e1013]/80 to-transparent" />
    </div>
);

/* -------------------------------------------------------------------------- */
/*  ROW 2 — visual 1: floating speaker chips                                  */
/* -------------------------------------------------------------------------- */

const speakers = [
    { name: "Dr. Rao", role: "Signal Processing", initials: "DR", pos: "top-[7%] left-[6%]", reverse: false, tone: 0, delay: "0s" },
    { name: "A. Sen", role: "Embedded Systems", initials: "AS", pos: "top-[28%] right-[5%]", reverse: true, tone: 1, delay: "0.8s" },
    { name: "Prof. Iyer", role: "VLSI Design", initials: "PI", pos: "top-[52%] left-[5%]", reverse: false, tone: 2, delay: "1.6s" },
    { name: "R. Das", role: "Career Paths", initials: "RD", pos: "top-[75%] right-[7%]", reverse: true, tone: 3, delay: "2.4s" },
];

const TalkVisual = () => (
    <div className="absolute inset-0 overflow-hidden">
        {/* concentric rings — grow outward one after another */}
        {["h-40 w-40", "h-72 w-72", "h-104 w-104"].map((s, i) => (
            <div
                key={s}
                className={`rg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800/70 ${s}`}
                style={stagger(i)}
            />
        ))}
        <div
            className="rg absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_6px_rgba(255,255,255,0.35)]"
            style={stagger(0)}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

        {speakers.map((s, i) => (
            <div key={s.name} className={`rv absolute ${s.pos}`} style={stagger(i + 3)}>
                <div
                    className={`ieee-float flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-black/80 px-2.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur ${
                        s.reverse ? "flex-row-reverse text-right" : ""
                    }`}
                    style={{ animationDelay: s.delay }}
                >
                    <Avatar label={s.initials} tone={s.tone} className="h-8 w-8 text-[10px]" />
                    <div className="leading-tight">
                        <p className="text-xs font-medium text-white">{s.name}</p>
                        <p className="text-[10px] text-zinc-500">{s.role}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

/* -------------------------------------------------------------------------- */
/*  ROW 2 — visual 2: mentor chat                                             */
/* -------------------------------------------------------------------------- */

const MentorVisual = () => (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 px-5 py-4">
        <DotGrid />

        {/* student */}
        <div className="rv relative flex items-end gap-2" style={stagger(0)}>
            <Avatar label="RK" tone={2} className="h-7 w-7 text-[9px]" />
            <div className="max-w-[85%]">
                <p className="mb-1 text-[10px] text-zinc-600">Riya · 2nd year</p>
                <div className="rounded-2xl rounded-bl-sm border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-[13px] leading-snug text-zinc-300">
                    Can someone review my abstract before we submit to the IEEE conference?
                </div>
            </div>
        </div>

        {/* mentor */}
        <div className="rv relative flex items-end justify-end gap-2" style={stagger(4)}>
            <div className="max-w-[85%]">
                <p className="mb-1 text-right text-[10px] text-zinc-600">Mentor · Final year</p>
                <div className="rounded-2xl rounded-br-sm bg-white px-3.5 py-2.5 text-[13px] leading-snug text-black">
                    Sure, send it over. Tighten the intro and add your test results.
                </div>
            </div>
            <Avatar label="VN" tone={0} className="h-7 w-7 text-[9px]" />
        </div>

        {/* typing */}
        <div className="rv relative flex items-center gap-1.5 self-start pl-9" style={stagger(6)}>
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600"
                    style={{ animationDelay: `${i * 0.15}s` }}
                />
            ))}
        </div>

        {/* paper pipeline */}
        <div className="rv relative rounded-xl border border-zinc-800 bg-black/60 p-3" style={stagger(7)}>
            <div className="mb-2 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="uppercase tracking-wider">Paper status</span>
                <span className="text-zinc-300">In review</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
                <div className="ieee-bar h-1 rounded-full bg-white" />
                <div className="ieee-bar h-1 rounded-full bg-white" style={{ animationDelay: "0.9s" }} />
                <div className="h-1 rounded-full bg-zinc-800" />
            </div>
            <div className="mt-1.5 grid grid-cols-3 text-[10px] text-zinc-500">
                <span>Draft</span>
                <span>Reviewed</span>
                <span>Submitted</span>
            </div>
        </div>
    </div>
);

/* -------------------------------------------------------------------------- */
/*  ROW 2 — visual 3: member progress stepper                                 */
/* -------------------------------------------------------------------------- */

type StepState = "done" | "current" | "todo";

const steps: { title: string; sub: string; state: StepState }[] = [
    { title: "Joined IEEE", sub: "Welcome aboard · Aug", state: "done" },
    { title: "Workshop", sub: "PCB Design · Nov", state: "done" },
    { title: "Hackathon", sub: "CircuitHack · in progress", state: "current" },
    { title: "Certificate", sub: "Unlocks after the hackathon", state: "todo" },
];

const ProgressVisual = () => (
    <div className="absolute inset-0 flex flex-col justify-center px-6 py-4">
        <DotGrid />

        {/* mini dashboard header */}
        <div className="rv relative mb-6 rounded-xl border border-zinc-800 bg-black/60 p-3" style={stagger(0)}>
            <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Member dashboard</span>
                <span className="font-medium text-white">87%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="ieee-bar h-full w-[87%] rounded-full bg-linear-to-r from-zinc-500 to-white" />
            </div>
        </div>

        {/* stepper */}
        <div className="relative">
            {steps.map((s, i) => {
                const isLast = i === steps.length - 1;
                return (
                    <div
                        key={s.title}
                        className={`rv relative flex gap-4 ${isLast ? "" : "pb-7"}`}
                        style={stagger(i + 2)}
                    >
                        {!isLast && (
                            <span
                                className={`absolute top-9 -bottom-1 left-4 w-px -translate-x-1/2 ${
                                    s.state === "done" ? "bg-white/35" : "bg-zinc-800"
                                }`}
                            />
                        )}

                        <div
                            className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                                s.state === "current"
                                    ? "bg-white text-black shadow-[0_0_0_5px_rgba(255,255,255,0.08)]"
                                    : s.state === "done"
                                      ? "border border-white/30 bg-black text-white/70"
                                      : "border border-zinc-800 bg-black text-zinc-600"
                            }`}
                        >
                            {s.state === "todo" ? i + 1 : <Check />}
                        </div>

                        <div className="-mt-0.5">
                            <p
                                className={`text-sm font-medium ${
                                    s.state === "current" ? "text-white" : s.state === "done" ? "text-zinc-400" : "text-zinc-600"
                                }`}
                            >
                                {s.title}
                            </p>
                            <p className={`text-xs ${s.state === "current" ? "text-zinc-400" : "text-zinc-600"}`}>{s.sub}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

/* -------------------------------------------------------------------------- */
/*  ROW 3 — dotted world map with chapter markers + arcs                      */
/* -------------------------------------------------------------------------- */

type Pt = [number, number]; // [lon, lat]

const NORTH_AMERICA: Pt[] = [[-168,66],[-156,71],[-140,70],[-125,70],[-110,68],[-95,72],[-90,69],[-94,62],[-92,57],[-85,55],[-82,52],[-79,54],[-77,60],[-72,62],[-64,60],[-56,52],[-60,47],[-66,44],[-70,42],[-74,40],[-76,35],[-81,31],[-80,26],[-82,27],[-84,30],[-90,29],[-94,29],[-97,26],[-97,21],[-92,18],[-87,21],[-88,16],[-84,15],[-83,10],[-77,8],[-80,7],[-86,11],[-92,14],[-97,16],[-105,20],[-109,25],[-113,31],[-117,32],[-121,35],[-124,40],[-124,47],[-128,51],[-135,58],[-146,61],[-158,57],[-165,60]];
const SOUTH_AMERICA: Pt[] = [[-77,8],[-72,12],[-62,10],[-52,5],[-50,0],[-44,-2],[-35,-6],[-39,-14],[-41,-22],[-48,-26],[-53,-34],[-58,-38],[-65,-42],[-68,-50],[-70,-55],[-74,-50],[-73,-40],[-71,-30],[-70,-18],[-76,-14],[-81,-5],[-80,0],[-77,4]];
const GREENLAND: Pt[] = [[-55,60],[-44,60],[-40,65],[-22,70],[-20,78],[-35,83],[-60,82],[-70,78],[-55,70]];
const UK: Pt[] = [[-6,50],[1,51],[2,53],[-2,56],[-3,58.5],[-6,58],[-5,55],[-3,54],[-5,52]];
const IRELAND: Pt[] = [[-10,52],[-6,52],[-6,55],[-9,54.5]];
const EURASIA: Pt[] = [[-9,37],[-9,43],[-2,44],[-4,48],[2,51],[5,53],[8,54],[9,57],[11,56],[12,54],[20,55],[21,57],[24,59],[30,60],[22,60],[22,63],[25,65],[21,66],[17,62],[19,60],[16,56],[12,56],[11,59],[6,58],[5,62],[14,67],[20,70],[28,71],[40,68],[44,68],[60,69],[70,73],[80,73],[100,77],[115,74],[140,72],[160,70],[180,68],[180,65],[170,60],[163,58],[160,52],[156,51],[155,58],[150,59],[142,54],[140,48],[135,43],[130,42],[129,35],[126,35],[125,39],[121,40],[122,37],[119,35],[122,30],[121,25],[117,23],[110,21],[108,21],[106,18],[109,12],[105,9],[100,13],[99,8],[103,1],[100,4],[98,10],[98,16],[94,17],[92,21],[89,22],[86,20],[80,15],[78,8],[74,14],[72,20],[68,23],[62,25],[57,26],[56,27],[52,28],[50,30],[48,30],[50,26],[56,25],[58,23],[52,17],[43,13],[39,21],[35,28],[34,31],[36,36],[30,36],[27,37],[26,40],[23,40],[22,37],[20,40],[19,42],[13,45],[16,41],[18,40],[16,38],[12,42],[9,44],[3,43],[-1,37]];
const AFRICA: Pt[] = [[-17,21],[-13,28],[-6,36],[10,37],[11,33],[20,31],[32,31],[33,28],[36,22],[39,15],[43,12],[51,12],[46,3],[40,-4],[40,-15],[35,-24],[32,-29],[27,-34],[19,-35],[15,-27],[12,-17],[13,-8],[9,0],[9,4],[4,6],[-8,4],[-13,8],[-17,15]];
const MADAGASCAR: Pt[] = [[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]];
const AUSTRALIA: Pt[] = [[114,-22],[122,-18],[129,-15],[136,-12],[142,-11],[146,-19],[153,-26],[151,-34],[146,-39],[138,-35],[131,-31],[115,-34]];
const HONSHU: Pt[] = [[131,34],[136,34.5],[140,35],[141,38],[142,40],[140,41],[139,38],[136,37],[132,35]];
const HOKKAIDO: Pt[] = [[140,42],[145,43],[143,45],[141,45]];
const SUMATRA: Pt[] = [[95,5],[98,4],[104,-2],[106,-6],[101,-3],[96,2]];
const JAVA: Pt[] = [[105,-6],[114,-7],[114,-8.5],[106,-7.5]];
const BORNEO: Pt[] = [[109,1],[112,3],[117,7],[119,5],[116,-4],[111,-3],[109,-1]];
const NEW_GUINEA: Pt[] = [[131,-1],[141,-3],[150,-10],[141,-9],[136,-4]];
const NZ_NORTH: Pt[] = [[172,-34],[178,-38],[175,-41],[173,-40]];
const NZ_SOUTH: Pt[] = [[172,-41],[174,-42],[170,-46],[167,-46]];

const BLACK_SEA: Pt[] = [[28,42],[41,41],[41,45],[35,45.5],[30,46]];
const CASPIAN: Pt[] = [[47,37],[54,37],[54,42],[50,46],[47,44]];

const LAND: Pt[][] = [NORTH_AMERICA, SOUTH_AMERICA, GREENLAND, UK, IRELAND, EURASIA, AFRICA, MADAGASCAR, AUSTRALIA, HONSHU, HOKKAIDO, SUMATRA, JAVA, BORNEO, NEW_GUINEA, NZ_NORTH, NZ_SOUTH];
const WATER: Pt[][] = [BLACK_SEA, CASPIAN];

const inPoly = (lon: number, lat: number, poly: Pt[]): boolean => {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i];
        const [xj, yj] = poly[j];
        if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
            inside = !inside;
        }
    }
    return inside;
};

const isLand = (lon: number, lat: number) =>
    LAND.some((p) => inPoly(lon, lat, p)) && !WATER.some((p) => inPoly(lon, lat, p));

const MAP_W = 720;
const MAP_H = 276;
const projectX = (lon: number) => (lon + 180) * 2;
const projectY = (lat: number) => (78 - lat) * 2;

// Built once, one single <path> (zero-length round-capped segments = dots) → very light to render
const buildDots = () => {
    const step = 3;
    let d = "";
    let row = 0;
    for (let lat = 78; lat >= -60; lat -= step, row++) {
        const offset = row % 2 ? step / 2 : 0;
        for (let lon = -180 + offset; lon < 180; lon += step) {
            if (isLand(lon, lat)) {
                d += `M${projectX(lon).toFixed(1)} ${projectY(lat).toFixed(1)}h0`;
            }
        }
    }
    return d;
};

const DOTS_PATH = buildDots();

const chapters = [
    { name: "Robotics", lon: 88.4, lat: 22.6 },
    { name: "WIE", lon: 13.4, lat: 52.5 },
    { name: "CS Society", lon: -74, lat: 40.7 },
].map((c) => ({ ...c, x: projectX(c.lon), y: projectY(c.lat) }));

const arcPath = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const mx = (a.x + b.x) / 2;
    const my = Math.min(a.y, b.y) - Math.abs(a.x - b.x) * 0.28;
    return `M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`;
};

// chain: Robotics ↔ WIE ↔ CS Society
const ARCS = [arcPath(chapters[0], chapters[1]), arcPath(chapters[1], chapters[2])];

const ChaptersMap = () => (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
        <div
            className="relative aspect-720/276 w-full max-w-190"
            style={{
                maskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
            }}
        >
            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    <linearGradient id="mapDots" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={MAP_W} y2={MAP_H}>
                        <stop offset="0%" stopColor="#d4d4d8" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#71717a" stopOpacity="0.55" />
                    </linearGradient>
                </defs>

                {/* land dots — fade in */}
                <path
                    d={DOTS_PATH}
                    stroke="url(#mapDots)"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    fill="none"
                    className="ieee-fade"
                    style={{ "--fd": "0.2s" } as CSSProperties}
                />

                {/* arcs between chapters */}
                {ARCS.map((d) => (
                    <path key={d} d={d} fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="4 6" className="ieee-arc" />
                ))}

                {/* markers */}
                <g className="ieee-fade" style={{ "--fd": "1s" } as CSSProperties}>
                    {chapters.map((c, i) => (
                        <g key={c.name}>
                            <circle cx={c.x} cy={c.y} r="3" fill="none" stroke="#fff" strokeWidth="1">
                                <animate attributeName="r" from="3" to="16" dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
                            </circle>
                            <circle cx={c.x} cy={c.y} r="3.2" fill="#fff" />
                        </g>
                    ))}
                </g>
            </svg>

            {/* chapter chips (positioned with the same projection as the svg) */}
            {chapters.map((c, i) => (
                <div
                    key={c.name}
                    className="rv absolute -translate-x-1/2"
                    style={{ ...stagger(8 + i * 2), left: `${(c.x / MAP_W) * 100}%`, top: `${(c.y / MAP_H) * 100}%` }}
                >
                    <div className="mt-3 whitespace-nowrap rounded-lg border border-zinc-800 bg-black/85 px-2.5 py-1 text-[11px] font-medium text-zinc-200 shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur">
                        {c.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const features: { title: string; desc: string; Visual: ComponentType }[] = [
    {
        title: "Run workshops that actually stick",
        desc: "Hands-on sessions in PCB design, embedded C, and robotics — led by seniors, open to first-years.",
        Visual: WorkshopVisual,
    },
    {
        title: "Host hackathons end to end",
        desc: "From registration to judging — our 24-hour CircuitHack runs on tools built by the branch itself.",
        Visual: HackathonVisual,
    },
];

const tallFeatures: { title: string; desc: string; Visual: ComponentType }[] = [
    {
        title: "Bring in real engineers to talk",
        desc: "Alumni and industry speakers on signal processing, embedded systems, and career paths.",
        Visual: TalkVisual,
    },
    {
        title: "Mentor every first paper",
        desc: "Pair students with seniors to get a first research paper submitted, reviewed, and presented.",
        Visual: MentorVisual,
    },
    {
        title: "Track member progress",
        desc: "Certificates, event attendance, and project history — all visible from one member dashboard.",
        Visual: ProgressVisual,
    },
];

const bigFeature = {
    title: "Connect chapters and clubs",
    desc: "Robotics, WIE, and Computer Society share resources, labs, and event calendars.",
    tags: ["Shared labs", "Event calendar", "Resources"],
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

const Features = () => {
    return (
        <>
            <style>
                {`
                    /* ---------- keyframes ---------- */
                    @keyframes ieeeFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                    @keyframes ieeeDash  { to { stroke-dashoffset: -20; } }
                    @keyframes ieeeBar   { from { transform: scaleX(0); } to { transform: scaleX(1); } }
                    @keyframes ieeeRise  { from { opacity: 0; transform: translateY(36px) scale(0.985); } to { opacity: 1; transform: none; } }
                    @keyframes ieeePop   { from { opacity: 0; transform: translateY(14px) scale(0.97); } to { opacity: 1; transform: none; } }
                    @keyframes ieeeGrow  { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: none; } }
                    @keyframes ieeeFade  { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes ieeeWipe  { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }

                    /* ---------- entrance: card / block ---------- */
                    .reveal { opacity: 0; }
                    .reveal-in {
                        animation: ieeeRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: var(--d, 0ms);
                    }

                    /* ---------- entrance: inner items (staggered by --i) ---------- */
                    .rv { opacity: 0; }
                    .reveal-in .rv {
                        animation: ieeePop 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: calc(var(--i, 0) * 90ms + 300ms);
                    }
                    .rg { opacity: 0; }
                    .reveal-in .rg {
                        animation: ieeeGrow 1s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: calc(var(--i, 0) * 140ms + 150ms);
                    }

                    /* ---------- entrance: special items ---------- */
                    .ieee-fade { opacity: 0; }
                    .reveal-in .ieee-fade { animation: ieeeFade 1.6s ease both; animation-delay: var(--fd, 0.3s); }

                    .ieee-wipe { clip-path: inset(0 100% 0 0); }
                    .reveal-in .ieee-wipe { animation: ieeeWipe 1.5s cubic-bezier(0.4, 0, 0.2, 1) both; animation-delay: 0.7s; }

                    .ieee-bar { transform: scaleX(0); transform-origin: left; }
                    .reveal-in .ieee-bar { animation: ieeeBar 1.3s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.6s; }

                    .ieee-arc { opacity: 0; }
                    .reveal-in .ieee-arc { animation: ieeeDash 1.6s linear infinite, ieeeFade 1s ease 1.1s both; }

                    /* ---------- always-on ambient motion ---------- */
                    .ieee-float { animation: ieeeFloat 5s ease-in-out infinite; }

                    /* ---------- reduced motion: show everything instantly ---------- */
                    @media (prefers-reduced-motion: reduce) {
                        .reveal, .rv, .rg, .ieee-fade, .ieee-arc { opacity: 1 !important; }
                        .ieee-wipe { clip-path: none !important; }
                        .ieee-bar { transform: none !important; }
                        .reveal-in, .reveal-in .rv, .reveal-in .rg, .reveal-in .ieee-fade,
                        .reveal-in .ieee-wipe, .reveal-in .ieee-bar, .reveal-in .ieee-arc, .ieee-float {
                            animation: none !important;
                        }
                    }
                `}
            </style>

            <section className="text-white pt-24 pb-6 w-full">
                <div className="px-8 md:px-20 lg:px-28 xl:px-36">

                    <Reveal className="max-w-2xl mb-16">
                        <h2 className="text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
                            <span className="text-white">Everything a technical branch needs. </span>
                            <span className="text-zinc-500">Workshops, hackathons, and mentorship — designed to work individually or together.</span>
                        </h2>
                    </Reveal>

                    {/* ROW 1 — two wide cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {features.map((f, i) => (
                            <Reveal
                                key={i}
                                delay={i * 140}
                                className="relative border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 rounded-2xl bg-[#0e1013] overflow-hidden min-h-105 flex flex-col"
                            >
                                <ExpandBtn />
                                <div className="p-7 pb-0 relative z-10">
                                    <h3 className="rv text-lg font-semibold max-w-[85%] leading-snug" style={stagger(0)}>{f.title}</h3>
                                </div>
                                <div className="relative flex-1 mt-6 mx-4 mb-0 rounded-t-xl border border-zinc-800 border-b-0 bg-black/50 overflow-hidden">
                                    <f.Visual />
                                </div>
                                <p className="rv absolute bottom-5 left-7 right-7 z-10 text-sm text-zinc-400 leading-relaxed bg-[#0e1013]/90 backdrop-blur-sm" style={stagger(2)}>{f.desc}</p>
                            </Reveal>
                        ))}
                    </div>

                    {/* ROW 2 — three tall cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {tallFeatures.map((f, i) => (
                            <Reveal
                                key={i}
                                delay={i * 140}
                                className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] hover:bg-[#141518] hover:border-zinc-700 transition-colors duration-200 min-h-140 flex flex-col overflow-hidden"
                            >
                                <ExpandBtn />
                                <div className="p-7 relative z-10">
                                    <h3 className="rv text-lg font-semibold max-w-[85%] leading-snug" style={stagger(0)}>{f.title}</h3>
                                </div>
                                <div className="relative flex-1 min-h-70 overflow-hidden">
                                    <f.Visual />
                                </div>
                                <p className="rv relative z-10 mt-auto p-7 pt-4 text-sm text-zinc-400 leading-relaxed" style={stagger(3)}>{f.desc}</p>
                            </Reveal>
                        ))}
                    </div>

                    {/* ROW 3 — one big split card */}
                    <Reveal className="relative border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 rounded-2xl bg-[#0e1013] overflow-hidden min-h-85 flex flex-col md:flex-row items-stretch">
                        <ExpandBtn />
                        <div className="p-8 md:w-1/3 flex flex-col justify-center">
                            <h3 className="rv text-xl font-semibold leading-snug mb-3" style={stagger(0)}>{bigFeature.title}</h3>
                            <p className="rv text-sm text-zinc-400 leading-relaxed" style={stagger(1)}>{bigFeature.desc}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {bigFeature.tags.map((t, i) => (
                                    <span
                                        key={t}
                                        className="rv rounded-full border border-zinc-800 bg-black/40 px-3 py-1 text-[11px] text-zinc-400"
                                        style={stagger(2 + i)}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative md:w-2/3 border-t md:border-t-0 md:border-l border-zinc-800 bg-black/40 min-h-64 md:min-h-full overflow-hidden">
                            <DotGrid />
                            <ChaptersMap />
                        </div>
                    </Reveal>

                </div>
            </section>

            <SectionWrapper className="z-10">
                <div className="w-full border-t border-zinc-800"></div>
            </SectionWrapper>
        </>
    );
};

export default Features;






// import SectionWrapper from "../ui/SectionWrapper";

// const columns = [
//     {
//         fig: "FIG 0.1",
//         title: "Run workshops that actually stick",
//         desc: "Hands-on sessions in PCB design, embedded C, and robotics — led by seniors, open to first-years.",
//         icon: (
//             <svg viewBox="0 0 300 260" fill="none" className="w-full h-full">
//                 <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
//                     {/* top diamond cap */}
//                     <path d="M150 40 L230 82 L150 124 L70 82 Z" />
//                     <ellipse cx="150" cy="82" rx="45" ry="14" opacity="0.85" />
//                     <path d="M108 76 Q150 96 192 76" opacity="0.85" />
//                     <path d="M112 84 Q150 100 188 84" opacity="0.75" />
//                     <path d="M118 92 Q150 104 182 92" opacity="0.65" />

//                     {/* stacked layers */}
//                     {[0, 1, 2, 3, 4, 5, 6].map((i) => (
//                         <g key={i} transform={`translate(0, ${96 + i * 12})`}>
//                             <path d="M70 0 L150 42 L230 0" strokeDasharray={i % 2 === 0 ? "0" : "2 3"} />
//                             <line x1="70" y1="0" x2="70" y2="12" />
//                             <line x1="230" y1="0" x2="230" y2="12" />
//                         </g>
//                     ))}
//                     <path d="M70 96 L150 138 L230 96" />
//                 </g>
//             </svg>
//         ),
//     },
//     {
//         fig: "FIG 0.2",
//         title: "Host hackathons end to end",
//         desc: "From registration to judging — our 24-hour CircuitHack runs on tools built by the branch itself.",
//         icon: (
//             <svg viewBox="0 0 300 260" fill="none" className="w-full h-full">
//                 <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
//                     {/* cube helper */}
//                     {[
//                         { x: 150, y: 30 },
//                         { x: 90, y: 78 },
//                         { x: 150, y: 126 },
//                         { x: 210, y: 78 },
//                         { x: 150, y: 126 },
//                     ].map((c, i) => (
//                         <g key={i} transform={`translate(${c.x - 150}, ${c.y - 78})`}>
//                             <path d="M150 40 L192 62 L192 100 L150 122 L108 100 L108 62 Z" />
//                             <path d="M108 62 L150 84 L192 62" opacity="0.85" />
//                             <line x1="150" y1="84" x2="150" y2="122" opacity="0.85" />
//                             <rect x="140" y="48" width="10" height="4" opacity="0.65" />
//                         </g>
//                     ))}
//                 </g>
//             </svg>
//         ),
//     },
//     {
//         fig: "FIG 0.3",
//         title: "Bring in real engineers to talk",
//         desc: "Alumni and industry speakers on signal processing, embedded systems, and career paths.",
//         icon: (
//             <svg viewBox="0 0 300 260" fill="none" className="w-full h-full">
//                 <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
//                     <path d="M160 40 L210 62 L210 190 L160 212 L160 40 Z" />
//                     <path d="M160 40 L110 62 L110 190 L160 212" opacity="0.9" />
//                     {[...Array(12)].map((_, i) => (
//                         <line
//                             key={i}
//                             x1={104 - i * 6}
//                             y1={70 + i * 4}
//                             x2={104 - i * 6}
//                             y2={190 + i * 4}
//                             opacity={0.75 - i * 0.03}
//                         />
//                     ))}
//                 </g>
//             </svg>
//         ),
//     },
//      {
//         fig: "FIG 0.4",
//         title: "Host hackathons end to end",
//         desc: "From registration to judging — our 24-hour CircuitHack runs on tools built by the branch itself.",
//         icon: (
//             <svg viewBox="0 0 300 260" fill="none" className="w-full h-full">
//                 <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
//                     {/* cube helper */}
//                     {[
//                         { x: 150, y: 30 },
//                         { x: 90, y: 78 },
//                         { x: 150, y: 126 },
//                         { x: 210, y: 78 },
//                         { x: 150, y: 126 },
//                     ].map((c, i) => (
//                         <g key={i} transform={`translate(${c.x - 150}, ${c.y - 78})`}>
//                             <path d="M150 40 L192 62 L192 100 L150 122 L108 100 L108 62 Z" />
//                             <path d="M108 62 L150 84 L192 62" opacity="0.85" />
//                             <line x1="150" y1="84" x2="150" y2="122" opacity="0.85" />
//                             <rect x="140" y="48" width="10" height="4" opacity="0.65" />
//                         </g>
//                     ))}
//                 </g>
//             </svg>
//         ),
//     },
//      {
//         fig: "FIG 0.5",
//         title: "Host hackathons end to end",
//         desc: "From registration to judging — our 24-hour CircuitHack runs on tools built by the branch itself.",
//         icon: (
//             <svg viewBox="0 0 300 260" fill="none" className="w-full h-full">
//                 <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
//                     {/* cube helper */}
//                     {[
//                         { x: 150, y: 30 },
//                         { x: 90, y: 78 },
//                         { x: 150, y: 126 },
//                         { x: 210, y: 78 },
//                         { x: 150, y: 126 },
//                     ].map((c, i) => (
//                         <g key={i} transform={`translate(${c.x - 150}, ${c.y - 78})`}>
//                             <path d="M150 40 L192 62 L192 100 L150 122 L108 100 L108 62 Z" />
//                             <path d="M108 62 L150 84 L192 62" opacity="0.85" />
//                             <line x1="150" y1="84" x2="150" y2="122" opacity="0.85" />
//                             <rect x="140" y="48" width="10" height="4" opacity="0.65" />
//                         </g>
//                     ))}
//                 </g>
//             </svg>
//         ),
//     },
//      {
//         fig: "FIG 0.6",
//         title: "Host hackathons end to end",
//         desc: "From registration to judging — our 24-hour CircuitHack runs on tools built by the branch itself.",
//         icon: (
//             <svg viewBox="0 0 300 260" fill="none" className="w-full h-full">
//                 <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
//                     {/* cube helper */}
//                     {[
//                         { x: 150, y: 30 },
//                         { x: 90, y: 78 },
//                         { x: 150, y: 126 },
//                         { x: 210, y: 78 },
//                         { x: 150, y: 126 },
//                     ].map((c, i) => (
//                         <g key={i} transform={`translate(${c.x - 150}, ${c.y - 78})`}>
//                             <path d="M150 40 L192 62 L192 100 L150 122 L108 100 L108 62 Z" />
//                             <path d="M108 62 L150 84 L192 62" opacity="0.85" />
//                             <line x1="150" y1="84" x2="150" y2="122" opacity="0.85" />
//                             <rect x="140" y="48" width="10" height="4" opacity="0.65" />
//                         </g>
//                     ))}
//                 </g>
//             </svg>
//         ),
//     },
// ];

// const Features = () => {
//     return (
//         <>
//             <section className="text-white pt-24 pb-6 w-full">
//                 <div className="px-8 md:px-20 lg:px-28 xl:px-36">

//                     <div className="max-w-2xl mb-16">
//                         <h2 className="text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
//                             <span className="text-white">Everything a technical branch needs. </span>
//                             <span className="text-zinc-500">Workshops, hackathons, and mentorship — designed to work individually or together.</span>
//                         </h2>
//                     </div>

//                     <div className="overflow-hidden">
//                         <div className="grid grid-cols-1 md:grid-cols-3">
//                             {columns.map((col, i) => {
//                                 const isLastInRow = (i + 1) % 3 === 0;

//                                 return (
//                                     <div 
//                                         key={i} 
//                                         className="relative flex flex-col group"
//                                     >
//                                         {!isLastInRow && (
//                                             <span className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-zinc-800" />
//                                         )}
//                                         <div className="px-8 pt-6">
//                                             <span className="text-[11px] tracking-widest text-zinc-600 font-mono">{col.fig}</span>
//                                         </div>

//                                         <div className="w-full max-w-70 aspect-square text-zinc-400 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2 group-hover:text-zinc-200">
//                                             <div className="w-full max-w-70 aspect-square text-zinc-500">{col.icon}</div>
//                                         </div>

//                                         <div className="px-8 pb-8">
//                                             <h3 className="text-base font-semibold text-white mb-2 leading-snug">{col.title}</h3>
//                                             <p className="text-sm text-zinc-500 leading-relaxed">{col.desc}</p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             <SectionWrapper className="z-10">
//                 <div className="w-full border-t border-zinc-800"></div>
//             </SectionWrapper>
//         </>
//     );
// };

// export default Features;