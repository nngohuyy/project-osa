'use client'

import './globals.css';
import 'primeicons/primeicons.css';

import { NextUIProvider } from "@nextui-org/react";
import { Manrope, Space_Mono } from "next/font/google";

import NavBar from "@components/NavBar/navbar";
import Footer from "@components/Footer/footer";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-manrope',
});

const space_grotesk = Space_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${space_grotesk.variable}`}>
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