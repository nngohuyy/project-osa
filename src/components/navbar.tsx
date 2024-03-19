'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { OSALogo } from "./OSALogo";

export default function App() {
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
        <NavbarItem>
          <Link color="foreground" href="events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="news" aria-current="page">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="contact">
            Contact
          </Link>
        </NavbarItem>
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
