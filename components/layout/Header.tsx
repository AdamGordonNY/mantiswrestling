import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import MobileNavButton from "./MobileNavButton";
const Header = () => {
  return (
    <>
      <header className="sticky flex h-20 items-center justify-between px-8 dark:bg-dark-800 mq450:w-full bg-mint-800 lg:hidden">
        <Image
          src="/images/mantisdark.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <MobileNavButton />
      </header>
    </>
  );
};

export default Header;
