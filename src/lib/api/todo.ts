import { TodoType } from "../../types/todo/todo";
import { Axios } from "./index";

export const getToDoAPI = () => Axios.get<TodoType[]>("api/todos");
