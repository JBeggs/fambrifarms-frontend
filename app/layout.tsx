export const metadata = {
  title: 'Fambri Farms',
  description: 'Farm to Restaurant Supply Chain',
};

import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased flex flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
