
// final footer design 
// "use client";
// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { Send, Globe } from "lucide-react";
// import { Poppins } from "next/font/google";
// import Link from "next/link";

// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700", "900"],
//     display: "swap",
// });

// const Footer = () => {
//     return (
//         <footer className={`${poppins.className} relative w-full overflow-hidden border-t border-zinc-900 bg-black text-white antialiased`}>

//             {/* side guide lines */}
//             <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
//                 <div className="w-px bg-zinc-800"></div>
//                 <div className="w-px bg-zinc-800"></div>
//             </div>

//             <div className="relative z-10 px-8 pt-20 pb-16 md:px-20 lg:px-28 xl:px-36">

//                 {/* ===== columns ===== */}
//                 <div className="grid grid-cols-1 items-stretch divide-y divide-zinc-900 border-y border-zinc-900 md:grid-cols-12 md:divide-x md:divide-y-0">

//                     {/* Column 1: Heading & Tagline */}
//                     <div className="flex flex-col justify-between py-10 md:col-span-5 md:pr-10">
//                         <div>
//                             <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
//                                 IEEE HIT Student Branch
//                             </h3>
//                             <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
//                                 Advancing Technology for Humanity.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Column 2: Quick Links with Next.js Routing */}
//                     <div className="py-10 md:col-span-4 md:px-10">
//                         <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-white uppercase">Quick Links</h4>
//                         <ul className="space-y-4 text-sm text-zinc-400">
//                             <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
//                             <li><Link href="/about" className="transition-colors hover:text-white">About</Link></li>
//                             <li><Link href="/events" className="transition-colors hover:text-white">Events</Link></li>
//                             <li><Link href="/members" className="transition-colors hover:text-white">Team</Link></li>
//                             {/* <li><Link href="/spotlight" className="transition-colors hover:text-white">Spotlight</Link></li> */}
//                         </ul>
//                     </div>

//                     {/* Column 3: Contact & Social Icons */}
//                     <div className="py-10 md:col-span-3 md:pl-10 flex flex-col justify-between">
//                         <ul className="space-y-4 text-sm text-zinc-400 mb-8">
//                             <li>
//                                 <a href="mailto:hitbranchieee@gmail.com" className="break-all transition-colors hover:text-white">
//                                     hitbranchieee@gmail.com
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="tel:+918240938935" className="transition-colors hover:text-white">
//                                     +91 82409 38935
//                                 </a>
//                             </li>
//                             <li className="text-xs leading-relaxed text-zinc-500">
//                                 IEEE, HIT, ICARE Complex, Haldia, W.B., India 721657
//                             </li>
//                         </ul>

//                         {/* Social Icons */}
//                         <div className="flex items-center gap-4 text-zinc-400">
//                             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
//                                 <IoLogoLinkedin className="h-4 w-4" />
//                             </a>
//                             <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
//                                 <Send className="h-4 w-4" />
//                             </a>
//                             <a href="https://ieee.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
//                                 <Globe className="h-4 w-4" />
//                             </a>
//                             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white">
//                                 <FaInstagram className="h-4 w-4" />
//                             </a>
//                         </div>
//                     </div>

//                 </div>

//                 {/* ===== newsletter row ===== */}
//                 <div className="mt-16 flex flex-col gap-6 border-t border-zinc-900 pt-10 md:flex-row md:items-center md:justify-between">
//                     <div>
//                         <h4 className="mb-1 text-lg font-semibold text-white">Stay Updated with IEEE HIT SB</h4>
//                         <p className="text-sm text-zinc-500">
//                             Get the latest updates on events, workshops, and opportunities in your inbox.
//                         </p>
//                     </div>
//                     <form className="flex w-full items-center gap-3 md:w-auto" onSubmit={(e) => e.preventDefault()}>
//                         <input
//                             type="email"
//                             required
//                             placeholder="Enter your email"
//                             className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-600 md:w-64"
//                         />
//                         <button
//                             type="submit"
//                             className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
//                         >
//                             Subscribe
//                         </button>
//                     </form>
//                 </div>

//             </div>

//             {/* ===== giant watermark ===== */}
//             <div className="relative z-0 h-20 select-none overflow-hidden sm:h-28 md:h-40 lg:h-48" aria-hidden="true">
//                 <p className="absolute inset-x-0 top-0 text-center leading-none font-black tracking-tight whitespace-nowrap text-white/5 text-[19vw]">
//                     IEEE HIT SB
//                 </p>
//             </div>

//             {/* ===== copyright bar ===== */}
//             <div className="relative z-10 border-t border-zinc-900 px-8 py-6 md:px-20 lg:px-28 xl:px-36">
//                 <div className="flex flex-col items-center justify-center text-xs text-zinc-500">
//                     <p>Designed & Developed by IEEE HIT SB • © 2026</p>
//                 </div>
//             </div>

//         </footer>
//     );
// };

// export default Footer;






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

const pages = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/members" },
];

const socials = [
    { label: "LinkedIn", href: "https://linkedin.com", Icon: IoLogoLinkedin },
    { label: "Telegram", href: "https://telegram.org", Icon: Send },
    { label: "IEEE website", href: "https://ieee.org", Icon: Globe },
    { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
];

const headingClass =
    "mb-7 text-sm font-medium tracking-wide text-white uppercase";

const Footer = () => {
    return (
        <footer
            className={`${poppins.className} relative w-full overflow-hidden border-t border-zinc-900 bg-black text-white antialiased`}
        >
            {/* side guide lines */}
            <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="w-px bg-zinc-800"></div>
                <div className="w-px bg-zinc-800"></div>
            </div>

            <div className="relative z-10 px-8 pt-20 pb-16 md:px-20 lg:px-28 xl:px-36">
                <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
                    {/* ===== left: brand + text + socials ===== */}
                    <div className="flex flex-col justify-between gap-12">
                        <div>
                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                                IEEE HIT Student Branch
                            </h3>
                            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                                Advancing Technology for Humanity.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-400">
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:text-white"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ===== right: three link columns ===== */}
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
                        {/* Pages */}
                        <div>
                            <h4 className={headingClass}>Pages</h4>
                            <ul className="space-y-4 text-sm text-zinc-400">
                                {pages.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className={headingClass}>Contact</h4>
                            <ul className="space-y-4 text-sm text-zinc-400">
                                <li>
                                    <a
                                        href="mailto:hitbranchieee@gmail.com"
                                        className="break-all transition-colors hover:text-white"
                                    >
                                        hitbranchieee@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+918240938935"
                                        className="transition-colors hover:text-white"
                                    >
                                        +91 82409 38935
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Address */}
                        <div>
                            <h4 className={headingClass}>Address</h4>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                IEEE, HIT, ICARE Complex, Haldia, W.B., India
                                721657
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== giant watermark ===== */}
            <div
                className="relative z-0 h-20 select-none overflow-hidden sm:h-28 md:h-40 lg:h-48"
                aria-hidden="true"
            >
                <p className="absolute inset-x-0 top-0 text-center text-[19vw] leading-none font-black tracking-tight whitespace-nowrap text-white/5">
                    IEEE HIT SB
                </p>
            </div>

            {/* ===== copyright bar ===== */}
            <div className="relative z-10 border-t border-zinc-900 px-8 py-6 md:px-20 lg:px-28 xl:px-36">
                <div className="flex flex-col items-center justify-center text-xs text-zinc-500">
                    <p>Designed &amp; Developed by IEEE HIT SB • © 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



