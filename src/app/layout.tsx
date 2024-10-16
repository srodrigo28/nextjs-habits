import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Habits",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="text-white flex items-center flex-col m-8 bg-neutral-900" lang="pt-BR" suppressHydrationWarning={true} >
      <body className={inter.className}>
        <Image 
          src={'/images/logo.svg'}
          width={200}
          height={200}
          alt="Logo - meda diária"
          className="w-80 mx-auto"
        />
        {children}
      </body>
    </html>
  );
}
