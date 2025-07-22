import React from "react";
import Link from "next/link";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-center md:hidden bg-secondary/70 border-b-[1px]">
      <p className="text-3xl font-bold py-3 text-primary">Solus</p>
    </div>
    <div className="_container hidden relative md:flex justify-between items-center font-brico text-primary py-6">
      {/* Left Menu */}
      <div className="flex gap-10 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>

      {/* Center Title */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a className="text-3xl font-bold">Solus</a>
      </div>

      {/* Right Menu */}
      <div className="flex gap-10 items-center">
        <Link href="/therapists">Therapists</Link>
        <Link href="/contact">Contact</Link>
        <Avatar/>
      </div>
    </div>
    </>
  );
};

export default Navbar;
