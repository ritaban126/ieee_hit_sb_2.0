"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Search, Rss, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import EventModal from "@/components/events/EventModal";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const filters = ["All", "Workshops", "Hackathons", "Talks", "Chapters", "Press"];

const READ_MORE_URL = "https://edu.ieee.org/in-hit/";

const events = [
    {
        id: 1,
        title: "Aero-Botix 1.O",
        desc: "Teams shipped AI tools, IoT sensors, and full-stack apps across three tracks in 24 hours.",
        author: "Hackathon recap",
        date: "13th–15th September 2025",
        image: "/events/aerobotix_event1.png",
        category: "Hackathons",
        tag: "ramp",
        eventType: "Technical",
        eventDate: "31st August 2026",
        eventLocation: " Room 6102 , Electrical Department, Haldia Institute of Technology",
        description: [
            "HIT SB successfully hosted CircuitHack 2026, an immersive three-day hackathon that brought the excitement of competitive coding and hardware building to HIT. Participants explored the fascinating world of rapid prototyping through a perfect blend of software engineering, IoT sensors, and collaborative development.",
            "The event gave students the unique opportunity to design, assemble, and pitch their own working prototypes, combining technical innovation with teamwork under strict time limits.",
        ],
        images: ["/events/2024_event1.jpg", "/events/2024_event2.jpg", "/events/2025_event1.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 2,
        title: "Pscpice",
        desc: "A long-running redesign that became an exercise in components, tokens, and clearer sections.",
        author: "Kenneth Rao",
        date: "8th–9th August 2025",
        image: "/events/pspice_event2.png",
        category: "Press",
        eventType: "Technical Workshop",
        eventDate: "26th August 2026",
        eventLocation: "Offline (Haldia Institute of Technology)",
        description: [
            "IEEE HIT SB successfully conducted a two-day immersive PSpice Workshop on 8th and 9th August 2025, designed to help participants transform their circuit ideas into real-world simulations using Cadence’s powerful PSpice tool. From beginners to advanced learners, attendees gained hands-on experience in both analog and digital circuit simulation, mastering the fundamentals while exploring advanced techniques for real-world applications",
            "The workshop kicked off with an engaging blend of theory, simulation, and problem-solving, covering topics such as libraries, notations, circuit analysis, graph plotting, source configurations, and Thevenin’s theorem. As participants progressed, they explored advanced concepts including DC sources, damping, command functions, Op-Amp subcircuits, MOSFET modeling, and efficient component placement, turning classroom knowledge into functional and optimized circuits",
            "Led by Asst. Prof. Piya Roy, Asst. Prof. Alpana Barman, and guided by faculty mentors Assoc. Prof. Sandip Kumar Ojha, Assoc. Prof. Pratyay Konar, Asst. Prof. Saubhik Maulik, and Asst. Prof. Goutam Das, the sessions were interactive, insightful, and highly practical. The workshop concluded with a certificate distribution ceremony, celebrating the dedication, creativity, and technical growth of all participants, leaving them inspired to innovate and simulate with confidence.",
        ],
        images: ["/events/2024_event2.jpg", "/events/2025_event2.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 3,
        title: "Virtual Talk Session on Edge Device Development &Their Advantages",
        desc: "As membership passes 500, we're giving every sub-committee more say in what we build next.",
        author: "Karri Iqbal",
        date: "26th July 2025",
        image: "/events/vitual_tal_event3.png",
        category: "Chapters",
        eventType: "Chapter Meet",
        eventDate: "26th August 2026",
        eventLocation: "Platform: Google Meet",
        description: [
            "IEEE HIT SB proudly hosted an exclusive online session with Mr. Sai Yamanoor, a US-based expert in embedded systems and IoT and Subject Matter Expert in Low-Cost IoT-Enabled Product Development at Cepheid on the 26th of July 2025. With his extensive experience in designing scalable automation and edge computing solutions, Mr. Yamanoor brought a wealth of knowledge and practical insights to the session.",
            "Titled “Edge Device Development & Their Advantages,” the talk explored the rapidly evolving world of edge computing, highlighting how edge devices are revolutionizing real-world applications. Participants gained firsthand understanding of designing efficient IoT solutions, integrating smart devices, and leveraging edge technology to optimize performance, reduce latency, and enhance data processing",
           "The session concluded with an interactive Q&A, where attendees had the opportunity to engage directly with Mr. Yamanoor, clarifying doubts and exploring innovative ideas. This insightful talk reflected IEEE HIT SB’s mission to connect students with global industry leaders, spark innovation, and empower aspiring engineers to explore the cutting edge of technology.",
        ],
        images: ["/events/vitual_tal_event3.png"],
        knowMoreLink: READ_MORE_URL,
    },
{
    id: 4,
    title: "SHE: Strength.Hope.Empowerment.",
    desc: "An online WIE Week event celebrating women in engineering through photography, poster making, and creative writing.",
    author: "WIE recap",
    date: "1st July 2025(WIE Week)",
    image: "/events/SHE_event4.png",
    category: "Workshops",
    eventType: "Celebrating Women in Engineering",
    eventDate: "1st–15th July 2025",
    eventLocation: "Online",
    description: [
        "IEEE HIT SB proudly hosted SHE: Strength. Hope. Empowerment, encouraging participation from 1st July 2025 to 15th July 2025, as part of WIE Week, celebrating the brilliance, resilience, and leadership of women in engineering. This unique online event showcased the creativity and vision of participants across Photography, Poster Making, and Creative Writing, all centred around the theme of Women Empowerment in STEM.",
        "The result was a vibrant display of talent and expression, where participants brought their ideas to life through compelling visuals, powerful narratives, and artistic designs. From thought-provoking essays to striking posters and captivating photographs, each entry highlighted the innovation, dedication, and creativity of budding engineers, inspiring everyone who joined the celebration.",
        "The event concluded with a lively recognition of winners and participants, applauding their contributions and passion. SHE 2025 was more than a competition—it was a heartfelt celebration of women in STEM, creativity, and leadership. Through this initiative, IEEE HIT SB continues to amplify voices, foster inclusivity, and inspire the next generation of women engineers.",
    ],
    images: ["/events/2024_event2.jpg", "/events/2024_event1.jpg", "/events/2026_event1.jpg"],
    knowMoreLink: READ_MORE_URL,
},
    {
        id: 5,
        title: "Virtual Talk Session on Putting the DevOps Standard into Practice",
        desc: "Engineers from signal processing backgrounds shared real career paths with current members.",
        author: "Tech Talks",
        date: "21st May 2025",
        image: "/events/vitual_talk_event5.png",
        category: "Talks",
        eventType: "Technical Talk",
        eventDate: "14th August 2026",
        eventLocation: "Platform: Google Meety",
        description: [
            "IEEE HIT SB successfully hosted an exclusive online session with Ms. Ruth G. Lennon, a globally recognized expert in DevOps standardization and research. Ms. Lennon, who serves as DevOps Lecturer & Researcher, Chair of NSAI WG11, ACM-W Global Past Chair, and STEM Project Lead at ATU Letterkenny, Ireland, shared her extensive experience and insights into how DevOps standards influence modern software engineering.",
        ],
        images: ["/events/vitual_talk_event5.png"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 6,
        title: "Pyduino",
        desc: "Mentorship paired first-time authors with seniors, taking projects from draft to presentation.",
        author: "Research",
        date: "Aug 8, 2026",
        image: "/events/pyduino_event6.png",
        category: "Press",
        eventType: "Technical",
        eventDate: "8th August 2026",
        eventLocation: "Room 6108 Electrical Department Haldia Institute of Technology",
        description: [
            "IEEE HIT SB successfully hosted PyDuino, a three-day interactive workshop that brought Python programming and Arduino hardware together in an exciting hands-on experience. Students dived into coding fundamentals, explored MediaPipe-based computer vision, and learned to control circuits and sensors- transforming their ideas into working tech projects.",
        ],
        images: ["/events/2025_event2.jpg", "/events/2025_event4.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 7,
        title: "Interagado",
        desc: "Cross-chapter events made it easier for members to discover labs outside their own track.",
        author: "Chapters",
        date: " 9th April 2025 Time: 5:00 PM",
        image: "/events/integrado_event7.png",
        category: "Chapters",
        eventType: "Chapter Meet",
        eventDate: "30th July 2026",
        eventLocation: "Electrical Department, Haldia Institute of Technology",
        description: [
            "On the evening of 9th April 2025 at 5:00 PM, IEEE HIT SB hosted Interagado 2025, a vibrant ceremony marking the transition of student leadership and celebrating a year of innovation, dedication, and teamwork. Held offline at the Electrical Department, the event brought together outgoing and incoming office bearers for a memorable evening of reflection, recognition, and inspiration.",
        ],
        images: ["/events/2025_event2.jpg", "/events/2025_event1.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 8,
        title: "Virtual Talk on Low-Power Smart Electronics for IoT and Similar Applications",
        desc: "Members contributed to global open-source programs, learning Git workflows along the way.",
        author: "Developer Track",
        date: " 2 April 2025 ",
        image: "/events/virtual_talk_event8.png",
        category: "Workshops",
        eventType: "Technical Talk",
        eventDate: "22nd July 2026",
        eventLocation: "Google Meet(Under IEEE Virtual Speakers Bureau)",
        description: [
            "On 2nd April 2025, IEEE HIT SB hosted an exciting online talk under the IEEE Virtual Speakers Bureau, featuring Dr. Sreelal S Pillai, Senior Scientist & Avionics Engineer at ISRO at 7 in the evening . With over 33 years of experience, Dr. Pillai shared his insights on “Low Power Smart Electronics for IoT and Similar Applications,” offering a glimpse into the technologies shaping the future of smart, energy-efficient devices.",
        ],
        images: ["/events/virtual_talk_event8.png"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 9,
        title: "ROBO-SOCCER",
        desc: "Workshop attendance and project completion now sync automatically to member profiles.",
        author: "Membership",
        date: "28th February 2025",
        image: "/events/roboscorrer_event9.png",
        category: "Workshops",
        eventType: "Membership",
        eventDate: "15th July 2026",
        eventLocation: "HIT Basketball Ground",
        description: [
            "Fix-a-Robo: Robo Soccer Competition Event Type: Technical Event Date: 28th February 2025 Location: Basketball Court, Haldia Institute of Technology To commemorate National Science Day, the IEEE HIT Student Branch hosted the thrilling grand finale of its flagship robotics workshop Fix-a-Robo with the much-anticipated Robo Soccer Competition on 28th February 2025. Held at the Basketball Court of Haldia Institute of Technology, the event kicked off at 4:00 PM, drawing excitement from participants, spectators, and distinguished guests alike.",
        ],
        images: ["/events/2026_event1.jpg", "/events/2026_event2.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 10,
        title: "RACE-a-ROBO",
        desc: "A look back at nine years of workshops, hackathons, and the students who built them.",
        author: "Branch history",
        date: "23rd February 2025",
        image: "/events/racearobo_event10.jpg",
        category: "Press",
        eventType: "Celebration",
        eventDate: "1st July 2026",
        eventLocation: "Main Campus Grounds",
        description: [
            "Designed to test participants' abilities in both speed and precision, the event challenged teams to race their self-assembled, semi-autonomous bots through a specially curated track featuring sharp turns, checkpoints, and time-bound objectives. The event drew enthusiastic participation from students who had previously taken part in the Fix-a-Robo workshop. Each team utilized WiFi modules, Arduino-based microcontrollers, and real-time programming techniques learned during the sessions, turning the competition into a vibrant showcase of applied knowledge.",
        ],
        images: ["/events/2025_event4.jpg", "/events/2026_event1.jpg", "/events/2026_event2.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
    {
        id: 11,
        title: "FIX-a-ROBO",
        desc: "A look back at nine years of workshops, hackathons, and the students who built them.",
        author: "Branch history",
        date: "20th February 2025",
        image: "/events/fixarobo_event11.jpg",
        category: "Press",
        eventType: "Celebration",
        eventDate: "1st July 2026",
        eventLocation: "Main Campus Grounds",
        description: [
            "The IEEE HIT Student Branch (SB) successfully organized Fix-a-Robo, an intensive, hands-on workshop aimed at building and programming WiFi-controlled semi-autonomous RC cars. Held from 20th to 23rd February 2025, the four-day event provided participants with in-depth practical exposure to embedded systems, robotics, and wireless communication, effectively bridging the gap between theoretical knowledge and real-world application.",
        ],
        images: ["/events/2026_event1.jpg", "/events/2025_event4.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
      {
        id: 12,
        title: "MODEL EXHIBITION",
        desc: "A look back at nine years of workshops, hackathons, and the students who built them.",
        author: "Branch history",
        date: "24th January 2025",
        image: "/events/modal_exhibition_event12.png",
        category: "Press",
        eventType: "Exhibition",
        eventDate: "1st July 2026",
        eventLocation: "Exhibition Hall, HIT",
        description: [
            "IEEE Student Branch of Haldia Institute of Technology successfully hosted its flagship annual Model Exhibition at 10:30 AM in the Electrical Engineering Department. The event served as a vibrant platform for students to showcase innovative, hands-on projects across multiple domains, encouraging technical excellence and collaborative learning.",
        ],
        images: ["/events/2026_event2.jpg", "/events/2026_event1.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
      {
        id: 13,
        title: "Shakti: Girl Child Day Distribution Event",
        desc: "A look back at nine years of workshops, hackathons, and the students who built them.",
        author: "Branch history",
        date: "11th October 2024",
        image: "/events/shakti_event13.png",
        category: "Press",
        eventType: "Exhibition",
        eventDate: "1st July 2026",
        eventLocation: "Exhibition Hall, HIT",
        description: [
            "On October 11, 2024, the IEEE HIT Student Branch marked International Girl Child Day with the", "Shakti: Girl Child Day Distribution Event", "This heartfelt initiative was aimed at highlighting the importance of proper health and hygiene practices among underprivileged girls, empowering them to actively participate in their communities",
            "In the spirit of giving, the team distributed thoughtfully curated gift hampers, which included essential items such as sanitary napkins, handwash, and other personal hygiene necessities, to girls in the localities of Haldia, including Gandhinagar and nearby communities close to the Abhinandan Boys Hostel.",
        ],
        images: ["/events/2026_event2.jpg", "/events/2026_event1.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
      {
        id: 14,
        title: "CIRCUITRIX",
        desc: "A look back at nine years of workshops, hackathons, and the students who built them.",
        author: "Branch history",
        date: "15th April 2024",
        image: "/events/circuititx_event14.png",
        category: "Press",
        eventType: "Exhibition",
        eventDate: "1st July 2026",
        eventLocation: "Exhibition Hall, HIT",
        description: [
            "Organized by IEEE HIT SB, the CIRCUITRIX workshop kicked off with great enthusiasm, bringing together students eager to get hands-on with electronics. The event opened with a warm welcome and an overview of the activities planned over the three days, setting the tone for an engaging learning experience. Day 1 was all about bringing music to life—literally. The focus of the session was on creating Music Controlled DJ Lights, a fascinating project that combined creativity with circuitry. The day started with an introduction to the concept, followed by in-depth explanations of how each component works, especially the roles of transistors and condenser microphones in responding to sound. With step-by-step guidance, participants successfully built their own working circuits. The day wrapped up with lively discussions and a sense of accomplishment as their lights flickered to the beat of the music.",
        ],
        images: ["/events/2026_event2.jpg", "/events/2026_event1.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
      {
        id: 15,
        title: "ROBO-SOCCER",
        desc: "A look back at nine years of workshops, hackathons, and the students who built them.",
        author: "Branch history",
        date: "24th February 2024",
        image: "/events/roboscorrer2_event15.jpg",
        category: "Press",
        eventType: "Exhibition",
        eventDate: "1st July 2026",
        eventLocation: "Exhibition Hall, HIT",
        description: [
            "IEEE HIT SB's annual workshop, Fix-A-Robo, concluded on February 24th with an enthralling Robo-Soccer competition taking center stage. A total of 27 teams entered the arena, contending in matches of a knockout format; teams in draws proceeded to penalty shootout matches.After the intense competition, only 12 teams advanced to the second round, followed by a fierce battle that saw 6 teams making it to the third round. The tension reached peak at the final showdown as it determined the top 3 teams based on overall scores in the final round.",
        ],
        images: ["/events/2026_event2.jpg", "/events/2026_event1.jpg"],
        knowMoreLink: READ_MORE_URL,
    },
];

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

const RevealArticle = ({
    index,
    className,
    children,
}: {
    index: number;
    className?: string;
    children: ReactNode;
}) => {
    const ref = useRef<HTMLElement | null>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <article
            ref={ref}
            className={`${className ?? ""} ev-card ${shown ? "ev-card-in" : ""}`}
            style={{ "--d": `${(index % 3) * 110}ms` } as CSSProperties}
        >
            {children}
        </article>
    );
};

export default function Events() {
    const [active, setActive] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedEvent]);

    const filteredEvents = events.filter((e) => {
        const matchesCategory =
            active === "All" ||
            e.category?.toLowerCase() === active.toLowerCase() ||
            e.author.toLowerCase().includes(active.toLowerCase());

        const matchesSearch =
            e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.description.join(" ").toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.eventLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.author.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <style>
                {`
                    @keyframes evRise {
                        from { opacity: 0; transform: translateY(28px); }
                        to   { opacity: 1; transform: none; }
                    }
                    @keyframes evImg {
                        from { transform: scale(1.15); }
                        to   { transform: scale(1); }
                    }
                    .ev-rv {
                        animation: evRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: calc(var(--i, 0) * 110ms + 100ms);
                    }
                    .ev-card { opacity: 0; }
                    .ev-card-in {
                        animation: evRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: var(--d, 0ms);
                    }
                    .ev-card-in .ev-img {
                        animation: evImg 1.4s cubic-bezier(0.16, 1, 0.3, 1) both;
                        animation-delay: var(--d, 0ms);
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .ev-rv, .ev-card-in, .ev-card-in .ev-img { animation: none !important; }
                        .ev-card { opacity: 1 !important; }
                    }
                `}
            </style>

            <section className={`${poppins.className} relative w-full bg-black pt-20 pb-24 text-white antialiased`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                    {/* ===== header ===== */}
                    <div className="mb-14">
                        <h1
                            className="ev-rv bg-linear-to-b from-white to-zinc-500 bg-clip-text pb-1 text-5xl font-semibold tracking-tight text-transparent md:text-7xl"
                            style={stagger(0)}
                        >
                            Beyond the classroom.
                        </h1>
                        <p
                            className="ev-rv mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
                            style={stagger(1)}
                        >
                            Where IEEE HIT SB members build, break, and learn by doing. Workshops, hackathons, and talks, all in one place.
                        </p>

                        {/* filters + search */}
                        <div
                            className="ev-rv mt-10 flex flex-col justify-between gap-5 border-b border-zinc-800 md:flex-row md:items-center"
                            style={stagger(2)}
                        >
                            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
                                {filters.map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setActive(f)}
                                        className={`relative pb-4 tracking-tight transition-colors ${
                                            active === f ? "font-medium text-white" : "text-zinc-500 hover:text-zinc-300"
                                        }`}
                                    >
                                        {f}
                                        {active === f && (
                                            <span className="absolute inset-x-0 -bottom-px h-px bg-white" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 pb-4">
                                <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 transition-colors focus-within:border-zinc-600 md:w-64">
                                    <Search className="h-4 w-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                                    />
                                </div>
                                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white">
                                    <Rss className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ===== grid ===== */}
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                            {filteredEvents.map((e, i) => (
                                <RevealArticle
                                    key={`${active}-${e.id}-${i}`}
                                    index={i}
                                    className={`group flex cursor-pointer flex-col ${
                                        i % 3 !== 2 ? "lg:border-r lg:border-zinc-800/80 lg:pr-8" : ""
                                    }`}
                                >
                                    {/* Clicking the card image or text opens the modal */}
                                    <div
                                        onClick={() => setSelectedEvent(e)}
                                        className="w-full flex flex-col cursor-pointer"
                                    >
                                        <div className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#0e1013] transition-colors duration-300 group-hover:border-zinc-600">
                                            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                                                {e.image && (
                                                    <Image
                                                        src={e.image}
                                                        alt={e.title}
                                                        fill
                                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                        className="ev-img object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="mb-2 text-xl leading-snug font-semibold tracking-tight text-zinc-50 transition-colors group-hover:text-white">
                                            {e.title}
                                        </h3>
                                        {/* only a short preview (3 lines) — the full text opens in the modal */}
                                        <p className="mb-4 line-clamp-3 text-[15px] leading-relaxed text-zinc-400">
                                            {e.description[0]}
                                        </p>

                                        <div className="mt-auto space-y-1.5 text-xs text-zinc-500">
                                            <p className="flex items-center gap-2">
                                                <Calendar className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
                                                <span className="font-medium text-zinc-300">{e.eventDate}</span>
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
                                                <span className="truncate">{e.eventLocation}</span>
                                            </p>
                                        </div>
                                    </div>
                                </RevealArticle>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-zinc-500">
                            <p className="text-lg">No events found matching &ldquo;{searchQuery}&rdquo;</p>
                        </div>
                    )}

                </div>
            </section>

            {/* Event Modal Component */}
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </>
    );
}





// "use client";

// import React, { useState } from "react";
// import { Search, ArrowUpRight, Rss } from "lucide-react";

// interface EventItem {
//     id: number;
//     category: string;
//     title: string;
//     description: string;
//     authorOrType: string;
//     date: string;
//     imageType: "image" | "code" | "chart" | "badge";
// }

// const allEvents: EventItem[] = [
//     {
//         id: 1,
//         category: "Workshops",
//         title: "The coding agent behind 75% of HIT's automated PRs",
//         description: "Why and how our dev team built an internal AI coding agent that's now responsible for reviewing three of every four PRs submitted across student repositories.",
//         authorOrType: "Customer story",
//         date: "Aug 31, 2026",
//         imageType: "image",
//     },
//     {
//         id: 2,
//         category: "Tech Talks",
//         title: "Styling Linear UI for the future with custom Tailwind setups",
//         description: "A long-running migration that became an exercise in tooling, automation, and designing clearer boundaries for both human developers and agents.",
//         authorOrType: "Kenneth Skovhus",
//         date: "Aug 26, 2026",
//         imageType: "code",
//     },
//     {
//         id: 3,
//         category: "Hackathons",
//         title: "Sharing IEEE HIT SB's growth with the people building it",
//         description: "As our chapter passes 100+ active contributors in open-source, we're giving our core team another opportunity to participate in the upside.",
//         authorOrType: "Karri Saarinen",
//         date: "Aug 26, 2026",
//         imageType: "chart",
//     },
//     {
//         id: 4,
//         category: "Workshops",
//         title: "Building scalable microservices with Node.js & Docker containers",
//         description: "An intensive weekend session breaking down containerization, multi-stage Docker builds, and zero-downtime deployments on VPS.",
//         authorOrType: "Technical Team",
//         date: "Aug 20, 2026",
//         imageType: "code",
//     },
//     {
//         id: 5,
//         category: "Community",
//         title: "Code Friday #42: Idempotency Keys and Distributed Systems",
//         description: "Deep-dive educational carousel and live walkthrough covering safety guarantees in financial and event-driven backend architectures.",
//         authorOrType: "IEEE HIT SB",
//         date: "Aug 15, 2026",
//         imageType: "badge",
//     },
//     {
//         id: 6,
//         category: "Hackathons",
//         title: "CircuitHack 2026: 24-Hour Hardware & Embedded Hackathon",
//         description: "From registration to live judging dashboards — exploring how our student branch builds proprietary tools to manage thousands of hackers.",
//         authorOrType: "Organizing Committee",
//         date: "Aug 10, 2026",
//         imageType: "image",
//     },
//     {
//         id: 7,
//         category: "Tech Talks",
//         title: "Next.js App Router patterns for high-performance dashboards",
//         description: "Optimizing server components, caching layers, and database queries using Neon DB and Drizzle ORM for lightning-fast loads.",
//         authorOrType: "Guest Speaker",
//         date: "Aug 02, 2026",
//         imageType: "code",
//     },
//     {
//         id: 8,
//         category: "Community",
//         title: "GirlScript Summer of Code 2026: Contribution Guidelines",
//         description: "Standardizing environment configurations, UI filters, and pull request workflows for open-source newcomers joining our repositories.",
//         authorOrType: "Open Source Lead",
//         date: "Jul 28, 2026",
//         imageType: "badge",
//     },
//     {
//         id: 9,
//         category: "Workshops",
//         title: "Introduction to PCB Design & Altium Fundamentals",
//         description: "Hands-on session for first-years covering schematic capture, component footprints, and multilayer routing for custom microcontrollers.",
//         authorOrType: "Robotics Chapter",
//         date: "Jul 20, 2026",
//         imageType: "chart",
//     },
//     {
//         id: 10,
//         category: "Tech Talks",
//         title: "Real-time communication using WebSockets and the PERN stack",
//         description: "Architecture breakdown of our real-time messaging clone, focusing on low-latency state synchronization and connection resilience.",
//         authorOrType: "Full Stack Guild",
//         date: "Jul 12, 2026",
//         imageType: "code",
//     },
// ];

// const Events = () => {
//     const [selectedTab, setSelectedTab] = useState("All");
//     const [searchQuery, setSearchQuery] = useState("");

//     const tabs = ["All", "Workshops", "Hackathons", "Tech Talks", "Community"];

//     // Filter items based on tab and search query
//     const filteredEvents = allEvents.filter((item) => {
//         const matchesTab = selectedTab === "All" || item.category === selectedTab;
//         const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                               item.description.toLowerCase().includes(searchQuery.toLowerCase());
//         return matchesTab && matchesSearch;
//     });

//     return (
//         <section className="w-full bg-black text-white min-h-screen px-6 md:px-16 lg:px-24 py-12">
            
//             {/* Header Title */}
//             <div className="mb-10">
//                 <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
//                     Now
//                 </h1>

//                 {/* Filter Navigation & Search Bar Row */}
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-900 pb-5">
                    
//                     {/* Category Tabs */}
//                     <div className="flex items-center gap-6 overflow-x-auto no-scrollbar text-sm font-medium">
//                         {tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setSelectedTab(tab)}
//                                 className={`transition-colors whitespace-nowrap pb-1 ${
//                                     selectedTab === tab
//                                         ? "text-white border-b-2 border-white"
//                                         : "text-zinc-500 hover:text-zinc-300"
//                                 }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Search Input & RSS Icon */}
//                     <div className="flex items-center gap-4">
//                         <div className="relative w-full md:w-64">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
//                             />
//                         </div>
//                         <button className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors shrink-0">
//                             <Rss className="w-4 h-4" />
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* Events Grid (3 columns layout matching Linear design) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredEvents.map((item) => (
//                     <div 
//                         key={item.id} 
//                         className="group flex flex-col justify-between cursor-pointer"
//                     >
//                         <div>
//                             {/* Card Visual Thumbnail Box */}
//                             <div className="w-full h-52 bg-[#0e1013] border border-zinc-800/80 rounded-xl overflow-hidden relative mb-5 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-700">
                                
//                                 {/* Dynamic Card Graphic Placeholders */}
//                                 {item.imageType === "image" && (
//                                     <div className="absolute inset-0 bg-linear-to-br from-zinc-900 to-black flex items-center justify-center p-6">
//                                         <div className="w-full h-full bg-zinc-800/40 rounded-lg flex items-center justify-center text-zinc-500 text-xs font-mono uppercase tracking-widest border border-zinc-700/50">
//                                             [ Branch Media ]
//                                         </div>
//                                     </div>
//                                 )}

//                                 {item.imageType === "code" && (
//                                     <div className="w-full h-full p-5 font-mono text-[11px] text-zinc-500 bg-[#090a0c] flex flex-col justify-center leading-relaxed select-none">
//                                         <p className="text-zinc-400"> {item.category} snippet</p>
//                                         <p className="text-red-400/85">import &#123; createClient &#125; from &apos;@hit/core&apos;</p>
//                                         <p className="text-zinc-600">async function init() &#123;</p>
//                                         <p className="text-zinc-500 pl-4">await branch.deploy();</p>
//                                         <p className="text-zinc-600">&#125;</p>
//                                     </div>
//                                 )}

//                                 {item.imageType === "chart" && (
//                                     <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#08090b]">
//                                         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-size-[16px_16px]"></div>
//                                         <div className="w-3/4 h-1/2 border-l border-b border-zinc-700 relative flex items-end">
//                                             <div className="w-full h-[65%] bg-linear-to-t from-red-950/40 to-transparent border-t border-red-500/40"></div>
//                                         </div>
//                                     </div>
//                                 )}

//                                 {item.imageType === "badge" && (
//                                     <div className="w-full h-full bg-[#0a0b0d] flex items-center justify-center gap-2 p-6">
//                                         <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-sm">
//                                             HIT
//                                         </div>
//                                         <div className="h-px w-12 bg-zinc-800"></div>
//                                         <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-400 font-bold text-sm">
//                                             SB
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Hover external link icon */}
//                                 <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                                     <ArrowUpRight className="w-3.5 h-3.5" />
//                                 </div>
//                             </div>

//                             {/* Card Title */}
//                             <h3 className="text-base font-medium text-zinc-100 group-hover:text-white leading-snug mb-2 transition-colors">
//                                 {item.title}
//                             </h3>

//                             {/* Card Description */}
//                             <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
//                                 {item.description}
//                             </p>
//                         </div>

//                         {/* Card Footer Metadata */}
//                         <div className="flex items-center gap-2 text-xs text-zinc-500 pt-5">
//                             <span>{item.authorOrType}</span>
//                             <span>•</span>
//                             <span>{item.date}</span>
//                         </div>

//                     </div>
//                 ))}
//             </div>

//             {filteredEvents.length === 0 && (
//                 <div className="py-20 text-center text-zinc-500 text-sm">
//                     No updates found matching your search.
//                 </div>
//             )}

//         </section>
//     );
// };

// export default Events;