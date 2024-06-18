'use client'

import React from "react";
import { Link, Button } from "@nextui-org/react";

import { OSALogo } from "./OSALogo";
import { ROUTES } from "../constants/navigationRoutes";

export default function NavBar() {
  return (
    <nav className="bg-white border shadow-solid border-black rounded-2xl mx-auto max-w-[1440px] w-[calc(100%-12x)] sticky top-3 z-50">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Link href="/">
            <OSALogo />
          </Link>
        </div>
        <div className="hidden font-bold md:flex items-center space-x-10">
          {ROUTES.navigationRoutes.map((route) => (
            <Link key={route} href={`/${route}`}>
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#">Login</Link>
          <Button color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
