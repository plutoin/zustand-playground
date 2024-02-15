import React from "react";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-slate-300">
      <div className="p-12 bg-slate-200 text-center rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Zustand Practice</h1>
        <div className="flex flex-col space-y-4">
          <a
            href="/todo"
            className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300"
          >
            To-do
          </a>
          <a
            href="/count"
            className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Counter
          </a>
        </div>
      </div>
    </main>
  );
}
