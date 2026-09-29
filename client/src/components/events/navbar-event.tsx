import React from "react";
import { Box, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NavbarEvents = () => {
    return (
        <header className="w-full text-white py-4 px-6 md:px-12 lg:px-20 border-b border-zinc-900 sticky top-0 z-50 backdrop-blur-md bg-black/80">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Left: Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:border-zinc-700 transition-colors">
                        <Box className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                        IEEE HIT SB
                    </span>
                </Link>

                {/* Middle: Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Projects</a>
                    {/* <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a> */}
                </nav>

                {/* Right: Action Button */}
                <div>
                    <a 
                        href="#" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-sm font-medium text-white transition-all hover:bg-zinc-800"
                    >
                        Let&apos;s talk
                        <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                    </a>
                </div>

            </div>
        </header>
    );
};

export default NavbarEvents;