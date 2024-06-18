'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-40 px-10">
        <section className="home-top-card border-4 flex flex-col justify-center h-[608px] rounded-[36px]">
          <div className="max-w-screen-xl mx-auto px-10">
            <div className="flex flex-col gap-10 items-center">
              <p className="font-bold text-center text-7xl">We are<br/>OISP Student Ambassadors!</p>
              <p className="text-center text-xl">
                We are a group of enthusiastic students who are passionate about
                promoting the image of OISP students. We are here to support you in
                your journey at HCMUT.
              </p>
              <Button size="lg" color="primary">
                Learn more
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-row max-w-screen-xl mx-auto px-10">
          <div className="w-1/2">
            <h1>Our mission</h1>
            <p className="text-xl mt-5">
              We aim at promoting the image of OISP students and being a bridge
              between OISP and students, between Vietnamese students and
              international student, and between students and employers.
            </p>
          </div>
          <div className="w-1/2 bg-gray-300 rounded-xl">
            {/* insert image here */}
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-10 w-full">
          <h1>Our team</h1>
          <div className="grid grid-cols-3 gap-4 h-[300px]">
            <div className="h-full w-full bg-gray-300 rounded-xl">
              {/* insert team members here */}
            </div>
            <div className="h-full w-full bg-gray-300 rounded-xl">
              {/* insert team members here */}
            </div>
            <div className="h-full w-full bg-gray-300 rounded-xl">
              {/* insert team members here */}
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-10 w-full flex flex-row gap-10">
          <div className="w-1/2 bg-gray-300 rounded-xl">
            {/* insert image here */}
          </div>
          <div className="w-1/2">
            <h1>Our statement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
    </main>
  );
}