import { Dispatch, SetStateAction } from "react";
import { TodoType } from "../../../../types/todo/todo";
import { onChangeChoiceColor } from "../../../event/choiceColor";
import ChoiceColor from "../../todoListItem/svgComponents/choiceColor";
import { TodoColorWrap } from "./AddTodoColor.styles";

const color = ["red", "orange", "yellow", "green", "blue", "navy"];

export interface IPropsColor {
  setSelectColor?: Dispatch<
    SetStateAction<
      "red" | "orange" | "yellow" | "green" | "blue" | "navy" | undefined
    >
  >;
  selectColor?: TodoType["color"];
}

export default function AddTodoColor({
  selectColor,
  setSelectColor,
}: IPropsColor): JSX.Element {
  const { choiceColor } = onChangeChoiceColor(setSelectColor);
  return (
    <TodoColorWrap>
      <div className="add-todo-color-list">
        {color.map((color, index) => (
          <button
            key={index}
            className={`bg-${color} todo-color-button ${
              color === selectColor ? "select-color" : ""
            }`}
            onClick={choiceColor(color)}
          ></button>
        ))}
      </div>
      <ChoiceColor />
    </TodoColorWrap>
  );
}
