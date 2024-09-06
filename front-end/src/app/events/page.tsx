'use client'

import { Space_Grotesk } from 'next/font/google';

import { Button, ButtonGroup } from "@nextui-org/react";
import Card from "../../components/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EVENTS } from "../../constants/eventList";

const gruppo = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-gruppo',
});

export default function EventsPage() {
  return (
    <main className={`${gruppo.variable} translate-y-[-75px] pb-40 flex flex-col space-y-40 bg-[#F2F2F2]`}>
      <div className="h-[100vh] mb-16">
        <div className="header">
          <div className="container max-w-screen-xl px-10 mt-auto mb-10 md:mb-[90px] text-center flex flex-col gap-6">
            <h1 className="home-section-heading !text-center">
              OISP International Festival 2024
            </h1>
            <p className="mx-auto text-xl max-w-[640px]">
              OISP Student Ambassadors, established in 2015, aims at promoting the image of OISP students.
            </p>
            <div className="flex gap-4 items-center justify-center">
              <Button color="primary" variant="solid" className="border-2">
                Register now
              </Button>
              <Button color="primary" variant="faded">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="home-section-heading !text-center">View recent OSA events</h1>
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