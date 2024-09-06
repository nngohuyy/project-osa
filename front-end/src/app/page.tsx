'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Space_Grotesk } from 'next/font/google';
import MemberCard from "../components/MemberCard";

const gruppo = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-gruppo',
});


export default function Home() {
  return (
    <main className={`${gruppo.variable} translate-y-[-74px] pb-40 flex flex-col space-y-40`}>
      <section className="home-top-card flex flex-col justify-center h-[100dvh]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14">
          <div className="flex flex-col gap-5 md:w-2/3">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">We are<br />OISP Student<br />Ambassadors.</h1>
            <p>
              We are a group of enthusiastic students who are passionate about promoting the image of OISP students. We are here to support you in your journey at HCMUT.
            </p>
          </div>
          <button className={`${gruppo.variable} mt-10`}>
            Learn more
          </button>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 flex flex-col gap-10 md:space-y-0 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="home-section-heading">Our mission</h1>
          <p className="text-center md:text-left">
            We aim at promoting the image of OISP students and being a bridge between OISP and students, between Vietnamese students and international student, and between students and employers.
          </p>
        </div>
        <div className="md:w-1/2 h-[200px] bg-gray-300 rounded-xl">
          {/* insert image here */}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 w-full">
        <h1 className="home-section-heading !text-center">Our team</h1>
        <div className="grid md:grid-cols-3 gap-4 min-h-[500px]">
          <MemberCard
            memberFirstName="Phat"
            memberLastName="Le Huu"
            memberPosition="Vice President"
            memberImage="https://via.placeholder.com/1000" />
          <MemberCard
            memberFirstName="Phuoc"
            memberLastName="Ngo Huu"
            memberPosition="President"
            memberImage="https://via.placeholder.com/1000" />
          <MemberCard
            memberFirstName="Uyen Ly"
            memberLastName="Do Ngoc"
            memberPosition="Vice President"
            memberImage="https://via.placeholder.com/1000" />
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 w-full flex flex-col-reverse flex-col md:flex-row gap-10">
        <div className="md:w-1/2 min-h-96 bg-gray-300 rounded-xl">
          {/* insert image here */}
        </div>
        <div className="md:w-1/2">
          <h1 className="home-section-heading">Our statement</h1>
          <div className="flex flex-col space-y-5">
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}