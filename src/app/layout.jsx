import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:'Oxford House System',
  description: 'Where Excellence Meets Perfection',
  icons: {
    icon: '/favico.ico', // or '/favicon.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );

}
