"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sideBar/sidebar";
import Header from "../header";
import NextBar from "@/app/components/sideBar/nextBlock";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex">
      {/* Sidebar fixed left */}
      <div className="hidden md:block  h-screen w-24 z-40">
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>
      <div>
        <NextBar />
      </div>

      {/* Right side: full width minus sidebar */}
      <div className="flex flex-col flex-1  w-full h-screen">
        {/* Header fixed top */}
        <div className="w-full">
          <Header setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Scrollable content under fixed header */}
        <main className=" py-2 px-4 md:p-4 overflow-y-auto h-full scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
