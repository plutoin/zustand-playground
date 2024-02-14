import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CountStore {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const useCountStore = create<CountStore>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

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
      editTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === todo.id ? { ...item, text: todo.text } : item
          ),
        })),
      completeTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === todo.id
              ? { ...item, isCompleted: !item.isCompleted }
              : item
          ),
        })),
    }),
    { name: "todo", storage: createJSONStorage(() => sessionStorage) }
  )
);
