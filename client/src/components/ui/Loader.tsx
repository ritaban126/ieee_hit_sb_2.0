import Image from "next/image";

export default function Loader() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      {/* spinning ring — smooth blue accent */}
      <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#2563eb] border-r-[#2563eb]" />

      {/* dark circle background */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 shadow-xl overflow-hidden p-3">
       <Image 
         src="/Ieeelogo.png"
         alt="IEEE HIT SB"
         width={80}
         height={80}
         priority
         className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
       />
      </div>
    </div>
  );
}