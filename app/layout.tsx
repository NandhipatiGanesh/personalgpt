// app/layout.tsx (or RootLayout.tsx depending on your setup)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideNav from "./components/sideBar/leftNav"; // corrected casing
import HeaderPrimary from "./components/header/HeaderPrimary";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlothGPT UI",
  description: "Chat-like AI interface built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f7f8] dark:bg-[#1a1a1a] text-black dark:text-white`}
      >
        <div className="flex h-screen w-full overflow-hidden">
          {/* Sidebar */}
          <aside className="w-[260px] border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] p-4 hidden md:block">
            <SideNav />
          </aside>

          {/* Main Chat Area */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <div className="h-[60px] border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] px-4 flex items-center">
              <HeaderPrimary />
            </div>

            {/* Chat Body */}
            <main className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth">
              {children}
            </main>

            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] px-4 py-3">
              {/* If using a specific input component */}
              {/* You can also place <BigTextInput /> inside children if you want per-page control */}
              {/* <BigTextInput /> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
