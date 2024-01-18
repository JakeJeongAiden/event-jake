import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NoEventsResult() {
  return (
    <div>
      <Link href="/">
        <Image
          //*1. To load image in nextjs, Make it explicit.
          src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
          alt="logo for the website"
          width={53}
          height={12}
        />
      </Link>
    </div>
  );
}
