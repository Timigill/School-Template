import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Oxford House System',
  description: 'Where Excellence Meets Perfection',
  icons: {
    icon: '/favico.ico', // or '/favicon.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>


      </head>
      <body className={inter.className}>
        <Toaster />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );

}
