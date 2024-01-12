import React from "react";
import Link from "next/link";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 mt-auto mb-1">
      <small className="text-xs">
        &copy; {new Date().getFullYear()} Created by Jake J. All rights
        reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

/* === NOTES === 
1. mt-auto is to push footer to the bottom of the page. Useful to push components bottom in whatever container it is in.


*/
