import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";

const neueMontreal = localFont({
  src: [
    {
      path: "./../public/fonts/NeueMontreal-Regular.otf", // <-- notice the leading /
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});


export const metadata: Metadata = {
  title: "Itteba Gilani",
  description: "Creative full web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.className} antialiased bg-[#e5e6e0] mx-auto max-w-7xl`}>
        {/* <Menu /> */}
        {children}
      </body>
    </html>
  );
}
