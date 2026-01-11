import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}