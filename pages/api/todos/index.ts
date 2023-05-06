import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../../src/types/todo/todo";
// import fs from "fs";
import { Data } from "../../../src/lib/api/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      //   1. promise사용하는방법 *
      // const todos = await new Promise<TodoType[]>((resolve, reject) => {
      //   fs.readFile("src/data/todos.json", (error, data) => { // promise사용하는방법*
      //     if (error) { //   promise사용하는방법*
      //       return reject(error.message); // promise사용하는방법 *
      //     } // promise사용하는방법 *
      //     console.log("data:", data);
      // 출력결과 => data: <Buffer 5b 0a 20 20 7b 20 22 69 64 22 3a 20 31 2c 20 22 74 65 78 74 22 3a 20 22 eb a7 88 ed 8a b8 20 ea b0 80 ec 84 9c 20 ec 9e a5 eb b3 b4 ea b8 b0 22 2c 20 ... 515 more bytes>
      // const todosData = data.toString(); // promise사용하는방법 *
      // if (!todosData) { // promise사용하는방법 *
      //   return resolve([]);// promise사용하는방법 *
      // }
      // const todos = JSON.parse(todosData);// promise사용하는방법 *
      //       console.log("todos:", todos);
      //   출력결과 =>  todos: [
      //   { id: 1, text: '마트 가서 장보기', color: 'red', checked: false },
      //   { id: 2, text: '말포이 괴롭게 하기', color: 'orange', checked: false },
      //   { id: 3, text: '새로운 애완동물 가게 들르기', color: 'green', checked: true },
      //   { id: 4, text: '넥스트 공부하기', color: 'green', checked: true },
      //   { id: 5, text: '지팡이 구경하기', color: 'navy', checked: false },
      //   { id: 6, text: '분리수거 하기', color: 'yellow', checked: false }
      // ]
      //     return resolve(todos);// promise사용하는방법 *
      //   });// promise사용하는방법 *
      // });
      // res.statusCode = 200;// promise사용하는방법 *
      // return res.send(todos);// promise사용하는방법 *

      // -------------------------------------------------------------------------------------

      //   2. 동기로 가져오는 방법(Promise없이)
      // const todosBuffer = fs.readFileSync("src/data/todos.json");
      // const todosString = todosBuffer.toString();
      // if (!todosString) {
      //   res.statusCode = 200;
      //   res.send([]);
      // }
      // const todos: TodoType[] = JSON.parse(todosString);
      // res.statusCode = 200;
      // return res.send(todos);

      // ---------------------------------------------------

      // 3. readFileSync를 사용하는 부분을 따로 빼서 import하여 사용하는 방법

      const todos = Data.getList();

      // console.log("todos: ", todos);
      res.statusCode = 200;
      return res.send(todos);
    } catch (error) {
      // 이 부분은 동일
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }
  if (req.method === "POST") {
    // 요청 메서드를 확인하고
    const { text, color } = req.body; // text와 color라는 값을 받았는지 확인하기
    if (!text || !color) {
      res.statusCode = 400; // 둘중 하나라도 없으면 400
      return res.send("text니 color가 없습니다.");
    }
    const todos = Data.getList();

    let todoId: number;
    if (todos.length > 0) {
      todoId = todos[todos.length - 1].id + 1;
    } else {
      todoId = 1;
    }
    const newTodo = {
      id: todoId,
      text,
      color,
      checked: false,
    };
    Data.write([...todos, newTodo]);
    res.statusCode = 200;
    res.end();
  }
};

// ----------------------------------------------------------------
// export default function Todos(req: NextApiRequest, res: NextApiResponse) {
//     return res.send("Hello Next!!");
//   }
// 둘다 동일한 방법임.
