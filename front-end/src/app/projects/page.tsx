'use client'
import Link from 'next/link';
import { Card } from '@components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EVENTS } from "../../constants/eventList";
import { CustomButton } from '@components/Button';
import { Play } from '@phosphor-icons/react/dist/ssr';

export default function ProjectsPage() {
  return (
    <main className={`translate-y-[-75px] flex flex-col`}>
      <div className='h-[50rem] flex flex-col justify-end bg-[url(/eventsPage_cover.jpg)] bg-cover bg-center'>
        <div className='px-14 py-10 h-full bg-black bg-opacity-75 text-white justify-end flex flex-col'>
          <div className='w-[640px] mx-auto flex flex-col items-center gap-5'>
            <h1 className='leading-none text-6xl mb-3 text-center'>OISP INTERNATIONAL FESTIVAL 2024</h1>
            <h6 className='text-center font-normal'>
              {`The OISP International Festival 2024, themed "Luminary," took place on April 6th at the University of Technology in Ho Chi Minh City. This magical event featured traditional costume performances, national item exhibitions, and music festivals, attracting over 400 young people to celebrate and experience diverse cultures.`}
            </h6>
            <Link
              href='https://www.facebook.com/InternationalConnectionFestival/posts/pfbid02tp1FupmXwhJWRb4aZFtvPeeY2EVd64YELXHiNvPHToqvFxEGiSpo5XhocbvSA7f4l'
              target="_blank"
            >
              <CustomButton className={`mt-2`} startContent={<Play size={18} weight="bold" />}>
                Watch the recap
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center mt-16'>
        <h1>Our past projects</h1>
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