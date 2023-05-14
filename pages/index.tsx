import type { GetServerSideProps, NextPage } from "next";
import { memo } from "react";
import { wrapper } from "../src/commons/store";
import { todoAction } from "../src/commons/store/todo";
import TodoList from "../src/components/todoList/TodoList";
import { IProps } from "../src/components/todoList/TodoList.types";
import { getToDoAPI } from "../src/lib/api/todo";

const Main: NextPage<IProps> = (): JSX.Element => {
  // console.log(process.env.NEXT_PUBLIC_API_URL, "브라우저");
  return (
    <>
      <TodoList />
    </>
  );
};

export default memo(Main);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // console.log("스토어", store);
    try {
      // console.log(process.env.NEXT_PUBLIC_API_URL, "서버");
      const { data } = await getToDoAPI();
      // console.log("res:", data);
      // const res = await axios.get(
      //   "http://localhost:3000/api/todos"
      // );
      // console.log("res:", res.data); // 위쪽과 동일한코드
      store.dispatch(todoAction.setTodo(data));
      return { props: {} };
    } catch (error) {
      console.log("에러", error);
      return { props: {} };
    }
  }
);
