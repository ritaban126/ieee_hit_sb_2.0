"use client";

import {
  animate,
  cubicBezier,
  motion,
  useMotionValue,
  wrap,
} from "motion/react";
import {
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

//Types
type variants = "default" | "masonry" | "polaroid";

// Create Context
const GridVariantContext = createContext<variants | undefined>(undefined);

//Motion Variants
const rowVariants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: () => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: Math.random() + 1.5,
      duration: 1.4,
      ease: cubicBezier(0.18, 0.71, 0.11, 1),
    },
  }),
};

export const DraggableContainer = ({
  className,
  children,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: variants;
}) => {
  // outer wrapper: this is what actually sits in page flow and defines the
  // scrollable "window" the gallery lives in — wheel events are scoped to
  // THIS element only, never to window, so the rest of the page scrolls normally.
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isDragging, setIsDragging] = useState(false);
  const handleIsDragging = () => setIsDragging(true);
  const handleIsNotDragging = () => setIsDragging(false);

  useEffect(() => {
    const container = ref.current?.getBoundingClientRect();
    if (!container) return;

    const { width, height } = container;

    const xDrag = x.on("change", (latest) => {
      const wrappedX = wrap(-(width / 2), 0, latest);
      x.set(wrappedX);
    });

    const yDrag = y.on("change", (latest) => {
      const wrappedY = wrap(-(height / 2), 0, latest);
      y.set(wrappedY);
    });

    // FIX: listener now lives on the wrapper (the gallery box itself), not
    // on window. This means scrolling anywhere else on the page (header,
    // rest of the site) is completely untouched — only scrolling while the
    // cursor is over the gallery moves it.
    const wrapperEl = wrapperRef.current;

    const handleWheelScroll = (event: WheelEvent) => {
      // keep the page from also scrolling while the user pans the gallery
      event.preventDefault();
      if (isDragging) return;

      // FIX: much shorter duration (was 1.2s) so each scroll tick responds
      // immediately instead of feeling slow/laggy; multiplier tuned down
      // slightly to match the snappier duration.
      animate(y, y.get() - event.deltaY * 1.6, {
        type: "tween",
        duration: 0.45,
        ease: cubicBezier(0.18, 0.71, 0.11, 1),
      });
    };

    wrapperEl?.addEventListener("wheel", handleWheelScroll, { passive: false });
    return () => {
      xDrag();
      yDrag();
      wrapperEl?.removeEventListener("wheel", handleWheelScroll);
    };
  }, [x, y, isDragging]);

  return (
    <GridVariantContext.Provider value={variant}>
      <div ref={wrapperRef} className="h-full w-full overflow-hidden">
        <motion.div className="h-full w-full overflow-hidden">
          <motion.div
            className={cn(
              // FIX: removed the bg-[#141414] fill so the gallery shows
              // whatever background the page behind it has (black).
              "grid h-fit w-fit cursor-grab grid-cols-[repeat(2,1fr)] active:cursor-grabbing will-change-transform",
              className,
            )}
            drag
            dragMomentum={true}
            dragTransition={{
              timeConstant: 200,
              power: 0.28,
              restDelta: 0,
              bounceStiffness: 0,
            }}
            onMouseDown={handleIsDragging}
            onMouseUp={handleIsNotDragging}
            onMouseLeave={handleIsNotDragging}
            style={{ x, y }}
            ref={ref}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </GridVariantContext.Provider>
  );
};

export const GridItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variant = useContext(GridVariantContext);

  const gridItemStyles = cva(
    "overflow-hidden hover:cursor-pointer w-full h-full will-change-transform",
    {
      variants: {
        variant: {
          default: "rounded-sm",
          masonry: "even:mt-[60%] rounded-sm ",
          polaroid:
            "border-10 border-b-28 border-white shadow-xl even:rotate-3 odd:-rotate-2 hover:rotate-0 transition-transform ease-out duration-300 even:mt-[60%]",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  );

  return (
    <motion.div
      className={cn(gridItemStyles({ variant, className }))}
      variants={rowVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export const GridBody = memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const variant = useContext(GridVariantContext);

    const gridBodyStyles = cva("grid grid-cols-[repeat(6,1fr)] h-fit w-fit", {
      variants: {
        variant: {
          default: "gap-14 p-7 md:gap-28 md:p-14",
          masonry: "gap-x-14 px-7 md:gap-x-28 md:px-14",
          polaroid: "gap-x-14 px-7 md:gap-x-28 md:px-14",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    });

    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={cn(gridBodyStyles({ variant, className }))}
          >
            {children}
          </div>
        ))}
      </>
    );
  },
);

GridBody.displayName = "GridBody";
