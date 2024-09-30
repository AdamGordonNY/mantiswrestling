import React from "react";
import Image from "next/image";
const MantisLogo = () => {
  return (
    <Image
      src={`/images/mantis.svg`}
      width={400}
      height={600}
      alt="logo"
      className="place-self-center"
    />
  );
};

export default MantisLogo;
