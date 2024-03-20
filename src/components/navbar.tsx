'use client'

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarItem, Link, Button } from "@nextui-org/react";
import { OSALogo } from "./OSALogo";

import { ROUTES } from "../constants/navigationRoutes";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const pathName = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{ wrapper: "max-w-screen-xl px-5" }}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <OSALogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
