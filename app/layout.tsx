// app/layout.tsx (or RootLayout.tsx depending on your setup)
import type { Metadata } from "next";
import ClientLayout from "@/app/components/Layouts/ClientLayout";
import "./globals.css";



export const metadata: Metadata = {
  title: "PersonalGPT UI - Webcomponents",
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
        className={`
          antialiased bg-[#f7f7f8] dark:bg-[#1a1a1a] text-black dark:text-white`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
