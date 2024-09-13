import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="sticky flex h-20 items-center justify-between px-8 dark:bg-dark-800 mq450:w-full bg-mint-800">
        <Image
          src="/images/mantisdark.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex items-center space-x-4">
          <GiHamburgerMenu className="text-2xl cursor-pointer fill-mint-200" />
        </div>
      </header>
    </>
  );
};

export default Header;
