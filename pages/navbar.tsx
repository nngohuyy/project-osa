import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { OSALogo } from "./OSALogo";

export default function App() {
  return (
      <Navbar
        shouldHideOnScroll
        classNames={{ wrapper: "px-0" }}
        maxWidth="xl"
        className="px-5 py-2"
      >
        <NavbarBrand>
          <OSALogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Events
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
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
