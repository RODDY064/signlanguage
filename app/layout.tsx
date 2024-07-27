import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import Menu from "./ui/menu/menu";
import { SessionProvider } from "next-auth/react";
import MobileNav from "./ui/nav/mobileNav";
import MobileContextProvider from "./ui/nav/mobileContext";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700','800']});

export const metadata: Metadata = {
  title: "SignTalk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <MobileContextProvider>
        <SessionProvider>
          <MobileNav/>
         {children}
        </SessionProvider>
        </MobileContextProvider>
      </body>
    </html>
  );
}
