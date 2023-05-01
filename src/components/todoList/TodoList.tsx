import { ContainerTodoList } from "./TodoList.styles";
import { useCallback, useMemo } from "react";
import ListItem from "./todoListItem/listItems";
import { TodoType } from "../../types/todo/todo";

type ObjectIndexType = {
  [key: string]: number | undefined;
};

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "말포이 괴롭게 하기", color: "orange", checked: false },
  { id: 3, text: "새로운 애완동물 가게 들르기", color: "green", checked: true },
  { id: 4, text: "넥스트 공부하기", color: "green", checked: true },
  { id: 5, text: "지팡이 구경하기", color: "navy", checked: false },
  { id: 6, text: "분리수거 하기", color: "yellow", checked: false },
];

export default function TodoList(): JSX.Element {
  const getTodoListNumbers = useCallback(() => {
    const colors: ObjectIndexType = {};
    // let red = 0;
    // let orange = 0;
    // let yellow = 0;
    // let green = 0;
    // let blue = 0;
    // let navy = 0;
    todos.forEach((todo) => {
      const value = colors[todo.color];
      //   switch (todo.color) {
      //     case "red":
      //       red += 1;
      //       break;
      //     case "orange":
      //       orange++;
      //       break;
      //     case "yellow":
      //       yellow++;
      //       break;
      //     case "green":
      //       green++;
      //       break;
      //     case "blue":
      //       blue++;
      //       break;
      //     case "navy":
      //       navy++;
      //       break;
      //     default:
      //       break;
      //   }
      if (!value) {
        colors[`${todo.color}`] = 1;
      } else {
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
    // ,{
    //   red,
    //   orange,
    //   yellow,
    //   green,
    //   blue,
    //   navy,

    // };
  }, [todos]);

  const todoColorNums = useMemo(getTodoListNumbers, [todos]);
  //  todos가 변경될 때만 실행

  return (
    <>
      <ContainerTodoList>
        <div className="todo-list-header">
          <p className="todo-list-last-todo">
            남은 TODO<span>{todos.length}개</span>
          </p>
          <div className="todo-list-header-colors">
            {Object.keys(todoColorNums).map((color, index) => (
              <div className="header-color-num" key={index}>
                <div className={`header-color-round bg-${color}`} />
                <p>{todoColorNums[color]}개</p>
                {/* 해당하는 키값의 값을 뽑아옴. */}
              </div>
            ))}
          </div>
        </div>
        <ListItem todos={todos} />
      </ContainerTodoList>
    </>
  );
}
