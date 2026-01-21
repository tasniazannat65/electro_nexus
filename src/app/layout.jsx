import {  Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto(
  {
    subsets: ['latin'],
    weight: ['100', '200', '400', '600', '800']
  }
)

export const metadata = {
  title: "ElectroNexus | Smart Electronics Marketplace",
  description: "ElectroNexus is a modern electronics marketplace to explore, manage, and add products easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  antialiased`}
      >
         <Toaster position="top-right"/>
          
          <Navbar/>
      
        <main className=" min-h-screen bg-base-100 pt-16">
                  {children}
                 


        </main>
        
          <Footer/>
        
      </body>
    </html>
  );
}
