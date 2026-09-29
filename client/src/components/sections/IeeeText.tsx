
// final code
"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const VB_HEIGHT = 100; // svg viewBox height (text is centred vertically in it)
const PAD = 12; // breathing room left/right of the text, in svg units

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // FIT FIX: the viewBox width follows the real text width, so text of ANY length
  // is scaled down to fit the screen instead of running out of it.
  // (starts with an estimate, then is corrected by measuring the real text)
  const [vbWidth, setVbWidth] = useState(Math.max(300, text.length * 44));

  useEffect(() => {
    let cancelled = false;

    const measure = () => {
      const el = textRef.current;
      if (!el || cancelled) return;
      const w = el.getBBox().width;
      if (w > 0) setVbWidth(Math.ceil(w) + PAD * 2);
    };

    const raf = requestAnimationFrame(measure);
    // measure again once fonts are loaded (font changes the text width)
    document.fonts?.ready.then(measure);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [text]);

  // convert the mouse position into svg units (works with any viewBox / container size)
  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const p = pt.matrixTransform(ctm.inverse());
    setMaskPosition({
      cx: `${(p.x / vbWidth) * 100}%`,
      cy: `${(p.y / VB_HEIGHT) * 100}%`,
    });
  };

  return (
    // opaque black block, same idea as the old <section className="... bg-black"> —
    // it sits above any page-level guide lines, so no side lines show behind the text
    <div className="relative z-30 h-full w-full overflow-hidden bg-black">
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${vbWidth} ${VB_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="rgb(234 179 8)" /> {/* yellow-500 */}
              <stop offset="25%" stopColor="rgb(239 68 68)" /> {/* red-500 */}
              <stop offset="50%" stopColor="rgb(59 130 246)" /> {/* blue-500 */}
              <stop offset="75%" stopColor="rgb(6 182 212)" /> {/* cyan-500 */}
              <stop offset="100%" stopColor="rgb(139 92 246)" /> {/* violet-500 */}
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        ref={textRef}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="font-[helvetica] font-bold fill-transparent text-7xl"
      >
        {text}
      </text>
    </svg>
    </div>
  );
};

export default TextHoverEffect;