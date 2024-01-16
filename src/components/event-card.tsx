"use client";
import { EventJakeEvent } from "@prisma/client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type EventCardProps = {
  event: EventJakeEvent;
};

// Motion Link component from framer motion to allow link to have animation
const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  //for animation
  const ref = useRef(null);
  //hook from Framer Motion. Indicator on how much we scrolled.
  //It needs to know what exactly you've scrolled from. So we need to pass in the ref.
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset is the point where the animation starts. It's a percentage of the height of the element.
    offset: ["0 1", "1.5 1"],
  });
  //Make scroll animation less dramatic
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    // Link component is used to link to other pages in the app.
    <MotionLink
      ref={ref}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${event.slug}`}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      //To prevent unsmoothness and weird effects
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <section
        //overflow-hidden to hide the overflow of the image for rounded corners.
        className="w-full h-full relative flex flex-col bg-gray-700/[80%] rounded-xl overflow-hidden
        state-effects transition"
      >
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          //object-cover to make the image fill the container.
          className="h-[60%] object-cover"
        />
        <div
          // Both flex item and flex container to place the text in the center of the container.
          className=" flex flex-col flex-1 justify-center items-center"
        >
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {
              // To work with dates, we need to convert the date string to a Date object.
              new Date(event.date).getDate().toString().padStart(2, "0")
            }
          </p>
          <p className="text-xs uppercase text-accent">
            {
              // To work with dates, we need to convert the date string to a Date object.
              new Date(event.date).toLocaleString("en-us", {
                month: "short",
              })
            }
          </p>
        </section>
      </section>
    </MotionLink>
  );
}

/* === NOTES ===

1. `overflow-hidden` to hide the overflow of the image for rounded corners.
2. div with `flex-1` will take up the remaining space of the container. Make sure the parent component is flex.
3. An element can be flex container and flex item at the same time.
4. `basis-80` to make the card 80% of the container.

## NEGATIVE MARGIN

*/
