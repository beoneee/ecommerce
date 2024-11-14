import Heading from "@/components/backend/layout/Heading";
import LargeCards from "@/components/data-display/LargeCards";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
    </div>
  );
}
