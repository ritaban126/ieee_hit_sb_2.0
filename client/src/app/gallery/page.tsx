// import Footer from "@/components/sections/Footer";
// import { Gallery } from "@/components/sections/Gallery";
// import Navbar from "@/components/sections/Navbar";
// import React from "react";


// export default function Page() {
//   return (
//     <>
//     <Navbar/>
//     {/* // relative wrapper: the two guide lines below are absolutely
//     // positioned against THIS element, so they run the full height of
//     // the page (header + gallery) and scroll together with the content —
//     // they no longer jump around relative to a small inner box. */}
//     <div className="relative min-h-screen bg-black text-white">

//       {/* side guide lines — same x-position pattern used across the rest of the site */}
//       <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
//         <div className="w-px bg-zinc-800"></div>
//         <div className="w-px bg-zinc-800"></div>
//       </div>

//       <div className="relative z-10 flex min-h-screen flex-col justify-between">

//         {/* Gallery Header Section (Centered on screen as requested) */}
//         <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
//           <div className="max-w-4xl mx-auto space-y-6">

//             {/* Top small badge */}
//             {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono tracking-widest text-neutral-400 uppercase">
//               <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//               IEEE HIT SB • Visual Archive
//             </div> */}

//             {/* Main Huge Center Header */}
//             <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
//               Moments of innovation, workshops, and technical excellence.
//             </h1>

//             {/* Subtitle / Description */}
//             <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
//               A glimpse into our journey of building, learning, and leading the tech community forward. Explore our events, hackathons, and collaborative milestones.
//             </p>

//           </div>
//         </section>

//         {/* Gallery — confined between the two guide lines (same padding as every
//             other section) and given a fixed-height box, so images can never
//             drag past the lines or cover them */}
//         <section className="w-full px-8 pb-24 md:px-20 lg:px-28 xl:px-36">
//           <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-zinc-800 md:h-[80vh]">
//             <Gallery />
//           </div>
//         </section>

//       </div>
//       <Footer/>
//     </div>
//     </>
//   );
// }




// import { ContainerAnimated,
//   ContainerScroll,
//   ContainerStagger,
//   ContainerSticky,
//   GalleryCol,
//   GalleryContainer } from "@/components/sections/Gallery";
// import { Button } from "@/components/ui/button"
// import { VideoIcon } from "lucide-react"

// const IMAGES_1 = [
//   "https://cdn.21st.dev/assets/mirror/db/db8e72b6f6e2f325ec74898fdab6a02f3c0ba7962f3cf0b89f0ee3b22aa2a083.jpg",
//   "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
//   "https://cdn.21st.dev/assets/mirror/f9/f992831c368ea7e12c51417be55fda812d1502e9bb6730d94bc6b1e0c6a2ae57.jpg",
//   "https://cdn.21st.dev/assets/mirror/8c/8c0a104646b9b9d6680c2222cf84cfd3e4e10ada11fd0d0759093db9a69cfd3d.jpg",
// ]
// const IMAGES_2 = [
//   "https://cdn.21st.dev/assets/mirror/4e/4eb85747c8113c6edcbec2671a5aa4e62d0569488ad75652c16dd7598a1196e1.jpg",
//   "https://cdn.21st.dev/assets/mirror/ab/ab1fd4fd007ecad2ad9a5350341b1013589f05f8f30b8fdd4a35728a800e9fce.jpg",
//   "https://cdn.21st.dev/assets/mirror/4d/4de1f4952d0420f95ade25fc723d8042ece00762429cdccb79fd3a29ffe5f33d.jpg",
//   "https://cdn.21st.dev/assets/mirror/53/53f281293f06536d7f60b1786b0a39404390a55e1675e99e089d2b72234cf8cb.jpg",
// ]
// const IMAGES_3 = [
//   "https://cdn.21st.dev/assets/mirror/35/358a63f0c4cb478488bdf1bfb90ed5fd785c28bcddbf058b4a7287fe8ed75fff.jpg",
//   "https://cdn.21st.dev/assets/mirror/e8/e81126a3c16766e36ed84d2226b0b11507e86b999d4d07cd7e88c0f04e14c0eb.jpg",
//   "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
//   "https://cdn.21st.dev/assets/mirror/85/85a98f8253097be06cfdaa5a312c644d4df00749aad17dda4468ab8d3dce7bd0.jpg",
// ]

// export const DemoVariant1 = () => {
//   return (
//     <div className="relative bg-white ">
//       <ContainerStagger className="relative z-9999 -mb-12 place-self-center px-6 pt-12 text-center">
//         <ContainerAnimated>
//           <h1 className="font-serif text-4xl font-extralight  md:text-5xl">
//             Your{" "}
//             <span className=" font-serif font-extralight text-indigo-600">
//               one source
//             </span>
//           </h1>
//         </ContainerAnimated>
//         <ContainerAnimated>
//           <h1 className="font-serif text-4xl font-extralight md:text-5xl">
//             for all your designs
//           </h1>
//         </ContainerAnimated>

//         <ContainerAnimated className="my-4">
//           <p className="leading-normal tracking-tight text-muted-foreground">
//             No waste of time and money, we provide you with
//             <br /> collection of designs to plan your next project.
//           </p>
//         </ContainerAnimated>

//         <ContainerAnimated>
//           <Button
//             className="gap-1 bg-indigo-700"
//           >
//             Book free call <VideoIcon className="size-4  " />
//           </Button>
//           <Button variant={"link"} className="text-sencondary">
//             About Us
//           </Button>
//         </ContainerAnimated>
//       </ContainerStagger>
//       <div className="pointer-events-none absolute z-10 h-[70vh] w-full "
//       style={{
//             background: "linear-gradient(to right, gray, rebeccapurple, blue)",
//             filter: "blur(84px)",
//             mixBlendMode: "screen",
//           }}
//       />

//       <ContainerScroll className="relative h-[350vh]">
//         <ContainerSticky className="h-svh">
//           <GalleryContainer className="">
//             <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
//               {IMAGES_1.map((imageUrl, index) => (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   key={index}
//                   className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
//                   src={imageUrl}
//                   alt="gallery item"
//                 />
//               ))}
//             </GalleryCol>
//             <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
//               {IMAGES_2.map((imageUrl, index) => (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   key={index}
//                   className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
//                   src={imageUrl}
//                   alt="gallery item"
//                 />
//               ))}
//             </GalleryCol>
//             <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
//               {IMAGES_3.map((imageUrl, index) => (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   key={index}
//                   className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
//                   src={imageUrl}
//                   alt="gallery item"
//                 />
//               ))}
//             </GalleryCol>
//           </GalleryContainer>
//         </ContainerSticky>
//       </ContainerScroll>
//     </div>
//   )
// }









                                                                          


import { Poppins } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/sections/Gallery";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const images = [
  { id: 1, src: "/gallery/B.jpg" },
  { id: 2, src: "/gallery/C.jpg" },
  { id: 3, src: "/gallery/D.jpg" },
  { id: 4, src: "/gallery/E.jpg" },
  { id: 5, src: "/gallery/F.jpg" },
  { id: 6, src: "/gallery/I.jpg" },
  { id: 7, src: "/gallery/J.jpg" },
  { id: 8, src: "/gallery/M.jpg" },
  { id: 9, src: "/gallery/O.jpg" },
  { id: 10, src: "/gallery/P.jpg" },
  { id: 11, src: "/gallery/Q.jpg" },
  { id: 12, src: "/gallery/R.jpg" },
  { id: 13, src: "/gallery/S.jpg" },
  { id: 14, src: "/gallery/T.jpg" },
  { id: 15, src: "/gallery/U.jpg" },
  { id: 16, src: "/gallery/W.jpg" },
  { id: 17, src: "/gallery/X.jpg" },
  { id: 18, src: "/gallery/Y.jpg" },
];

// 18 photos split across the 3 columns (6 each)
const IMAGES_1 = images.slice(0, 6);
const IMAGES_2 = images.slice(6, 12);
const IMAGES_3 = images.slice(12, 18);


const NAV_H = 80;
const VIEW_H = `calc(100svh - ${NAV_H}px)`;
const IMG_H = `calc((100svh - ${NAV_H}px - 16px) / 3)`;
const END_Y = "-50%";

const Photo = ({ id, src }: { id: number; src: string }) => (
  <div
    className="relative block w-full shrink-0 overflow-hidden rounded-md shadow"
    style={{ height: IMG_H }}
  >
    <Image
      src={src}
      alt={`IEEE HIT SB gallery photo ${id}`}
      fill
      sizes="34vw"
      quality={70}
      loading="eager"
      className="object-cover"
    />
  </div>
);

export default function Page() {
  return (
    <>
      <Navbar />

      <SectionWrapper>
        {/* overflow-x-clip (not hidden) keeps the sticky scroll effect working
            and stops the blurred glow from creating a sideways scrollbar */}
        <div
          className={`${poppins.className} relative overflow-x-clip bg-black text-white antialiased`}
        >
          <ContainerStagger className="relative z-9999 -mb-12 place-self-center px-6 pt-12 text-center">
            <ContainerAnimated>
              <h1 className="bg-linear-to-b from-white to-neutral-400 bg-clip-text pb-1 text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                Moments of innovation,{" "}
                <span className="text-neutral-500">workshops,</span>
              </h1>
            </ContainerAnimated>
            <ContainerAnimated>
              <h1 className="bg-linear-to-b from-white to-neutral-400 bg-clip-text pb-1 text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                and technical excellence.
              </h1>
            </ContainerAnimated>

            <ContainerAnimated className="my-4">
              <p className="leading-normal tracking-tight text-neutral-300">
                A glimpse into our journey of building, learning, and leading the
                tech community forward.
                <br /> Explore our events, hackathons, and collaborative
                milestones.
              </p>
            </ContainerAnimated>
          </ContainerStagger>

          {/* softer glow: darker greys + lower opacity + shorter, so photos stay visible */}
          <div
            className="pointer-events-none absolute z-10 h-[55vh] w-full"
            style={{
              background: "linear-gradient(to right, #525252, #a3a3a3, #404040)",
              filter: "blur(84px)",
              mixBlendMode: "screen",
              opacity: 0.3,
            }}
          />

          <ContainerScroll className="relative h-[350vh]">
            {/* sticks right under the navbar and is exactly VIEW_H tall */}
            <ContainerSticky
              style={{ top: NAV_H, height: VIEW_H, minHeight: VIEW_H }}
            >
              <GalleryContainer>
                <GalleryCol yRange={["0%", END_Y]}>
                  {IMAGES_1.map((image) => (
                    <Photo key={image.id} id={image.id} src={image.src} />
                  ))}
                </GalleryCol>

                {/* starts lower (staggered), ends at the same place as the others */}
                {/* <GalleryCol yRange={["8%", END_Y]}>
                  {IMAGES_2.map((image) => (
                    <Photo key={image.id} id={image.id} src={image.src} />
                  ))}
                </GalleryCol> */}
                <GalleryCol yRange={["-4%", END_Y]}>
                  {IMAGES_2.map((image) => (
                    <Photo key={image.id} id={image.id} src={image.src} />
                  ))}
                </GalleryCol>

                <GalleryCol yRange={["0%", END_Y]}>
                  {IMAGES_3.map((image) => (
                    <Photo key={image.id} id={image.id} src={image.src} />
                  ))}
                </GalleryCol>
              </GalleryContainer>
            </ContainerSticky>
          </ContainerScroll>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}