'use client'

import { Button, ButtonGroup } from '@nextui-org/react'

type CardProps = {
  id: number;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventImage: string;
}

export default function Card({ eventDate, eventDescription, eventImage, eventName }: CardProps) {
  return (
    <main className='w-[340px] flex flex-col bg-white rounded-2xl overflow-hidden'>
      <div className='h-[240px] w-full overflow-hidden'>
        <img className="image" src={eventImage} alt='' />
      </div>
      <div className='p-5 flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h5>{eventName}</h5>
          <p className='body1 leading-none'>{eventDate}</p>
        </div>
        <p className="body2">
          {eventDescription}
        </p>
        <Button
          color="primary"
          size="sm"
          radius="full"
          variant="bordered"
        >
          Learn more
        </Button>
      </div>
    </main>
  );
}