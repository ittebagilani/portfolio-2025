import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const neueMontreal = localFont({
  src: [
    {
      path: "./../public/fonts/NeueMontreal-Regular.otf",
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
      <body className={`${neueMontreal.className} antialiased bg-[#e5e6e0]`}>
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}