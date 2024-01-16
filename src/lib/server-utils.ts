import "server-only";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

// === DATA UTILITY FUNCTIONS ===
//unstable_cache is a function that caches the data for 1 minute. It is used for server side rendering for Prisma.
export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventJakeEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    //For server side pagination
    take: 6,
    //skip first 6 and then take the number [6] above after that
    skip: (page - 1) * 6,
  });

  //To make it work with all
  let totalCounter;
  if (city === "all") {
    totalCounter = await prisma.eventJakeEvent.count();
  } else {
    totalCounter = await prisma.eventJakeEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return {
    events,
    totalCounter,
  };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventJakeEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  //if event is not found, return 404
  if (!event) {
    return notFound();
  }
  return event;
});
