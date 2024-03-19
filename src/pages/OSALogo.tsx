import React from "react";
import Image from "next/image";
import logo from "/public/osaX-horizontal.svg";

export const OSALogo = () => (
    <Image
      src={logo}
      alt="OSA Logo"
      height={40}
    />
);