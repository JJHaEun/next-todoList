import { useRouter } from "next/router";
import { checkTodoAPI } from "../../lib/api/data/todo";
import { TodoType } from "../../types/todo/todo";

export const onClickCheckTodo = () => {
  const router = useRouter();

  const checkTodo = (todosId?: number) => async () => {
    try {
      await checkTodoAPI(Number(todosId));
      console.log("체크");
      // 체크를 적용하는 법1
      // router,reload(); => 새로고침이 적용되어 데이터를 새로 받아옴

      // ------------------------------------

      router.push("/"); // setServerSideProps를 사용해 데이터 다시 받아오기 => 새로 받아오지 않고 일부만.
    } catch (err) {
      console.log(err);
    }
  };
  return {
    checkTodo,
  };
};
