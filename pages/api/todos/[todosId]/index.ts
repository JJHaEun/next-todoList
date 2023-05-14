import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../../src/lib/api/data";

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PATCH") {
    // 선택(todo checked변경하기(true,false))
    try {
      console.log("req.query::", req.query); // 대괄호 폴더의 파일명과 해당 값(id)을 받아올 수 있음. - 동적 페이지
      let todosId = Number(req.query.todosId);
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
  if (req.method === "DELETE") {
    // 삭제요청
    // 삭제요청이 온 id의 것을 제외하고 뿌려주기
    try {
      const todoId = Number(req.query.todosId);
      const todo = Data.exist({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }
      const todos = Data.getList();
      const filterTodo = todos.filter((todo) => todo.id !== todoId);
      Data.write(filterTodo);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  res.statusCode = 405;
  return res.end();
}
