import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import {Toaster} from "@/components/ui/sonner"

export const metadata = {
  title: 'Restaurante Gourmet',
  description: 'Disfruta de la mejor experiencia culinaria en nuestra landing page.',
  openGraph: {
    title: 'Restaurante Gourmet',
    description: 'Reserva tu mesa y vive una experiencia culinaria inolvidable.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurante Gourmet',
      },
    ],
  },
};

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <Header />
        {children}
        <Toaster position="top-right" richColors />
        <Footer />
      </body>
    </html>
  );
}