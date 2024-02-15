import React from "react";

import CheckBox from "@/app/components/Todo/Checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Todo } from "@/app/types/type";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (item: Todo) => void;
}

const CompletedTodoList = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <div className="text-sm text-indigo-400">
      <ul className="flex flex-col gap-2">
        {todos.map(
          (item: Todo, index: number) =>
            item.isCompleted && (
              <li key={index} className="flex items-center">
                <CheckBox item={item} />
                <button
                  type="button"
                  onClick={() => removeTodo(item)}
                  className="ml-auto text-indigo-500 hover:text-indigo-700"
                >
                  <FontAwesomeIcon icon={faTrashCan} size="sm" />
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CompletedTodoList;
