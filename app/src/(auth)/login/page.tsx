"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Вход:", { email, password });
  };

  return (
    <div className="text-black w-full">
        <h1 className="text-2xl font-bold text-black text-center mb-6">Вход</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-122.5 h-18.5 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-122.5 h-18.5 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Войти
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Нет аккаунта?{" "}
          <Link href="/register" className="text-blue-500">
            Зарегистрироваться
          </Link>
        </p>
      </div>
  );
}
