"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavButton = () => {
  return (
    <div className="flex items-center space-x-4">
      <GiHamburgerMenu className="text-2xl cursor-pointer fill-mint-200" />
    </div>
  );
};

export default MobileNavButton;
