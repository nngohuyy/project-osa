'use client'

import { Space_Grotesk } from 'next/font/google';
import MemberCard from "../components/MemberCard";

import { DESCRIPTION, SAMPLE } from '@constants/descriptions';

export default function Home() {
  return (
    <main className={`translate-y-[-75px] pb-40 flex flex-col space-y-40`}>
      <section className="home-top-card flex flex-col justify-end h-[100dvh]">
        <div className="max-w-screen-xl mx-auto px-14 py-24">
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="font-bold text-h1 leading-[60px]">
              We are<br />OISP Student<br />Ambassadors.
            </h1>
            <p className="text-h5 leading-[26px]">
              {DESCRIPTION.about_us_long}
            </p>
          </div>
          <button className={`mt-10`}>
            Learn more
          </button>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 flex flex-col gap-10 md:space-y-0 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="home-section-heading">Our mission</h1>
          <p className="text-center md:text-left">
            {DESCRIPTION.about_us_short}
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

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 w-full flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-1/2 min-h-96 bg-gray-300 rounded-xl">
          {/* insert image here */}
        </div>
        <div className="md:w-1/2">
          <h1 className="home-section-heading">Our statement</h1>
          <div className="flex flex-col space-y-5">
            <p className="text-center md:text-left">
              {SAMPLE.lorem_70}
            </p>
            <p className="text-center md:text-left">
              {SAMPLE.lorem_70}
            </p>
            <p className="text-center md:text-left">
              {SAMPLE.lorem_70}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}