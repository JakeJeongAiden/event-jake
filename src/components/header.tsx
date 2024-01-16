"use client";

import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  //usePathname is a hook that returns the current pathname of the page.
  const activePathname = usePathname();
  console.log(activePathname);

  return (
    <header
      // See note on Flexbox below
      className="flex items-center justify-between border-b border-white/10 h-[3.5rem] px-3 md:px-9 bg-gray-900/20"
    >
      {/* Link is just like an a tag.  */}
      <Logo />
      <nav className="h-full">
        <ul
          // ul is parent component of li that are wrapping Link.
          className="flex gap-x-6 text-sm h-full"
        >
          {routes.map((route) => (
            <li //path is more unique than name
              key={route.path}
              //clsx to prettify conditional rendering. See note below.
              className={cn(
                "relative hover:text-white transition flex items-center",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {
                //Make the color indicator in header appear only when the route is active.
                activePathname === route.path && (
                  <motion.div
                    //layoutId to let framer motion know it's the same element
                    layoutId="header-active-link"
                    className="bg-accent h-1 w-full absolute bottom-0"
                  ></motion.div>
                )
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  /* # NOTES 

  ## FLEXBOX
  1. Flexbox allows us to align items in a row or column easily. 
  2. `justify-between` gives as much space between items as possible. Use px-[number] to give padding on both side horizontally for the headers in your project.
  3. By default, flexbox stretches item to fill the entire container, so we need to use items-center to center the items vertically.

  ## RESONSIVENESS
  1. In tailwind, mobile first to larger.
  2. Use sm: to target small screen and above. Use md: to target medium screen and above. 

  ## CONDITIONAL RENDERING With clsx
  1. clsx is a library that allows us to conditionally add classes to an element in a more readable way.
  2. First parameter is the classes we want regardless of the condition. Second parameter is the condition. If true, add the class. If false, don't add the class.

  ## ACTIVE PATHNAME
  1. Tracking the active pathname is useful for styling the header. 
  2. usePathname is a hook that returns the current pathname of the page.

  ## FRAMER MOTION
  1. `layoutID` lets framer motion know that the element is the same element, and the difference needs to be animated.
  2. use `layoutID` as header active link indicators.

*/
}
