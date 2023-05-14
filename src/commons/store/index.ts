import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { todo } from "./todo";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // 이전값
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

// 스토어 타입
export type RootState = ReturnType<typeof rootReducer>;

// 1.타입이 지정되어있는  커스텀 useSelector만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

//2.  타입이 지정되어있는  커스텀 useSelector만들기  이렇게 위 아래 두가지 방법이 있음.
// declare module "react-redux" {
//   interface DefaultRootState extends RootState {}
// }

//------------------------------------------------------

// 미들웨어 적용을 위한 스토어 enhancer
// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");// 리덕스 툴킷이 없을때 데브툴을 사용하기 위해 설치하고 설정해주었던 부분
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

const initStore = () => {
  return configureStore({
    reducer,
    //  bindMiddleware([])
    devTools: true, // 데브툴즈 사용허용
    // 툴킷을 설치한 후에는 안에 포함되어있는 데브툴즈를 허용만 해주면 설정끝
  });
};

export const wrapper = createWrapper(initStore);
