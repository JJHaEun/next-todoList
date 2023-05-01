import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../../src/lib/api/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      console.log("req.query::", req.query); // 대괄호 폴더의 파일명과 해당 값(id)을 받아올 수 있음. - 동적 페이지
      const todosId = Number(req.query.todosId);
      console.log(todosId);
      const todo = Data.exist({ id: todosId });
      const todoList = Data.getList();
      const changedTodos = todoList.map((todo) => {
        if (todo.id === todosId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      Data.write(changedTodos);
      if (!todo) {
        res.statusCode = 404;
        console.log("나임");
        res.end();
      }

      res.statusCode = 200;
      return res.end();
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.send(err);
    }
  }
  res.statusCode = 405;
  return res.end();
};
