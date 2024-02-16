import React from "react";

import { Todo } from "src/types/type";

import CheckBox from "src/components/Todo/Checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  item: Todo;
  index: number;
  editMode: boolean;
  editIndex: number | null;
  editText: string;
  handleEditTodo: () => void;
  handleEditButtonClick: (text: string) => void;
  removeTodo: (item: Todo) => void;
}

const TodoItem = ({
  item,
  index,
  editMode,
  editIndex,
  editText,
  handleEditTodo,
  handleEditButtonClick,
  removeTodo,
}: TodoItemProps) => {
  return (
    <li key={index} className="flex items-center">
      {editMode && editIndex === index ? (
        <div className="flex flex-row gap-3 w-full justify-between">
          <input
            type="text"
            value={editText}
            onChange={(e) => handleEditButtonClick(e.target.value)}
            className="flex-1 px-2 border-b text-xs border-gray-300 focus:outline-none focus:border-indigo-400 transition duration-300"
          />
          <button
            type="button"
            onClick={handleEditTodo}
            className="px-3 py-2 text-indigo-600 rounded-md hover:bg-indigo-100 transition duration-300"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      ) : (
        <>
          <CheckBox item={item} />
          <div className="ml-auto">
            <button
              type="button"
              onClick={() => handleEditButtonClick(item.text)}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="mr-4 text-xs text-indigo-500 hover:text-indigo-700 transition duration-300"
                size="sm"
              />
            </button>
            <button type="button" onClick={() => removeTodo(item)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="text-indigo-500 hover:text-indigo-700 transition duration-300"
                size="sm"
              />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
