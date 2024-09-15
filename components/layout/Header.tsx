"use client";
import React from "react";
import Image from "next/image";
import MobileNavButton from "./MobileNavButton";
import { useMediaQuery } from "usehooks-ts";
const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isSmallScreen && (
        <header className="sticky flex h-20 items-center justify-between px-8 bg-caledondark mq450:w-full bg-mint-800 lg:hidden">
          <Image
            src="/images/mantisdark.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <MobileNavButton />
        </header>
      )}
    </>
  );
};

export default Header;
