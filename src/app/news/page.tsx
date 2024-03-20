'use client'

import { Button, ButtonGroup } from "@nextui-org/react";
import Card from "../../components/Card/Card";

import { EVENTS } from "../../constants/eventList";

export default function NewsPage() {
  return (
    <main>
      <div className="section-content">
        <h1>Our latest news</h1>
        <div className="container max-w-screen-xl grid grid-cols-4 gap-x-5">
          {EVENTS.eventList.map((event) => (
            <Card key={event.id}
              {
              ...event}
            />
          ))}
        </div>
      </div>
    </main>
  );
}