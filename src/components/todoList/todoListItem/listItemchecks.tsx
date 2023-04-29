import { IProps } from "../TodoList.types";
import { Checkboxes } from "./listItemcheckes.styles";

export default function ListItemChecks({ todo }: IProps): JSX.Element {
  return (
    <Checkboxes className="todo-right-side">
      {!todo?.checked && (
        <button className="todo-button" onClick={() => {}}></button>
      )}
    </Checkboxes>
  );
}
