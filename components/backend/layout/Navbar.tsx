import { AlignJustify, Bell, Sun, User2 } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-neutral-800 text-slate-50 h-16 py-4 px-8">
      {/* Icon  */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User2 />
        </button>
      </div>
    </div>
  );
}
