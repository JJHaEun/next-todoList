import { useState } from "react";
import { TodoType } from "../../../types/todo/todo";
import { onChangeAddTodo } from "../../event/addTodo";
import { onChangeChoiceColor } from "../../event/choiceColor";
import { onClickAddTodo } from "../../event/onclickAddTodo";
import { Container } from "./AddTodo.styles";
import AddTodoWrite from "./addWrite/addTodoWrite";
import AddTodoColor from "./choiceColor/AddTodoColor";

export default function AddTodo(): JSX.Element {
  const [text, setText] = useState("");
  const [selectColor, setSelectColor] = useState<TodoType["color"]>();

  const { addTodo } = onClickAddTodo();
  return (
    <Container>
      <div className="add-todo-header">
        <h1 className="add-todo-header-title">Todo 추가하기</h1>
        <button
          className="todo-submit-button"
          onClick={addTodo(selectColor, text)}
        >
          추가하기
        </button>
      </div>
      <AddTodoColor setSelectColor={setSelectColor} selectColor={selectColor} />
      <AddTodoWrite setText={setText} text={text} />
    </Container>
  );
}
