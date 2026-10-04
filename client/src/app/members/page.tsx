// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
// import Footer from "@/components/sections/Footer";

// // standalone page (no Hero on it), so it loads its own font — same fix as
// // Footer.tsx / Events / About, otherwise text falls back to a serif font.
// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700"],
//     display: "swap",
// });

// const teamMembers = [
//     {
//         name: "Alex Turner",
//         role: "Lead Maintainer",
//         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "Ritaban",
//         role: "Full Stack & AI Lead",
//         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "Marcus Lind",
//         role: "Hardware Chapter Head",
//         image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "Sophia Vance",
//         role: "UI/UX & Design Lead",
//         image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "David Chen",
//         role: "Open Source Coordinator",
//         image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "Liam O'Connor",
//         role: "DevOps & Cloud Engineer",
//         image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "Oliver Smith",
//         role: "Embedded Systems Lead",
//         image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//         name: "Elena Rostova",
//         role: "Research & Publications",
//         image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
//     },
// ];

// const Eyebrow = ({ children }: { children: React.ReactNode }) => (
//     <p className="mb-5 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
//         <span className="h-1.5 w-1.5 rounded-full bg-white" />
//         {children}
//     </p>
// );

// const Page = () => {
//     return (
//         <>
//             {/* relative wrapper: the two guide lines below are absolutely
//                 positioned against THIS element, so they run the full height
//                 of the page (header + team grid) and scroll together with
//                 the content — same pattern as the Gallery page. */}
//             <div className={`${poppins.className} relative min-h-screen bg-black text-white antialiased`}>

//                 {/* side guide lines — same x-position pattern used across the rest of the site */}
//                 <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
//                     <div className="w-px bg-zinc-800"></div>
//                     <div className="w-px bg-zinc-800"></div>
//                 </div>

//                 <div className="relative z-10">

//                     {/* header row — confined between the two lines, same padding used everywhere else */}
//                     <div className="px-8 pt-28 md:px-20 lg:px-28 xl:px-36">
//                         <div className="grid grid-cols-1 items-start gap-12 border-t border-zinc-900 pt-20 lg:grid-cols-12 lg:gap-16">

//                             {/* Left Column: Title */}
//                             <div className="lg:col-span-5">
//                                 <Eyebrow>The team</Eyebrow>
//                                 <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl">
//                                     Meet the team behind IEEE HIT SB
//                                 </h1>
//                             </div>

//                             {/* Right Column: Description & Hiring Link */}
//                             <div className="space-y-8 text-base leading-relaxed text-zinc-400 md:text-lg lg:col-span-7">
//                                 <p className="text-lg leading-snug font-medium tracking-tight text-white md:text-xl">
//                                     We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all makers at heart.
//                                 </p>
//                                 <div>
//                                     <a
//                                         href="#"
//                                         className="group/hire inline-flex items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline md:text-base"
//                                     >
//                                         We&apos;re hiring
//                                         <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/hire:translate-x-0.5 group-hover/hire:-translate-y-0.5" />
//                                     </a>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     {/* Team Photo Grid — confined between the two lines */}
//                     <div className="px-8 pt-16 pb-32 md:px-20 lg:px-28 xl:px-36">
//                         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                             {teamMembers.map((member, index) => (
//                                 <div key={index} className="group flex flex-col">
//                                     <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#0e1013] transition-colors duration-300 group-hover:border-zinc-600">
//                                         <Image
//                                             src={member.image}
//                                             alt={member.name}
//                                             fill
//                                             sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
//                                             className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                                         />
//                                     </div>
//                                     <h3 className="text-base font-semibold tracking-tight text-white">{member.name}</h3>
//                                     <p className="mt-0.5 text-xs text-zinc-500 md:text-sm">{member.role}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <Footer />
//         </>
//     );
// };

// export default Page;



// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { Check, ChevronDown} from "lucide-react";
// import { BsLinkedin } from "react-icons/bs";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
// import Footer from "@/components/sections/Footer";
// import Navbar from "@/components/sections/Navbar";

// // standalone page (no Hero on it), so it loads its own font — same fix as
// // Footer.tsx / Events / About, otherwise text falls back to a serif font.
// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700"],
//     display: "swap",
// });

// const teamMembers = [
//     {
//         name: "Archisman Kundu",
//         role: "Chairperson",
//         image: "/team/A.png",
//         linkedin: "https://www.linkedin.com/in/archisman-kundu-020055269",
//     },
//     {
//         name: "Ayush Raj",
//         role: "Vice Chairperson",
//         image: "/team/B.png",
//         linkedin: "https://www.linkedin.com/in/ayush-raj-29b421209",
//     },
//     {
//         name: "Annu Vishwakarma",
//         role: "Secratary",
//         image: "/team/C.png",
//         linkedin: "https://www.linkedin.com/in/annu-vishwakarma-1274b4259",
//     },
//     {
//         name: "Soumadip Mondal",
//         role: "Treaser",
//         image: "/team/E.png",
//         linkedin: "https://www.linkedin.com/in/soumadip-mondal-b0b602246",
//     },
//     {
//         name: "Ayush Prasad",
//         role: "Web Master",
//         image: "/team/H.png",
//         linkedin: "https://www.linkedin.com/in/ayush-prasad-b3508a253/",
//     },
//     {
//         name: "Sonal Singh",
//         role: "WIE Chairperson",
//         image: "/team/G.png",
//         linkedin: "https://www.linkedin.com/in/sonal-singh-72288224a/",
//     },
//     {
//         name: "Sudip Chel",
//         role: "Assistant Secratery",
//         image: "/team/D.png",
//         linkedin: "https://www.linkedin.com/in/sudip-chel-74a27b247",
//     },
//     {
//         name: "Avijit Das",
//         role: "Assistant Treaser",
//         image: "/team/F.png",
//         linkedin: "https://www.linkedin.com/in/abhijit-das67",
//     },
//     {
//         name: "Anmol Kumar",
//         role: "Event & Managment Head",
//         image: "/team/I.png",
//         linkedin: "https://www.linkedin.com/in/ianmol13/",
//     },
//     {
//         name: "Rishi Raj",
//         role: "Technical Head",
//         image: "/team/J.png",
//         linkedin: "https://www.linkedin.com/in/rishi-raj-58a46825a/",
//     },
//     {
//         name: "Priya Tiwari",
//         role: "Promotion Head",
//         image: "/team/K.png",
//         linkedin: "https://www.linkedin.com/in/priyatiwari10/",
//     },
// ];

// const Eyebrow = ({ children }: { children: React.ReactNode }) => (
//     <p className="mb-5 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
//         <span className="h-1.5 w-1.5 rounded-full bg-white" />
//         {children}
//     </p>
// );


// //  Custom "sort by position" dropdown — built from scratch, no <select>
// const SortByPosition = ({
//     roles,
//     value,
//     onChange,
// }: {
//     roles: string[];
//     value: string;
//     onChange: (role: string) => void;
// }) => {
//     const [open, setOpen] = useState(false);
//     const boxRef = useRef<HTMLDivElement | null>(null);

//     // close when clicking outside the box
//     useEffect(() => {
//         const onClick = (e: MouseEvent) => {
//             if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", onClick);
//         return () => document.removeEventListener("mousedown", onClick);
//     }, []);

//     return (
//         <div ref={boxRef} className="relative">
//             <button
//                 type="button"
//                 onClick={() => setOpen((o) => !o)}
//                 aria-haspopup="listbox"
//                 aria-expanded={open}
//                 className="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-[#0e1013] px-4 py-2.5 text-sm text-zinc-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:border-zinc-600"
//             >
//                 <span className="text-zinc-500">Sort by position</span>
//                 <span className="font-medium text-white">{value === "All" ? "All" : value}</span>
//                 <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
//             </button>

//             {open && (
//                 <div
//                     role="listbox"
//                     className="absolute top-full right-0 z-30 mt-2 w-64 overflow-hidden rounded-xl border border-zinc-800 bg-[#0e1013] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
//                 >
//                     {roles.map((role) => (
//                         <button
//                             key={role}
//                             type="button"
//                             role="option"
//                             aria-selected={value === role}
//                             onClick={() => {
//                                 onChange(role);
//                                 setOpen(false);
//                             }}
//                             className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
//                         >
//                             {role === "All" ? "All positions" : role}
//                             {value === role && <Check className="h-4 w-4 text-white" />}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
// //  Page                                                                      

// const Page = () => {
//     const [selectedRole, setSelectedRole] = useState("All");

//     // Extract unique roles for the sort dropdown
//     const roles = useMemo(() => {
//         const allRoles = teamMembers.map((member) => member.role);
//         return ["All", ...Array.from(new Set(allRoles))];
//     }, []);

//     // Filter members based on the selected position only (no search bar anymore)
//     const filteredMembers = useMemo(() => {
//         if (selectedRole === "All") return teamMembers;
//         return teamMembers.filter((member) => member.role === selectedRole);
//     }, [selectedRole]);

//     return (
//         <>
//         <Navbar/>
//             {/* relative wrapper: the two guide lines below are absolutely
//                 positioned against THIS element, so they run the full height
//                 of the page (header + team grid) and scroll together with
//                 the content — same pattern as the Gallery page. */}
//             <div className={`${poppins.className} relative min-h-screen bg-black text-white antialiased`}>

//                 {/* side guide lines — same x-position pattern used across the rest of the site */}
//                 <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
//                     <div className="w-px bg-zinc-800"></div>
//                     <div className="w-px bg-zinc-800"></div>
//                 </div>

//                 <div className="relative z-10">

//                     {/* header row — confined between the two lines, same padding used everywhere else */}
//                     <div className="px-8 pt-28 md:px-20 lg:px-28 xl:px-36">
//                         <div className="grid grid-cols-1 items-start gap-12 border-t border-zinc-900 pt-20 lg:grid-cols-12 lg:gap-16">

//                             {/* Left Column: Title */}
//                             <div className="lg:col-span-5">
//                                 <Eyebrow>The team</Eyebrow>
//                                 <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl">
//                                     Meet the team behind IEEE HIT SB
//                                 </h1>
//                             </div>

//                             {/* Right Column: Description & Hiring Link */}
//                             <div className="flex flex-col justify-start space-y-8 text-base leading-relaxed text-zinc-400 md:text-lg lg:col-span-7 lg:pt-8">
//                                 <p className="text-lg leading-snug font-medium tracking-tight text-white md:text-xl">
//                                     We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all makers at heart.
//                                 </p>
//                                 <div>
//                                     {/* <a
//                                         href="#"
//                                         className="group/hire inline-flex items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline md:text-base"
//                                     >
//                                         We&apos;re hiring
//                                         <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/hire:translate-x-0.5 group-hover/hire:-translate-y-0.5" />
//                                     </a> */}
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     {/* Sorting row — search bar removed, sort box aligned to the side */}
//                     <div className="px-8 pt-12 md:px-20 lg:px-28 xl:px-36">
//                         <div className="flex items-center justify-between gap-4 border-b border-zinc-900 pb-6">
//                             <p className="text-sm text-zinc-500">
//                                 <span className="font-medium text-zinc-200">{filteredMembers.length}</span>{" "}
//                                 {filteredMembers.length === 1 ? "member" : "members"}
//                             </p>
//                             <SortByPosition roles={roles} value={selectedRole} onChange={setSelectedRole} />
//                         </div>
//                     </div>

//                     {/* Team Photo Grid — confined between the two lines */}
//                     <div className="px-8 pt-10 pb-32 md:px-20 lg:px-28 xl:px-36">
//                         {filteredMembers.length > 0 ? (
//                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                                 {filteredMembers.map((member, index) => (
//                                     <div key={index} className="group relative">
//                                         {/* taller, poster-style card: name + role sit over the photo */}
//                                         <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#0e1013] transition-colors duration-300 group-hover:border-zinc-600">
//                                             <Image
//                                                 src={member.image}
//                                                 alt={member.name}
//                                                 fill
//                                                 sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
//                                                 className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                                             />

//                                             {/* bottom gradient so text stays readable over any photo */}
//                                             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black via-black/60 to-transparent" />

//                                             {/* LinkedIn icon */}
//                                             <a
//                                                 href={member.linkedin}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 aria-label={`${member.name} on LinkedIn`}
//                                                 className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
//                                             >
//                                                 {/* <Linkedin  /> */}
//                                                 <BsLinkedin className="h-4 w-4"/>
//                                             </a>

//                                             {/* name + role overlay */}
//                                             <div className="absolute right-5 bottom-5 left-5">
//                                                 <h3 className="text-lg font-semibold tracking-tight text-white">{member.name}</h3>
//                                                 <p className="mt-1 text-xs text-zinc-400 md:text-sm">{member.role}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <div className="py-20 text-center text-zinc-500">
//                                 <p className="text-base">No team members found for this position.</p>
//                             </div>
//                         )}
//                     </div>

//                 </div>
//             </div>

//             <Footer />
//         </>
//     );
// };

// export default Page;






// final design 
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

// standalone page (no Hero on it), so it loads its own font — same fix as
// Footer.tsx / Events / About, otherwise text falls back to a serif font.
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const teamMembers = [
    {
        name: "Archisman Kundu",
        role: "Chairperson",
        image: "/team/A.png",
        linkedin: "https://www.linkedin.com/in/archisman-kundu-020055269",
    },
    {
        name: "Ayush Raj",
        role: "Vice Chairperson",
        image: "/team/B.png",
        linkedin: "https://www.linkedin.com/in/ayush-raj-29b421209",
    },
    {
        name: "Annu Vishwakarma",
        role: "Secratary",
        image: "/team/C.png",
        linkedin: "https://www.linkedin.com/in/annu-vishwakarma-1274b4259",
    },
    {
        name: "Soumadip Mondal",
        role: "Treaser",
        image: "/team/E.png",
        linkedin: "https://www.linkedin.com/in/soumadip-mondal-b0b602246",
    },
    {
        name: "Ayush Prasad",
        role: "Web Master",
        image: "/team/H.png",
        linkedin: "https://www.linkedin.com/in/ayush-prasad-b3508a253/",
    },
    {
        name: "Sonal Singh",
        role: "WIE Chairperson",
        image: "/team/G.png",
        linkedin: "https://www.linkedin.com/in/sonal-singh-72288224a/",
    },
    {
        name: "Sudip Chel",
        role: "Assistant Secratery",
        image: "/team/D.png",
        linkedin: "https://www.linkedin.com/in/sudip-chel-74a27b247",
    },
    {
        name: "Avijit Das",
        role: "Assistant Treaser",
        image: "/team/F.png",
        linkedin: "https://www.linkedin.com/in/abhijit-das67",
    },
    {
        name: "Anmol Kumar",
        role: "Event & Managment Head",
        image: "/team/I.png",
        linkedin: "https://www.linkedin.com/in/ianmol13/",
    },
    {
        name: "Rishi Raj",
        role: "Technical Head",
        image: "/team/J.png",
        linkedin: "https://www.linkedin.com/in/rishi-raj-58a46825a/",
    },
    {
        name: "Priya Tiwari",
        role: "Promotion Head",
        image: "/team/K.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
];

//  Page
const Page = () => {
    return (
        <>
            <Navbar />

            {/* relative wrapper: the two guide lines below are absolutely
                positioned against THIS element, so they run the full height
                of the page (header + team grid) and scroll together with
                the content — same pattern as the Gallery page. */}
            <div
                className={`${poppins.className} relative min-h-screen bg-black text-white antialiased`}
            >
                {/* side guide lines — same x-position pattern used across the rest of the site */}
                <div className="pointer-events-none absolute inset-0 z-20 flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="w-px bg-zinc-800"></div>
                    <div className="w-px bg-zinc-800"></div>
                </div>

                <div className="relative z-10">
                    {/* header row — confined between the two lines, same padding used everywhere else */}
                    <div className="px-8 pt-28 md:px-20 lg:px-28 xl:px-36">
                        <div className="grid grid-cols-1 items-center gap-12 border-t border-b border-zinc-900 pt-16 pb-16 lg:grid-cols-12 lg:gap-16">
                            {/* Left Column: Title */}
                            <div className="lg:col-span-6">
                                <h1 className="text-3xl leading-[1.15] font-semibold tracking-tight text-white md:text-5xl">
                                    Meet the team behind IEEE HIT SB
                                </h1>
                            </div>

                            {/* Right Column: Description */}
                            <div className="flex flex-col justify-center text-base leading-relaxed text-zinc-400 md:text-lg lg:col-span-6">
                                <p className="text-lg leading-snug font-medium tracking-tight text-white md:text-xl">
                                    We are designers and engineers. Problem
                                    solvers and storytellers. We are a diverse
                                    team of individuals, all makers at heart.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Photo Grid — confined between the two lines */}
                    <div className="px-8 pt-14 pb-32 md:px-20 lg:px-28 xl:px-36">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {teamMembers.map((member) => (
                                <article
                                    key={member.name}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#0b0c0f] transition-all duration-500 hover:-translate-y-1 hover:border-[#2f5bff]/60 hover:shadow-[0_24px_50px_-24px_rgba(47,91,255,0.55)]"
                                >
                                    {/* photo stage + LinkedIn badge overlapping the edge */}
                                    <div className="relative">
                                        <div className="relative aspect-4/4.5 w-full overflow-hidden">
                                            {/* soft blue glow behind the person */}
                                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(47,91,255,0.3),transparent_65%)]" />

                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                                className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                            />

                                            {/* fade the photo into the card body */}
                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0b0c0f] to-transparent" />
                                        </div>

                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name} on LinkedIn`}
                                            className="absolute -bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#0b0c0f] bg-white text-black transition-colors duration-300 hover:bg-[#0a66c2] hover:text-white"
                                        >
                                            <BsLinkedin className="h-4 w-4" />
                                        </a>
                                    </div>

                                    {/* name + role */}
                                    <div className="px-6 pt-8 pb-6">
                                        <h3 className="text-lg font-semibold tracking-tight text-white">
                                            {member.name}
                                        </h3>
                                        <p className="mt-1.5 text-xs font-semibold tracking-[0.14em] text-[#4f7bff] uppercase">
                                            {member.role}
                                        </p>

                                        {/* thin line — the blue part grows on hover */}
                                        <div className="relative mt-5 h-px w-full bg-zinc-800">
                                            <span className="absolute inset-y-0 left-0 w-8 bg-[#2f5bff] transition-all duration-500 group-hover:w-full" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Page;
