import { IProps } from "../TodoList.types";
import { Checkboxes } from "./listItemcheckes.styles";
import CheckMarkIcon from "./svgComponents/checkMarkIcon";
import TrashDelIcon from "./svgComponents/trashDelIcon";

export default function ListItemChecks({ todo }: IProps): JSX.Element {
  return (
    <Checkboxes className="todo-right-side">
      {!todo?.checked ? (
        <button className="todo-button" onClick={() => {}}></button>
      ) : (
        <span className="todo-checking">
          <TrashDelIcon />
          <CheckMarkIcon />
        </span>
      )}
    </Checkboxes>
  );
}
