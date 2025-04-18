'use client'

import Link from 'next/link';
import { generateSlug } from '@utils/utils';
import { CustomButton } from '@components/Button';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

type CardProps = {
  // id: number;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventImage: string;
}

function Card({ eventDate, eventDescription, eventImage, eventName }: CardProps) {
  return (
    <main className='w-[340px] flex flex-col bg-white rounded-2xl overflow-hidden'>
      <div className='h-[240px] w-full overflow-hidden items-center justify-center flex'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="image" src={eventImage} alt='' />
      </div>
      <div className='p-5 flex flex-col'>
        <div className='flex flex-col gap-2'>
          <h5 className='leading-[1.15]'>{eventName}</h5>
          <p className='body1! leading-none'>{eventDate}</p>
        </div>
        <p className="body2!">
          {eventDescription}
        </p>
        <CustomButton size='sm' endContent={<ArrowUpRight size={20} weight="bold" />}>
          Learn more
        </CustomButton>
      </div>
    </main>
  );
}

function CardBlog({ eventDate, eventDescription, eventImage, eventName }: CardProps) {
  const url = `/news-and-stories/${generateSlug(eventName)}`;
  return (
    <Link href={url}>
      <main className='group flex flex-col bg-inherit hover:bg-white transition duration-500 ease-in-out rounded-2xl overflow-hidden'>
        <div className='h-[240px] w-full rounded-2xl group-hover:rounded-none duration-200 ease-out overflow-hidden items-center justify-center flex'>
          <img className="image" src={eventImage} alt='' />
        </div>
        <div className="group relative">
          <div className="py-5 transition-[padding] duration-200 ease-out group-hover:px-5">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold leading-[1.15] line-clamp-2 overflow-hidden text-ellipsis">{eventName}</h5>
              <p className="body1! leading-none">{eventDate}</p>
            </div>
            <p className="text-lg line-clamp-2 overflow-hidden text-ellipsis">{eventDescription}</p>
          </div>
        </div>
      </main>
    </Link>
  );
}

export { Card, CardBlog }