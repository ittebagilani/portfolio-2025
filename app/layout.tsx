import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Menu from "@/components/menu";

const inter = Inter({
  subsets: ["latin"],
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
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Menu />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
