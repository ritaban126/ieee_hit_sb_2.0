
// final full fixed code 
// "use client";

// import { ArrowLeft, ArrowRight, ChevronRight, Maximize2, X } from "lucide-react";
// import Link from "next/link";
// import { useCallback, useEffect, useRef, useState } from "react";
// import type {
//     CSSProperties,
//     MouseEvent as ReactMouseEvent,
//     PointerEvent as ReactPointerEvent,
// } from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// /* -------------------------------------------------------------------------- */
// /*  DATA — placeholder content. Replace with your real achievements later.    */
// /*                                                                            */
// /*  event  → big "logo" text on the card (bottom-left, like a brand logo)     */
// /*  title  → text under the card                                              */
// /*  quote / name / role → shown on the card when you hover it                 */
// /*  image  → optional photo (shown black & white). If empty, `art` is used.   */
// /* -------------------------------------------------------------------------- */

// type Art = "podium" | "paper" | "medal" | "pcb" | "globe" | "swarm" | "rocket";

// type Achievement = {
//     event: string;
//     title: string;
//     quote: string;
//     name: string;
//     role: string;
//     year: string;
//     result: string;
//     desc?: string;
//     image?: string; // e.g. "/achievements/circuithack.jpg"
//     art: Art;
//     href?: string;
// };

// const achievements: Achievement[] = [
//     {
//         event: "CircuitHack",
//         title: "Team Volt wins the 24-hour CircuitHack with a self-balancing robot",
//         quote: "We had 24 hours, one bench and almost no sleep. Watching the robot balance on stage made every hour worth it.",
//         name: "Aarav Mehta",
//         role: "Team Lead, Team Volt",
//         year: "2025",
//         result: "1st Place",
//         desc: "Out of 60+ teams, Team Volt built and demoed a self-balancing robot in 24 hours and took home the top prize.",
//         art: "podium",
//         href: "#",
//     },
//     {
//         event: "IEEE Conference",
//         title: "Low-power IoT research paper presented at an IEEE conference",
//         quote: "Our first paper felt impossible until our seniors walked us through every single review round.",
//         name: "Riya Sharma",
//         role: "Research Lead",
//         year: "2025",
//         result: "Paper Presented",
//         desc: "Our members presented their first research paper on low-power IoT sensing, mentored by senior students and faculty.",
//         art: "paper",
//         href: "#",
//     },
//     {
//         event: "Branch Award",
//         title: "Our student branch is recognised for outstanding activity",
//         quote: "Every event and every late-night lab session added up. This award belongs to the whole branch.",
//         name: "Dr. Anil Rao",
//         role: "Branch Counsellor",
//         year: "2024",
//         result: "Best Branch",
//         desc: "The branch was recognised for consistent events, member growth, and technical output across the year.",
//         art: "medal",
//         href: "#",
//     },
//     {
//         event: "PCB Workshop",
//         title: "200+ students join our hands-on PCB design workshop",
//         quote: "I had never held a soldering iron before. By the end of the day I had a working board on my desk.",
//         name: "Kabir Das",
//         role: "First-year member",
//         year: "2025",
//         result: "200+ Participants",
//         desc: "A two-day, hands-on workshop that took first-years from schematic to a fabricated board.",
//         art: "pcb",
//         href: "#",
//     },
//     {
//         event: "IEEE Global",
//         title: "Our chapter joins the IEEE global student network",
//         quote: "Being part of the global network opened doors to labs and mentors we never had access to.",
//         name: "Neha Iyer",
//         role: "Branch Chairperson",
//         year: "2024",
//         result: "Connected",
//         desc: "Our branch is now part of the worldwide IEEE student network, sharing resources, labs, and events.",
//         art: "globe",
//         href: "#",
//     },
//     {
//         event: "SwarmBot",
//         title: "SwarmBot takes the Best Hardware Project award",
//         quote: "Ten small robots talking to each other and moving as one. That was the moment it all clicked.",
//         name: "Vikram Nair",
//         role: "Hardware Lead",
//         year: "2025",
//         result: "Best Hardware",
//         desc: "A swarm of small robots coordinating over a mesh network, built entirely by student members.",
//         art: "swarm",
//         href: "#",
//     },
//     {
//         event: "Robo Finals",
//         title: "Two members selected for the national robotics finals",
//         quote: "Making the national finals taught us more than any classroom ever could.",
//         name: "Sara Khan",
//         role: "Robotics Team",
//         year: "2024",
//         result: "Top 10",
//         desc: "Two members made it through the national qualifiers and finished in the top ten at the finals.",
//         art: "rocket",
//         href: "#",
//     },
// ];

// /* -------------------------------------------------------------------------- */
// /*  Hover effect: a grid of blocks that fills the card one by one             */
// /*  (deterministic delays — no Math.random, so no hydration mismatch)         */
// /* -------------------------------------------------------------------------- */

// const COLS = 8;
// const ROWS = 9;
// const BLOCK_DELAYS: number[] = [];
// for (let r = 0; r < ROWS; r++) {
//     for (let c = 0; c < COLS; c++) {
//         const wave = (r + c) * 24; // diagonal wave
//         const noise = ((r * 7 + c * 13 + r * c * 3) % 9) * 14; // stable "random" 0-112ms
//         BLOCK_DELAYS.push(wave + noise);
//     }
// }

// /* -------------------------------------------------------------------------- */
// /*  Black & white illustrations (inline SVG, viewBox 300 x 400)               */
// /*  Used when an item has no `image`.                                         */
// /* -------------------------------------------------------------------------- */

// const buildGlobe = () => {
//     const R = 100;
//     let d = "";
//     for (let lat = -84; lat <= 84; lat += 12) {
//         const cl = Math.cos((lat * Math.PI) / 180);
//         const n = Math.max(1, Math.round(cl * 30));
//         for (let k = 0; k < n; k++) {
//             const lon = -90 + (180 * (k + 0.5)) / n;
//             const x = R * cl * Math.sin((lon * Math.PI) / 180);
//             const y = -R * Math.sin((lat * Math.PI) / 180);
//             d += `M${x.toFixed(1)} ${y.toFixed(1)}h0`;
//         }
//     }
//     return d;
// };
// const GLOBE_PATH = buildGlobe();

// const SWARM: [number, number][] = [
//     [150, 122], [100, 82], [200, 80], [62, 132], [238, 130], [92, 180], [208, 178],
//     [150, 60], [128, 172], [172, 168], [40, 86], [262, 92], [150, 208], [108, 126], [194, 128],
// ];
// const SWARM_EDGES: [number, number][] = [];
// SWARM.forEach((p, i) => {
//     SWARM.forEach((q, j) => {
//         const dx = p[0] - q[0];
//         const dy = p[1] - q[1];
//         if (j > i && dx * dx + dy * dy < 64 * 64) SWARM_EDGES.push([i, j]);
//     });
// });

// const Podium = () => (
//     <>
//         <defs>
//             <linearGradient id="pd-beam" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
//                 <stop offset="1" stopColor="#fff" stopOpacity="0" />
//             </linearGradient>
//             <linearGradient id="pd-block" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0" stopColor="#3c3c3c" />
//                 <stop offset="1" stopColor="#0d0d0d" />
//             </linearGradient>
//             <linearGradient id="pd-gold" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0" stopColor="#fff" />
//                 <stop offset="1" stopColor="#8a8a8a" />
//             </linearGradient>
//         </defs>

//         <polygon points="150,0 30,262 270,262" fill="url(#pd-beam)" />

//         <rect x="66" y="176" width="56" height="100" fill="url(#pd-block)" stroke="#5a5a5a" />
//         <rect x="122" y="146" width="56" height="130" fill="url(#pd-block)" stroke="#7a7a7a" />
//         <rect x="178" y="196" width="56" height="80" fill="url(#pd-block)" stroke="#5a5a5a" />
//         <path d="M66 176h56M122 146h56M178 196h56" stroke="#d0d0d0" strokeOpacity="0.7" />
//         <g fill="#8a8a8a" fontSize="20" fontWeight="600" textAnchor="middle">
//             <text x="94" y="206">2</text>
//             <text x="150" y="176" fill="#e5e5e5">1</text>
//             <text x="206" y="226">3</text>
//         </g>

//         <path d="M132 86h36v16c0 14-8 24-18 24s-18-10-18-24z" fill="url(#pd-gold)" />
//         <path d="M132 92c-12 0-16 8-14 15s9 11 16 11" fill="none" stroke="#ddd" strokeWidth="3" strokeLinecap="round" />
//         <path d="M168 92c12 0 16 8 14 15s-9 11-16 11" fill="none" stroke="#ddd" strokeWidth="3" strokeLinecap="round" />
//         <rect x="146" y="126" width="8" height="10" fill="#bbb" />
//         <rect x="136" y="136" width="28" height="8" rx="2" fill="url(#pd-gold)" />

//         <g stroke="#fff" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round">
//             <path d="M70 76v14M63 83h14" />
//             <path d="M232 100v10M227 105h10" />
//             <path d="M208 56v8M204 60h8" />
//             <path d="M92 120v8M88 124h8" />
//         </g>
//         <g fill="#fff" fillOpacity="0.5">
//             <circle cx="52" cy="140" r="1.6" />
//             <circle cx="252" cy="150" r="1.6" />
//             <circle cx="120" cy="50" r="1.4" />
//             <circle cx="186" cy="40" r="1.4" />
//         </g>
//     </>
// );

// const paperLines = [
//     [104, 92, 92], [104, 100, 82], [104, 108, 96], [104, 116, 70], [104, 124, 88],
// ];

// const Paper = () => (
//     <>
//         <g transform="rotate(-9 150 150)">
//             <rect x="92" y="52" width="122" height="166" rx="6" fill="#141414" stroke="#3a3a3a" />
//         </g>
//         <g transform="rotate(7 150 150)">
//             <rect x="88" y="48" width="122" height="166" rx="6" fill="#262626" stroke="#4a4a4a" />
//         </g>

//         <rect x="90" y="46" width="124" height="170" rx="6" fill="#e8e8e8" />
//         <rect x="104" y="62" width="72" height="8" rx="2" fill="#111" />
//         <rect x="104" y="76" width="50" height="4" rx="1" fill="#7a7a7a" />
//         {paperLines.map(([x, y, w]) => (
//             <rect key={y} x={x} y={y} width={w} height="3" rx="1" fill="#9a9a9a" />
//         ))}
//         <rect x="104" y="140" width="96" height="52" fill="#f6f6f6" stroke="#bdbdbd" />
//         <path d="M104 166h96M104 152h96M104 180h96" stroke="#dcdcdc" strokeWidth="0.8" />
//         <polyline
//             points="108,186 124,174 140,178 156,162 172,154 196,146"
//             fill="none"
//             stroke="#111"
//             strokeWidth="2"
//             strokeLinejoin="round"
//             strokeLinecap="round"
//         />
//         <g fill="#111">
//             <circle cx="124" cy="174" r="2" />
//             <circle cx="156" cy="162" r="2" />
//             <circle cx="196" cy="146" r="2" />
//         </g>
//         <path d="M188 46v28l8-6 8 6V46z" fill="#111" />
//     </>
// );

// const Medal = () => (
//     <>
//         <defs>
//             <linearGradient id="md-face" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0" stopColor="#fafafa" />
//                 <stop offset="1" stopColor="#6d6d6d" />
//             </linearGradient>
//         </defs>

//         <g stroke="#fff" strokeOpacity="0.1">
//             {Array.from({ length: 28 }, (_, i) => {
//                 const a = (i * 360) / 28;
//                 const rad = (a * Math.PI) / 180;
//                 // rounded so server and client output identical strings (no hydration mismatch)
//                 const p = (r: number, fn: (x: number) => number) => (150 + fn(rad) * r).toFixed(2);
//                 return (
//                     <line
//                         key={i}
//                         x1={p(40, Math.cos)}
//                         y1={p(40, Math.sin)}
//                         x2={p(190, Math.cos)}
//                         y2={p(190, Math.sin)}
//                     />
//                 );
//             })}
//         </g>
//         <circle cx="150" cy="150" r="84" fill="none" stroke="#fff" strokeOpacity="0.12" />
//         <circle cx="150" cy="150" r="108" fill="none" stroke="#fff" strokeOpacity="0.07" />

//         <path d="M120 44H150L168 124H140Z" fill="#b8b8b8" />
//         <path d="M180 44H150L132 124H160Z" fill="#7d7d7d" />
//         <path d="M120 44H180" stroke="#eee" strokeWidth="2" />

//         <circle cx="150" cy="152" r="48" fill="url(#md-face)" stroke="#e0e0e0" strokeWidth="2" />
//         <circle cx="150" cy="152" r="38" fill="none" stroke="#333" strokeOpacity="0.6" />
//         <polygon
//             points="150,130 155.3,144.7 170.9,145.2 158.6,154.8 162.9,169.8 150,161 137.1,169.8 141.4,154.8 129.1,145.2 144.7,144.7"
//             fill="#222"
//         />

//         <g stroke="#fff" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round">
//             <path d="M64 70v12M58 76h12" />
//             <path d="M238 110v10M233 115h10" />
//         </g>
//     </>
// );

// const Pcb = () => (
//     <>
//         <defs>
//             <linearGradient id="pc-gloss" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0" stopColor="#fff" stopOpacity="0.12" />
//                 <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
//             </linearGradient>
//         </defs>

//         <rect x="34" y="44" width="232" height="196" rx="10" fill="#0b0b0b" stroke="#4d4d4d" />

//         <g fill="none" stroke="#8d8d8d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M52 76H90V108H118" />
//             <path d="M52 100H80V124H118" />
//             <path d="M52 172H80V140H118" />
//             <path d="M52 196H96V156H118" />
//             <path d="M248 76H210V108H182" />
//             <path d="M248 100H220V124H182" />
//             <path d="M248 172H220V140H182" />
//             <path d="M248 196H204V156H182" />
//             <path d="M134 58V96" />
//             <path d="M150 54V96" />
//             <path d="M166 58V96" />
//             <path d="M134 168V214" />
//             <path d="M150 168V220" />
//             <path d="M166 168V214" />
//         </g>

//         <g fill="#0b0b0b" stroke="#bdbdbd" strokeWidth="1.4">
//             {[[52, 76], [52, 100], [52, 172], [52, 196], [248, 76], [248, 100], [248, 172], [248, 196], [134, 58], [150, 54], [166, 58], [134, 214], [150, 220], [166, 214]].map(([x, y]) => (
//                 <circle key={`${x}-${y}`} cx={x} cy={y} r="3.4" />
//             ))}
//         </g>

//         <rect x="118" y="96" width="64" height="72" rx="4" fill="#171717" stroke="#c4c4c4" />
//         <circle cx="128" cy="106" r="3" fill="none" stroke="#9a9a9a" />
//         <text x="150" y="136" textAnchor="middle" fill="#8a8a8a" fontSize="9" letterSpacing="2" fontWeight="600">
//             IEEE
//         </text>
//         <path d="M132 146h36M132 152h24" stroke="#555" />
//         <g fill="#bdbdbd">
//             {[106, 122, 138, 154].map((y) => (
//                 <g key={y}>
//                     <rect x="112" y={y - 2} width="6" height="4" />
//                     <rect x="182" y={y - 2} width="6" height="4" />
//                 </g>
//             ))}
//         </g>

//         <rect x="64" y="126" width="22" height="8" rx="2" fill="#1d1d1d" stroke="#7a7a7a" />
//         <rect x="214" y="140" width="22" height="8" rx="2" fill="#1d1d1d" stroke="#7a7a7a" />
//         <circle cx="232" cy="216" r="8" fill="#1d1d1d" stroke="#7a7a7a" />
//         <circle cx="70" cy="216" r="8" fill="#1d1d1d" stroke="#7a7a7a" />

//         <polygon points="34,44 170,44 34,170" fill="url(#pc-gloss)" />
//     </>
// );

// const GlobeArt = () => (
//     <>
//         <defs>
//             <radialGradient id="gl-shade" cx="0.35" cy="0.3" r="0.9">
//                 <stop offset="0" stopColor="#2b2b2b" />
//                 <stop offset="1" stopColor="#000" />
//             </radialGradient>
//         </defs>

//         <ellipse cx="150" cy="150" rx="132" ry="30" transform="rotate(-20 150 150)" fill="none" stroke="#fff" strokeOpacity="0.2" />

//         <g transform="translate(150 150) scale(0.95)">
//             <circle r="100" fill="url(#gl-shade)" stroke="#fff" strokeOpacity="0.25" />
//             <path d={GLOBE_PATH} stroke="#fff" strokeOpacity="0.65" strokeWidth="1.8" strokeLinecap="round" fill="none" />
//             <path d="M-62 -18Q-8 -112 62 -34" fill="none" stroke="#fff" strokeOpacity="0.8" strokeDasharray="3 4" />
//             <path d="M-62 -18Q0 40 40 44" fill="none" stroke="#fff" strokeOpacity="0.5" strokeDasharray="3 4" />
//             <g fill="#fff">
//                 <circle cx="-62" cy="-18" r="3.4" />
//                 <circle cx="62" cy="-34" r="3.4" />
//                 <circle cx="40" cy="44" r="3.4" />
//             </g>
//             <g fill="none" stroke="#fff" strokeOpacity="0.5">
//                 <circle cx="-62" cy="-18" r="9" />
//                 <circle cx="62" cy="-34" r="9" />
//                 <circle cx="40" cy="44" r="9" />
//             </g>
//         </g>
//     </>
// );

// const Swarm = () => (
//     <>
//         <circle cx="150" cy="122" r="26" fill="none" stroke="#fff" strokeOpacity="0.25" />
//         <circle cx="150" cy="122" r="52" fill="none" stroke="#fff" strokeOpacity="0.12" strokeDasharray="3 5" />

//         <g stroke="#fff" strokeOpacity="0.28" strokeWidth="1">
//             {SWARM_EDGES.map(([i, j]) => (
//                 <line key={`${i}-${j}`} x1={SWARM[i][0]} y1={SWARM[i][1]} x2={SWARM[j][0]} y2={SWARM[j][1]} />
//             ))}
//         </g>

//         {SWARM.map(([x, y], i) => (
//             <g key={i}>
//                 <circle cx={x} cy={y} r={i === 0 ? 7 : 3.6} fill={i === 0 ? "#fff" : "#0a0a0a"} stroke="#fff" strokeWidth="1.4" />
//                 {i !== 0 && <circle cx={x} cy={y} r="8" fill="none" stroke="#fff" strokeOpacity="0.15" />}
//             </g>
//         ))}
//     </>
// );

// const RocketArt = () => (
//     <>
//         <defs>
//             <linearGradient id="rk-body" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0" stopColor="#fff" />
//                 <stop offset="1" stopColor="#7c7c7c" />
//             </linearGradient>
//             <linearGradient id="rk-flame" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0" stopColor="#fff" />
//                 <stop offset="1" stopColor="#fff" stopOpacity="0" />
//             </linearGradient>
//             <linearGradient id="rk-speed" gradientUnits="userSpaceOnUse" x1="0" y1="60" x2="0" y2="270">
//                 <stop offset="0" stopColor="#fff" stopOpacity="0" />
//                 <stop offset="0.5" stopColor="#fff" stopOpacity="0.45" />
//                 <stop offset="1" stopColor="#fff" stopOpacity="0" />
//             </linearGradient>
//         </defs>

//         <circle cx="150" cy="360" r="170" fill="#080808" stroke="#fff" strokeOpacity="0.3" />
//         <circle cx="150" cy="360" r="190" fill="none" stroke="#fff" strokeOpacity="0.1" />

//         <g stroke="url(#rk-speed)" strokeWidth="1.2">
//             <path d="M92 80V210" />
//             <path d="M112 100V236" />
//             <path d="M188 96V232" />
//             <path d="M208 84V206" />
//             <path d="M70 120V200" />
//             <path d="M230 124V204" />
//         </g>

//         <path d="M138 166L150 236L162 166Z" fill="url(#rk-flame)" />
//         <path d="M144 166L150 208L156 166Z" fill="#fff" fillOpacity="0.8" />

//         <path d="M136 134L110 176L136 164Z" fill="#9c9c9c" />
//         <path d="M164 134L190 176L164 164Z" fill="#6b6b6b" />

//         <path d="M150 38C176 70 180 122 166 166H134C120 122 124 70 150 38Z" fill="url(#rk-body)" />
//         <circle cx="150" cy="96" r="12" fill="#111" stroke="#ddd" strokeWidth="2" />
//         <circle cx="146" cy="92" r="3" fill="#fff" fillOpacity="0.6" />
//         <path d="M136 132H164" stroke="#555" strokeWidth="1.5" />

//         <g fill="#fff" fillOpacity="0.6">
//             <circle cx="56" cy="62" r="1.6" />
//             <circle cx="248" cy="70" r="1.6" />
//             <circle cx="90" cy="40" r="1.2" />
//             <circle cx="214" cy="44" r="1.2" />
//             <circle cx="40" cy="150" r="1.2" />
//             <circle cx="262" cy="160" r="1.4" />
//         </g>
//     </>
// );

// const ArtScene = ({ name }: { name: Art }) => {
//     switch (name) {
//         case "podium":
//             return <Podium />;
//         case "paper":
//             return <Paper />;
//         case "medal":
//             return <Medal />;
//         case "pcb":
//             return <Pcb />;
//         case "globe":
//             return <GlobeArt />;
//         case "swarm":
//             return <Swarm />;
//         case "rocket":
//             return <RocketArt />;
//     }
// };

// /* -------------------------------------------------------------------------- */
// /*  Card visual (photo in B&W  OR  black & white illustration)                */
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
//         <div className="absolute inset-0 bg-[#050505]">
//             <svg
//                 viewBox="0 0 300 400"
//                 preserveAspectRatio="xMidYMid slice"
//                 className="absolute inset-0 h-full w-full"
//                 aria-hidden="true"
//             >
//                 <ArtScene name={a.art} />
//             </svg>
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(255,255,255,0.09),transparent_62%)]" />
//         </div>
//     );
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// const Spotlight = () => {
//     const rootRef = useRef<HTMLDivElement | null>(null);
//     const scrollRef = useRef<HTMLDivElement | null>(null);
//     const closeRef = useRef<HTMLButtonElement | null>(null);
//     const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

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
//             { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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

//         el.addEventListener("scroll", schedule, { passive: true });
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
//             if (e.key === "Escape") setSelected(null);
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
//         const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
//         const step = card ? card.offsetWidth + gap : 340;
//         el.scrollBy({ left: dir * step, behavior: "smooth" });
//     };

//     /* ---- mouse drag (touch uses native swipe) ---- */
//     const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
//         if (e.pointerType !== "mouse") return;
//         const el = scrollRef.current;
//         if (!el) return;
//         drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
//     };

//     const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
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
//         if (d.moved) el.scrollLeft = d.startLeft - dx;
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

//     const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
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
//                     @keyframes achRise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
//                     @keyframes achFade { from { opacity: 0; } to { opacity: 1; } }
//                     @keyframes achPop  { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: none; } }

//                     .ach-rv { opacity: 0; }
//                     .ach-in .ach-rv {
//                         animation: achRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
//                         animation-delay: calc(var(--i, 0) * 90ms + 100ms);
//                     }

//                    /* ---- hover: blocks fill the card one by one, then the quote fades in ---- */
// .ach-blk {
//     transform: scale(0);
//     transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
//     transition-delay: var(--bd, 0ms);
// }
// .ach-card:hover .ach-blk,
// .ach-card:focus-within .ach-blk { transform: scale(1.04); }

// .ach-quote {
//     opacity: 0;
//     transform: translateY(10px);
//     transition: opacity 0.2s ease, transform 0.2s ease;
// }
// .ach-card:hover .ach-quote,
// .ach-card:focus-within .ach-quote {
//     opacity: 1;
//     transform: none;
//     transition: opacity 0.4s ease 0.45s, transform 0.4s ease 0.45s;
// }

//                     .ach-modal-bg { animation: achFade 0.25s ease both; }
//                     .ach-modal-card { animation: achPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
//                     .ach-scroll { scrollbar-width: none; -ms-overflow-style: none; }
//                     .ach-scroll::-webkit-scrollbar { display: none; }

//                     @media (prefers-reduced-motion: reduce) {
//                         .ach-rv { opacity: 1 !important; }
//                         .ach-in .ach-rv, .ach-modal-bg, .ach-modal-card { animation: none !important; }
//                         .ach-blk, .ach-quote { transition: none !important; }
//                     }
//                 `}
//             </style>

//             <section className="relative w-full overflow-hidden bg-black pt-24 pb-14 text-white">
//                 {/* vertical guide lines (same as hero) — z-20 so the carousel never hides them */}
//                 <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
//                     <div className="w-px bg-zinc-800"></div>
//                     <div className="w-px bg-zinc-800"></div>
//                 </div>

//                 <div
//                     ref={rootRef}
//                     className={`relative z-10 px-8 md:px-20 lg:px-28 xl:px-36 ${shown ? "ach-in" : ""}`}
//                 >
//                     {/* ===== HEADER (Dovetail style) ===== */}
//                     <div className="mb-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
//                         <div className="ach-rv max-w-2xl" style={{ "--i": 0 } as CSSProperties}>
//                             <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
//                                 <span className="flex flex-wrap items-center gap-x-4">
//                                     The best
//                                     <span className="inline-flex items-center gap-3 font-light text-zinc-500">
//                                         <span>[</span>
//                                         <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-bold tracking-tight text-black sm:h-12 sm:w-12 sm:text-xs md:h-14 md:w-14 md:text-sm">
//                                             IEEE
//                                         </span>
//                                         <span>]</span>
//                                     </span>
//                                 </span>
//                                 <span className="block">never stop building</span>
//                             </h2>

//                             <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
//                                 See how our members turned late nights, labs, and big ideas into awards, papers, and
//                                 projects, and what they built because of it.
//                             </p>

//                             <Link
//                                 href="#"
//                                 className="group/all mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-zinc-300"
//                             >
//                                 Discover all achievements
//                                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/all:translate-x-1" />
//                             </Link>
//                         </div>

//                         <div className="ach-rv flex shrink-0 gap-2" style={{ "--i": 1 } as CSSProperties}>
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

//                     {/* ===== CAROUSEL — stays between the two guide lines ===== */}
//                     <div className="relative -mx-4">
//                         <div
//                             className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-black to-transparent transition-opacity duration-300 ${
//                                 canLeft ? "opacity-100" : "opacity-0"
//                             }`}
//                         />
//                         <div
//                             className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l from-black to-transparent transition-opacity duration-300 ${
//                                 canRight ? "opacity-100" : "opacity-0"
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
//                                     style={{ "--i": i + 2 } as CSSProperties}
//                                 >
//                                     <Link href={a.href ?? "#"} draggable={false} className="block">
//                                         {/* ---- card face ---- */}
//                                         <div className="relative aspect-10/11 overflow-hidden rounded-xl border border-zinc-800 bg-black">
//                                             <div className="absolute inset-0">
//                                                 <CardVisual a={a} />
//                                             </div>

//                                             {/* readable bottom + "logo" text */}
//                                             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
//                                             <p className="absolute bottom-6 left-6 text-3xl font-semibold tracking-tight text-white">
//                                                 {a.event}
//                                             </p>

//                                             {/* hover: blocks fill the card gradually */}
//                                             <div
//                                                 aria-hidden="true"
//                                                 className="pointer-events-none absolute inset-0 z-20 grid grid-cols-8 grid-rows-9"
//                                             >
//                                                 {BLOCK_DELAYS.map((d, k) => (
//                                                     <span
//                                                         key={k}
//                                                         className="ach-blk bg-[#1f1f1f]"
//                                                         style={{ "--bd": `${d}ms` } as CSSProperties}
//                                                     />
//                                                 ))}
//                                             </div>

//                                             {/* hover: quote card content */}
//                                             <div className="ach-quote pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-7 text-white">
//                                                 <p className="line-clamp-8 text-[19px] leading-snug">
//                                                     &ldquo;{a.quote}&rdquo;
//                                                 </p>
//                                                 <div>
//                                                     <p className="text-[15px] font-medium">{a.name}</p>
//                                                     <p className="mt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">
//                                                         {a.role}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* ---- text + read story under the card ---- */}
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

//                                     {/* expand button — top-right of the card */}
//                                     <button
//                                         type="button"
//                                         onClick={() => setSelected(a)}
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
//                     <div className="ach-modal-bg absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelected(null)} />

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
//                                     {selected.year} · {selected.result}
//                                 </p>
//                                 <h3 className="mt-3 text-2xl leading-snug font-semibold text-white">{selected.title}</h3>
//                                 <p className="mt-4 text-sm leading-relaxed text-zinc-400">
//                                     {selected.desc ?? "More details about this achievement will be added soon."}
//                                 </p>

//                                 <div className="mt-6 rounded-xl border border-zinc-800 bg-[#1a1a1a] p-5">
//                                     <p className="text-[15px] leading-snug text-zinc-200">&ldquo;{selected.quote}&rdquo;</p>
//                                     <p className="mt-4 text-sm font-medium text-white">{selected.name}</p>
//                                     <p className="mt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">{selected.role}</p>
//                                 </div>
//                             </div>

//                             <Link
//                                 href={selected.href ?? "#"}
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
//                 <div className="w-full border-t border-zinc-800"></div>
//             </SectionWrapper>
//         </>
//     );
// };

// export default Spotlight;




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
import { useCallback, useEffect, useRef, useState } from "react";
import type {
    CSSProperties,
    MouseEvent as ReactMouseEvent,
    PointerEvent as ReactPointerEvent,
} from "react";
import SectionWrapper from "../ui/SectionWrapper";

type Achievement = {
    event: string;
    title: string;
    quote: string;
    name: string;
    role: string;
    year: string;
    result: string;
    desc?: string;
    image?: string;
    href?: string;
};

const READ_MORE_URL = "https://edu.ieee.org/in-hit/";

const achievements: Achievement[] = [
    {
        event: "CircuitHack",
        title: "Team Volt wins the 24-hour CircuitHack with a self-balancing robot",
        quote:
            "We had 24 hours, one bench and almost no sleep. Watching the robot balance on stage made every hour worth it.",
        name: "Aarav Mehta",
        role: "Team Lead, Team Volt",
        year: "2025",
        result: "1st Place",
        desc:
            "Out of 60+ teams, Team Volt built and demoed a self-balancing robot in 24 hours and took home the top prize.",
        image: "/events/2026_event1.jpg",
        href: READ_MORE_URL,
    },
    {
        event: "IEEE Conference",
        title: "Low-power IoT research paper presented at an IEEE conference",
        quote:
            "Our first paper felt impossible until our seniors walked us through every single review round.",
        name: "Riya Sharma",
        role: "Research Lead",
        year: "2025",
        result: "Paper Presented",
        desc:
            "Our members presented their first research paper on low-power IoT sensing, mentored by senior students and faculty.",
        image: "/events/2026_event2.jpg",
        href: READ_MORE_URL,
    },
    {
        event: "Branch Award",
        title: "Our student branch is recognised for outstanding activity",
        quote:
            "Every event and every late-night lab session added up. This award belongs to the whole branch.",
        name: "Dr. Anil Rao",
        role: "Branch Counsellor",
        year: "2024",
        result: "Best Branch",
        desc:
            "The branch was recognised for consistent events, member growth, and technical output across the year.",
        image: "/spotlight/spotlight_1.png",
        href: READ_MORE_URL,
    },
    {
        event: "PCB Workshop",
        title: "200+ students join our hands-on PCB design workshop",
        quote:
            "I had never held a soldering iron before. By the end of the day I had a working board on my desk.",
        name: "Kabir Das",
        role: "First-year member",
        year: "2025",
        result: "200+ Participants",
        desc:
            "A two-day, hands-on workshop that took first-years from schematic to a fabricated board.",
        image: "/spotlight/spotlight_2.jpg",
        href: READ_MORE_URL,
    },
    {
        event: "IEEE Global",
        title: "Our chapter joins the IEEE global student network",
        quote:
            "Being part of the global network opened doors to labs and mentors we never had access to.",
        name: "Neha Iyer",
        role: "Branch Chairperson",
        year: "2024",
        result: "Connected",
        desc:
            "Our branch is now part of the worldwide IEEE student network, sharing resources, labs, and events.",
        image: "/events/2026_event3.jpg",
        href: READ_MORE_URL,
    },
    {
        event: "SwarmBot",
        title: "SwarmBot takes the Best Hardware Project award",
        quote:
            "Ten small robots talking to each other and moving as one. That was the moment it all clicked.",
        name: "Vikram Nair",
        role: "Hardware Lead",
        year: "2025",
        result: "Best Hardware",
        desc:
            "A swarm of small robots coordinating over a mesh network, built entirely by student members.",
        image: "/events/2026_event4.jpg",
        href: READ_MORE_URL,
    },
    {
        event: "Robo Finals",
        title: "Two members selected for the national robotics finals",
        quote:
            "Making the national finals taught us more than any classroom ever could.",
        name: "Sara Khan",
        role: "Robotics Team",
        year: "2024",
        result: "Top 10",
        desc:
            "Two members made it through the national qualifiers and finished in the top ten at the finals.",
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
                loading="lazy"
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



const Spotlight = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const rootRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const closeRef = useRef<HTMLButtonElement | null>(null);

    const drag = useRef({
        active: false,
        startX: 0,
        startLeft: 0,
        moved: false,
    });

    const [shown, setShown] = useState(false);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);
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

    /* ---- arrows state ---- */

    const update = useCallback(() => {
        const el = scrollRef.current;

        if (!el) return;

        const max = el.scrollWidth - el.clientWidth;

        setCanLeft(el.scrollLeft > 4);
        setCanRight(el.scrollLeft < max - 4);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;

        if (!el) return;

        let raf = 0;

        const schedule = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        el.addEventListener("scroll", schedule, {
            passive: true,
        });

        const ro = new ResizeObserver(schedule);

        ro.observe(el);
        schedule();

        return () => {
            cancelAnimationFrame(raf);
            el.removeEventListener("scroll", schedule);
            ro.disconnect();
        };
    }, [update]);

    /* ---- expand popup: Esc to close, lock page scroll ---- */

    useEffect(() => {
        if (!selected) return;

        const prev = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelected(null);
            }
        };

        window.addEventListener("keydown", onKey);

        closeRef.current?.focus();

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [selected]);

    /* ---- arrow buttons: move exactly one card ---- */

    const scrollByCard = (dir: 1 | -1) => {
        const el = scrollRef.current;

        if (!el) return;

        const card = el.querySelector<HTMLElement>("[data-card]");

        const gap =
            parseFloat(getComputedStyle(el).columnGap) || 24;

        const step = card
            ? card.offsetWidth + gap
            : 340;

        el.scrollBy({
            left: dir * step,
            behavior: "smooth",
        });
    };

    /* ---- mouse drag (touch uses native swipe) ---- */

    const onPointerDown = (
        e: ReactPointerEvent<HTMLDivElement>
    ) => {
        if (e.pointerType !== "mouse") return;

        const el = scrollRef.current;

        if (!el) return;

        drag.current = {
            active: true,
            startX: e.clientX,
            startLeft: el.scrollLeft,
            moved: false,
        };
    };

    const onPointerMove = (
        e: ReactPointerEvent<HTMLDivElement>
    ) => {
        const d = drag.current;
        const el = scrollRef.current;

        if (!d.active || !el) return;

        const dx = e.clientX - d.startX;

        if (!d.moved && Math.abs(dx) > 5) {
            d.moved = true;

            el.style.scrollSnapType = "none";
            el.style.cursor = "grabbing";

            el.setPointerCapture(e.pointerId);
        }

        if (d.moved) {
            el.scrollLeft = d.startLeft - dx;
        }
    };

    const endDrag = () => {
        const d = drag.current;
        const el = scrollRef.current;

        if (!d.active) return;

        d.active = false;

        if (el && d.moved) {
            el.style.scrollSnapType = "";
            el.style.cursor = "";
        }

        setTimeout(() => {
            d.moved = false;
        }, 60);
    };

    const onClickCapture = (
        e: ReactMouseEvent<HTMLDivElement>
    ) => {
        if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const arrowBtn =
        "flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-black text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:text-zinc-700 disabled:hover:border-zinc-800 disabled:hover:text-zinc-700";

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

                    .ach-modal-bg {
                        animation: achFade 0.25s ease both;
                    }

                    .ach-modal-card {
                        animation: achPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
                    }

                    .ach-scroll {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }

                    .ach-scroll::-webkit-scrollbar {
                        display: none;
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
                        .ach-quote {
                            transition: none !important;
                        }
                    }
                `}
            </style>

            <section
                ref={sectionRef}
                className="relative w-full overflow-hidden bg-black pt-24 pb-14 text-white"
            >
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
                            style={
                                {
                                    "--i": 0,
                                } as CSSProperties
                            }
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
                                className="group/all mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-zinc-300"
                            >
                                View all chapter milestones

                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/all:translate-x-1" />
                            </Link>
                        </div>

                        <div
                            className="ach-rv flex shrink-0 gap-2"
                            style={
                                {
                                    "--i": 1,
                                } as CSSProperties
                            }
                        >
                            <button
                                type="button"
                                onClick={() => scrollByCard(-1)}
                                disabled={!canLeft}
                                aria-label="Previous achievements"
                                className={arrowBtn}
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollByCard(1)}
                                disabled={!canRight}
                                aria-label="Next achievements"
                                className={arrowBtn}
                            >
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* ===== CAROUSEL ===== */}

                    <div className="relative -mx-4">
                        <div
                            className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-black to-transparent transition-opacity duration-300 ${
                                canLeft
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />

                        <div
                            className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l from-black to-transparent transition-opacity duration-300 ${
                                canRight
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />

                        <div
                            ref={scrollRef}
                            role="region"
                            aria-label="Achievements"
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={endDrag}
                            onPointerCancel={endDrag}
                            onClickCapture={onClickCapture}
                            onDragStart={(e) => e.preventDefault()}
                            className="ach-scroll flex cursor-grab snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-2 select-none"
                        >
                            {achievements.map((a, i) => (
                                <div
                                    key={a.event}
                                    data-card
                                    className="ach-rv ach-card group relative w-72 shrink-0 snap-start sm:w-80 lg:w-88 xl:w-96"
                                    style={
                                        {
                                            "--i": i + 2,
                                        } as CSSProperties
                                    }
                                >
                                    <Link
                                        href={
                                            a.href ??
                                            READ_MORE_URL
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        draggable={false}
                                        className="block"
                                    >
                                        {/* ---- card face ---- */}

                                        <div className="ach-hover-zone relative aspect-10/11 overflow-hidden rounded-xl border border-zinc-800 bg-black">
                                            <div className="absolute inset-0">
                                                <CardVisual a={a} />
                                            </div>

                                            {/* readable bottom */}

                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                                            <p className="absolute bottom-6 left-6 text-3xl font-semibold tracking-tight text-white">
                                                {a.event}
                                            </p>

                                            {/* hover blocks */}

                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 z-20 grid grid-cols-8 grid-rows-9"
                                            >
                                                {BLOCK_DELAYS.map(
                                                    (d, k) => (
                                                        <span
                                                            key={k}
                                                            className="ach-blk bg-[#1f1f1f]"
                                                            style={
                                                                {
                                                                    "--bd": `${d}ms`,
                                                                } as CSSProperties
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>

                                            {/* quote */}

                                            <div className="ach-quote pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-7 text-white">
                                                <p className="line-clamp-8 text-[19px] leading-snug">
                                                    &ldquo;{a.quote}&rdquo;
                                                </p>

                                                <div>
                                                    <p className="text-[15px] font-medium">
                                                        {a.name}
                                                    </p>

                                                    <p className="mt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">
                                                        {a.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ---- text + read story ---- */}

                                        <div className="pt-6">
                                            <h3 className="text-[17px] leading-snug text-white">
                                                {a.title}{" "}
                                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                                                    ↘
                                                </span>
                                            </h3>

                                            <span className="mt-4 inline-flex items-center gap-1 rounded-lg border border-zinc-800 px-3.5 py-2 text-sm font-medium text-zinc-300 transition-colors group-hover:border-zinc-500 group-hover:text-white">
                                                Read story

                                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </span>
                                        </div>
                                    </Link>

                                    {/* expand button */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelected(a)
                                        }
                                        aria-label={`Expand ${a.event}`}
                                        className="absolute top-4 right-4 z-40 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                                    >
                                        <Maximize2 className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== EXPAND POPUP ===== */}

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selected.event}
                >
                    <div
                        className="ach-modal-bg absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    />

                    <div className="ach-modal-card relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#0a0a0a] md:grid-cols-2">
                        {/* visual side */}

                        <div className="relative h-72 overflow-hidden bg-black md:h-auto md:min-h-130">
                            <CardVisual a={selected} />

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black via-black/70 to-transparent" />

                            <p className="absolute right-6 bottom-6 left-6 text-3xl font-semibold tracking-tight text-white">
                                {selected.event}
                            </p>
                        </div>

                        {/* details side */}

                        <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
                            <div>
                                <p className="text-xs tracking-widest text-zinc-500">
                                    {selected.year} ·{" "}
                                    {selected.result}
                                </p>

                                <h3 className="mt-3 text-2xl leading-snug font-semibold text-white">
                                    {selected.title}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                    {selected.desc ??
                                        "More details about this achievement will be added soon."}
                                </p>

                                <div className="mt-6 rounded-xl border border-zinc-800 bg-[#1a1a1a] p-5">
                                    <p className="text-[15px] leading-snug text-zinc-200">
                                        &ldquo;{selected.quote}&rdquo;
                                    </p>

                                    <p className="mt-4 text-sm font-medium text-white">
                                        {selected.name}
                                    </p>

                                    <p className="mt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">
                                        {selected.role}
                                    </p>
                                </div>
                            </div>

                            <Link
                                href={
                                    selected.href ??
                                    READ_MORE_URL
                                }
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