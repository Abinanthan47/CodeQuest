import Image from "next/image";

import Hero from "./_components/Hero";
import Explore from "./_components/Explore";
import Features from "./_components/Features";
import Cta from "./_components/Cta";
import Footer from "./_components/Footer";

export default function Home() {
  return (
   <div className="flex  flex-col">
   
   <Hero/>
   <Explore/>
   <Features/>
   <Cta/>
   <Footer/>
   </div>
  );
}
