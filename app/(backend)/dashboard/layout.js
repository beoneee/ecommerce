import Navbar from "@/components/backend/navigations/Navbar";
import Sidebar from "@/components/backend/layout/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        <main className="p-8 bg-neutral-700 text-slate-50 min-h-screen mt-16 ml-52">{children}</main>
        {/* Main */}
      </div>
      {/* Main Body */}
    </div>
  );
}
