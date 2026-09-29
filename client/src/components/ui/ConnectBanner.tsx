"use client";

import React from "react";
import { motion } from "framer-motion";

const ConnectBanner = () => {
  // Generate pseudo-random code lines for the background texture
  const backgroundLines = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    code: "x = .c .. _ .b. + a.. == : .X. c_.. -b- .Wc. .Xb. @b.. _a. b+ # - . : @: W_ = X .. c_W = @.. .WcXc.. .Xb....Xa.. X=X=_X",
    top: `${(i * 5.5) + 3}%`,
    opacity: 0.15 + (i % 3) * 0.1,
  }));

  return (
    <div className="relative w-full h-90 bg-black overflow-hidden flex items-center justify-center border border-zinc-800 rounded-2xl select-none">
      
      {/* 1. Radiating Sunburst & Matrix Code Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Radial gradient center glow */}
        <div className="absolute w-200 h-75 bg-linear-to-r from-transparent via-zinc-900/60 to-transparent rounded-full blur-2xl" />
        
        {/* Radiating lines simulation */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-700 via-black to-black" />

        {/* Scrolling or static code matrix lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 opacity-40 font-mono text-[10px] text-zinc-500 tracking-widest whitespace-nowrap overflow-hidden">
        {backgroundLines.map((line, i) => (
            <motion.div
            key={line.id}
            initial={{ x: i % 2 === 0 ? "-10%" : "0%" }}
            animate={{ x: i % 2 === 0 ? "0%" : "-10%" }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            style={{ opacity: line.opacity }}
            className="px-4"
            >
            {line.code} {line.code} {line.code}
            </motion.div>
        ))}
        </div>
      </div>

      {/* 2. Main CONNECT Stacked Text Component */}
      <div className="relative z-10 flex items-center justify-center">
        
        {/* Layered Echo Effect (Background Shadows) */}
        <div className="absolute text-zinc-800 font-black tracking-wider text-6xl md:text-8xl select-none pointer-events-none transform -translate-x-3 -translate-y-2 opacity-50 font-sans">
          C<span className="opacity-0">O</span>NNECT
        </div>
        <div className="absolute text-zinc-700 font-black tracking-wider text-6xl md:text-8xl select-none pointer-events-none transform -translate-x-2 -translate-y-1 opacity-70 font-sans">
          C<span className="opacity-0">O</span>NNECT
        </div>

        {/* Foreground Interactive Text */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center font-black tracking-wider text-6xl md:text-8xl text-white font-sans drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          style={{
            WebkitTextStroke: "2px white",
            color: "transparent",
          }}
        >
          <span>C</span>
          
          {/* Globe Icon replacing the 'O' */}
          <div className="inline-flex items-center justify-center mx-1 w-14 md:w-20 h-14 md:h-20 rounded-full border-2 border-white overflow-hidden bg-black relative">
            {/* Globe Lat/Long lines */}
            <div className="absolute inset-0 border border-white/40 rounded-full scale-90" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg className="w-full h-full text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
                <path d="M4.93 4.93l14.14 14.14" />
                <path d="M19.07 4.93L4.93 19.07" />
              </svg>
            </motion.div>
          </div>

          <span>NNECT</span>
        </motion.div>
      </div>

    </div>
  );
};

export default ConnectBanner;