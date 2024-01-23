"use server";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export const newTodo = async (formData) => {
  const content = formData.get("content");
  const todo = await prisma.todo.create({
    data: {
      content,
    },
  });
  revalidatePath("/todos");
};

export const completeTodo = async (id) => {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};
