import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ai generated minecraft",
  description: "ai generated minecraft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link rel="canonical" href="https://aigeneratedminecraft.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
