'use client'
import { CardBlog } from "@components/Card/Card";

import { EVENTS } from "../../constants/eventList";

export default function NewsAndStoriesPage() {
  return (
    <main className="translate-y-[-75px] flex flex-col mt-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14">
        <h1>Featured posts</h1>
        <div className="grid grid-cols-4 gap-4">
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
          {EVENTS.eventList.map((event) => (
            <CardBlog key={event.id}
              {
              ...event}
            />
          ))}
        </div>
      </div>
    </main>
  );
}