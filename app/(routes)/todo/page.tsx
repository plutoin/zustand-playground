"use client";

import React, { useState } from "react";

import { useTodoStore } from "../../store/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");

  const { todos, addTodo, removeTodo, editTodo, completeTodo } = useTodoStore();

  const handleAddTodo = (todo: string) => {
    addTodo(todo);
    setTodo("");
  };

  const handleEditTodo = (todo: any) => {
    editTodo(todo);
    setEditMode(false);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-1 min-h-dvh bg-blue-100">
      <div className="flex flex-col gap-5 p-10 rounded-xl bg-white shadow-lg">
        <h1 className="text-xl text-indigo-400 font-bold">TODO</h1>

        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="할 일 입력"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="px-2 py-1 border-b text-sm border-gray-300 focus:outline-none focus:border-indigo-400"
          />
          <button
            type="button"
            onClick={() => handleAddTodo(todo)}
            className="px-3 py-2 text-indigo-600 rounded-md hover:bg-indigo-100"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="text-sm text-indigo-600">
          <ul className="flex flex-col gap-2">
            {todos.map(
              (item: any, index: number) =>
                item.isCompleted === false && (
                  <li key={index} className="flex items-center">
                    {editMode ? (
                      <div>
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="mr-2 px-2 py-1 border-b text-sm border-gray-300 focus:outline-none focus:border-indigo-400"
                        />
                        <button
                          type="button"
                          onClick={handleEditTodo}
                          className="px-3 py-2 text-indigo-600 rounded-md hover:bg-indigo-100"
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          checked={item.isCompleted}
                          onChange={() => completeTodo(item)}
                          className="mr-2"
                        />
                        <span>{item.text}</span>

                        <div className="ml-auto">
                          <button
                            type="button"
                            onClick={() => setEditMode(true)}
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="mr-2 text-xs text-indigo-500 hover:text-indigo-700"
                              size="sm"
                            />
                          </button>

                          <button
                            type="button"
                            onClick={() => removeTodo(item)}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="text-indigo-500 hover:text-indigo-700"
                              size="sm"
                            />
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="text-sm text-indigo-400">
          <ul>
            {todos.map(
              (item: any, index: number) =>
                item.isCompleted && (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={() => completeTodo(item)}
                      className="mr-2"
                    />
                    <span className="line-through">{item.text}</span>

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

        <div className="text-xs text-indigo-400">
          <span>
            {todos.filter((item) => item.isCompleted === false).length} TASKS
          </span>
          {/* <span>
            {todos.filter((item: any) => item.isCompleted).length} TASKS
          </span> */}
        </div>
      </div>
    </section>
  );
}
