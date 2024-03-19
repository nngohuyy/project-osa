'use client'

import { Button, ButtonGroup } from "@nextui-org/react";
import Card from "../../components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias quam maiores culpa. Itaque perferendis, nisi porro explicabo velit enim doloremque officia doloribus nesciunt? Harum fuga molestiae quasi blanditiis enim.
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
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}