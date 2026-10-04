
// import Achivments from "@/components/sections/Achivments";
import Events from "@/components/sections/Events";
// import EventShowcase from "@/components/sections/Events";
// import Features from "@/components/sections/Features";
import Features2 from "@/components/sections/Features2";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
// import { TextHoverEffect } from "@/components/sections/IeeeText";
import Community from "@/components/sections/Membership";
// import Membership from "@/components/sections/Membership";
import Spotlight from "@/components/sections/Spotlight";
import Timeline from "@/components/sections/Timeline";
// import { FooterUi } from "@/components/ui/FooterUi";
// import Image from "next/image";


export default function Home() {
  return (
   <>
   <main className="relative bg-black">
      {/* Vertical lines - poori page ki height cover karengi */}
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
        <div className="w-px bg-zinc-800"></div>
        <div className="w-px bg-zinc-800"></div>
      </div>

      <div className="relative z-10">
        <Hero/>
        <Features2/>
        {/* <Features/> */}
        <Timeline/>
        <Events/>
        {/* <EventShowcase/> */}
        <Spotlight/>
        {/* <Achivments/> */}
        <Community/>
        {/* <Membership/> */}
        {/* <IeeeText/> */}
        {/* <div className="h-160 flex items-center justify-center">
        <TextHoverEffect text="IEEE HIT SB" />
        </div> */}
        <Footer/>
        {/* <div className="block">
        <FooterUi/>
        </div> */}
      </div>
    </main>
   </>
  );
}
