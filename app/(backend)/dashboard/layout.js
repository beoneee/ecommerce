import Navbar from "@/components/backend/layout/Navbar";
import Sidebar from "@/components/backend/layout/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex gap-4">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        <main>{children}</main>
        {/* Main */}
      </div>
      {/* Main Body */}
    </div>
  );
}
