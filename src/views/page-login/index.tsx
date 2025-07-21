'use client';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <button
        className="bg-black text-white px-4 py-2 rounded mb-4"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Sign in with Google
      </button>
    </div>
  );
}
