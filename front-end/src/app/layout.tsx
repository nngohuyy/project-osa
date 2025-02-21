'use client'

import './globals.css';
import 'primeicons/primeicons.css';

import { NextUIProvider } from "@nextui-org/react";
import { Manrope } from 'next/font/google';

import NavBar from "@components/NavBar/navbar";
import Footer from "@components/Footer/footer";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
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