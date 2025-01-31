import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
<meta name="google-site-verification" content="lvhYFk-hl5CJDrjAxP90ELTbko2PeRQNb80im5peJn0" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {children}

      </body>



      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"/>
    </html>
  );
}


