import type { NextPage } from "next";
import TodoList from "../src/components/todoList/TodoList";
import { TodoType } from "../src/types/todo/todo";

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "말포이 괴롭게 하기", color: "orange", checked: false },
  { id: 3, text: "새로운 애완동물 가게 들르기", color: "green", checked: true },
  { id: 4, text: "넥스트 공부하기", color: "green", checked: true },
  { id: 5, text: "지팡이 구경하기", color: "navy", checked: false },
  { id: 6, text: "분리수거 하기", color: "yellow", checked: false },
];

const Main: NextPage = (): JSX.Element => {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default Main;
