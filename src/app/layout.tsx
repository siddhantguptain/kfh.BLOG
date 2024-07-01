import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kcal for Health",
  description: "Last Juntion for you fitness Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider >
        <ThemeProvider>
        <div className="mainContainer">
            <div className="mainWrapper">
                <Navbar />
                  {children}
                <Footer/>        
            </div>  
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
