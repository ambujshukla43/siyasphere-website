import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingBar from "@/components/sections/BookingBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiyaSphere | Fix Your Broken Go-To-Market Systems",
  description: "Scale revenue by fixing broken GTM systems through Tech Integration, Marketing Automation, RevOps, and AI-driven workflows.",
  keywords: "GTM Tech Integration, Marketing Automation, RevOps, Salesforce, HubSpot, Lead Routing, B2B SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pb-24">{children}</main>
        <BookingBar />
        <Footer />
      </body>
    </html>
  );
}

