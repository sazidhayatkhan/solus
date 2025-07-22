"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
type Props = {};

const Avatar = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) return <Link href="/login">Login</Link>;
  return (
    <div>
      <Link href="/dashboard">
        <Image
          src={session.user?.image || "/images/frame_four.png"}
          alt={session.user?.name || "User avatar"}
          width={32}
          height={32}
          className="rounded-full border border-primary object-cover"
        />
      </Link>
    </div>
  );
};

export default Avatar;
