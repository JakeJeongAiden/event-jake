"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // it's important that we import from navigation;

/* == USED BY ================================ *
 * Main Page
 * dir: src/app/page.tsx
 *
 *============================================== */
export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter(); // to navigate to a different page with the search text;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent refreshing the page when submitted.
    if (!searchText) return; // if search text is empty, do nothing.

    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px] ">
      <input
        //ring is the outline color when focused. It should indicate user that they are focused on the input field.
        className="w-full h-16 rounded-lg bg-gray-100/[50%] px-6 border border-white/20 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/80 placeholder:text-gray-900/50"
        placeholder="Search events in any city..."
        value={searchText} // controlled input
        onChange={(e) => setSearchText(e.target.value)} // detect input change and update the state causing re-render.
        spellCheck={false}
        autoFocus
      />
    </form>
  );
}

/* === NOTES ================================== *
1. Using client component loses the ability to use server side rendering. 

## CONTROLLED INPUT
In React, input is controlled by state.

### Steps to create a controlled input:
1. In <input>, value is the state that controls the input. value={searchText} means that the input is controlled by search state.
2. onChange is the event that triggers when the input is changed. It is used to update the state.
3. 
*============================================== */
