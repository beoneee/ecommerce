import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-black space-y-6 w-52 text-white font-bold min-h-screen p-3 fixed left-0 top-0 ">
      <Link className="mb-6" href="#">Logo</Link>
      <div className="space-y-6 flex flex-col ">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Setting</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
