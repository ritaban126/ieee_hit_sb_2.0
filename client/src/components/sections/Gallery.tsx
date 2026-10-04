// import {
//   GridBody,
//   DraggableContainer,
//   GridItem,
// } from "@/components/ui/GalleryUi";
// import Image from "next/image";

// const images = [
//   {
//     id: 1,
//     alt: "Silhouette of a traditional Japanese pagoda at sunset",
//     src: "/gallery/B.jpg",
//   },
//   {
//     id: 2,
//     alt: "Himeji Castle on a clear day",
//     src: "/gallery/C.jpg",
//   },
//   {
//     id: 3,
//     alt: "Red Car",
//     src: "/gallery/D.jpg",
//   },
//   {
//     id: 4,
//     alt: "Woman in kimono standing beside a traditional Japanese house",
//     src: "/gallery/E.jpg",
//   },
//   {
//     id: 5,
//     alt: "Group of men in black suits inside a hallway",
//     src: "/gallery/F.jpg",
//   },
//   {
//     id: 6,
//     alt: "Crowd walking through a street decorated with red lanterns",
//     src: "/gallery/I.jpg",
//   },
//   {
//     id: 7,
//     alt: "Timelapse of traffic lights and buildings at night",
//     src: "/gallery/J.jpg",
//   },
//   {
//     id: 8,
//     alt: "Close-up of orange and black wooden torii gate posts",
//     src: "/gallery/M.jpg",
//   },
//   {
//     id: 9,
//     alt: "Historic building with brown and white stone exterior in daylight",
//     src: "/gallery/O.jpg",
//   },
//   {
//     id: 10,
//     alt: "Lantern glowing on a quiet street at night",
//     src: "/gallery/P.jpg",
//   },
//   {
//     id: 11,
//     alt: "View of Osaka Castle with clear sky backdrop",
//     src: "/gallery/Q.jpg",
//   },
//   {
//     id: 12,
//     alt: "Pagoda silhouetted during golden hour",
//     src: "/gallery/R.jpg",
//   },
//   {
//     id: 13,
//     alt: "Himeji Castle seen from a distance",
//     src: "/gallery/S.jpg",
//   },
//   {
//     id: 14,
//     alt: "Torii gate pillars in vibrant orange and black",
//     src: "/gallery/T.jpg",
//   },
//   {
//     id: 15,
//     alt: "Traditional Japanese home under daylight",
//     src: "/gallery/U.jpg",
//   },
//   {
//     id: 16,
//     alt: "Women wearing kimono beside wooden house",
//     src: "/gallery/W.jpg",
//   },
//   {
//     id: 17,
//     alt: "People passing under hanging red lanterns at dusk",
//     src: "/gallery/X.jpg",
//   },
//   {
//     id: 18,
//     alt: "Stepping stone path winding through lush forest",
//     src: "/gallery/Y.jpg",
//   },
// ];

// const Gallery = () => {
//   return (
//     <DraggableContainer variant="masonry">
//       <GridBody>
//         {images.map((image) => (
//           <GridItem
//             key={image.id}
//             className="relative h-54 w-36 overflow-hidden rounded-xl border border-zinc-800 md:h-96 md:w-64"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="pointer-events-none absolute h-full w-full object-cover"
//             />
//           </GridItem>
//         ))}
//       </GridBody>
//     </DraggableContainer>
//   );
// };

// export { Gallery };









"use client"

import * as React from "react"

import {
  HTMLMotionProps,
  MotionValue,
  Transition,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
} satisfies Transition

const blurVariants: Variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
}

const ContainerScrollContext =
  React.createContext<ContainerScrollContextValue | undefined>(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)

  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }

  return context
}

export const ContainerScroll = ({
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center top",
          transformStyle: "preserve-3d",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}

ContainerScroll.displayName = "ContainerScroll"

export const ContainerSticky = ({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "sticky left-0 top-0 min-h-[120vh] w-full overflow-hidden",
        className
      )}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "center top",
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
        ...style,
      }}
      {...props}
    />
  )
}

ContainerSticky.displayName = "ContainerSticky"

export const GalleryContainer = ({
  children,
  className,
  style,
  ...props
}: HTMLMotionProps<"div">) => {
  const { scrollYProgress } = useContainerScrollContext()

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [75, 0]
  )

  const scale = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [1.2, 1]
  )

  return (
    <motion.div
      className={cn(
        "relative grid size-full grid-cols-3 gap-2 rounded-2xl",
        className
      )}
      style={{
        rotateX,
        scale,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

GalleryContainer.displayName = "GalleryContainer"

export const GalleryCol = ({
  className,
  style,
  yRange = ["0%", "-10%"],
  ...props
}: HTMLMotionProps<"div"> & {
  yRange?: string[]
}) => {
  const { scrollYProgress } = useContainerScrollContext()

  const y = useTransform(
    scrollYProgress,
    [0.5, 1],
    yRange
  )

  return (
    <motion.div
      className={cn(
        "relative flex w-full flex-col gap-2",
        className
      )}
      style={{
        y,
        ...style,
      }}
      {...props}
    />
  )
}

GalleryCol.displayName = "GalleryCol"

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, viewport, transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        ...viewport,
      }}
      transition={{
        ...transition,
        staggerChildren: transition?.staggerChildren ?? 0.2,
      }}
      {...props}
    />
  )
})

ContainerStagger.displayName = "ContainerStagger"

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={blurVariants}
      transition={transition ?? SPRING_CONFIG}
      {...props}
    />
  )
})

ContainerAnimated.displayName = "ContainerAnimated"