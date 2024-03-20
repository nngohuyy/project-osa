'use client'

import { Button, ButtonGroup } from "@nextui-org/react";
import Card from "../../components/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EVENTS } from "../../constants/eventList";

export default function EventsPage() {
  return (
    <main>
      <div className="container px-15 mb-16">
        <div className="header">
          <div className="container max-w-screen-xl px-10 mt-96 mb-10 text-center flex flex-col gap-6">
            <div className="text-5xl font-bold">
              OISP International Festival 2024
            </div>
            <p>
              OISP Student Ambassadors, established in 2015, aims at promoting the image of OISP students and being a bridge between OISP and students, between Vietnamese students and international student, and between students and employers.
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
      <div className="section-content">
        <h1>View recent OSA events</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
        >
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