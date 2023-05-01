import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../src/types/todo/todo";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile("src/data/todos.json", (error, data) => {
          if (error) {
            return reject(error.message);
          }

          //       console.log("data:", data);
          //   출력결과 => data: <Buffer 5b 0a 20 20 7b 20 22 69 64 22 3a 20 31 2c 20 22 74 65 78 74 22 3a 20 22 eb a7 88 ed 8a b8 20 ea b0 80 ec 84 9c 20 ec 9e a5 eb b3 b4 ea b8 b0 22 2c 20 ... 515 more bytes>

          const todosData = data.toString();
          if (!todosData) {
            return resolve([]);
          }
          const todos = JSON.parse(todosData);

          //       console.log("todos:", todos);
          //   출력결과 =>  todos: [
          //   { id: 1, text: '마트 가서 장보기', color: 'red', checked: false },
          //   { id: 2, text: '말포이 괴롭게 하기', color: 'orange', checked: false },
          //   { id: 3, text: '새로운 애완동물 가게 들르기', color: 'green', checked: true },
          //   { id: 4, text: '넥스트 공부하기', color: 'green', checked: true },
          //   { id: 5, text: '지팡이 구경하기', color: 'navy', checked: false },
          //   { id: 6, text: '분리수거 하기', color: 'yellow', checked: false }
          // ]

          return resolve(todos);
        });
      });
      res.statusCode = 200;
      return res.send(todos);

      // const todosBuffer = fs.readFileSync("src/data/todos.json"); // 동기로 가져오는 방법(Promise없이)
      // const todosString = todosBuffer.toString();
      // if (!todosString) {
      //   res.statusCode = 200;
      //   res.send([]);
      // }
      // const todos: TodoType[] = JSON.parse(todosString);
      // res.statusCode = 200;
      // return res.send(todos);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }
};
// export default function Todos(req: NextApiRequest, res: NextApiResponse) {
//     return res.send("Hello Next!!");
//   }
// 둘다 동일한 방법임.
