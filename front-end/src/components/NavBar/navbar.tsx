'use client'
import { useState } from 'react';
import { Link, Button } from "@nextui-org/react";
import { CustomButton } from "@components/Button";

import { OSALogo } from "@components/OSALogo";
import navigationRoutes from '@constants/navigationRoutes';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  }

  return (
    <nav className="bg-white border shadow-solid border-black rounded-2xl sticky top-5 z-50 max-w-screen-xl w-[calc(100%-24px)] mx-auto">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <OSALogo />
          </Link>
        </div>
        <div className="hidden font-bold md:flex items-center space-x-10">
          {
            Object.keys(navigationRoutes).map((route) => (
              <Link key={route} href={`/${route}`} className='text-[#35589F]'>
                {navigationRoutes[route]}
              </Link>
            ))
          }
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact-us">
            <CustomButton>
              Contact Us
            </CustomButton>
          </Link>
        </div>
        <div className='flex md:hidden'>
          <Button
            className="md:hidden !shadow-none border-none"
            variant='light'
            isIconOnly
            onPressStart={toggleMobileMenu}
          >
            <i className="pi pi-bars" style={{ fontSize: '1.75rem' }}></i>
          </Button>
        </div>
      </div>

      <div className={`block ${isMobileMenuOpen ? '' : 'hidden'} bg-white border shadow-solid border-black rounded-2xl fixed top-[120px] z-50 max-w-screen-xl w-[calc(100%-24px)] mx-auto`}>
        <div className='max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 py-20 flex flex-col space-y-4 items-center'>
          {
            Object.keys(navigationRoutes).map((route) => (
              <Link className={`text-xl`} key={route} href={`/${route}`}>
                {navigationRoutes[route]}
              </Link>
            ))
          }
          <Link href="/contact-us">
            <CustomButton className='mt-2 text-xl' size='lg'>
              Contact Us
            </CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}
