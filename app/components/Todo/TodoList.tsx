import React from "react";

import { Todo } from "@/app/types/type";

import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  editMode: boolean;
  editIndex: number | null;
  editText: string;
  handleEditTodo: () => void;
  handleEditButtonClick: (index: number, text: string) => void;
  removeTodo: (item: Todo) => void;
}

const TodoList = ({
  todos,
  editMode,
  editIndex,
  editText,
  handleEditTodo,
  handleEditButtonClick,
  removeTodo,
}: TodoListProps) => {
  return (
    <div className="text-sm text-indigo-600">
      <ul className="flex flex-col gap-2">
        {todos.map(
          (item: Todo, index: number) =>
            item.isCompleted === false && (
              <TodoItem
                key={index}
                item={item}
                index={index}
                editMode={editMode}
                editIndex={editIndex}
                editText={editText}
                handleEditTodo={handleEditTodo}
                handleEditButtonClick={(text: string) =>
                  handleEditButtonClick(index, text)
                }
                removeTodo={removeTodo}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
