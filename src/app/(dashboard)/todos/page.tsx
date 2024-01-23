import TodoList from "@/components/TodoList";
import prisma from "@/prisma";

const getTodos = async () => {
  // await new Promise((resolve, reject) =>
  //   setTimeout(() => reject("intentional err"), 2000)
  // );
  return await prisma.todo.findMany();
};

export default async function TodosPage() {
  const todos = await getTodos();
  // console.log(todos);
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}
