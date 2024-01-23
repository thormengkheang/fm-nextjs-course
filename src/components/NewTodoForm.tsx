import { newTodo } from "@/actions/todo";

export default function NewTodoForm() {
  return (
    <div>
      <form action={newTodo}>
        <input
          type="text"
          name="content"
          className="border border-black/25"
        />
        <button type="submit">new todo</button>
      </form>
    </div>
  );
}
