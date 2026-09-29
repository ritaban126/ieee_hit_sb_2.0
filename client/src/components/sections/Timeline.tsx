
"use client";
import React, { useState, useEffect, useRef } from "react";

// Helper custom hook for count-up animation
function useCountUp(end: number, duration: number = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out expo for smooth finish
      const easeOutValue = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeOutValue * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startCounting]);

  return count;
}

const Timeline = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const count540 = useCountUp(540, 2000, hasStarted);
    const count62 = useCountUp(62, 2000, hasStarted);
    const count18 = useCountUp(18, 2000, hasStarted);
    const count9 = useCountUp(9, 2000, hasStarted);

    return (
        <>
            <section ref={sectionRef} className="text-white py-20 w-full">
                <div className="px-8 md:px-20 lg:px-28 xl:px-36">

                    {/* heading */}
                    <div className="text-center pb-12 px-6 border-b border-zinc-800">
                        <h2 className="text-3xl md:text-[44px] font-semibold leading-tight tracking-tight">
                            The backbone
                            <br />
                            <span className="text-zinc-400">of a growing branch</span>
                        </h2>
                    </div>

                    {/* Wrapper for stats grid + its top and bottom borders so they match width */}
                    <div className="w-full">
                        {/* Top line */}
                        <div className="w-full h-px bg-zinc-800"></div>

                        {/* stats row with inner vertical borders only */}
                        <div className="grid grid-cols-2 md:grid-cols-4 group">
                            
                            <div className="text-center py-12 px-6 border-r border-b md:border-b-0 border-zinc-800 hover:bg-zinc-950 transition-colors duration-200 relative group/item">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                                <div className="text-4xl md:text-5xl font-semibold text-zinc-400 group-hover/item:text-indigo-400 transition-colors duration-200 mb-2">
                                    {count540}+
                                </div>
                                <p className="text-sm text-zinc-500 leading-snug">
                                    active members<br />across branches
                                </p>
                            </div>

                            <div className="text-center py-12 px-6 border-r border-b md:border-b-0 border-zinc-800 hover:bg-zinc-950 transition-colors duration-200 relative group/item">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                                <div className="text-4xl md:text-5xl font-semibold text-zinc-400 group-hover/item:text-indigo-400 transition-colors duration-200 mb-2">
                                    {count62}
                                </div>
                                <p className="text-sm text-zinc-500 leading-snug">
                                    events hosted<br />in the last year
                                </p>
                            </div>

                            <div className="text-center py-12 px-6 border-r md:border-r border-zinc-800 hover:bg-zinc-950 transition-colors duration-200 relative group/item">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                                <div className="text-4xl md:text-5xl font-semibold text-zinc-400 group-hover/item:text-indigo-400 transition-colors duration-200 mb-2">
                                    {count18}
                                </div>
                                <p className="text-sm text-zinc-500 leading-snug">
                                    workshops<br />run per year
                                </p>
                            </div>

                            <div className="text-center py-12 px-6 hover:bg-zinc-950 transition-colors duration-200 relative group/item">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                                <div className="text-4xl md:text-5xl font-semibold text-zinc-400 group-hover/item:text-indigo-400 transition-colors duration-200 mb-2">
                                    {count9}
                                </div>
                                <p className="text-sm text-zinc-500 leading-snug">
                                    years the branch<br />has been active
                                </p>
                            </div>

                        </div>

                        {/* Bottom line */}
                        <div className="w-full h-px bg-zinc-800"></div>
                    </div>

                </div>
            </section>

            {/* Expanded bottom spacing wrapper */}
            <div className="w-full h-12 flex items-center">
                <div className="w-full h-px bg-zinc-700"></div>
            </div>
        </>
    );
};

export default Timeline;





