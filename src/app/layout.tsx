"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Header from "./(Components)/Header";
import Footer from "./(Components)/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainContainer">
          <Header/> 
          <StyledComponentsRegistry> 
              {children}
            </StyledComponentsRegistry>
            <Footer/>
        </div>

       
      </body>
    </html>
  );
}
