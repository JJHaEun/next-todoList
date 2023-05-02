import { Container } from "./AddTodo.styles";
import AddTodoColor from "./choiceColor/AddTodoColor";

export default function AddTodo(): JSX.Element {
  return (
    <Container>
      <div className="add-todo-header">
        <h1 className="add-todo-header-title">Todo 추가하기</h1>
        <button className="todo-submit-button" onClick={() => {}}>
          추가하기
        </button>
      </div>
      <AddTodoColor />
    </Container>
  );
}
