import type { NextPage } from "next";
import TodoList from "../src/components/todoList/TodoList";

const Main: NextPage = (): JSX.Element => {
  return (
    <>
      <TodoList />
    </>
  );
};

export default Main;
