import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="_container hidden relative md:flex justify-between items-center font-brico text-primary py-4">
      {/* Left Menu */}
      <div className="flex gap-10 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Services</Link>
      </div>

      {/* Center Title */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a className="text-3xl font-bold">Solus</a>
      </div>

      {/* Right Menu */}
      <div className="flex gap-10 items-center">
        <Link href="/">Therapists</Link>
        <Link href="/about">Resources</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
