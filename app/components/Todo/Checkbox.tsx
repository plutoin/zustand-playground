import React from "react";

import { useTodoStore } from "../../store/todoStore";
import { Todo } from "../../types/type";

export default function CheckBox({ item }: { item: Todo }) {
  const { completeTodo } = useTodoStore();

  return (
    <div className="inline-flex items-center text-xs">
      <label
        className="relative flex items-center mr-2 cursor-pointer"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none border border-indigo-200 before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:bg-indigo-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500"
          id="checkbox"
          checked={item?.isCompleted}
          onChange={() => completeTodo(item)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2.5 w-2.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      <span className={item?.isCompleted ? "line-through" : ""}>
        {item?.text}
      </span>
    </div>
  );
}
