import { TodoType } from "../../types/todo/todo";
import { Axios } from ".";

export const getToDoAPI = () => Axios.get<TodoType[]>("api/todos");
