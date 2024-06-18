'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-40 flex flex-col space-y-40">
      <section className="home-top-card flex flex-col justify-center h-[calc(100dvh-72px)]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14">
          <div className="flex flex-col gap-10 w-2/3">
            <p className="font-bold text-4xl md:text-6xl lg:text-7xl">We are<br/>OISP Student<br/>Ambassadors!</p>
            <p>
              We are a group of enthusiastic students who are passionate about
              promoting the image of OISP students. We are here to support you in your journey at HCMUT.
            </p>
          </div>
          <Button className="mt-5" size="lg" color="primary">
            Learn more
          </Button>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 flex flex-row">
        <div className="w-1/2">
          <h1 className="home-section-heading">Our mission</h1>
          <p>
            We aim at promoting the image of OISP students and being a bridge
            between OISP and students, between Vietnamese students and
            international student, and between students and employers.
          </p>
        </div>
        <div className="w-1/2 h-[200px] bg-gray-300 rounded-xl">
          {/* insert image here */}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 w-full">
        <h1 className="home-section-heading">Our team</h1>
        <div className="grid grid-cols-3 gap-4 h-[500px]">
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

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 w-full flex flex-row gap-10">
        <div className="w-1/2 bg-gray-300 rounded-xl">
          {/* insert image here */}
        </div>
        <div className="w-1/2">
          <h1 className="home-section-heading">Our statement</h1>
          <div className="flex flex-col space-y-5">
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
        </div>
      </section>
    </main>
  );
}