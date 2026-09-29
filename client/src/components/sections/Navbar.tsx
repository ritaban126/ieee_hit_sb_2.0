




// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";
// import SectionWrapper from "@/components/ui/SectionWrapper";

// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700", "900"],
//     display: "swap",
// });

// const NAV_LINKS = [
//     { label: "Home", href: "/" },
//     { label: "Events", href: "/events" },
//     { label: "About Us", href: "/about" },
//     { label: "Members", href: "/members" },
//     { label: "Gallery", href: "/gallery" },
// ];


// const Navbar = () => {
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//     const pathname = usePathname();

//     // "/" only matches the homepage exactly; every other link also matches
//     // its own nested routes (e.g. "/events" stays active on "/events/123")
//     const isActive = (href: string) =>
//         href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

//     return (
//         <nav className={`${poppins.className} sticky top-0 flex flex-col items-center w-full border-b border-zinc-900 z-30 bg-black text-white antialiased`}>
//             <SectionWrapper className="flex items-center justify-between p-4 md:py-4">
//                 <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg md:text-xl tracking-wider">
//                     IEEE HIT SB
//                 </Link>

//                 <div
//                     id="menu"
//                     className={`${mobileOpen ? "max-md:w-full" : "max-md:w-0"} max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/90 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}
//                 >
//                     {NAV_LINKS.map((link) => {
//                         const active = isActive(link.href);
//                         return (
//                             <Link
//                                 key={link.href}
//                                 href={link.href}
//                                 onClick={() => setMobileOpen(false)}
//                                 className={`group relative py-1 transition-colors ${
//                                     active ? "text-white font-medium" : "text-zinc-400 hover:text-white"
//                                 }`}
//                             >
//                                 {link.label}
//                                 {/* underline: full width on the current page, slides in on hover for the rest */}
//                                 <span
//                                     className={`pointer-events-none absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ease-out ${
//                                         active ? "w-full" : "w-0 group-hover:w-full"
//                                     }`}
//                                 />
//                             </Link>
//                         );
//                     })}

//                     <button
//                         id="close-menu"
//                         onClick={() => setMobileOpen(false)}
//                         className="md:hidden bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition"
//                         aria-label="Close Menu"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M18 6 6 18" /><path d="m6 6 12 12" />
//                         </svg>
//                     </button>
//                 </div>

//                 <Link
//                     href="/login"
//                     className="hidden md:flex items-center gap-1.5 bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424] px-4 py-2.5 rounded-lg text-sm transition cursor-pointer hover:border-zinc-700 text-white font-medium"
//                 >
//                     Sign in
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </Link>

//                 <button
//                     id="open-menu"
//                     onClick={() => setMobileOpen(true)}
//                     className="md:hidden bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 p-2 rounded-md aspect-square font-medium transition"
//                     aria-label="Open Menu"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
//                     </svg>
//                 </button>
//             </SectionWrapper>
//         </nav>
//     );
// };

// export default Navbar;





"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import SectionWrapper from "@/components/ui/SectionWrapper";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    display: "swap",
});

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "About Us", href: "/about" },
    { label: "Members", href: "/members" },
    { label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <nav
            className={`${poppins.className} sticky top-0 left-0 flex flex-col items-center w-full border-b border-zinc-900 z-50 bg-black/90 backdrop-blur-md text-white antialiased`}
        >
            <SectionWrapper className="w-full flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
                
                {/* ================= LOGO ================= */}
                <Link
                    href="/"
                    className="flex items-center gap-3 text-white group"
                >
                    <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Image  
                            src="/Ieeelogo.png"
                            alt="IEEE HIT SB"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-center leading-none">
                        <span className="text-base md:text-lg font-bold tracking-wide">
                            IEEE HIT SB
                        </span>
                        <span className="text-[8px] md:text-[9px] text-zinc-400 tracking-wide mt-1">
                            Advancing Technology for Humanity.
                        </span>
                    </div>
                </Link>

                {/* ================= NAV LINKS (DESKTOP & MOBILE SLIDE-OVER) ================= */}
                <div
                    className={`fixed md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-black/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 text-sm transition-all duration-300 z-40 ${
                        mobileOpen
                            ? "translate-x-0 opacity-100 pointer-events-auto"
                            : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
                    }`}
                >
                    {/* Close Button Inside Mobile Menu */}
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="absolute top-6 right-6 md:hidden bg-zinc-900 border border-zinc-800 text-white p-2.5 rounded-lg hover:bg-zinc-800 transition"
                        aria-label="Close Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>

                    {NAV_LINKS.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`group relative py-1 text-base md:text-sm transition-colors ${
                                    active
                                        ? "text-white font-medium"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`pointer-events-none absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ease-out ${
                                        active
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* ================= ACTIONS (SIGN IN & HAMBURGER) ================= */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="hidden md:flex items-center gap-1.5 bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424] px-4 py-2 rounded-lg text-sm transition cursor-pointer hover:border-zinc-700 text-white font-medium"
                    >
                        Sign in
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>

                    {/* Mobile Hamburger Toggle Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 p-2.5 rounded-lg aspect-square transition"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                            <path d="M4 6h16" />
                        </svg>
                    </button>
                </div>

            </SectionWrapper>
        </nav>
    );
};

export default Navbar;