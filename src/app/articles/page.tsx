'use client'

import { Button, ButtonGroup } from "@nextui-org/react";
import Card from "../../components/Card/Card";

import { EVENTS } from "../../constants/eventList";

export default function NewsPage() {
  return (
    <main>
      <div className="section-content">
        <h1>Our latest news</h1>
        <div className="container max-w-screen-xl grid justify-center gap-3 grid-cols-1 px-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {EVENTS.eventList.map((event) => (
            <Card key={event.id}
              {
              ...event}
            />
          ))}
          {EVENTS.eventList.map((event) => (
            <Card key={event.id}
              {
              ...event}
            />
          ))}
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