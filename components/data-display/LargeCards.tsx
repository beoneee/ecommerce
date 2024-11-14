import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <LargeCard className="bg-stone-500" />
      <LargeCard className="bg-fuchsia-800" />
      <LargeCard className="bg-indigo-800" />
      <LargeCard className="bg-teal-800" />
    </div>
  );
}
