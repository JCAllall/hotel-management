import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';


const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal']
  variable:'--font-popp' 
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>...</title>
      </head>
      <body className={poppins.className}>
        <main className='font-normal'>
          {/* Header */}
          {children}
          {/* Footer */}
        </main>
      </body>
    </html>
  );
}
