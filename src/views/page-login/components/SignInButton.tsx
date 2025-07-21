'use client';
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex gap-4 items-center">
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 text-white rounded">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="bg-green-500 px-3 py-1 text-white rounded">
      Sign In
    </button>
  );
}
