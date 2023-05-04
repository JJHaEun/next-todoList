import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export const onChangeAddTodo =
  (setText: Dispatch<SetStateAction<string>>) => () => {
    const changeAddTodo = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.currentTarget.value);
    };
    return {
      changeAddTodo,
    };
  };
