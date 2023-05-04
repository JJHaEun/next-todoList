import { useRouter } from "next/router";
import { deleteTodoAPI } from "../../lib/api/data/todo";
import { TodoType } from "../../types/todo/todo";
import { IProps } from "../todoList/TodoList.types";

export const onClickDelete = () => {
  const router = useRouter();
  const deleteTodo = (id?: number) => async () => {
    try {
      await deleteTodoAPI(Number(id));
      //   const newTodos = todos.filter((todo)=>todo.id !==id);
      console.log("삭제완료");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return {
    deleteTodo,
  };
};
