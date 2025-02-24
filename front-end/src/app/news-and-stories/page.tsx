'use client'
import { CardBlog } from "@components/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, History } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { EVENTS } from "../../constants/eventList";
import Image from "next/image";
import { Button } from "@nextui-org/react";

function HighlightedPost() {
  return (
    <div className="">
      <Image className="rounded-2xl" src="https://picsum.photos/800/480" alt="hero" width={800} height={480} />
      <h4 className="font-medium mt-3 mb-0">OSA Lunar New Year 2025: The Spirit of Tet</h4>
      <p className="opacity-50">Simply being together is enough to make Tet exciting!</p>
    </div>
  );
}

export default function NewsAndStoriesPage() {
  return (
    <main className="translate-y-[-75px] flex flex-col mt-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14">
        <div className="flex flex-row justify-between items-center ">
          <h1>Featured posts</h1>
          <div className="flex flex-row gap-3">
            <Button id="prevBtn" isIconOnly>
              <i className="pi pi-chevron-left"></i>
            </Button>
            <Button id="nextBtn" isIconOnly>
              <i className="pi pi-chevron-right"></i>
            </Button>
          </div>
        </div>
        <div className="mb-20">
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={'auto'}
            spaceBetween={30}
            modules={[Navigation, History]}
            navigation={{
              nextEl: "#nextBtn",
              prevEl: "#prevBtn",
            }}
            className="mySwiper-2"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide className="swiper-slide-2" key={index}>
                <HighlightedPost />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-10">
            {EVENTS.eventList.map((event) => (
              <CardBlog key={event.id}
                {
                ...event}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-10">
            {EVENTS.eventList.map((event) => (
              <CardBlog key={event.id}
                {
                ...event}
              />
            ))}
            {EVENTS.eventList.map((event) => (
              <CardBlog key={event.id}
                {
                ...event}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}