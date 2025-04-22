"use client";
import { uuidv4 } from "../lib/utils";
import { UserPlus } from "lucide-react";
import { users } from "../lib/db";
import { useState } from "react";
import { useApp } from "@/context/AppProvider";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
}

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });
  const { setCurrentUserId } = useApp();

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    const userId = uuidv4();
    users.push({ id: userId, name: formData.name, email: formData.email });
    setCurrentUserId(userId);
    router.push("/")
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
      <form onSubmit={signUp}>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-3 border text-gray-700 border-gray-300 rounded-md bg-gray-50 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-3 border text-gray-700 border-gray-300 rounded-md bg-gray-50 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-200"
        >
          <UserPlus className="mr-2" size={18} /> Sign Up
        </button>
      </form>
    </div>
  );
}
