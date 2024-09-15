import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const oswald = Oswald({
  subsets: ["latin"],

  weight: ["400", "500", "700"],
});

const bebLocal = localFont({
  src: "/fonts/BebasNeue-Regular.ttf",
  weight: "400",
  style: "normal",
  preload: true,
  variable: "--font-bebas",
});
const oswaldLocal = localFont({
  src: "/fonts/Oswald-VariableFont_wght.ttf",

  style: "normal",
  preload: true,
  variable: "--font-oswald",
});
export const metadata: Metadata = {
  title: "Mantis Sports - Wrestling and Jiu Jitsiu Instruction",
  description: "Wrestling and Jiujitsu instruction in Colorado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${bebLocal.variable} ${oswaldLocal.variable} antialiased bg-backgroundImage-mintdark-gradient min-h-screen min-w-full `}
      >
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
