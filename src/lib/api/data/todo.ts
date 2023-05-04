// todo 데이터를 관리하는 함수들을 모아둠.

import { readFileSync, writeFileSync } from "fs";
import { Axios } from "..";
import { TodoType } from "../../../types/todo/todo";

interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

// ----------------------------------------------

// todoList 데이터 불러오기

export const getList = () => {
  const todosBuffer = readFileSync("src/data/todos.json");
  const todosString = todosBuffer.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

// ----------------------------------------------

// id의 todo가 있는지 확인하기

export const exist = ({ id }: { id: number }) => {
  console.log(id);
  const todos = getList();

  const todo = todos.some((todo) => todo?.id === id);
  console.log(todo);
  return todo;
  // some: 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트하는 메서드
};

// ----------------------------------------------

// todo 리스트 저장하기

export const write = async (todos: TodoType[]) => {
  writeFileSync("src/data/todos.json", JSON.stringify(todos));
};

// ----------------------------------------------

// todo 체크하기

export const checkTodoAPI = (todosId: number) =>
  Axios.patch(`api/todos/${todosId}`);

// ----------------------------------------------

// todo 추가하기

export const addTodoAPI = (body: AddTodoAPIBody) =>
  Axios.post("api/todos", body);

// ----------------------------------------------

// todo 삭제하기

export const deleteTodoAPI = (id: number) => Axios.delete(`api/todos/${id}`);
