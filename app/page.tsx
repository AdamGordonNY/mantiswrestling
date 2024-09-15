import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-2xl text-mint-300 font-bold bg-backgroundImage-mintdark-gradient">
      <h1 className="text-2xl --font-bebas">Mantis Sports</h1>
      <Image
        src={`/images/mantisdark.svg`}
        width={400}
        height={600}
        alt="logo"
      />
    </main>
  );
}
