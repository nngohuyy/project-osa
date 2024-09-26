'use client'

import './globals.css';
import 'primeicons/primeicons.css';

import { Metadata } from 'next'
import localFont from 'next/font/local';
import { NextUIProvider } from "@nextui-org/react";
import { Manrope } from "next/font/google";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/SVN-Gilroy/SVN-GilroyRegular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/SVN-Gilroy/SVN-GilroyMedium.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/SVN-Gilroy/SVN-GilroySemiBold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/SVN-Gilroy/SVN-GilroyBold.otf',
      weight: '700',
    }
  ],
  variable: '--font-gilroy',
})

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// }

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} font-sans`}>
        <NextUIProvider>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  )
}