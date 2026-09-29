"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulates initial page load asset/DOM readiness
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) onLoadingComplete();
    }, 2200); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Outer Ring / Circular Frame */}
          <div className="relative w-[320px] h-80 rounded-full border border-neutral-800 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.03)]">
            
            {/* Ambient Lighting Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-neutral-900/40 via-transparent to-neutral-700/20 pointer-events-none" />

            {/* Tumbling Metallic Cubes Container */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Cube 1 */}
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-10 h-10 rounded-lg bg-linear-to-br from-neutral-300 via-neutral-600 to-neutral-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_20px_rgba(0,0,0,0.8)] border border-neutral-500/40 transform -translate-x-4"
              >
                {/* Metallic shine streak */}
                <div className="absolute top-1 left-1 w-3 h-1.5 bg-white/70 rounded-full blur-[0.5px]" />
              </motion.div>

              {/* Cube 2 */}
              <motion.div
                animate={{
                  rotateX: [360, 0],
                  rotateY: [360, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-9 h-9 rounded-lg bg-linear-to-tl from-neutral-200 via-neutral-500 to-neutral-950 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_8px_16px_rgba(0,0,0,0.9)] border border-neutral-400/50 transform translate-x-4 translate-y-3"
              >
                {/* Metallic shine streak */}
                <div className="absolute bottom-1 right-1 w-2.5 h-1 bg-white/80 rounded-full blur-[0.5px]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}