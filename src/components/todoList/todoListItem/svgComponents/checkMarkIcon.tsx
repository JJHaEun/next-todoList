import { onClickCheckTodo } from "../../../event/checkTodo";
import { IProps } from "../../TodoList.types";

export default function CheckMarkIcon({ todo }: IProps): JSX.Element {
  const { checkTodo } = onClickCheckTodo();

  return (
    <span className="todo-check" onClick={checkTodo(todo?.id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
      </svg>
    </span>
  );
}
