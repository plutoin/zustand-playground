import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface AddTaskInputProps {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (text: string) => void;
  todo: string;
}

export default function AddTaskInput({
  setTodo,
  handleAddTodo,
  todo,
}: AddTaskInputProps) {
  return (
    <div className="flex flex-row gap-3 w-full justify-between">
      <input
        type="text"
        placeholder="Enter your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 px-1 border-b text-xs border-gray-300 focus:outline-none focus:border-indigo-400 transition duration-300"
      />
      <button
        type="button"
        onClick={() => handleAddTodo(todo)}
        className="px-3 py-2 text-indigo-600 rounded-md hover:bg-indigo-100 transition duration-300"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
