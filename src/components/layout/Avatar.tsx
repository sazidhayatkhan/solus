'use client'
import React from 'react'
import { useSession } from "next-auth/react";
import Link from 'next/link'
import Image from 'next/image'
type Props = {}

const Avatar = (props: Props) => {
  const { data: session } = useSession();
  if (!session) return <Link href="/login">Login</Link>;
  console.log(session);
  
  return (
    <div>
        <Link href="/dashboard">
            <Image
                src={session.user?.image || '/images/frame_four.png'}
                alt="image"
                width={30}
                height={30}
                className="rounded-full"
            />
        </Link>
    </div>
  )
}

export default Avatar