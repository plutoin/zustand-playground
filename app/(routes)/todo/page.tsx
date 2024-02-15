"use client";

import React, { useState } from "react";

import { useTodoStore } from "@/app/store/todoStore";

import { Todo } from "@/app/types/type";

import Header from "@/app/components/Layout/Header";
import AddTaskInput from "@/app/components/Todo/AddTaskInput";
import TodoList from "@/app/components/Todo/TodoList";
import TodoCount from "@/app/components/Todo/TodoCount";
import CompletedTodoList from "@/app/components/Todo/CompletedTodoList";

export default function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [addMode, setAddMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const { todos, addTodo, removeTodo, editTodo } = useTodoStore();

  // 할 일 추가
  const handleAddTodo = (todo: string) => {
    addTodo(todo);
    setTodo("");
  };

  // 할 일 수정
  const handleEditButtonClick = (index: number, text: string) => {
    setEditMode(true);
    setEditIndex(index);
    setEditText(text);
  };

  const handleEditTodo = () => {
    if (editIndex !== null) {
      const editedTodo = {
        id: editIndex + 1,
        text: editText,
        isCompleted: false,
      };
      editTodo(editedTodo);
      setEditMode(false);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center gap-1 min-h-dvh bg-blue-100">
        <div className="flex flex-col gap-5 w-1/5 p-8 rounded-xl bg-white shadow-lg">
          <h1 className="text-xl text-indigo-400 font-bold">TODO</h1>

          {addMode && (
            <AddTaskInput
              todo={todo}
              setTodo={setTodo}
              handleAddTodo={handleAddTodo}
            />
          )}

          <TodoList
            todos={todos}
            editMode={editMode}
            editIndex={editIndex}
            editText={editText}
            handleEditTodo={handleEditTodo}
            handleEditButtonClick={handleEditButtonClick}
            removeTodo={removeTodo}
          />

          <CompletedTodoList todos={todos} removeTodo={removeTodo} />

          <TodoCount todos={todos} setAddMode={setAddMode} />
        </div>
      </section>
    </>
  );
}
