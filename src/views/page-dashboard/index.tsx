'use client';
import { useSession, signOut } from "next-auth/react";

export default function DashboardClient() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard Test</h1>
      <p>Welcome, {session.user?.name} ({session.user?.email})</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
