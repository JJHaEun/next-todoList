import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo/todo";

interface TodoReduxState {
  todos: TodoType[];
}

// 액션 타입 정의
// export const SET_TODO_LIST = "todo/SET_TODO_LIST";

// 액션 생성자 정의 = 액션객체( 항상 모듈의 action생성자들을 함수형태로 export해야한다.)
// export const setTodo = (payload: TodoType[]) => {
//   return {
//     type: SET_TODO_LIST,
//     // type: INIT_TODO_LIST,
//     payload,
//   };
// };

// 초기상태
export const initialState: TodoReduxState = {
  todos: [],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // 투두 변경하기
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    },
  },
});

export const todoAction = { ...todo.actions };
// 리듀서( 항상 reducer()라는 이름으로 함수를 export default해야한다.)
// export default function reducer(state = initialState, action: any) {
//   switch (action.type) {
//     case SET_TODO_LIST:
//       const newState = { ...state, todos: action.payload };
//       return newState;
//     default:
//       return state;
//   }
// }
