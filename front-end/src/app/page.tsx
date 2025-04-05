'use client'
import './homepage.module.css';
import { DESCRIPTION, SAMPLE } from '@constants/descriptions';
import { MemberCard } from "@components/MemberCard";
import { MotionCard } from '@components/MotionCard';

export default function Home() {
  return (
    <main className={`translate-y-[-75px] flex flex-col space-y-32`}>
      <section className="home-top-card flex flex-col justify-end h-[100dvh]">
        <div className="max-w-screen-xl mx-auto px-14 py-24">
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className='leading-none text-7xl'>
              We are OISP Student Ambassadors.
            </h1>
            <h6 className='font-normal'>
              {DESCRIPTION.about_us_long}
            </h6>
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
          {[{
            first: "Phat", last: "Le Huu", pos: "Vice President", img: "/images/bod/bod_huu_phat.jpg", mt: "mt-0"
          }, {
            first: "Phuoc", last: "Ngo Huu", pos: "President", img: "/images/bod/bod_huu_phuoc.jpg"
          }, {
            first: "Uyen Ly", last: "Do Ngoc", pos: "Vice President", img: "/images/bod/bod_uyen_ly.jpg", mt: "mt-0"
          }].map((member, i) => (
            <MotionCard key={i} customDelay={i}>
              <MemberCard
                memberFirstName={member.first}
                memberLastName={member.last}
                memberPosition={member.pos}
                memberImage={member.img}
                marginTop={member.mt}
              />
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14 w-full flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-1/2 min-h-96 bg-gray-300 rounded-xl">
          {/* insert image here */}
        </div>
        <div className="md:w-1/2">
          <h1 className="home-section-heading">Our statement</h1>
          <div className="flex flex-col">
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