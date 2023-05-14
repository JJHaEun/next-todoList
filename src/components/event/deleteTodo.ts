import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { todoAction } from "../../commons/store/todo";
import { deleteTodoAPI } from "../../lib/api/data/todo";
import { TodoType } from "../../types/todo/todo";
import { IProps } from "../todoList/TodoList.types";

export const onClickDelete = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const deleteTodo = (id: number) => (todos?: TodoType[]) => async () => {
    try {
      await deleteTodoAPI(Number(id));
      const newTodos = todos?.filter((todo) => todo.id !== id);
      dispatch(todoAction.setTodo(newTodos as TodoType[]));
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
