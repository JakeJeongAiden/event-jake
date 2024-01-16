import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationControlsProps = {
  previousPage: string;
  nextPage: string;
};
const btnStyles =
  'className="text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"';

export default function PaginationControls({
  previousPage,
  nextPage,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {
        //if previousPage is empty, then the button will be disabled.
        //if previousPage is not empty, then the button will be enabled.
        previousPage ? (
          <Link href={previousPage} className={btnStyles}>
            <ArrowLeftIcon />
            Previous
          </Link>
        ) : (
          //empty div to push the next button to the right
          <div />
        )
      }
      {nextPage && (
        <Link href={nextPage} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
