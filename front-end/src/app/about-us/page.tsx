import Image from "next/image";

import { Metadata } from "next";
import { Button } from "@nextui-org/button";
import { LEADERS_EXECS } from "@constants/leader_execs";

export const metadata: Metadata = {
  title: "OSA | About us",
  description: "OSA's page with information about upcoming events and activities.",
};

export default function AboutUsPage() {
  return (
    <main className="translate-y-[-75px] mt-60 mb-4">
      <div className="max-w-screen-xl mx-auto px-14">
        <p className="text-black font-semibold">About us</p>
        <h1 className="font-semibold leading-[1.1]">
          Building Community<br />Bridging Opportunities
        </h1>
      </div>
      <div className="bg-[url('/images/about-us-bg.jpg')] bg-cover bg-no-repeat bg-center h-[40rem] mt-10">
        <div className="max-w-screen-xl mx-auto px-14 h-full flex items-center justify-end">
          <div className="text-black bg-white w-96 py-10 px-8 rounded-3xl">
            <h5 className="font-semibold mb-2">Our Stories</h5>
            <p className="mb-0">
              We, the OISP Student Ambassadors, are dedicated to representing the student
              body with integrity, passion, and commitment. Our mission is to foster a
              vibrant and inclusive community, bridge opportunities, and empower every
              student to achieve their fullest potential.
            </p>
            <Button variant="light" className="mt-12 border-none shadow-none">
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-14 grid grid-cols-2 gap-10 mt-32">
        <h2 className="font-semibold leading-[1.1]">We do this<br />for a single cause</h2>
        <div>
          <p>
            To be the leading force in creating a supportive and dynamic environment where
            every student feels valued, heard, and inspired to contribute to the university
            and beyond. We envision a campus that celebrates diversity and fosters inclusivity,
            where students can thrive academically, socially, and personally.
          </p>
          <p>
            By empowering
            students with leadership skills and connecting them with opportunities, we aim to
            build a proactive community that addresses student needs and encourages positive impact.
          </p>
          <p>
            Our goal is to inspire purpose and drive, helping students pursue their passions and make
            meaningful contributions.
          </p>
          <Button variant="light" className="mt-5 border-none shadow-none">
            Read our manifesto
          </Button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-14 flex flex-col gap-12 mt-32">
        <h2 className="font-semibold leading-[1.1]">Our mission</h2>
        <div className="grid grid-cols-[1fr_2fr] gap-5">
          <div className="bg-[url('/eventsPage_cover.jpg')] bg-cover bg-no-repeat bg-center h-[20rem]"></div>
          <div className="bg-[url('/eventsPage_cover.jpg')] bg-cover bg-no-repeat bg-center h-[20rem]"></div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div>
            <h3 className="font-light">01</h3>
            <h6 className="mb-2">Representation</h6>
            <p>
              To be the voice of the students, advocating for their needs and interests. We strive
              to ensure that every student&apos;s voice is heard and considered in university decisions,
              fostering a sense of empowerment and inclusion.
            </p>
          </div>
          <div>
            <h3 className="font-light">02</h3>
            <h6 className="mb-2">Community Building</h6>
            <p>
              To create a sense of belonging and unity among students through diverse and inclusive
              activities. We aim to bring students together, celebrating our differences and building
              a supportive network where everyone feels welcome and valued.
            </p>
          </div>
          <div>
            <h3 className="font-light">03</h3>
            <h6 className="mb-2">Opportunity Bridging</h6>
            <p>
              To connect students with opportunities for personal and professional growth. We are
              dedicated to identifying and promoting opportunities that enhance students&apos; academic,
              career, and personal development, helping them to achieve their full potential.
            </p>
          </div>
          <div>
            <h3 className="font-light">04</h3>
            <h6 className="mb-2">Leadership Development</h6>
            <p>
              To cultivate leadership skills and empower students to become future leaders. Through training,
              mentorship, and hands-on experiences, we aim to develop confident, capable leaders who can make
              a positive impact within the university and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-14 bg-white py-20 mt-32">
        <h2 className="font-semibold leading-[1.1]">Welcome Our Team Of<br />Executives and Leaders</h2>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {
            LEADERS_EXECS.BODS.map((member) => (
              <div key={member.first_name} className="flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/bod/bod_huu_phuoc.jpg"
                  alt="team member"
                  className="object-cover h-[25rem]"
                />
                <h5 className="mt-4 font-medium">{member.last_name + " " + member.first_name}</h5>
                <p>{member.position}</p>
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {
            LEADERS_EXECS.LEADERS.map((member) => (
              <div key={member.first_name} className="flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/bod/bod_huu_phat.jpg"
                  alt="team member"
                  className="object-cover h-[25rem]"
                />
                <h5 className="mt-4 font-medium">{member.last_name + " " + member.first_name}</h5>
                <p>{member.position}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/osa_cover.jpg"
          alt="team member"
          className="object-cover h-[40rem]"
        />
      </div>
    </main>
  )
}