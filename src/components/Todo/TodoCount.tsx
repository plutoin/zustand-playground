import React from "react";
import { Todo } from "src/types/type";

interface TodoCountProps {
  todos: Todo[];
  setAddMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoCount = ({ todos, setAddMode }: TodoCountProps) => {
  return (
    <div className="flex justify-between mt-5 text-xs text-indigo-400">
      <span>
        {todos.filter((item: Todo) => item.isCompleted === false).length} TASKS
      </span>
      <button
        type="button"
        onClick={() => setAddMode(true)}
        className="rounded-md hover:text-indigo-600 transition duration-300"
      >
        ADD ITEM
      </button>
    </div>
  );
};

export default TodoCount;
