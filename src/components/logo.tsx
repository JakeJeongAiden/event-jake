import React from "react";
import Image from "next/image";
import Link from "next/link";

// USAGE: used by src/components/header.tsx
export default function Logo() {
  return (
    <Link href="/">
      <Image
        //*1. To load image in nextjs, Make it explicit.
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="logo for the website"
        width={53}
        height={12}
      />
    </Link>
  );
}

/* === NOTES ===
1. The reason why it's complicated to implement Image is in Next.js.
To load image in nextjs, Make it explicit to nextjs by specifying it in `next.config.js` file. See doc for config code
This is to prevent image from shifting other contents AKA content layout shift issue/CLS around it when it loads. 
Generally, this is considered very undesirable.

*/
