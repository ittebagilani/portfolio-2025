import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/menu";
import { Inter, Oranienbaum } from "next/font/google"


const oranienbaum = Oranienbaum({
  weight: "400",
  subsets: ["latin"]
})

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
      <body className={`${oranienbaum.className} antialiased bg-[#e5e6e0] overflow-hidden`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
