import type { Metadata } from 'next';
import { Bebas_Neue, Syne, Inter, Dancing_Script } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  weight: ['400'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Vinish Kumar — Digital Marketing & SEO Specialist',
  description: 'Portfolio of Vinish Kumar — Digital Marketing Specialist skilled in SEO, SEM, Meta Ads, Content Marketing, and WordPress Management.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${syne.variable} ${inter.variable} ${dancingScript.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
