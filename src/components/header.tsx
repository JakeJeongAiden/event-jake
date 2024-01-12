import React from "react";
import Link from "next/link";
import Logo from "./logo";

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
  return (
    <header
      // See note on Flexbox below
      className="flex items-center justify-between border-b border-white/10 h-[3.5rem] px-3 md:px-9"
    >
      {/* Link is just like an a tag.  */}
      <Logo />
      <nav>
        <ul
          // ul is parent component of li that are wrapping Link.
          className="flex gap-x-6 text-sm"
        >
          {routes.map((route) => (
            <li //path is more unique than name
              key={route.path}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  /* === NOTES ===

  ## FLEXBOX
  1. Flexbox allows us to align items in a row or column easily. 
  2. justify-between to give as much space between items as possible. Use px-[number] to give padding on both side horizontally.
  3. By default, flexbox stretches item to fill the entire container, so we need to use items-center to center the items vertically.

  ## RESONSIVENESS
  1. In tailwind, mobile first to larger.


*/
}
