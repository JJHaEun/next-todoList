import { TodoType } from "../../types/todo/todo";

interface TodoReduxState {
  todos: TodoType[];
}

// 액션 타입 정의
export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

// 액션 생성자 정의 = 액션객체( 항상 모듈의 action생성자들을 함수형태로 export해야한다.)
export const setTodo = (payload: TodoType[]) => {
  return {
    type: INIT_TODO_LIST,
    payload,
  };
};

export const todoAction = { setTodo };

// 초기상태
export const initialState: TodoReduxState = {
  todos: [],
};

// 리듀서( 항상 reducer()라는 이름으로 함수를 export default해야한다.)
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INIT_TODO_LIST:
      const newState = { ...state, todos: action.payload };
      return newState;
    default:
      return state;
  }
}
