import HeroSection from "@/components/HeroSection";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center  text-mint-700 p-5 ">
      <h1 className="heading-1-regular --font-oswald mt-16 text-mint-500">
        Mantis Sports
      </h1>
      <h2 className="">Mixed Martial Arts | Jiu Jitsu | Wrestling</h2>
      <HeroSection />
    </main>
  );
}
