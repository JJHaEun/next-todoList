import { ContainerTodoList } from "./TodoList.styles";
import { useCallback, useMemo } from "react";
import ListItem from "./todoListItem/listItems";
import { TodoType } from "../../types/todo/todo";
import { IProps } from "./TodoList.types";

type ObjectIndexType = {
  [key: string]: number | undefined;
};

export default function TodoList({ todos }: IProps): JSX.Element {
  const getTodoListNumbers = useCallback(() => {
    const colors: ObjectIndexType = {};
    // let red = 0;
    // let orange = 0;
    // let yellow = 0;
    // let green = 0;
    // let blue = 0;
    // let navy = 0;
    todos?.forEach((todo) => {
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
            남은 TODO<span>{todos?.length}개</span>
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
