import SearchForm from "@/components/search-form";
import Link from "next/link";
import React from "react";
import H1 from "@/components/h1";

export default function Home() {
  return (
    <main
      //flex-col to center vertically. px-3 to give padding on both side horizontally when screen gets smaller.
      className="flex flex-col items-center pt-36 px-3"
    >
      <H1>Search for events around you!</H1>

      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent drop-shadow-md">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link
            // href is the path to the page. It is directing to [city] slug folder.
            href="/events/austin"
          >
            Austin
          </Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );

  /* === NOTES ===

## WEB DESIGN PRINCIPLES
1. H1 should be tightened & bolded with `tracking-tight` and `font-bold` respectively.

## FORM
1. add onSubmit to form tag to prevent default behavior of refreshing the page when submitted.


KEYWORDS: accent color, 

## CLIENT SIDE RENDERING VS SERVER SIDE RENDERING
1. We don't want to add 'use client' on page.tsx because a lot of other things will be affected by it.
2. You may want to consider extracting the component to a separate file and use client side rendering there.
3. In this project, Form has been extracted to a separate file and use client side rendering there.

*/
}
