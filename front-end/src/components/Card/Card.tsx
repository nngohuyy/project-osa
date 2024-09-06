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
    <main>
      <div className="flex flex-col border border-black h-full bg-white rounded-2xl">
        <img className="image" src={eventImage} alt='' />
        <div className="my-4 px-5 flex flex-col h-full justify-between">
          <div>
            <h3>{eventName}</h3>
            <h4>{eventDate}</h4>
            <p className="my-3 text-sm">
              {eventDescription}
            </p>
          </div>
          <Button
            className="mt-3"
            color="primary"
            size="sm"
            radius="full"
            variant="bordered"
          >
            Learn more
          </Button>
        </div>
      </div>
    </main>
  );
}