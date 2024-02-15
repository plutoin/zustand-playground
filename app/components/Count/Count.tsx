import React from "react";

import { useCounterStore } from "@/app/store/counterStore";

export default function Counter() {
  const { count, inc, dec, reset } = useCounterStore();

  return (
    <div className="p-32 text-center rounded-full bg-white">
      <h1 className="text-4xl font-bold mb-4">Counter</h1>
      <span className="block text-2xl my-4">{count}</span>
      <div className="flex space-x-4">
        <button
          onClick={inc}
          className="bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-md transition duration-300"
        >
          One Up
        </button>
        <button
          onClick={dec}
          className="bg-rose-400 hover:bg-rose-500 text-white py-2 px-4 rounded-md transition duration-300"
        >
          One Down
        </button>
        <button
          onClick={reset}
          className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
