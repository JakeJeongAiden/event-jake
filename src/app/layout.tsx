import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import AppBackground from "@/components/app-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Grab - Search local events around you",
  description: "Browse more than 10,000 events worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // defining class here allows text color to be inherited to children.
        className={`${inter.className} bg-stone-950/10 text-white relative`}
      >
        {/* Sandwich header and footer components around children which is page */}
        <AppBackground />
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
