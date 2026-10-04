
// "use client";

// import React from "react";
// import SectionWrapper from "@/components/ui/SectionWrapper";
// import { Globe } from "@/components/ui/Globe";
// // import Link from "next/link";
// import Navbar from "./Navbar";

// // ---------------------------------------------------------------------------
// // Reel / video card settings
// // Later: put your video in /public/videos/reel.mp4 and set
// //   VIDEO_SRC = "/videos/reel.mp4"
// // Optional thumbnail: VIDEO_POSTER = "/videos/reel-poster.jpg"
// // While VIDEO_SRC is empty, a fake black thumbnail with a play button shows.
// // ---------------------------------------------------------------------------
// const VIDEO_SRC = "";
// const VIDEO_POSTER = "";

// const Hero = () => {
//     // const [mobileOpen, setMobileOpen] = React.useState(false);

//     const marqueeTexts = [
//         "INNOVATING - EDUCATING - EMPOWERING",
//         "INNOVATING - EDUCATING - EMPOWERING",
//         "INNOVATING - EDUCATING - EMPOWERING",
//         "INNOVATING - EDUCATING - EMPOWERING",
//     ];

//     return (
//         <>
//             <style>
//                 {`
//                     @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
//                     *{
//                         font-family: "Poppins", sans-serif;
//                     }
//                     .marquee-inner {
//                         animation: marqueeScroll 30s linear infinite;
//                     }
//                     @keyframes marqueeScroll {
//                         0% { transform: translateX(0%); }
//                         100% { transform: translateX(-50%); }
//                     }
//                 `}
//             </style>
//             <header className='flex flex-col items-center bg-black text-white relative overflow-hidden w-full'>

//                 {/* <nav className="flex flex-col items-center w-full border-b border-zinc-800 z-30 bg-black">
//                     <SectionWrapper className="flex items-center justify-between p-4 md:py-4">
//                         <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg md:text-xl tracking-wider">
//                             IEEE HIT SB
//                         </Link>
//                         <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}>
//                             <a href="#" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Home</a>
//                             <Link href="/events" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Events</Link>
//                             <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-white/80">About</Link>
//                             {/* <a href="#" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Pricing</a> */}
//                             {/* <Link href="/members" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Members</Link>
//                             <Link href="/gallery" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Gallery</Link> */} 

//                             {/* <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M18 6 6 18" /><path d="m6 6 12 12" />
//                                 </svg>
//                             </button>
//                         </div> */}
//                         {/* <button className="hidden md:flex items-center gap-1.5 bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424] px-4 py-2.5 rounded-lg text-sm transition cursor-pointer hover:border-zinc-700">
//                             Sign in
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                         </button> */}
//                         {/* <Link
//     href="/login"
//     className="hidden md:flex items-center gap-1.5 bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424] px-4 py-2.5 rounded-lg text-sm transition cursor-pointer hover:border-zinc-700"
// >
//     Sign in

//     <svg
//         width="20"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <path
//             d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833"
//             stroke="#fff"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </svg>
// </Link> */}


//                         {/* <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-gray-50 p-2 rounded-md aspect-square font-medium transition">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
//                             </svg>
//                         </button> */}
//                     {/* </SectionWrapper>
//                 </nav> */}
//                 <Navbar/>

//                 {/* Vertical margin guide lines */}
//                 <div className="absolute top-18 left-0 right-0 bottom-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-20">
//                     <div className="w-px h-full bg-zinc-800/80"></div>
//                     <div className="w-px h-full bg-zinc-800/80"></div>
//                 </div>

//                 {/* ===== GLOBE — pushed a bit further down ===== */}
//                 <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
//                     <div className="w-full h-full flex items-start justify-end translate-x-[15%] sm:translate-x-[10%] md:translate-x-[5%] translate-y-[16%] sm:translate-y-[18%] md:translate-y-[20%]">
//                         <Globe />
//                     </div>
//                 </div>

//                 {/* ===== TWO SEPARATE TEXT DIVS: heading top-left, paragraph+buttons bottom-left ===== */}
//                 <div className="relative z-10 w-full flex flex-col justify-between min-h-[70vh] sm:min-h-[75vh] py-6 sm:py-8">

//                     {/* DIV 1 — heading top-left  +  reel/video card top-right (parallel to heading) */}
//                     <div className="top-section w-full pt-2 sm:pt-4">
//                         <SectionWrapper className="w-full">
//                             <div className="flex items-start justify-between gap-6 pl-10 sm:pl-14 md:pl-16 pr-4 sm:pr-14 md:pr-16">

//                                 {/* Heading (unchanged) */}
//                                 <div className="flex flex-col items-start max-w-5xl">
//                                     <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] m-0">
//                                         A new generation
//                                     </div>
//                                     <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] m-0 mt-2">
//                                         of engineers.
//                                     </div>
//                                 </div>

//                                 {/* Reel / video card — top-right corner (hidden on very small screens) */}
//                                 <div className="reel-card hidden sm:block shrink-0 w-44 md:w-56 lg:w-64 pointer-events-auto">
//                                     <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-[0_0_40px_rgba(255,255,255,0.04)]">
//                                         {VIDEO_SRC ? (
//                                             <video
//                                                 className="absolute inset-0 h-full w-full object-cover"
//                                                 src={VIDEO_SRC}
//                                                 poster={VIDEO_POSTER || undefined}
//                                                 autoPlay
//                                                 muted
//                                                 loop
//                                                 playsInline
//                                                 preload="metadata"
//                                             />
//                                         ) : (
//                                             <>
//                                                 {/* fake thumbnail */}
//                                                 <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-black to-zinc-950" />

//                                                 {/* play button */}
//                                                 <div className="absolute inset-0 flex items-center justify-center">
//                                                     <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
//                                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
//                                                             <path d="M8 5v14l11-7z" />
//                                                         </svg>
//                                                     </div>
//                                                 </div>

//                                                 {/* small label + duration */}
//                                                 <span className="absolute bottom-2 left-3 text-[10px] md:text-xs text-zinc-400">
//                                                     Watch reel
//                                                 </span>
//                                                 <span className="absolute bottom-2 right-3 text-[10px] md:text-xs text-zinc-500">
//                                                     0:30
//                                                 </span>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>

//                             </div>
//                         </SectionWrapper>
//                     </div>

//                     {/* DIV 2 — paragraph + buttons pinned bottom-left, with clear gap from the vertical guide line */}
//                     <div className="bottom-section w-full pb-4 sm:pb-6">
//                         <SectionWrapper className="w-full">
//                             <div className="flex flex-col items-start max-w-5xl pl-10 sm:pl-14 md:pl-16 pr-4">
//                                 <div className="text-xs sm:text-sm text-zinc-300 max-w-85 m-0 mb-6 leading-relaxed">
//                                    Where technology meets creativity.
//                                    Learn, innovate, and build solutions that shape the future.
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <button className="bg-white text-black hover:bg-zinc-200 text-xs md:text-sm font-medium px-5 py-2.5 rounded-lg transition cursor-pointer">
//                                         Explore Events
//                                     </button>
//                                     <button className="bg-[#1c1e22] text-white hover:bg-[#282b30] text-xs md:text-sm font-medium px-5 py-2.5 rounded-lg transition cursor-pointer">
//                                         Meet the Team
//                                     </button>
//                                 </div>
//                             </div>
//                         </SectionWrapper>
//                     </div>
//                 </div>

//                 {/* ===== DIVIDER LINE ===== */}
//                 <SectionWrapper className="z-10">
//                     <div className="w-full border-t border-zinc-800"></div>
//                 </SectionWrapper>

//                 {/* ===== SCROLLING TEXT MARQUEE ===== */}
//                 <SectionWrapper className="relative overflow-hidden z-10">
//                     <div className="w-full bg-black py-6 overflow-hidden">
//                         <div className="flex whitespace-nowrap marquee-inner w-max">
//                             {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
//                                 <div key={i} className="flex items-center mx-8 text-white font-extrabold text-lg md:text-xl tracking-wider">
//                                     {text}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </SectionWrapper>

//                 {/* ===== BOTTOM BORDER ===== */}
//                 <div className="w-full border-b border-zinc-800 z-10"></div>

//             </header>
//         </>
//     )
// }

// export default Hero;








"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Globe } from "@/components/ui/Globe";
import Navbar from "./Navbar";

// ---------------------------------------------------------------------------
// Reel / video card settings (reel card is commented out below)
// To bring the card back: un-comment these two lines AND the reel block.
// Later: put your video in /public/videos/reel.mp4 and set
//   VIDEO_SRC = "/videos/reel.mp4"
// Optional thumbnail: VIDEO_POSTER = "/videos/reel-poster.jpg"
// While VIDEO_SRC is empty, a fake black thumbnail with a play button shows.
// ---------------------------------------------------------------------------
// const VIDEO_SRC = "";
// const VIDEO_POSTER = "";

const Hero = () => {
    const marqueeTexts = [
        "INNOVATING - EDUCATING - EMPOWERING",
        "INNOVATING - EDUCATING - EMPOWERING",
        "INNOVATING - EDUCATING - EMPOWERING",
        "INNOVATING - EDUCATING - EMPOWERING",
    ];

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                    *{
                        font-family: "Poppins", sans-serif;
                    }
                    .marquee-inner {
                        animation: marqueeScroll 30s linear infinite;
                    }
                    @keyframes marqueeScroll {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                `}
            </style>
            <header className='flex flex-col items-center bg-black text-white relative overflow-hidden w-full'>

                <Navbar/>

                {/* Vertical margin guide lines */}
                <div className="absolute top-18 left-0 right-0 bottom-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-20">
                    <div className="w-px h-full bg-zinc-800/80"></div>
                    <div className="w-px h-full bg-zinc-800/80"></div>
                </div>

                {/* ===== GLOBE — pushed a bit further down ===== */}
                <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                    <div className="w-full h-full flex items-start justify-end translate-x-[15%] sm:translate-x-[10%] md:translate-x-[5%] translate-y-[16%] sm:translate-y-[18%] md:translate-y-[20%]">
                        <Globe />
                    </div>
                </div>

                {/* ===== TWO SEPARATE TEXT DIVS: heading top-left, paragraph+buttons bottom-left ===== */}
                <div className="relative z-10 w-full flex flex-col justify-between min-h-[70vh] sm:min-h-[75vh] py-6 sm:py-8">

                    {/* DIV 1 — heading top-left (reel/video card is commented out) */}
                    <div className="top-section w-full pt-2 sm:pt-4">
                        <SectionWrapper className="w-full">
                            <div className="flex items-start justify-between gap-6 pl-10 sm:pl-14 md:pl-16 pr-4 sm:pr-14 md:pr-16">

                                {/* Heading (unchanged) */}
                                <div className="flex flex-col items-start max-w-5xl">
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] m-0">
                                        A new generation
                                    </div>
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] m-0 mt-2">
                                        of engineers.
                                    </div>
                                </div>

                                {/* ===== REEL / VIDEO CARD — COMMENTED OUT (top-right corner) =====
                                    Un-comment this whole block (and VIDEO_SRC / VIDEO_POSTER at the top) to bring it back.
                                    The small notes inside are plain text on purpose, so they do not break this comment.

                                <div className="reel-card hidden sm:block shrink-0 w-44 md:w-56 lg:w-64 pointer-events-auto">
                                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-[0_0_40px_rgba(255,255,255,0.04)]">
                                        {VIDEO_SRC ? (
                                            <video
                                                className="absolute inset-0 h-full w-full object-cover"
                                                src={VIDEO_SRC}
                                                poster={VIDEO_POSTER || undefined}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="metadata"
                                            />
                                        ) : (
                                            <>
                                                (fake thumbnail)
                                                <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-black to-zinc-950" />

                                                (play button)
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                (small label + duration)
                                                <span className="absolute bottom-2 left-3 text-[10px] md:text-xs text-zinc-400">
                                                    Watch reel
                                                </span>
                                                <span className="absolute bottom-2 right-3 text-[10px] md:text-xs text-zinc-500">
                                                    0:30
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                ===== END REEL / VIDEO CARD ===== */}

                            </div>
                        </SectionWrapper>
                    </div>

                    {/* DIV 2 — paragraph + buttons pinned bottom-left, with clear gap from the vertical guide line */}
                    <div className="bottom-section w-full pb-4 sm:pb-6">
                        <SectionWrapper className="w-full">
                            <div className="flex flex-col items-start max-w-5xl pl-10 sm:pl-14 md:pl-16 pr-4">
                                <div className="text-xs sm:text-sm text-zinc-300 max-w-85 m-0 mb-6 leading-relaxed">
                                   Where technology meets creativity.
                                   Learn, innovate, and build solutions that shape the future.
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="bg-white text-black hover:bg-zinc-200 text-xs md:text-sm font-medium px-5 py-2.5 rounded-lg transition cursor-pointer">
                                        Explore Events
                                    </button>
                                    <button className="bg-[#1c1e22] text-white hover:bg-[#282b30] text-xs md:text-sm font-medium px-5 py-2.5 rounded-lg transition cursor-pointer">
                                        Meet the Team
                                    </button>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>

                {/* ===== DIVIDER LINE ===== */}
                <SectionWrapper className="z-10">
                    <div className="w-full border-t border-zinc-800"></div>
                </SectionWrapper>

                {/* ===== SCROLLING TEXT MARQUEE ===== */}
                <SectionWrapper className="relative overflow-hidden z-10">
                    <div className="w-full bg-black py-6 overflow-hidden">
                        <div className="flex whitespace-nowrap marquee-inner w-max">
                            {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
                                <div key={i} className="flex items-center mx-8 text-white font-extrabold text-lg md:text-xl tracking-wider">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* ===== BOTTOM BORDER ===== */}
                <div className="w-full border-b border-zinc-800 z-10"></div>

            </header>
        </>
    )
}

export default Hero;











// "use client";

// import React from "react";
// import SectionWrapper from "@/components/ui/SectionWrapper";
// import { GlobePulse } from "@/components/ui/GlobePulse";

// const Hero = () => {
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const logos = [
//         <div key="l1" className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter">
//             <span>amazon</span>
//             <svg width="60" height="15" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block -ml-2">
//                 <path d="M5.5 22C25 28 55 28 85 15C87 14 84 21 78 24C65 30 30 30 5.5 22Z" fill="#ff9900" />
//                 <path d="M82 17L89 21L83 25V17Z" fill="#ff9900" />
//             </svg>
//         </div>,
//         <div key="l2" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="#76B900">
//                 <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.75v7.5L12 19.2 4.5 13.45v-7.5L12 4.2z"/>
//             </svg>
//             NVIDIA
//         </div>,
//         <div key="l3" className="flex items-center gap-2 text-white font-extrabold text-xl italic tracking-tighter">
//             <svg width="45" height="20" viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <ellipse cx="50" cy="22.5" rx="48" ry="20.5" stroke="#00095B" strokeWidth="4" fill="none"/>
//                 <ellipse cx="50" cy="22.5" rx="42" ry="16" stroke="#00095B" strokeWidth="2" fill="none"/>
//                 <path d="M30 26C35 22 42 20 52 20C62 20 68 23 72 26C65 30 55 31 42 31C35 31 32 29 30 26Z" fill="#00095B"/>
//             </svg>
//             Ford
//         </div>,
//         <div key="l4" className="flex items-center gap-2 text-white font-medium text-xl">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="#0052FF">
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2.5" />
//             </svg>
//             <span className="text-blue-500 font-semibold tracking-tight">coinbase</span>
//         </div>,
//         <div key="l5" className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
//             <span className="text-blue-500 font-bold">G</span>
//             <span className="text-red-500 font-bold">o</span>
//             <span className="text-yellow-500 font-bold">o</span>
//             <span className="text-blue-500 font-bold">g</span>
//             <span className="text-green-500 font-bold">l</span>
//             <span className="text-red-500 font-bold">e</span>
//         </div>,
//         <div key="l6" className="flex items-center gap-2 text-white font-medium text-xl">
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="#95BF47">
//                 <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#95BF47"/>
//             </svg>
//             <span className="font-semibold tracking-tight">shopify</span>
//         </div>,
//         <div key="l7" className="flex items-center gap-2 text-white font-normal text-xl tracking-wider">
//             mindbody
//         </div>,
//     ];

//     return (
//         <>
//             <style>
//                 {`
//                     @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
//                     *{
//                         font-family: "Poppins", sans-serif;
//                     }
//                     .marquee-inner {
//                         animation: marqueeScroll 30s linear infinite;
//                     }
//                     @keyframes marqueeScroll {
//                         0% { transform: translateX(0%); }
//                         100% { transform: translateX(-50%); }
//                     }
//                 `}
//             </style>
//             <header className='flex flex-col items-center bg-black text-white relative overflow-hidden w-full'>

//                 <nav className="flex flex-col items-center w-full border-b border-zinc-800">
//                     <SectionWrapper className="flex items-center justify-between p-4 md:py-4 w-full">
//                         <a href="https://prebuiltui.com">
//                             <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924m-7.196 5.32V14.56h3.08v3.612l-.532 3.276.532 3.248V33.6zm6.692-8.232q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128t.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.868.504 1.988.504M56.95 28V14.56h3.08V28zm3.08-7.476-1.064-.532q0-2.548 1.12-4.116 1.148-1.596 3.444-1.596 1.008 0 1.82.364.812.365 1.512 1.176l-2.016 2.072a2.1 2.1 0 0 0-.812-.56 3 3 0 0 0-1.036-.168q-1.287 0-2.128.812-.84.811-.84 2.548m14.156 7.756q-2.016 0-3.64-.896a7 7 0 0 1-2.548-2.52q-.924-1.596-.924-3.584t.924-3.556a6.87 6.87 0 0 1 2.492-2.52q1.596-.924 3.528-.924 1.876 0 3.304.868a6.05 6.05 0 0 1 2.268 2.38q.84 1.512.84 3.444 0 .336-.056.7a7 7 0 0 1-.112.756H69.23v-2.52h9.436l-1.148 1.008q-.056-1.232-.476-2.072a3 3 0 0 0-1.204-1.288q-.756-.448-1.876-.448-1.176 0-2.044.504a3.43 3.43 0 0 0-1.344 1.428q-.476.896-.476 2.156t.504 2.212 1.428 1.484q.924.504 2.128.504 1.037 0 1.904-.364a4 4 0 0 0 1.512-1.064l1.96 1.988a6.3 6.3 0 0 1-2.38 1.736 7.6 7.6 0 0 1-2.968.588m15.91 0q-1.54 0-2.745-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.821 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.869 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.455.924-3.276.924M82.898 28V7.84h3.08v10.024l-.532 3.248.532 3.276V28zm6.692-2.632q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128.001 1.204.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.87.504 1.988.504m15.067 2.912q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.644.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.976-.28V14.56h3.08V28zm1.54-15.904q-.783 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.813 0 1.316.532t.504 1.316q0 .784-.504 1.316t-1.316.532M120.169 28V7.84h3.08V28zm8.552 0V8.96h3.08V28zm-3.22-10.64v-2.8h9.52v2.8zm17.274 10.92q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.643.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.977-.28V14.56h3.08V28zm1.54-15.904q-.785 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.812 0 1.316.532t.504 1.316-.504 1.316-1.316.532" fill="white" />
//                                 <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </a>
//                         <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}>
//                             <a href="#" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Home</a>
//                             <a href="#" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Projects</a>
//                             <a href="#" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Services</a>
//                             <a href="#" onClick={() => setMobileOpen(false)} className="hover:text-white/80">Pricing</a>

//                             <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M18 6 6 18" /><path d="m6 6 12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <button className="hidden md:flex items-center gap-1.5 bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424] px-4 py-2.5 rounded-lg text-sm transition cursor-pointer">
//                             Let&apos;s talk
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                         </button>

//                         <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-gray-50 p-2 rounded-md aspect-square font-medium transition">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
//                             </svg>
//                         </button>
//                     </SectionWrapper>
//                 </nav>

//                 {/* Vertical margin lines */}
//                 <div className="absolute top-18 left-0 right-0 bottom-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-20">
//                     <div className="w-px h-full bg-zinc-800"></div>
//                     <div className="w-px h-full bg-zinc-800"></div>
//                 </div>

//                 {/* Hero Content Section Layout with Text and Half Globe */}
//                 <SectionWrapper className="w-full max-w-6xl mt-12 md:mt-20 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
//                   {/* Left Column: Text */}
//                   <div className="lg:col-span-7 flex flex-col items-start text-left">
//                     <p className="text-xs sm:text-sm text-zinc-400 mb-4">
//                       Global GDP running on Stripe: <span className="text-white font-medium">1.71433199%</span>
//                     </p>

//                     <h1 className="text-2xl sm:text-3xl md:text-4xl text-left text-white leading-snug font-semibold tracking-tight">
//                       Financial infrastructure to grow your <span className="bg-linear-to-r from-[#8076ef] to-[#c084fc] text-transparent bg-clip-text">revenue</span>. Accept payments, offer financial <span className="bg-linear-to-r from-[#8076ef] to-[#c084fc] text-transparent bg-clip-text">services and</span> implement custom revenue models – <span className="bg-linear-to-r from-[#8076ef] to-[#c084fc] text-transparent bg-clip-text">from</span> your first transaction to your billionth.
//                     </h1>

//                     <div className='flex justify-start w-full mt-8'>
//                         <button className="bg-[#635bff] hover:bg-[#5851db] text-white text-xs md:text-sm font-medium px-5 py-3 rounded-lg transition cursor-pointer shadow-lg shadow-indigo-500/25">
//                             Request an invite &gt;
//                         </button>
//                     </div>
//                   </div>

//                   {/* Right Column: Upper Hemisphere Globe Component Container */}
//                   <div className="lg:col-span-5 relative w-full overflow-hidden flex justify-center items-end pt-12">
//                     <div className="w-[140%] sm:w-[120%] lg:w-[160%] translate-y-12 sm:translate-y-16">
//                       <GlobePulse className="w-full" />
//                     </div>
//                   </div>

//                 </SectionWrapper>

//                 {/* ===== LINE JUST AFTER THE HERO SECTION ===== */}
//                 <SectionWrapper className="mt-12 w-full">
//                     <div className="w-full border-t border-zinc-800"></div>
//                 </SectionWrapper>

//                 {/* ===== SCROLLING LOGOS BOX ===== */}
//                 <SectionWrapper className="relative overflow-hidden z-0 w-full">
//                     <div className="w-full bg-black py-10 overflow-hidden">
//                         <div className="flex whitespace-nowrap marquee-inner w-max">
//                             {[...logos, ...logos].map((logo, i) => (
//                                 <div key={i} className="flex items-center mx-10">
//                                     {logo}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </SectionWrapper>

//                 {/* ===== FULL WIDTH LINE AFTER SCROLLING SECTION ===== */}
//                 <div className="w-full border-b border-zinc-800"></div>

//             </header>
//         </>
//     )
// }

// export default Hero;