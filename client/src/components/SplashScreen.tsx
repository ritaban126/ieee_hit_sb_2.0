// "use client";

// import { useEffect, useState } from "react";
// import Loader from "@/components/ui/Loader";

// export default function SplashScreen() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const t = setTimeout(() => setLoading(false), 2200); 
//     return () => clearTimeout(t);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div className="fixed inset-0 z-100 flex items-center justify-center bg-black transition-opacity">
//       <Loader />
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200); 
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black transition-opacity duration-500">
      <Loader />
    </div>
  );
}