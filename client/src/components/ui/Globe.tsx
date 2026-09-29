// "use client"

// import { useEffect, useRef, useCallback } from "react";
// import createGlobe from "cobe";

// interface PulseMarker {
//   id: string
//   location: [number, number]
//   delay: number
// }

// interface GlobePulseProps {
//   markers?: PulseMarker[]
//   className?: string
//   speed?: number
// }

// const defaultMarkers: PulseMarker[] = [
//   { id: "pulse-1", location: [51.51, -0.13], delay: 0 },
//   { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
//   { id: "pulse-3", location: [35.68, 139.65], delay: 1 },
//   { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
// ]

// export function Globe({
//   markers = defaultMarkers,
//   className = "",
//   speed = 0.003,
// }: GlobePulseProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
//   const dragOffset = useRef({ phi: 0, theta: 0 })
//   const phiOffsetRef = useRef(0)
//   const thetaOffsetRef = useRef(0)
//   const isPausedRef = useRef(false)

//   const handlePointerDown = useCallback((e: React.PointerEvent) => {
//     pointerInteracting.current = { x: e.clientX, y: e.clientY }
//     if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
//     isPausedRef.current = true
//   }, [])

//   const handlePointerUp = useCallback(() => {
//     if (pointerInteracting.current !== null) {
//       phiOffsetRef.current += dragOffset.current.phi
//       thetaOffsetRef.current += dragOffset.current.theta
//       dragOffset.current = { phi: 0, theta: 0 }
//     }
//     pointerInteracting.current = null
//     if (canvasRef.current) canvasRef.current.style.cursor = "grab"
//     isPausedRef.current = false
//   }, [])

//   useEffect(() => {
//     const handlePointerMove = (e: PointerEvent) => {
//       if (pointerInteracting.current !== null) {
//         dragOffset.current = {
//           phi: (e.clientX - pointerInteracting.current.x) / 300,
//           theta: (e.clientY - pointerInteracting.current.y) / 1000,
//         }
//       }
//     }
//     window.addEventListener("pointermove", handlePointerMove, { passive: true })
//     window.addEventListener("pointerup", handlePointerUp, { passive: true })
//     return () => {
//       window.removeEventListener("pointermove", handlePointerMove)
//       window.removeEventListener("pointerup", handlePointerUp)
//     }
//   }, [handlePointerUp])

//   useEffect(() => {
//     if (!canvasRef.current) return
//     const canvas = canvasRef.current
//     let globe: ReturnType<typeof createGlobe> | null = null
//     let animationId: number
//     let phi = 0

//     function init() {
//       const width = canvas.offsetWidth
//       if (width === 0 || globe) return

//       globe = createGlobe(canvas, {
//       devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
//       width, height: width,
//       phi: 0, theta: 0.2, dark: 1, diffuse: 1.5,
//       mapSamples: 16000, mapBrightness: 10,
//       baseColor: [0.5, 0.5, 0.5],
//       markerColor: [0.2, 0.8, 0.9],
//       glowColor: [0.05, 0.05, 0.05],
//       markerElevation: 0,
//       markers: markers.map((m) => ({ location: m.location, size: 0.025, id: m.id })),
//       arcs: [], arcColor: [0.3, 0.85, 0.95],
//       arcWidth: 0.5, arcHeight: 0.25, opacity: 0.7,
//     })
//     function animate() {
//       if (!isPausedRef.current) phi += speed
//       globe!.update({
//         phi: phi + phiOffsetRef.current + dragOffset.current.phi,
//         theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
//       })
//       animationId = requestAnimationFrame(animate)
//     }
//       animate()
//       setTimeout(() => canvas && (canvas.style.opacity = "1"))
//     }

//     if (canvas.offsetWidth > 0) {
//       init()
//     } else {
//       const ro = new ResizeObserver((entries) => {
//         if (entries[0]?.contentRect.width > 0) {
//           ro.disconnect()
//           init()
//         }
//       })
//       ro.observe(canvas)
//     }

//     return () => {
//       if (animationId) cancelAnimationFrame(animationId)
//       if (globe) globe.destroy()
//     }
//   }, [markers, speed])

//   return (
//     <div className={`relative aspect-square select-none ${className}`}>
//       <style>{`
//         @keyframes pulse-expand {
//           0% { transform: scaleX(0.3) scaleY(0.3); opacity: 0.8; }
//           100% { transform: scaleX(1.5) scaleY(1.5); opacity: 0; }
//         }
//       `}</style>
//       <canvas
//         ref={canvasRef}
//         onPointerDown={handlePointerDown}
//         style={{
//           width: "100%", height: "100%", cursor: "grab", opacity: 0,
//           transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none",
//         }}
//       />
//       {markers.map((m) => (
//         <div
//           key={m.id}
//           style={{
//             position: "absolute",
//             positionAnchor: `--cobe-${m.id}`,
//             bottom: "anchor(center)",
//             left: "anchor(center)",
//             translate: "-50% 50%",
//             width: 40, height: 40,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             pointerEvents: "none" as const,
//             opacity: `var(--cobe-visible-${m.id}, 0)`,
//             filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
//             transition: "opacity 0.4s, filter 0.4s",
//           }}
//         >
//           <span style={{
//             position: "absolute", inset: 0,
//             border: "2px solid #33ccdd", borderRadius: "50%", opacity: 0,
//             animation: `pulse-expand 2s ease-out infinite ${m.delay}s`,
//           }} />
//           <span style={{
//             position: "absolute", inset: 0,
//             border: "2px solid #33ccdd", borderRadius: "50%", opacity: 0,
//             animation: `pulse-expand 2s ease-out infinite ${m.delay + 0.5}s`,
//           }} />
//           <span style={{
//             width: 10, height: 10, background: "#33ccdd", borderRadius: "50%",
//             boxShadow: "0 0 0 3px #111, 0 0 0 5px #33ccdd",
//           }} />
//         </div>
//       ))}
//     </div>
//   )
// }






// "use client";

// // import { Button } from "@/components/ui/button";
// // import { ArrowRight } from "lucide-react";
// import createGlobe, { COBEOptions } from "cobe"
// import { useCallback, useEffect, useRef, useState } from "react"
// import { cn } from "@/lib/utils"

// // export default function Featured_05() {
// //   return (
// //     <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-muted border border-gray-200 dark:border-gray-800 shadow-md px-6 py-16 md:px-16 md:py-24 mt-48">
// //       <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
// //         <div className="z-10 max-w-xl text-left">
// //           <h1 className="text-3xl font-normal text-gray-900 dark:text-white">
// //             Build with <span className="text-primary">Ruixen UI</span>{" "}
// //             <span className="text-gray-500 dark:text-gray-400">Empower your team with fast, elegant, and scalable UI components. Ruixen UI brings simplicity and performance to your modern apps.</span>
// //           </h1>
// //           <Button className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:bg-black">
// //             Join Today <ArrowRight className="h-4 w-4" />
// //           </Button>
// //         </div>
// //         <div className="relative h-45 w-full max-w-xl">
// //           <Globe className="absolute -bottom-20 -right-40 scale-150" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // const GLOBE_CONFIG: COBEOptions = {
// //   width: 800,
// //   height: 800,
// //   devicePixelRatio: 2,
// //   phi: 0,
// //   theta: 0.3,
// //   dark: 0,
// //   diffuse: 0.4,
// //   mapSamples: 16000,
// //   mapBrightness: 1.2,
// //   baseColor: [1, 1, 1],
// //   markerColor: [251 / 255, 100 / 255, 21 / 255],
// //   glowColor: [1, 1, 1],
// //   markers: [
// //     { location: [14.5995, 120.9842], size: 0.03 },
// //     { location: [19.076, 72.8777], size: 0.1 },
// //     { location: [23.8103, 90.4125], size: 0.05 },
// //     { location: [30.0444, 31.2357], size: 0.07 },
// //     { location: [39.9042, 116.4074], size: 0.08 },
// //     { location: [-23.5505, -46.6333], size: 0.1 },
// //     { location: [19.4326, -99.1332], size: 0.1 },
// //     { location: [40.7128, -74.006], size: 0.1 },
// //     { location: [34.6937, 135.5022], size: 0.05 },
// //     { location: [41.0082, 28.9784], size: 0.06 },
// //   ],
// // }


// const GLOBE_CONFIG: COBEOptions = {
//   width: 800,
//   height: 800,
//   devicePixelRatio: 2,
//   phi: 0,
//   theta: 0.3,
//   dark: 1,
//   diffuse: 0.4,
//   mapSamples: 16000,
//   mapBrightness: 6,
//   baseColor: [0.1, 0.1, 0.1],
//   markerColor: [251 / 255, 100 / 255, 21 / 255],
//   glowColor: [0.15, 0.15, 0.15],
//   markers: [
//     { location: [14.5995, 120.9842], size: 0.03 },
//     { location: [19.076, 72.8777], size: 0.1 },
//     { location: [23.8103, 90.4125], size: 0.05 },
//     { location: [30.0444, 31.2357], size: 0.07 },
//     { location: [39.9042, 116.4074], size: 0.08 },
//     { location: [-23.5505, -46.6333], size: 0.1 },
//     { location: [19.4326, -99.1332], size: 0.1 },
//     { location: [40.7128, -74.006], size: 0.1 },
//     { location: [34.6937, 135.5022], size: 0.05 },
//     { location: [41.0082, 28.9784], size: 0.06 },
//   ],
// }

// export function Globe({
//   className,
//   config = GLOBE_CONFIG,
// }: {
//   className?: string
//   config?: COBEOptions
// }) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)
//   const pointerInteracting = useRef<number | null>(null)
//   const pointerInteractionMovement = useRef(0)
//   const phiRef = useRef(0)
//   const widthRef = useRef(0)
//   const [r, setR] = useState(0)

//   const updatePointerInteraction = useCallback((value: number | null) => {
//     pointerInteracting.current = value
//     if (canvasRef.current) {
//       canvasRef.current.style.cursor = value === null ? "grab" : "grabbing"
//     }
//   }, [])

//   const updateMovement = useCallback((clientX: number) => {
//     if (pointerInteracting.current !== null) {
//       const delta = clientX - pointerInteracting.current
//       pointerInteractionMovement.current = delta
//       setR(delta / 200)
//     }
//   }, [])

//   const updateSize = useCallback(() => {
//     if (canvasRef.current) {
//       widthRef.current = canvasRef.current.offsetWidth
//     }
//   }, [])

//   useEffect(() => {
//     updateSize()
//     const handleResize = () => updateSize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [updateSize])

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const globe = createGlobe(canvas, {
//       ...config,
//       width: widthRef.current * 2,
//       height: widthRef.current * 2,
//     })

//     let animationFrame = 0
//     const tick = () => {
//       if (pointerInteracting.current === null) {
//         phiRef.current += 0.005
//       }

//       globe.update({
//         phi: phiRef.current + r,
//         width: widthRef.current * 2,
//         height: widthRef.current * 2,
//       })

//       animationFrame = window.requestAnimationFrame(tick)
//     }

//     animationFrame = window.requestAnimationFrame(tick)
//     setTimeout(() => {
//       if (canvasRef.current) {
//         canvasRef.current.style.opacity = "1"
//       }
//     })

//     return () => {
//       window.cancelAnimationFrame(animationFrame)
//       globe.destroy()
//     }
//   }, [config, r])

//   return (
//     <div
//       className={cn(
//         "absolute inset-0 mx-auto aspect-square w-full max-w-150",
//         className,
//       )}
//     >
//       <canvas
//         className={cn(
//           "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]",
//         )}
//         ref={canvasRef}
//         onPointerDown={(e) =>
//           updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
//         }
//         onPointerUp={() => updatePointerInteraction(null)}
//         onPointerOut={() => updatePointerInteraction(null)}
//         onMouseMove={(e) => updateMovement(e.clientX)}
//         onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
//       />
//     </div>
//   )
// }








// fixed glob
// "use client";

// import createGlobe, { COBEOptions } from "cobe";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { cn } from "@/lib/utils";

// const GLOBE_CONFIG: COBEOptions = {
//   width: 800,
//   height: 800,
//   devicePixelRatio: 2,
//   phi: 0,
//   theta: 0.3,
//   dark: 1,
//   diffuse: 1.2,
//   mapSamples: 16000,
//   mapBrightness: 6,
//   baseColor: [0.3, 0.3, 0.3],
//   markerColor: [1, 1, 1],
//   glowColor: [0.3, 0.3, 0.3],
//   markers: [],
// };

// type GlobeRenderState = Pick<COBEOptions, "phi" | "width" | "height">;
// type GlobeCreationOptions = COBEOptions & {
//   onRender: (state: GlobeRenderState) => void;
// };

// export function Globe({
//   className,
//   config = GLOBE_CONFIG,
// }: {
//   className?: string;
//   config?: COBEOptions;
// }) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const pointerInteracting = useRef<number | null>(null);
//   const pointerInteractionMovement = useRef(0);
//   const phiRef = useRef(0);
//   const widthRef = useRef(0);

//   const [ready, setReady] = useState(false);

//   const updatePointerInteraction = useCallback((value: number | null) => {
//     pointerInteracting.current = value;
//     if (canvasRef.current) {
//       canvasRef.current.style.cursor = value === null ? "grab" : "grabbing";
//     }
//   }, []);

//   const updateMovement = useCallback((clientX: number) => {
//     if (pointerInteracting.current !== null) {
//       pointerInteractionMovement.current = clientX - pointerInteracting.current;
//     }
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const wrapper = wrapperRef.current;
//     if (!canvas || !wrapper) return;

//     let globe: ReturnType<typeof createGlobe> | null = null;
//     let cancelled = false;

//     // The old effect measured width synchronously on mount. At that point
//     // the wrapper (nested inside absolute/flex parents) can still report
//     // 0 (or a stale) offsetWidth because the browser hasn't finished
//     // layout yet. Creating cobe with width 0 gives you the atmosphere
//     // glow but no land-dot buffer and effectively no visible rotation —
//     // exactly the symptom in the screenshot. Waiting one frame + using a
//     // ResizeObserver fixes it for good.
//     const start = () => {
//       if (cancelled) return;
//       const w = wrapper.offsetWidth;
//       if (w === 0) {
//         requestAnimationFrame(start);
//         return;
//       }
//       widthRef.current = w;

//       globe = createGlobe(canvas, {
//         ...config,
//         width: widthRef.current * 2,
//         height: widthRef.current * 2,
//         onRender: (state: GlobeRenderState) => {
//           if (pointerInteracting.current === null) {
//             phiRef.current += 0.004;
//           }
//           state.phi = phiRef.current + pointerInteractionMovement.current / 200;
//           state.width = widthRef.current * 2;
//           state.height = widthRef.current * 2;
//         },
//       } as GlobeCreationOptions);

//       requestAnimationFrame(() => setReady(true));
//     };

//     const raf = requestAnimationFrame(start);

//     const ro = new ResizeObserver(() => {
//       widthRef.current = wrapper.offsetWidth;
//     });
//     ro.observe(wrapper);

//     return () => {
//       cancelled = true;
//       cancelAnimationFrame(raf);
//       ro.disconnect();
//       globe?.destroy();
//     };
//   }, [config]);

//   return (
//     <div
//       className={cn(
//         "relative w-full h-90 sm:h-105 md:h-125 overflow-hidden flex justify-center items-start pointer-events-auto",
//         className
//       )}
//     >
//       <div
//         ref={wrapperRef}
//         className="absolute top-0 aspect-square w-175 sm:w-225 md:w-275 max-w-none"
//       >
//         <canvas
//           ref={canvasRef}
//           className={cn(
//             "w-full h-full transition-opacity duration-500 contain-[layout_paint_size]",
//             ready ? "opacity-100" : "opacity-0"
//           )}
//           onPointerDown={(e) =>
//             updatePointerInteraction(
//               e.clientX - pointerInteractionMovement.current
//             )
//           }
//           onPointerUp={() => updatePointerInteraction(null)}
//           onPointerOut={() => updatePointerInteraction(null)}
//           onMouseMove={(e) => updateMovement(e.clientX)}
//           onTouchMove={(e) =>
//             e.touches[0] && updateMovement(e.touches[0].clientX)
//           }
//         />
//       </div>

//       <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black via-black/80 to-transparent pointer-events-none" />
//     </div>
//   );
// }

// export default Globe;





// final fixed code of glob 
"use client";

import type { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
// Same half-globe design, a bit brighter, and no markers (orange dots removed).
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.5, // was 1.2  -> more light on the globe
  mapSamples: 12000, // was 16000 -> lighter on the GPU, dots still dense
  mapBrightness: 8, // was 6    -> land dots stand out more
  baseColor: [0.35, 0.35, 0.35], // was 0.3
  markerColor: [1, 1, 1],
  glowColor: [0.6, 0.6, 0.6], // was 0.3 -> brighter edge glow
  markers: [],
};

// Performance knobs
const MAX_DPR = 1.5; // canvas resolution cap (2 => sharper but much heavier)
const ROTATION_SPEED = 0.00024; // radians per ms (~0.004 per frame at 60fps)

type GlobeInstance = ReturnType<typeof import("cobe").default>;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  // Keep latest config in a ref so an inline `config` prop never
  // destroys and recreates the WebGL globe on every parent render.
  const configRef = useRef(config);

  // Ref is updated in an effect (not during render). This effect is declared
  // before the main one below, so it always runs first.
  useEffect(() => {
    configRef.current = config;
  }, [config]);

  const [ready, setReady] = useState(false);

  const updatePointerInteraction = useCallback((value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value === null ? "grab" : "grabbing";
    }
  }, []);

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      pointerInteractionMovement.current = clientX - pointerInteracting.current;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !canvas || !wrapper) return;

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let globe: GlobeInstance | null = null;
    let destroyed = false;
    let initStarted = false;
    let isVisible = false;
    let loopRaf = 0;
    let initRaf = 0;
    let lastTime = 0;

    // --- render loop (runs only while the globe is on screen) --------------
    const tick = (now: number) => {
      if (destroyed || !globe || !isVisible) {
        loopRaf = 0;
        return;
      }

      // time-based rotation: same speed on 60Hz / 120Hz screens
      const delta = lastTime ? Math.min(now - lastTime, 50) : 16.7;
      lastTime = now;

      if (!reduceMotion && pointerInteracting.current === null) {
        phiRef.current += delta * ROTATION_SPEED;
      }

      globe.update({
        phi: phiRef.current + pointerInteractionMovement.current / 200,
        width: widthRef.current * dpr,
        height: widthRef.current * dpr,
      });

      loopRaf = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!loopRaf && globe && isVisible) {
        lastTime = 0;
        loopRaf = requestAnimationFrame(tick);
      }
    };

    const stopLoop = () => {
      cancelAnimationFrame(loopRaf);
      loopRaf = 0;
      lastTime = 0;
    };

    // --- lazy init: load cobe + create WebGL only when needed --------------
    const init = async () => {
      if (initStarted) return;
      initStarted = true;

      // cobe is loaded on demand, so it no longer blocks the first paint
      const { default: createGlobe } = await import("cobe");
      if (destroyed) return;

      const create = () => {
        if (destroyed) return;

        const w = wrapper.offsetWidth;
        if (w === 0) {
          // layout not ready yet -> try again next frame
          initRaf = requestAnimationFrame(create);
          return;
        }
        widthRef.current = w;

        globe = createGlobe(canvas, {
          ...configRef.current,
          devicePixelRatio: dpr,
          width: w * dpr,
          height: w * dpr,
        });

        setReady(true);
        startLoop();
      };

      create();
    };

    // --- only run while visible (saves CPU/GPU when scrolled away) ---------
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          init();
          startLoop();
        } else {
          stopLoop();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(container);

    const ro = new ResizeObserver(() => {
      widthRef.current = wrapper.offsetWidth;
    });
    ro.observe(wrapper);

    return () => {
      destroyed = true;
      stopLoop();
      cancelAnimationFrame(initRaf);
      io.disconnect();
      ro.disconnect();
      globe?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-90 sm:h-105 md:h-125 overflow-hidden flex justify-center items-start pointer-events-auto",
        className
      )}
    >
      <div
        ref={wrapperRef}
        className="absolute top-0 aspect-square w-175 sm:w-225 md:w-275 max-w-none"
      >
        <canvas
          ref={canvasRef}
          style={{ touchAction: "pan-y" }} // page still scrolls vertically on mobile
          className={cn(
            "w-full h-full transition-opacity duration-500 contain-[layout_paint_size]",
            ready ? "opacity-100" : "opacity-0"
          )}
          onPointerDown={(e) =>
            updatePointerInteraction(
              e.clientX - pointerInteractionMovement.current
            )
          }
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => updateMovement(e.clientX)}
          onTouchMove={(e) =>
            e.touches[0] && updateMovement(e.touches[0].clientX)
          }
        />
      </div>

      {/* bottom fade – keeps the half-globe look */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black via-black/80 to-transparent pointer-events-none" />
    </div>
  );
}

export default Globe;






// // number 2 glob
// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// /**
//  * Globe.tsx
//  * ---------------------------------------------------------------------------
//  * A rotating, dot-matrix "data globe" rendered with raw Three.js / WebGL.
//  * ---------------------------------------------------------------------------
//  */

// type GlobeProps = {
//   className?: string;
// };

// const CONTINENTS: Array<{
//   latMin: number;
//   latMax: number;
//   lonMin: number;
//   lonMax: number;
//   fill: number;
// }> = [
//   { latMin: 10, latMax: 72, lonMin: -168, lonMax: -52, fill: 0.55 }, // N America
//   { latMin: -56, latMax: 12, lonMin: -82, lonMax: -34, fill: 0.5 }, // S America
//   { latMin: 35, latMax: 71, lonMin: -11, lonMax: 42, fill: 0.62 }, // Europe
//   { latMin: -35, latMax: 37, lonMin: -18, lonMax: 51, fill: 0.55 }, // Africa
//   { latMin: 5, latMax: 77, lonMin: 42, lonMax: 180, fill: 0.5 }, // Asia
//   { latMin: -45, latMax: -10, lonMin: 112, lonMax: 154, fill: 0.55 }, // Australia
//   { latMin: -66, latMax: -60, lonMin: -180, lonMax: 180, fill: 0.15 }, // Antarctica hint
// ];

// function hashNoise(x: number, y: number): number {
//   const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
//   return s - Math.floor(s);
// }

// function isLand(lat: number, lon: number): boolean {
//   for (const c of CONTINENTS) {
//     if (lat >= c.latMin && lat <= c.latMax && lon >= c.lonMin && lon <= c.lonMax) {
//       const edgeLat = Math.min(lat - c.latMin, c.latMax - lat) / (c.latMax - c.latMin);
//       const edgeLon = Math.min(lon - c.lonMin, c.lonMax - lon) / (c.lonMax - c.lonMin);
//       const edgeFactor = Math.min(edgeLat, edgeLon) * 4;
//       const n = hashNoise(lat * 0.7, lon * 0.7);
//       if (edgeFactor > 1 || n < c.fill + edgeFactor * 0.5) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
//   const phi = (90 - lat) * (Math.PI / 180);
//   const theta = (lon + 180) * (Math.PI / 180);
//   const x = -radius * Math.sin(phi) * Math.cos(theta);
//   const y = radius * Math.cos(phi);
//   const z = radius * Math.sin(phi) * Math.sin(theta);
//   return new THREE.Vector3(x, y, z);
// }

// function makeDotTexture(): THREE.Texture {
//   const size = 64;
//   const canvas = document.createElement("canvas");
//   canvas.width = size;
//   canvas.height = size;
//   const ctx = canvas.getContext("2d")!;
//   ctx.clearRect(0, 0, size, size);
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2 - 4, 0, Math.PI * 2);
//   ctx.fillStyle = "#ffffff";
//   ctx.fill();
//   const tex = new THREE.CanvasTexture(canvas);
//   tex.needsUpdate = true;
//   return tex;
// }

// function buildGlobeGroup(): THREE.Group {
//   const group = new THREE.Group();
//   const radius = 2.4;
//   const dotTex = makeDotTexture();

//   // --- Base ocean grid ---
//   const oceanPositions: number[] = [];
//   const latStep = 4.5;
//   for (let lat = -88; lat <= 88; lat += latStep) {
//     const circumferenceFactor = Math.cos((lat * Math.PI) / 180);
//     const lonStep = Math.max(4.5, 4.5 / Math.max(circumferenceFactor, 0.12));
//     for (let lon = -180; lon < 180; lon += lonStep) {
//       const v = latLonToVector3(lat, lon, radius);
//       oceanPositions.push(v.x, v.y, v.z);
//     }
//   }
//   const oceanGeo = new THREE.BufferGeometry();
//   oceanGeo.setAttribute("position", new THREE.Float32BufferAttribute(oceanPositions, 3));
//   const oceanMat = new THREE.PointsMaterial({
//     map: dotTex,
//     size: 0.028,
//     color: new THREE.Color("#3a4048"),
//     transparent: true,
//     opacity: 0.55,
//     depthWrite: false,
//     sizeAttenuation: true,
//   });
//   group.add(new THREE.Points(oceanGeo, oceanMat));

//   // --- Land dots ---
//   const landPositions: number[] = [];
//   const landLatStep = 1.6;
//   for (let lat = -88; lat <= 88; lat += landLatStep) {
//     const circumferenceFactor = Math.cos((lat * Math.PI) / 180);
//     const lonStep = Math.max(1.6, 1.6 / Math.max(circumferenceFactor, 0.12));
//     for (let lon = -180; lon < 180; lon += lonStep) {
//       if (isLand(lat, lon)) {
//         const v = latLonToVector3(lat, lon, radius * 1.002);
//         landPositions.push(v.x, v.y, v.z);
//       }
//     }
//   }
//   const landGeo = new THREE.BufferGeometry();
//   landGeo.setAttribute("position", new THREE.Float32BufferAttribute(landPositions, 3));
//   const landMat = new THREE.PointsMaterial({
//     map: dotTex,
//     size: 0.032,
//     color: new THREE.Color("#e9edf1"),
//     transparent: true,
//     opacity: 0.95,
//     depthWrite: false,
//     sizeAttenuation: true,
//   });
//   group.add(new THREE.Points(landGeo, landMat));

//   // --- Wireframe rings ---
//   const wireMat = new THREE.LineBasicMaterial({
//     color: new THREE.Color("#2a2f36"),
//     transparent: true,
//     opacity: 0.35,
//   });
//   for (let lat = -60; lat <= 60; lat += 30) {
//     const pts: THREE.Vector3[] = [];
//     for (let lon = -180; lon <= 180; lon += 4) {
//       pts.push(latLonToVector3(lat, lon, radius * 1.001));
//     }
//     group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
//   }
//   for (let lon = -180; lon < 180; lon += 30) {
//     const pts: THREE.Vector3[] = [];
//     for (let lat = -90; lat <= 90; lat += 4) {
//       pts.push(latLonToVector3(lat, lon, radius * 1.001));
//     }
//     group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
//   }

//   return group;
// }

// export default function Globe({ className }: GlobeProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       42,
//       container.clientWidth / container.clientHeight,
//       0.1,
//       100
//     );
//     camera.position.set(0, 0.15, 6.2);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     container.appendChild(renderer.domElement);

//     const globeGroup = buildGlobeGroup();
//     globeGroup.rotation.y = -0.6;
//     globeGroup.rotation.x = 0.15;
//     scene.add(globeGroup);

//     let frameId = 0;
//     const animate = () => {
//       globeGroup.rotation.y += 0.0011;
//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     const handleResize = () => {
//       if (!container) return;
//       camera.aspect = container.clientWidth / container.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(container.clientWidth, container.clientHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       if (renderer.domElement.parentNode === container) {
//         container.removeChild(renderer.domElement);
//       }
//       globeGroup.traverse((obj) => {
//         if (obj instanceof THREE.Points || obj instanceof THREE.Line) {
//           obj.geometry.dispose();
//           const mat = obj.material as THREE.Material | THREE.Material[];
//           if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
//           else mat.dispose();
//         }
//       });
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={containerRef} className={className} style={{ width: "100%", height: "100%" }} />;
// }