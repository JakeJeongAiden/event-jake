import React, { Suspense } from "react";
import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
    description: `Events in ${city}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

// async function to fetch data from server directly. No need for useEffect.
//nextJS component params = whatever you put in square brackets in the file name.
export default function EventsPage({ params, searchParams }: EventsPageProps) {
  //instead of hard coding the city, we can dynamically get the city from the params.
  const city = params.city; //getting the city from the urls. You want to be robust. For finance, max robustness is important.
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in
          ${capitalize(city)}
        `}
      </H1>
      {/* Suspense is a nextJS Component.  key is to display the loading indicator */}
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList
          city={city}
          //parsedPage.data because zod puts result in the data property.
          page={parsedPage.data}
        />
      </Suspense>
    </main>
  );
}

/* === NOTES ===

## DYNAMIC ROUTES
1. params gives us access to the dynamic route params.
2. param will take the name of the file and use it as the param name. In this case, [city] will be the param name.

## FETCHING DATA
1. In server components, we can fetch data directly instead of using useEffect
2. use async and await fetch data.

## TYPING EVENT
1. 

## DATA URL
1. When it comes to manipulating data with urls, you want to be strict and robust, especially if you are building a finance app or banking app.
2. 
*/
