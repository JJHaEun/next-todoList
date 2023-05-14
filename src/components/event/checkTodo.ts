import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { todoAction } from "../../commons/store/todo";
import { checkTodoAPI } from "../../lib/api/data/todo";
import { TodoType } from "../../types/todo/todo";
import { IProps } from "../todoList/TodoList.types";

export const onClickCheckTodo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const checkTodo = (todoId: number) => (todos?: TodoType[]) => async () => {
    try {
      await checkTodoAPI(Number(todoId));
      // console.log("체크");
      // 체크를 적용하는 법1
      // router,reload(); => 새로고침이 적용되어 데이터를 새로 받아옴

      // ------------------------------------

      router.push("/"); // setServerSideProps를 사용해 데이터 다시 받아오기 => 새로 받아오지 않고 일부만.
      const newTodos = todos?.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      dispatch(todoAction.setTodo(newTodos as TodoType[]));
    } catch (err) {
      console.log(err);
    }
  };
  return {
    checkTodo,
  };
};
