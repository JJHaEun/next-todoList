import { memo } from "react";
import AddTodo from "../../src/components/todoList/todoAdd/AddTodo";
const Todo = (): JSX.Element => {
  return (
    <>
      <AddTodo />
    </>
  );
};
export default memo(Todo);
