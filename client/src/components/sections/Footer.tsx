
// final footer design 
"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { Send, Globe } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    display: "swap",
});

const Footer = () => {
    return (
        <footer className={`${poppins.className} relative w-full overflow-hidden border-t border-zinc-900 bg-black text-white antialiased`}>

            {/* side guide lines */}
            <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="w-px bg-zinc-800"></div>
                <div className="w-px bg-zinc-800"></div>
            </div>

            <div className="relative z-10 px-8 pt-20 pb-16 md:px-20 lg:px-28 xl:px-36">

                {/* ===== columns ===== */}
                <div className="grid grid-cols-1 items-stretch divide-y divide-zinc-900 border-y border-zinc-900 md:grid-cols-12 md:divide-x md:divide-y-0">

                    {/* Column 1: Heading & Tagline */}
                    <div className="flex flex-col justify-between py-10 md:col-span-5 md:pr-10">
                        <div>
                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                                IEEE HIT Student Branch
                            </h3>
                            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                                Advancing Technology for Humanity.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links with Next.js Routing */}
                    <div className="py-10 md:col-span-4 md:px-10">
                        <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-white uppercase">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
                            <li><Link href="/about" className="transition-colors hover:text-white">About</Link></li>
                            <li><Link href="/events" className="transition-colors hover:text-white">Events</Link></li>
                            <li><Link href="/members" className="transition-colors hover:text-white">Team</Link></li>
                            {/* <li><Link href="/spotlight" className="transition-colors hover:text-white">Spotlight</Link></li> */}
                        </ul>
                    </div>

                    {/* Column 3: Contact & Social Icons */}
                    <div className="py-10 md:col-span-3 md:pl-10 flex flex-col justify-between">
                        <ul className="space-y-4 text-sm text-zinc-400 mb-8">
                            <li>
                                <a href="mailto:hitbranchieee@gmail.com" className="break-all transition-colors hover:text-white">
                                    hitbranchieee@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+918240938935" className="transition-colors hover:text-white">
                                    +91 82409 38935
                                </a>
                            </li>
                            <li className="text-xs leading-relaxed text-zinc-500">
                                IEEE, HIT, ICARE Complex, Haldia, W.B., India 721657
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-zinc-400">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
                                <IoLogoLinkedin className="h-4 w-4" />
                            </a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
                                <Send className="h-4 w-4" />
                            </a>
                            <a href="https://ieee.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
                                <Globe className="h-4 w-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
                                <FaInstagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* ===== newsletter row ===== */}
                <div className="mt-16 flex flex-col gap-6 border-t border-zinc-900 pt-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h4 className="mb-1 text-lg font-semibold text-white">Stay Updated with IEEE HIT SB</h4>
                        <p className="text-sm text-zinc-500">
                            Get the latest updates on events, workshops, and opportunities in your inbox.
                        </p>
                    </div>
                    <form className="flex w-full items-center gap-3 md:w-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-600 md:w-64"
                        />
                        <button
                            type="submit"
                            className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* ===== giant watermark ===== */}
            <div className="relative z-0 h-20 select-none overflow-hidden sm:h-28 md:h-40 lg:h-48" aria-hidden="true">
                <p className="absolute inset-x-0 top-0 text-center leading-none font-black tracking-tight whitespace-nowrap text-white/5 text-[19vw]">
                    IEEE HIT SB
                </p>
            </div>

            {/* ===== copyright bar ===== */}
            <div className="relative z-10 border-t border-zinc-900 px-8 py-6 md:px-20 lg:px-28 xl:px-36">
                <div className="flex flex-col items-center justify-center text-xs text-zinc-500">
                    <p>Designed & Developed by IEEE HIT SB • © 2026</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;




// import React from "react";
// import { MessageSquare, X } from "lucide-react";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { FaYoutube } from "react-icons/fa";
// import { Poppins } from "next/font/google";

// // keeps the footer font correct on every page (Poppins was only loaded by the Hero on the home page)
// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700", "900"],
//     display: "swap",
// });

// const Footer = () => {
//     return (
//         <footer className={`${poppins.className} w-full border-t border-zinc-900 bg-black text-white antialiased`}>
//             {/*
//                 Same horizontal padding as the guide lines in Hero / Features / Spotlight,
//                 so the side lines sit at exactly the same x-position on every section.
//                 The grid has a left + right border (= the 2 side lines) and each column after the
//                 first has a left border (= the 3 dividers). Together: 4 sections, full-height lines.
//             */}
//             <div className="px-4 md:px-16 lg:px-24 xl:px-32">
//                 <div className="grid grid-cols-1 border-x border-zinc-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

//                     {/* 1 — Logo & Social Icons */}
//                     <div className="flex flex-col justify-between px-6 py-14 md:px-8 md:py-16">
//                         <div>
//                             {/* Custom Branch Monogram / Logo */}
//                             <div className="w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center font-black text-xl tracking-tighter mb-6 shadow-lg shadow-white/5">
//                                 HIT
//                             </div>
//                             <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-8">
//                                 IEEE HIT Student Branch — fostering technical excellence, hands-on engineering, and collaborative innovation.
//                             </p>
//                         </div>

//                         <div className="flex flex-wrap items-center gap-3 text-zinc-400">
//                             <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900/60 rounded-full border border-zinc-800">
//                                 <FaInstagram className="w-4 h-4" />
//                             </a>
//                             <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900/60 rounded-full border border-zinc-800">
//                                 <IoLogoLinkedin className="w-4 h-4" />
//                             </a>
//                             <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900/60 rounded-full border border-zinc-800">
//                                 <MessageSquare className="w-4 h-4" />
//                             </a>
//                             <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900/60 rounded-full border border-zinc-800">
//                                 <FaYoutube className="w-4 h-4" />
//                             </a>
//                             <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900/60 rounded-full border border-zinc-800">
//                                 <X className="w-4 h-4" />
//                             </a>
//                         </div>
//                     </div>

//                     {/* 2 — About */}
//                     <div className="border-t border-zinc-800 px-6 py-14 md:border-t-0 md:border-l md:px-8 md:py-16">
//                         <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">About</h4>
//                         <ul className="space-y-4 text-sm text-zinc-400">
//                             <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Pricing and Refund</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Terms and Condition</a></li>
//                         </ul>
//                     </div>

//                     {/* 3 — Branch */}
//                     <div className="border-t border-zinc-800 px-6 py-14 md:border-t-0 md:border-l md:px-8 md:py-16">
//                         <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">Branch</h4>
//                         <ul className="space-y-4 text-sm text-zinc-400">
//                             <li><a href="#" className="hover:text-white transition-colors">Code Friday</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Join Chapter</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Discord Community</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Hackathons</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Submit Projects</a></li>
//                             <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
//                         </ul>
//                     </div>

//                     {/* 4 — Contact */}
//                     <div className="border-t border-zinc-800 px-6 py-14 md:border-t-0 md:border-l md:px-8 md:py-16">
//                         <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">Contact</h4>
//                         <ul className="space-y-4 text-sm text-zinc-400">
//                             <li>
//                                 <span className="block text-xs text-zinc-500 mb-0.5">Online Support</span>
//                                 <a href="tel:+919071433205" className="hover:text-white transition-colors">10am - 10pm · +91 90714 33205</a>
//                             </li>
//                             <li>
//                                 <span className="block text-xs text-zinc-500 mb-0.5">Offline Desk</span>
//                                 <a href="tel:+919691778470" className="hover:text-white transition-colors">11am - 8pm · +91 96917 78470</a>
//                             </li>
//                             <li>
//                                 <a href="mailto:ieeehitsb@gmail.com" className="hover:text-white transition-colors break-all">ieeehitsb@gmail.com</a>
//                             </li>
//                             <li className="text-xs text-zinc-500 leading-relaxed pt-2">
//                                 Haldia Institute of Technology, HIT Campus, Haldia, West Bengal, 721657
//                             </li>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;