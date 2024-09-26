'use client'

import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';

import { Button, ButtonGroup } from "@nextui-org/react";
import Card from "../../components/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EVENTS } from "../../constants/eventList";

const gruppo = Space_Grotesk({
  weight: "700",
  subsets: ["latin"],
  variable: '--font-gruppo',
});

export default function EventsPage() {
  return (
    <main className={`${gruppo.variable} translate-y-[-75px] flex flex-col bg-[#F2F2F2]`}>
      <div className='h-[760px] flex flex-col justify-end bg-white'>
        <div className='px-14 py-10'>
          <div className='w-[640px] mx-auto flex flex-col items-center gap-5'>
            <h1 className='leading-[60px] text-center'>OISP INTERNATIONAL FESTIVAL 2024</h1>
            <p className='text-center text-[20px] leading-6'>
              {`The OISP International Festival 2024, themed "Luminary," took place on April 6th at the University of Technology in Ho Chi Minh City. This magical event featured traditional costume performances, national item exhibitions, and music festivals, attracting over 400 young people to celebrate and experience diverse cultures.`}
            </p>
            <Link
              href='https://www.facebook.com/OISPInternationalFestival/posts/pfbid0C4pj6RVJZxs6qF1MX4gNSQgbqFCPPawQeS6xSkwaQi83iZeYAYb7bTPuewUUZzuZl'
              target="_blank"
            >
              <button className={`${gruppo.variable} mt-2`}>
                Watch the recap
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='py-20 flex flex-col items-center'>
        <h2 className='pb-5'>Our past events</h2>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={20}
          modules={[Pagination]}
        >
          {EVENTS.eventList.map((event) => (
            <SwiperSlide key={event.id}>
              <Card
                {
                ...event}
              />
            </SwiperSlide>
          ))}
          {EVENTS.eventList.map((event) => (
            <SwiperSlide key={event.id}>
              <Card
                {
                ...event}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}