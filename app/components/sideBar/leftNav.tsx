import React from "react";
import {
  Home,
  BarChart2,
  User,
  Calendar,
  Zap,
  Bell,
  Settings,
} from "lucide-react"; // Lucide icons

const sideNav = () => {
  return (
    <div className="h-screen w-20 flex flex-col items-center justify-between bg-white py-4">
      {/* Top: Logo */}
      <div className="flex flex-col items-center gap-6">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl">
          <span className="text-white font-bold text-lg">S</span>
        </div>

        {/* Menu Icons */}
        <div className="flex flex-col gap-6 text-gray-600">
          <div className="bg-gray-100 p-2 rounded-lg text-blue-500">
            <Home size={24} />
          </div>
          <BarChart2 size={24} />
          <User size={24} />
          <Calendar size={24} />
          <Zap size={24} />
          <Bell size={24} />
        </div>
      </div>

      {/* Bottom: Settings & Avatar */}
      <div className="flex flex-col items-center gap-6">
        <Settings size={24} className="text-gray-600" />
        <img
          src="https://i.pravatar.cc/100" // Replace with your image
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-yellow-300"
        />
      </div>
    </div>
  );
};

export default sideNav;
