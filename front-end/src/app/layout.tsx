'use client'

import './globals.css';
import 'primeicons/primeicons.css';

import { Metadata } from 'next'
import { NextUIProvider } from "@nextui-org/react";
import { Manrope } from "next/font/google";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
});

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
      <body className={manrope.className}>
        <NextUIProvider>
          <NavBar />
          <main className={`min-h-screen bg-[#F2F2F2] text-[#262323]`}>
            {children}
          </main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  )
}