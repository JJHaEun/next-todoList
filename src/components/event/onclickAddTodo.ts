import { useRouter } from "next/router";
import { addTodoAPI } from "../../lib/api/data/todo";
import { TodoType } from "../../types/todo/todo";

export const onClickAddTodo = () => {
  const router = useRouter();
  const addTodo =
    (selectColor?: TodoType["color"], text?: string) => async () => {
      console.log(selectColor);
      try {
        if (!text || !selectColor) {
          alert("색상과 할 일을 입력해 주세요");

          return;
        }
        await addTodoAPI({ text, color: selectColor });
        alert("추가되었습니다");
        router.push("/");
      } catch (e) {
        console.log(e);
      }
    };
  return {
    addTodo,
  };
};
