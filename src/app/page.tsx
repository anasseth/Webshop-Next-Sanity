import HeroSection from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import NewestCollection from "@/components/ui/newest-collection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NewestCollection />
    </>
  );
}
