// "use client";

// import React from "react";
// import Image from "next/image";
// import { Play} from "lucide-react";
// import { Poppins } from "next/font/google";

// // FONT FIX: Poppins was only loaded by the Hero's <style> on the home page,
// // so the About page had no font. Loading it here makes this page self-contained.
// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700"],
//     display: "swap",
// });

// // const teamMembers = [
// //     {
// //         name: "Alex Turner",
// //         role: "Lead Maintainer",
// //         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "Ritaban",
// //         role: "Full Stack & AI Lead",
// //         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "Marcus Lind",
// //         role: "Hardware Chapter Head",
// //         image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "Sophia Vance",
// //         role: "UI/UX & Design Lead",
// //         image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "David Chen",
// //         role: "Open Source Coordinator",
// //         image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "Liam O'Connor",
// //         role: "DevOps & Cloud Engineer",
// //         image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "Oliver Smith",
// //         role: "Embedded Systems Lead",
// //         image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
// //     },
// //     {
// //         name: "Elena Rostova",
// //         role: "Research & Publications",
// //         image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
// //     },
// // ];

// const Eyebrow = ({ children }: { children: React.ReactNode }) => (
//     <p className="mb-5 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
//         <span className="h-1.5 w-1.5 rounded-full bg-white" />
//         {children}
//     </p>
// );

// const About = () => {
//     return (

//         <section
//             className={`${poppins.className} min-h-screen w-full bg-black px-6 pt-16 pb-28 text-white antialiased md:px-12 lg:px-24`}
//         >
//             <div className="max-w-6xl mx-auto">

//                 {/* Header Content */}
//                 <div className="max-w-3xl mb-14">
//                     <Eyebrow>About IEEE HIT SB</Eyebrow>
//                     <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
//                         Building tools for the next era of product development
//                     </h1>
//                     <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
//                         AI is fundamentally changing how products get built. We are shaping what comes next.
//                     </p>
//                 </div>

//                 {/* Main Hero Image / Video Container */}
//                 <div className="relative w-full aspect-video md:aspect-2/1 rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e1013] group shadow-2xl mb-32">
//                     <Image
//                         src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
//                         alt="IEEE HIT SB Team"
//                         fill
//                         sizes="(min-width: 1152px) 1152px, 100vw"
//                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         priority
//                     />

//                     {/* Subtle Dark Gradient Overlay */}
//                     <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

//                     {/* Play Button / Interactive Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 cursor-pointer shadow-lg">
//                             <Play className="w-6 h-6 fill-white ml-1" />
//                         </div>
//                     </div>

//                     {/* Bottom Caption badge inside video */}
//                     <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-xs md:text-sm text-zinc-300 font-medium">
//                         <span>IEEE HIT SB — Core Engineering & Open Source Chapter</span>
//                         <span className="shrink-0 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">02:45 min</span>
//                     </div>
//                 </div>

//                 {/* Second Section: Two-Column Split */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-zinc-900 mb-32">

//                     {/* Left Column: Big Title */}
//                     <div className="lg:col-span-5">
//                         <Eyebrow>Our story</Eyebrow>
//                         <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
//                             IEEE HIT Student Branch        
//                         </h2>
//                     </div>

//                     {/* Right Column: Detailed Paragraphs */}
//                     <div className="lg:col-span-7 space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
//                         <p className="text-white font-medium text-lg md:text-xl leading-snug tracking-tight">
//                             IEEE is a non-profit technical professional organization with over 4,80,000+ members across approximately 175 countries. Dedicated to advancing technology for humanity, it fosters innovation, research, and professional excellence worldwide.
//                         </p>
//                         <p>
//                           Established on February 26, 2008 under the IEEE Kharagpur Section, the IEEE Student Branch at Haldia Institute of Technology actively organizes workshops, seminars, technical quizzes, and industrial tours.
//                         </p>
//                         <p>
//                             Over the years, it has grown into a vibrant platform for students to develop technical skills, leadership qualities, and professional networks.
//                         </p>
//                         <p>
//                             Our community brings together diverse engineering disciplines, united by a relentless focus, fast execution, and a deep care for software craftsmanship and hardware innovation.
//                         </p>
//                     </div>

//                 </div>

//                 {/* Fourth Section: Team Photo Grid */}
//                 {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className="group flex flex-col">
//                             <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e1013] mb-4 transition-colors duration-300 group-hover:border-zinc-600">
//                                 <Image
//                                     src={member.image}
//                                     alt={member.name}
//                                     fill
//                                     sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
//                                     className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                                 />
//                             </div>
//                             <h3 className="text-white font-semibold text-base tracking-tight">{member.name}</h3>
//                             <p className="text-zinc-500 text-xs md:text-sm mt-0.5">{member.role}</p>
//                         </div>
//                     ))}
//                 </div> */}

//                 {/* Fifth Section: Built for the future. Available today. CTA Banner */}
//                 <div className="pt-20 border-t border-zinc-900 flex flex-col items-center justify-center text-center py-20">
//                     <h2 className="bg-linear-to-b from-white to-zinc-500 bg-clip-text pb-1 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-transparent mb-8 max-w-3xl">
//                         Built for the future.<br />Available today.
//                     </h2>
//                     <div className="flex flex-wrap items-center justify-center gap-4">
//                         <a
//                             href="#"
//                             className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors shadow-lg"
//                         >
//                             Get started
//                         </a>
//                         <a
//                             href="#"
//                             className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
//                         >
//                             Contact sales
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
      
//     );
// };

// export default About;






"use client";

import React from "react";
import Image from "next/image";
import {  Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Poppins } from "next/font/google";

// FONT FIX: Poppins was only loaded by the Hero's <style> on the home page,
// so the About page had no font. Loading it here makes this page self-contained.
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <p className="mb-5 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        {children}
    </p>
);

const About = () => {
    return (
        <section
            className={`${poppins.className} min-h-screen w-full bg-black px-6 pt-16 pb-28 text-white antialiased md:px-12 lg:px-24`}
        >
            <div className="max-w-6xl mx-auto">

                {/* Header Content */}
                <div className="max-w-3xl mb-14">
                    <Eyebrow>About IEEE HIT SB</Eyebrow>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                        Building tools for the next era of product development
                    </h1>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                        AI is fundamentally changing how products get built. We are shaping what comes next.
                    </p>
                </div>

                {/* Main Hero Image / Video Container */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e1013] group shadow-2xl mb-32">
    <Image
        src="/heroparallex/P.jpg"
        alt="IEEE HIT SB Team"
        width={1600}
        height={1200}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        priority
    />

    {/* Subtle Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

    {/* Play Button / Interactive Overlay */}
    {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25 cursor-pointer shadow-lg pointer-events-auto">
            <Play className="w-6 h-6 fill-white ml-1" />
        </div>
    </div> */}

    {/* Bottom Caption badge inside video */}
    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-xs md:text-sm text-zinc-300 font-medium">
        <span>IEEE HIT SB — Core Engineering & Open Source Chapter</span>
        {/* <span className="shrink-0 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">02:45 min</span> */}
    </div>
</div>

                {/* Second Section: Two-Column Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-zinc-900 mb-32">

                    {/* Left Column: Big Title */}
                    <div className="lg:col-span-5">
                        <Eyebrow>Our story</Eyebrow>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
                            IEEE HIT Student Branch        
                        </h2>
                    </div>

                    {/* Right Column: Detailed Paragraphs */}
                    <div className="lg:col-span-7 space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
                        <p className="text-white font-medium text-lg md:text-xl leading-snug tracking-tight">
                            IEEE is a non-profit technical professional organization with over 4,80,000+ members across approximately 175 countries. Dedicated to advancing technology for humanity, it fosters innovation, research, and professional excellence worldwide.
                        </p>
                        <p>
                          Established on February 26, 2008 under the IEEE Kharagpur Section, the IEEE Student Branch at Haldia Institute of Technology actively organizes workshops, seminars, technical quizzes, and industrial tours.
                        </p>
                        <p>
                            Over the years, it has grown into a vibrant platform for students to develop technical skills, leadership qualities, and professional networks.
                        </p>
                        <p>
                            Our community brings together diverse engineering disciplines, united by a relentless focus, fast execution, and a deep care for software craftsmanship and hardware innovation.
                        </p>
                    </div>

                </div>

                {/* Contact Us Section */}
                <div className="pt-20 border-t border-zinc-900 flex flex-col items-center justify-center text-center py-10">
                    <div className="w-full max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10 text-left">
                            Contact Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Email Card */}
                            <a 
                                href="mailto:thehittimes@gmail.com" 
                                className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800 bg-[#0a0c0e] hover:border-zinc-700 transition-all group text-left"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="text-white font-semibold text-base">Email</h3>
                                    <p className="text-zinc-400 text-xs sm:text-sm truncate mt-0.5">ieeehitsb@gmail.com</p>
                                </div>
                            </a>

                            {/* Instagram Card */}
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800 bg-[#0a0c0e] hover:border-zinc-700 transition-all group text-left"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                                    <FaInstagram className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="text-white font-semibold text-base">Instagram</h3>
                                    <p className="text-zinc-400 text-xs sm:text-sm truncate mt-0.5">@IEEEHITSB</p>
                                </div>
                            </a>

                            {/* LinkedIn Card */}
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800 bg-[#0a0c0e] hover:border-zinc-700 transition-all group text-left"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                                    <FaLinkedinIn className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="text-white font-semibold text-base">LinkedIn</h3>
                                    <p className="text-zinc-400 text-xs sm:text-sm truncate mt-0.5">@IEEEHITSB</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;