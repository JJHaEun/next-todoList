import type { NextPage } from "next";
import TodoList from "../src/components/todoList/TodoList";
import { TodoType } from "../src/types/todo/todo";

const Main: NextPage = (): JSX.Element => {
  return (
    <>
      <TodoList />
    </>
  );
};

export default Main;
