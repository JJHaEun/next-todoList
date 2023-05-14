import { TodoType } from "../../../types/todo/todo";
import { onClickCheckTodo } from "../../event/checkTodo";
import { IProps } from "../TodoList.types";
import { Checkboxes } from "./listItemcheckes.styles";
import CheckMarkIcon from "./svgComponents/checkMarkIcon";
import TrashDelIcon from "./svgComponents/trashDelIcon";

export default function ListItemChecks({ todo, todos }: IProps): JSX.Element {
  const { checkTodo } = onClickCheckTodo();

  return (
    <Checkboxes className="todo-right-side">
      {!todo?.checked ? (
        <span className="todo-checking">
          <TrashDelIcon todo={todo} />
          <button
            className="todo-button"
            onClick={checkTodo(Number(todo?.id))(todos)}
          />
        </span>
      ) : (
        <span className="todo-checking">
          <TrashDelIcon todo={todo} /> <CheckMarkIcon todo={todo} />
        </span>
      )}
    </Checkboxes>
  );
}
