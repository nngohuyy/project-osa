'use client'

import { Button, ButtonGroup } from '@nextui-org/react'

type CardProps = {
  id: number;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventImage: string;
}

export default function Card({eventDate, eventDescription, eventImage, eventName}: CardProps) {
  return (
    <main>
      <div className="gallery-item">
        <div className="gallery-item-content">
          <img className="image" src={eventImage} alt=''/>
          <div className="my-4 px-5">
            <h3>{eventName}</h3>
            <h4>{eventDate}</h4>
            <p className="my-3 text-sm">
              {eventDescription}
            </p>
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
      </div>
    </main>
  );
}