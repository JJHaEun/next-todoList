import ChoiceColor from "../../todoListItem/svgComponents/choiceColor";
import { TodoColorWrap } from "./AddTodoColor.styles";

export default function AddTodoColor(): JSX.Element {
  return (
    <TodoColorWrap className="add-todo-colors-wrap">
      <div className="add-todo-color-list">
        {["red", "orange", "yellow", "green", "blue", "navy"].map(
          (color, index) => (
            <button
              key={index}
              className={`bg-${color} todo-color-button`}
              onClick={() => {}}
            ></button>
          )
        )}
      </div>{" "}
      <ChoiceColor />
    </TodoColorWrap>
  );
}
