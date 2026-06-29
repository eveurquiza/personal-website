import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Everardo Urquiza | Portfolio',
  description: 'AI Engineer | Data Engineer | Machine Learning Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--text-primary)] antialiased">
        <Navbar />

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}