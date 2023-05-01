import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import TodoList from "../src/components/todoList/TodoList";
import { getToDoAPI } from "../src/lib/api/todo";
import { TodoType } from "../src/types/todo/todo";

const Main: NextPage = (): JSX.Element => {
  return (
    <>
      <TodoList />
    </>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getToDoAPI();
    console.log("res:", data);
    // const res = await axios.get(
    //   "http://localhost:3000/api/todos"
    // );
    // console.log("res:", res.data); // 위쪽과 동일한코드
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
