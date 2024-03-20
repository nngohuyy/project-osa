'use client'

import { Button, ButtonGroup } from '@nextui-org/react'

export default function Card(props) {
  var cardImageStyle = {
    backgroundImage: `${props.eventImage}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  return (
    <main>
      <div className="gallery-item">
        <div className="gallery-item-content">
          <img className="image" style={cardImageStyle}></img>
          <div className="my-4 px-5">
            <h3>{props.eventName}</h3>
            <h4>{props.eventDate}</h4>
            <p className="my-3 text-sm">
              {props.eventDescription}
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