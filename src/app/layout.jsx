"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import BootstrapClient from "../components/BootstrapClient";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // agar route /admin se start hota hai
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient />
        <Toaster />

        {/* sirf public pages par navbar */}
        {!isAdminRoute && <NavBar />}

        {children}

        {/* sirf public pages par footer */}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
