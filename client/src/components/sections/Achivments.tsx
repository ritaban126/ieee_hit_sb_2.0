"use client";

import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/ScrollAchivment";
import SectionWrapper from "../ui/SectionWrapper";

const slides: SqueezeSlide[] = [
    {
        id: "hackathon",
        title: "CircuitHack 2026 closed with 300+ builders.",
        description: "Our flagship 24-hour hackathon saw teams ship AI tools, IoT sensors, and full-stack apps across three tracks.",
        action: "Read the recap",
        overlay: <span className="text-sm font-medium text-white">CircuitHack 2026</span>,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Students collaborating at a hackathon table",
    },
    {
        id: "workshop",
        title: "18 hardware labs ran this year alone.",
        description: "From PCB design to embedded C, hands-on sessions led by seniors kept first-years building from week one.",
        action: "See the schedule",
        overlay: <span className="text-sm font-medium text-white">Workshops</span>,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Close-up of a circuit board on a workbench",
    },
    {
        id: "talks",
        title: "Alumni came back to talk shop.",
        description: "Engineers from signal processing and embedded systems backgrounds shared real career paths with current members.",
        action: "Watch the talks",
        overlay: <span className="text-sm font-medium text-white">Tech Talks</span>,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "A speaker presenting to a seated audience",
    },
    {
        id: "papers",
        title: "First research papers, submitted and reviewed.",
        description: "Mentorship paired first-time authors with seniors, taking projects from draft to presentation.",
        action: "View publications",
        overlay: <span className="text-sm font-medium text-white">Research</span>,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "A student writing notes at a desk",
    },
    {
        id: "chapters",
        title: "Robotics, WIE, and CS now share one calendar.",
        description: "Cross-chapter events made it easier for members to discover labs and workshops outside their own track.",
        action: "See all chapters",
        overlay: <span className="text-sm font-medium text-white">Chapters</span>,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "A robotics kit on a lab table",
    },
];

const Achievements = () => {
    return (
        <>
        <section className="relative text-white bg-black pt-20 pb-16 w-full">

            {/* full height side lines */}
            <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-0">
                <div className="w-px bg-zinc-800"></div>
                <div className="w-px bg-zinc-800"></div>
            </div>

            <div className="relative z-10 px-8 md:px-20 lg:px-28 xl:px-36">

                {/* header text above the carousel */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug">What&apos;s happening</h2>
                    <p className="text-zinc-500 text-lg mt-1">See the latest from the branch.</p>
                </div>

                {/* the actual squeeze carousel — arrows, scroll, and bottom
                    title/description/button are all handled inside it.
                    The wrapper below turns every image inside it black & white. */}
                <div className="[&_img]:grayscale">
                    <SqueezeCarousel
                        slides={slides}
                        label="What's happening"
                        height={340}
                        accent="#4f46e5"
                        accentForeground="#ffffff"
                    />
                </div>
            </div>
        </section>

           <SectionWrapper className="z-10">
                    <div className="w-full border-t border-zinc-800"></div>
            </SectionWrapper>
        </>
    );
};

export default Achievements;