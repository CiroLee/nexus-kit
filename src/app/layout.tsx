import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexus Kit',
  description: 'Nexus-Kit is an open-source collection of UI components based on Tailwindcss and Radix-UI. Just Copy and Paste the code to your project',
  applicationName: 'Nexus Kit',
  authors: [
    {
      name: 'CiroLee',
      url: 'https://github.com/CiroLee',
    },
  ],
  keywords: ['react', 'tailwindcss', 'next.js', 'components', 'ui-kit', 'ui-components', 'ui-design'],
  creator: 'CiroLee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
