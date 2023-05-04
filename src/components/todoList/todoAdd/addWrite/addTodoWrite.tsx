import { Dispatch, SetStateAction } from "react";
import { onChangeAddTodo } from "../../../event/addTodo";
import { TextareaWrap } from "./addTodoWrite.styles";

interface IPropsText {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
}

export default function AddTodoWrite({
  setText,
  text,
}: IPropsText): JSX.Element {
  const { changeAddTodo } = onChangeAddTodo(setText)();
  return (
    <TextareaWrap>
      <textarea
        value={text}
        onChange={changeAddTodo}
        placeholder="할 일을 입력해주세요"
      />
    </TextareaWrap>
  );
}
