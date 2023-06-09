"use client"
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import { usePathname  } from 'next/navigation';
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";




export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};


export default function RootLayout({ children}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const ruta = usePathname();

 console.log(ruta)
 
  if (ruta === '/' ) {
    return <div>{children}</div>
  }

  return (
    <html lang="en">
      <body>
          <Navigation/>
        {children}        
        </body>
    </html>
  );
}
