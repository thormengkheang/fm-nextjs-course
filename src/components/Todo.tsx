"use client";

import { completeTodo } from "@/actions/todo";
import React from "react";

export default function Todo({ todo }) {
  const [isPending, startTransition] = React.useTransition();
  return (
    <div
      className={`border border-black/10 cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
}
