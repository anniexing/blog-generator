import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import UserProvider from '@/app/UserProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog posts generator",
  description: "This application used to generate blog post base on users input text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
      {children}
      </UserProvider>
      </body>

    </html>
  );
}
