import React from "react";
import Image from "next/image";
import logo from "/public/osaX-horizontal.svg";

export default function OSALogo() {
  return(
    <Image
      src={logo}
      alt="OSA Logo"
      width={240}
    />
  );
}