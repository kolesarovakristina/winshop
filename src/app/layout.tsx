import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import NotificationProvider from '@/lib/store/notificationProvider';

import Notification from '@/components/notification';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <header>
          <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="h-full">
          <NotificationProvider>
            <Notification />
            {children}
          </NotificationProvider>
        </main>
      </body>
    </html>
  );
}
