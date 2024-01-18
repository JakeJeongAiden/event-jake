import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";
import NoEventsResult from "@/components/no-events-results";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCounter } = await getEvents(city, page);

  //prevent page from going below 1
  const previousPage = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPage =
    totalCounter > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1300px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.length === 0 ? <NoEventsResult /> : ""}

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPage={previousPage} nextPage={nextPage} />
    </section>
  );
}

/* === NOTES === 
## DATA FETCHING
1. Data fetching has moved to this component to prevent blocking the UI. This is a common practice in NextJS.

## CACHEING
1. nextjs is aggresive with caching. 
2. caching 
*/
