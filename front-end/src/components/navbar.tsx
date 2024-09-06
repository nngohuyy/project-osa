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
  const openMobileMenu = () => {
    document.getElementById("MobileMenu").classList.toggle("hidden");
  }
  const closeMobileMenu = () => {
    document.getElementById("MobileMenu").classList.add("hidden");
  }
  return (
    <nav className="bg-white border shadow-solid border-black rounded-2xl sticky top-3 z-50 max-w-screen-xl w-[calc(100%-24px)] mx-auto">
      <div id='NavBar' className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link onPressStart={closeMobileMenu} href="/">
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
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <button className={gruppo.variable}>
              Contact us
            </button>
          </Link>
        </div>
        <div className='flex md:hidden'>
          <Button
            className="md:hidden !shadow-none translate-y-0 translate-x-4 border-none !px-0 !py-0 hover:bg-inherit hover:shadow-none hover:text-inherit"
            variant='light'
            radius='full'
            onPressStart={openMobileMenu}
          >
            <i className="pi pi-bars" style={{ fontSize: '1.75rem' }}></i>
          </Button>
        </div>
      </div>
      <div id='MobileMenu' className="block md:hidden bg-white border shadow-solid border-black rounded-2xl fixed top-[98px] z-50 max-w-screen-xl w-[calc(100%-24px)] mx-auto">
        <div className='max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 py-20 flex flex-col space-y-4 items-center'>
          {ROUTES.navigationRoutes.map((route) => (
            <Link className={`${gruppo.className} text-xl`} key={route} href
              ={`/${route}`}>
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          ))}
          <Link href="/contact">
            <button className={`${gruppo.variable} mt-2`}>
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
