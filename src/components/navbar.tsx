'use client'

import { Space_Grotesk } from 'next/font/google';

const gruppo = Space_Grotesk({
  weight: "700",
  subsets: ["latin"],
  variable: '--font-gruppo',
});

import React from "react";
import { Link, Button } from "@nextui-org/react";

import { OSALogo } from "./OSALogo";
import { ROUTES } from "../constants/navigationRoutes";

export default function NavBar() {
  return (
    <nav className="bg-white border shadow-solid border-black rounded-2xl sticky top-3 z-50 max-w-screen-xl w-[calc(100%-24px)] mx-auto">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <OSALogo />
          </Link>
        </div>
        <div className="hidden font-bold md:flex items-center space-x-10">
          {ROUTES.navigationRoutes.map((route) => (
            <Link className={gruppo.className} key={route} href={`/${route}`}>
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <button className={gruppo.variable}>
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
