import Link from "next/link";

export default function Home() {
  return (
    <main
      //flex-col to center vertically. px-3 to give padding on both side horizontally when screen gets smaller.
      className="flex flex-col items-center pt-36 px-3"
    >
      <h1 className="text-3xl font-bold tracking-tight">
        Search for events around you!
      </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        around you
      </p>

      <form className="w-full sm:w-[580px] ">
        <input
          //ring is the outline color when focused. It should indicate user that they are focused on the input field.
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
          placeholder="Search events in any city..."
          spellCheck={false}
        />
      </form>

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
1. tracking-tight tightens the spacing between letters. 
2. H1 should be tightened & bolded.

KEYWORDS: accent color, 


*/
}
