import { TodoType } from "../../../types/todo/todo";
import { onClickCheckTodo } from "../../event/checkTodo";
import { IProps } from "../TodoList.types";
import ListItemChecks from "./listItemchecks";
import { TodoListItem } from "./listItems.styles";

export default function ListItem({ todos }: IProps): JSX.Element {
  return (
    <TodoListItem>
      <ul className="todo-list">
        {todos?.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="left-side">
              <div className={`color-block bg-${todo.color}`} />
              <p className={`todo-text ${todo.checked ? "checked-todo" : ""}`}>
                {todo.text}
              </p>
            </div>
            <ListItemChecks todo={todo} />
          </li>
        ))}
      </ul>
    </TodoListItem>
  );
}
