// import SectionWrapper from "../ui/SectionWrapper";

// const bookFeature = {
//     category: "Book of the week",
//     title: "Entrepreneurship starts with ideas.",
//     bookTitle: "Revolution in the Valley: The Insanely Great Story of How the Mac Was Made",
//     author: "Andy Hertzfeld",
//     desc: "Most people today have never experienced what computing was like before the Graphical User Interface — an innovation that originated in 1979, when Steve Jobs sequestered 15 engineers to build a radically intuitive computer that anyone could use. Hertzfeld, an original member of that group, details the technical challenges and personal toll required to bring the Macintosh to life. The book captures the culture of a small group of people who built something that would permanently change how humans relate to technology.",
//     footerText: "For more ideas on economic progress and technological advancement, see our in-house publications:",
//     links: [
//         { label: "Lets connect", href: "#" },
//         { label: "Join Membership", href: "#" },
//     ]
// };

// const Membership = () => {
//     return (
//         <>
//             <section className="relative text-white pt-24 pb-16 w-full bg-black overflow-hidden">

//                 {/* full height side lines — matches global page lines */}
//                 <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
//                     <div className="w-px bg-zinc-800"></div>
//                     <div className="w-px bg-zinc-800"></div>
//                 </div>

//                 <div className="relative z-10 px-8 md:px-20 lg:px-28 xl:px-36">

//                     <div className="max-w-2xl mb-12">
//                         <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">{bookFeature.category}</p>
//                         <h2 className="text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
//                             <span className="text-white">{bookFeature.title}</span>
//                         </h2>
//                     </div>

//                     <div className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] overflow-hidden flex flex-col lg:flex-row items-stretch">
                        
//                         <div className="lg:w-1/2 bg-[#581c25] p-10 md:p-16 flex items-center justify-center relative overflow-hidden">
//                             <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent pointer-events-none"></div>
//                             <div className="relative z-10 shadow-2xl rounded-lg overflow-hidden max-w-70 w-full transform transition-transform hover:scale-105 duration-300">
//                                 <div className="bg-linear-to-b from-[#a31d24] to-[#681217] p-6 text-white flex flex-col justify-between aspect-3/4 border border-red-900/50 shadow-inner">
//                                     <div className="font-bold tracking-tighter text-2xl uppercase leading-none">
//                                         REVOLUTION <span className="text-xs block font-normal tracking-normal text-red-200 mt-1">in the VALLEY</span>
//                                     </div>
//                                     <div className="my-auto py-4 text-center">
//                                         <div className="text-[10px] uppercase tracking-widest text-red-300 mb-1">Andy Hertzfeld</div>
//                                         <div className="text-xs font-semibold">The Insanely Great Story of</div>
//                                         <div className="text-lg font-black tracking-tight leading-tight mt-1">How The Mac Was Made</div>
//                                     </div>
//                                     <div className="flex justify-between items-end text-[9px] text-red-300 uppercase tracking-wider">
//                                         <span>O&apos;REILLY</span>
//                                         <span>Foreword by Steve Wozniak</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-[#0e1013]">
//                             <div>
//                                 <div className="flex justify-between items-start mb-6">
//                                     <div>
//                                         <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-white mb-2">
//                                             {bookFeature.bookTitle}
//                                         </h3>
//                                         <p className="text-zinc-400 font-medium text-base">{bookFeature.author}</p>
//                                     </div>
//                                     <div className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center shrink-0 text-zinc-300">
//                                         <span className="text-xs font-serif italic">S</span>
//                                     </div>
//                                 </div>

//                                 <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8">
//                                     {bookFeature.desc}
//                                 </p>
//                             </div>

//                             <div>
//                                 <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
//                                     {bookFeature.footerText}
//                                 </p>
//                                 <div className="flex flex-wrap gap-3">
//                                     {bookFeature.links.map((link, idx) => (
//                                         <a 
//                                             key={idx} 
//                                             href={link.href}
//                                             className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-colors"
//                                         >
//                                             <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
//                                             {link.label}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             <div className="w-full h-px bg-zinc-700"></div> 
//         </>
//     );
// };

// export default Membership;



// "use client";

// import { ArrowRight, Check, Wifi } from "lucide-react";

// const membershipData = {
//     category: "Membership",
//     title: "One membership. Every opportunity.",
//     cardOrg: "IEEE HIT STUDENT BRANCH",
//     cardHolder: "Your Name Here",
//     cardId: "IEEE-HIT-2026-0483",
//     cardSince: "Member since 2026",
//     heading: "Join the branch driving hands-on engineering at HIT",
//     desc: "Membership gets you priority seats at workshops and hackathons, mentorship from seniors and alumni, and a certificate trail that follows every event you attend — all in one member profile.",
//     benefits: [
//         "Priority registration for every workshop & hackathon",
//         "Verified certificates for events and completed projects",
//         "Direct mentorship from seniors, alumni & faculty",
//         "Access to the member resource library & past papers",
//     ],
//     links: [
//         { label: "Join Membership", href: "#", primary: true },
//         { label: "Learn more", href: "#", primary: false },
//     ],
// };

// /* a small repeating dot pattern used as the "QR-ish" decoration on the card */
// const QrPattern = () => (
//     <svg viewBox="0 0 64 64" className="h-14 w-14 opacity-80" aria-hidden="true">
//         <rect width="64" height="64" rx="6" fill="none" />
//         {Array.from({ length: 8 }).map((_, row) =>
//             Array.from({ length: 8 }).map((_, col) => {
//                 const seed = (row * 13 + col * 7 + row * col) % 5;
//                 if (seed === 0) return null;
//                 return (
//                     <rect
//                         key={`${row}-${col}`}
//                         x={col * 8}
//                         y={row * 8}
//                         width="6"
//                         height="6"
//                         rx="1"
//                         fill="#fff"
//                         fillOpacity={seed > 2 ? 0.9 : 0.35}
//                     />
//                 );
//             })
//         )}
//     </svg>
// );

// const Membership = () => {
//     return (
//         <>
//             <section className="relative text-white pt-24 pb-16 w-full bg-black overflow-hidden">

//                 {/* full height side lines — matches global page lines */}
//                 <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
//                     <div className="w-px bg-zinc-800"></div>
//                     <div className="w-px bg-zinc-800"></div>
//                 </div>

//                 <div className="relative z-10 px-8 md:px-20 lg:px-28 xl:px-36">

//                     <div className="max-w-2xl mb-12">
//                         <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">{membershipData.category}</p>
//                         <h2 className="text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
//                             <span className="text-white">{membershipData.title}</span>
//                         </h2>
//                     </div>

//                     <div className="relative border border-zinc-800 rounded-2xl bg-[#0e1013] overflow-hidden flex flex-col lg:flex-row items-stretch">

//                         {/* ===== LEFT: digital membership card ===== */}
//                         <div className="lg:w-1/2 relative flex items-center justify-center overflow-hidden bg-black p-10 md:p-16">
//                             {/* ambient dot-grid + glow, consistent with the rest of the site */}
//                             <div
//                                 className="pointer-events-none absolute inset-0 opacity-60"
//                                 style={{
//                                     backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
//                                     backgroundSize: "18px 18px",
//                                     maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
//                                     WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
//                                 }}
//                             />
//                             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.10),transparent_65%)]" />

//                             {/* the card itself */}
//                             <div className="relative z-10 w-full max-w-90 -rotate-2 transition-transform duration-500 hover:rotate-0">
//                                 <div className="relative aspect-8/5 w-full overflow-hidden rounded-2xl border border-zinc-700/80 bg-linear-to-br from-[#1c1c1f] via-[#0f0f11] to-black p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">

//                                     {/* holographic sheen sweep */}
//                                     <div className="pointer-events-none absolute -inset-1/3 rotate-12 bg-linear-to-r from-transparent via-white/10 to-transparent" />

//                                     {/* top row: brand + tap-to-pay icon */}
//                                     <div className="relative flex items-start justify-between">
//                                         <div>
//                                             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[11px] font-black tracking-tighter text-black">
//                                                 HIT
//                                             </div>
//                                             <p className="mt-2.5 text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
//                                                 {membershipData.cardOrg}
//                                             </p>
//                                         </div>
//                                         <Wifi className="h-5 w-5 rotate-90 text-zinc-500" />
//                                     </div>

//                                     {/* chip */}
//                                     <div className="relative mt-7 h-8 w-11 rounded-md border border-yellow-100/20 bg-linear-to-br from-zinc-300 via-zinc-500 to-zinc-700">
//                                         <div className="absolute inset-1 rounded-sm border border-black/20" />
//                                     </div>

//                                     {/* holder + id */}
//                                     <div className="relative mt-6">
//                                         <p className="text-[10px] tracking-[0.14em] text-zinc-500 uppercase">Member</p>
//                                         <p className="mt-1 text-lg font-semibold tracking-tight text-white">{membershipData.cardHolder}</p>
//                                     </div>

//                                     {/* bottom row: id / qr / since */}
//                                     <div className="relative mt-auto flex items-end justify-between pt-6">
//                                         <div>
//                                             <p className="font-mono text-[11px] tracking-wider text-zinc-400">{membershipData.cardId}</p>
//                                             <p className="mt-1 text-[10px] text-zinc-500">{membershipData.cardSince}</p>
//                                         </div>
//                                         <QrPattern />
//                                     </div>
//                                 </div>

//                                 {/* stacked ghost card behind, for depth */}
//                                 <div className="absolute inset-x-4 -bottom-3 -z-10 aspect-8/5 rounded-2xl border border-zinc-800 bg-zinc-900/60" />
//                             </div>
//                         </div>

//                         {/* ===== RIGHT: benefits + CTA ===== */}
//                         <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-[#0e1013]">
//                             <div>
//                                 <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-white mb-4">
//                                     {membershipData.heading}
//                                 </h3>

//                                 <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8">
//                                     {membershipData.desc}
//                                 </p>

//                                 <ul className="space-y-3.5">
//                                     {membershipData.benefits.map((b, idx) => (
//                                         <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
//                                             <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
//                                                 <Check className="h-3 w-3 text-white" />
//                                             </span>
//                                             {b}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <div className="mt-10">
//                                 <div className="flex flex-wrap gap-3">
//                                     {membershipData.links.map((link, idx) => (
//                                         <a
//                                             key={idx}
//                                             href={link.href}
//                                             className={
//                                                 link.primary
//                                                     ? "group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
//                                                     : "inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
//                                             }
//                                         >
//                                             {link.label}
//                                             {link.primary && (
//                                                 <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
//                                             )}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             <div className="w-full h-px bg-zinc-700"></div>
//         </>
//     );
// };

// export default Membership;






"use client";

import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";


const IMAGE_SRC = "/heroparallex/N.jpg";

const communityData = {
    category: "Community",
    title: "Build, learn, and grow together.",
    cardOrg: "IEEE HIT STUDENT BRANCH",
    cardTag: "COMMUNITY",
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
        { label: "Join our community", href: "#", primary: true },
        { label: "Explore events", href: "#", primary: false },
    ],
};

const Community = () => {
    return (
        <>
            <section className="relative text-white pt-24 pb-16 w-full bg-black overflow-hidden">

                {/* full height side lines — matches global page lines */}
                <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
                    <div className="w-px bg-zinc-800"></div>
                    <div className="w-px bg-zinc-800"></div>
                </div>

                <div className="relative z-10 px-8 md:px-20 lg:px-28 xl:px-36">

                    <div className="max-w-2xl mb-12">
                        <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">{communityData.category}</p>
                        <h2 className="text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
                            <span className="text-white">{communityData.title}</span>
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
                                        <span className="text-xs block font-normal tracking-normal text-red-200 mt-1">
                                            {communityData.cardTag}
                                        </span>
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