"use client";
import Link from "next/link";
import { useApp } from "@/context/AppProvider";

export default function Header() {
  const { isLoggedIn } = useApp();
  return (
    <header className="mb-6 flex items-center justify-between px-6 py-4 bg-zinc-900 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-white">Events</h1>
      {isLoggedIn ? (
        <p className="text-zinc-300">Welcome</p>
      ) : (
        <Link href="/auth">
          <button className="bg-green-600 hover:bg-green-700 transition text-white font-medium rounded-md px-4 py-2">
            Sign Up
          </button>
        </Link>
      )}
    </header>
  );
}
