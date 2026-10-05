"use client";

import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function SignInPage() {
    const handleGoogleSignIn = () => {
        // Handle your Google authentication logic here
        console.log("Sign in with Google");
    };

    return (
        <main
            className={`${poppins.className} relative min-h-screen overflow-hidden bg-black text-white`}
        >
            <div className="absolute inset-0">
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.07),transparent_38%)]" />

                {/* Blue glow */}
                <div className="absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-blue-500/10 blur-[130px]" />

                {/* Purple glow */}
                <div className="absolute bottom-[5%] right-[5%] h-72 w-72 rounded-full bg-purple-500/10 blur-[130px]" />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Dark + blur overlay */}
            <div className="absolute inset-0 bg-black/55 backdrop-blur-md" />
            {/* <div className="relative z-0 flex min-h-screen flex-col">
                <nav className="flex items-center justify-between border-b border-zinc-800/70 px-6 py-5 md:px-12">
                    <Link
                        href="/"
                        className="text-base font-semibold tracking-[0.18em] text-white"
                    >
                        IEEE HIT SB
                    </Link>

                    <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
                        <span>Home</span>
                        <span>Events</span>
                        <span>About</span>
                        <span>Pricing</span>
                    </div>
                </nav>

                <div className="flex flex-1 items-center justify-center">
                    <div className="select-none text-center opacity-20">
                        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                            A new way
                        </h1>

                        <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-7xl">
                            to build.
                        </h1>
                    </div>
                </div>
            </div> */}

                {/* MODAL */}
            <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-6">
                <div className="relative w-full max-w-117.5">
                    {/* Outer glow */}
                    <div className="absolute -inset-px rounded-[24px] bg-linear-to-b from-zinc-600/30 via-zinc-800/10 to-transparent blur-sm" />

                    {/* Modal */}
                    <div className="relative rounded-[22px] border border-zinc-800/90 bg-[#0b0b0b]/95 px-5 py-7 shadow-[0_25px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-8 sm:py-8">

                    {/* CLOSE BUTTON */}
                        <Link
                            href="/"
                            aria-label="Close sign in"
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all duration-200 hover:bg-zinc-800 hover:text-white"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </Link>

                        {/* =================================================
                            LOGO (With Routing)
                        ================================================= */}
                        <div className="mb-6 flex justify-center">
                            <Link
                                href="/"
                                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 shadow-inner shadow-white/3 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800"
                            >
                                <span className="text-[13px] font-semibold tracking-tight text-white">
                                    IEEE
                                </span>
                            </Link>
                        </div>

                        {/* =================================================
                            HEADER
                        ================================================= */}
                        <div className="mb-7 text-center">
                            <h1 className="text-[25px] font-semibold tracking-[-0.03em] text-white">
                                Welcome back
                            </h1>

                            <p className="mt-2 text-[13px] font-normal leading-5 text-zinc-500">
                                Sign in to continue to IEEE HIT SB
                            </p>
                        </div>

                        {/* =================================================
                            BIG GOOGLE LOGIN BUTTON
                        ================================================= */}
                        <div className="space-y-4">
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-[#0a0a0a] text-[14px] font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 active:scale-[0.99]"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M21.35 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.4Z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 21.99c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.99Z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M6.53 14.07A5.86 5.86 0 0 1 6.22 12c0-.72.12-1.42.31-2.07V7.4H3.29A9.98 9.98 0 0 0 2.23 12c0 1.66.4 3.22 1.06 4.6l3.24-2.53Z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.9c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 2.99 14.63 2 12 2a9.74 9.74 0 0 0-8.71 5.4l3.24 2.53C7.3 7.62 9.46 5.9 12 5.9Z"
                                    />
                                </svg>
                                <span>Continue with Google</span>
                            </button>
                        </div>

                        {/* =================================================
                            FOOTER
                        ================================================= */}
                        <p className="mt-8 text-center text-[11px] font-normal leading-5 text-zinc-600">
                            By continuing, you agree to our terms and
                            privacy policy.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
