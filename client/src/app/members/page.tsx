
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
        name: "Sattwik Dhara",
        role: "Chairperson",
        image: "/team/sattwik dhara.png",
        linkedin: "https://www.linkedin.com/in/archisman-kundu-020055269",
    },
    {
        name: "Prem Ranjan",
        role: "Vice Chairperson",
        image: "/team/prem ranjan.png",
        linkedin: "https://www.linkedin.com/in/ayush-raj-29b421209",
    },
    {
        name: "Subham Majumdar",
        role: "Secratary",
        image: "/team/shubham majumdar.png",
        linkedin: "https://www.linkedin.com/in/annu-vishwakarma-1274b4259",
    },
    {
        name: "Anik Kapat",
        role: "Assistant Secratary",
        image: "/team/Anik_kapat2.png",
        linkedin: "https://www.linkedin.com/in/soumadip-mondal-b0b602246",
    },
    {
        name: "Ayan Manna",
        role: "Treasurer",
        image: "/team/Ayan Manna.png",
        linkedin: "https://www.linkedin.com/in/ayush-prasad-b3508a253/",
    },
    {
        name: "Prashant Kumar",
        role: "Assistant Treasurer",
        image: "/team/prashant kumar.png",
        linkedin: "https://www.linkedin.com/in/sonal-singh-72288224a/",
    },
    {
        name: "Muskan Sureka",
        role: "WIE Chairperson",
        image: "/team/muskan sureka.png",
        linkedin: "https://www.linkedin.com/in/sudip-chel-74a27b247",
    },
    {
        name: "Gurdeep Singh",
        role: "web Master",
        image: "/team/Gurdeep singh.png",
        linkedin: "https://www.linkedin.com/in/abhijit-das67",
    },
    {
        name: "Sangini Singh",
        role: "JT. Event & Managment Head",
        image: "/team/sangini singh.png",
        linkedin: "https://www.linkedin.com/in/ianmol13/",
    },
    {
        name: "Rohit Kumar Bhagat",
        role: "JT. Event & Managment Head",
        image: "/team/Rohit kumar.png",
        linkedin: "https://www.linkedin.com/in/rishi-raj-58a46825a/",
    },
    {
        name: "Shruti Kumari",
        role: "JT. Social Media Head",
        image: "/team/shruti kumari.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
     {
        name: "Atlanta Chakraborty",
        role: "JT. Social Media Head",
        image: "/team/Atlanta.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
     {
        name: "Soham Das",
        role: "JT. Technical Head",
        image: "/team/soham das.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
     {
        name: "Akash Kumar",
        role: "JT. Promotion Head",
        image: "/team/Akash kumar.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
     {
        name: "Manika Prasad",
        role: "JT. Promotion Head",
        image: "/team/Manika prasad.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
      {
        name: "Rishav Thakur",
        role: "Membership Head",
        image: "/team/rishav thakur.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
      {
        name: "Aryan Sharma",
        role: "Core Committee",
        image: "/team/Aryan sharma.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
      {
        name: "Tanushree Sil",
        role: "Core Committee",
        image: "/team/tanushree sil.png",
        linkedin: "https://www.linkedin.com/in/priyatiwari10/",
    },
      {
        name: "Koushani Banerjee",
        role: "Core Committee",
        image: "/team/koushani banerjee.png",
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
