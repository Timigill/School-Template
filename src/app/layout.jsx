import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oxford House System",
  description: "Where Excellence Meets Perfection",
  icons: {
    icon: "/favico.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
