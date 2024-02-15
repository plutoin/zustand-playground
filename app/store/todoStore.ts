import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Todo } from "../types/type";

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
}

export const useTodoStore = create(
  persist<TodoStore>(
    (set) => ({
      todos: [],
      addTodo: (todo: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: todo,
              isCompleted: false,
            },
          ],
        })),
      removeTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== todo.id),
        })),
      editTodo: (todo: Todo) => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === todo.id ? { ...item, text: todo.text } : item
          ),
        }));
      },

      completeTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === todo.id
              ? { ...item, isCompleted: !item.isCompleted }
              : item
          ),
        })),
      sortTodos: () =>
        set((state) => ({
          todos: [...state.todos].sort((a, b) => a.id - b.id),
        })),
    }),
    { name: "todo", storage: createJSONStorage(() => sessionStorage) }
  )
);
