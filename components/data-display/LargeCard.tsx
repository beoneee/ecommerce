import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ className }: { className: string }) {
  return (
    <div className={`rounded-lg text-white ${className}`}>
      <Layers />
      <h4>Today Orders</h4>
      <h2 className="text-3xl">12</h2>
    </div>
  );
}
