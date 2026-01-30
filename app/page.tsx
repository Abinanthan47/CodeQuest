import Image from "next/image";
import Header from './_components/Header';
import Hero from "./_components/Hero";
import Explore from "./_components/Explore";
import Features from "./_components/Features";
import Cta from "./_components/Cta";
import Footer from "./_components/Footer";

export default function Home() {
  return (
   <div className="flex  flex-col">
   <Header />
   <Hero/>
   <Explore/>
   <Features/>
   <Cta/>
   <Footer/>
   </div>
  );
}
