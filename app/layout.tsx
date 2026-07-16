import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: '49Rent | Premium Camera Rentals',
  description: 'Premium camera rentals for creators, travelers, and filmmakers.',
  keywords: ['camera rental', 'DJI action camera', 'rent camera', 'film gear'],
  openGraph: {
    title: '49Rent',
    description: 'Premium camera rentals for creators, travelers, and filmmakers.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
