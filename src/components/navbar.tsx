'use client'

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { OSALogo } from "./OSALogo";

import { ROUTES } from "../constants/navigationRoutes";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{ wrapper: "max-w-screen-xl px-5" }}
      maxWidth="full"
    >
      <NavbarBrand>
        <Link href="/">
          <OSALogo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {ROUTES.navigationRoutes.map((route) => (
          <NavbarItem key={route} isActive={pathName.startsWith(`/${route}`)}>
            <Link href={`/${route}`}>
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
