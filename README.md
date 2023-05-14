# next-todoList

## 타입스크립트를 적용한 Next를 이용한 todoList만들기

next-TodoList

- styled-component사용해보기
  ( HTML 내에서 첫 번째 렌더링에 필요한 스타일을 제공하고 나머지는 클라이언트에서 로드할 수 있습니다. 이 경우 styled-components 를 사용하고 있습니다 .)

  - 이미 적용되어있는 스타일을 초기화 하기위해 전체선택자 '\*'을 사용하여 margin:0; 등을 지정할 수도 있으나, 이미 있는 모든 스타일을 초기화 하는 styled-reset등을 사용하면 브라우저 호환성을 높일 수 있음 (styled-reset을 설치한 뒤 글로벌 css에 reset만 import해주면 됨)

- 필요한 색상을 미리 객체로 정리해 파일로 만들어두고 import해서 사용.
- 타입파일을 만들어 관련타입끼리 관리.

  - todo.d.ts 라는 파일을 만드는데 이 d.ts 라는 확장자의 파일은 타입스크립트의 타입추론을 돕는 파일.

---

- import해올 svg파일을 리엑트 컴포넌트로 변형시키기 위해 바벨 플러그인을 설치 & 설정 추가

  > yarn add babel-plugin-inline-react-svg -D

- .babelrc 에도 설정을 추가해주고,
- import TrashDelIcon from "../../../../public/svg/trash_delete.svg"; 처럼 import 해서 사용.

  - \*_: .svg라는 모듈을 찾지못한다는 에러가 발생하는데, 이 모듈에 대한 타입을 지정한다면 해결됨.
    ==> image.d.ts파일에 declare module '_.svg';
    를 적어주고 저장하면 '\*.svg'가 모듈로 선언되어 에러는 사라짐.

> 위의 방법을 사용하니 경로설정이 잘못되었는지 계속 에러가 발생해 컴포넌트로 분리하는 방법을 사용하였다.

- axios를 이용해 만든 api에 요청하기

- PATCH 메서드를 사용해 일부를 업데이트 해보기.
- PUT 메서드와 PATCH 메서드의 차이점
  > 둘다 업데이트를 담당하는 메서드이다.
  > 다만 , PUT메서드는 전부를 업데이트 하기 위한 메서드 이기에 모든 값을 적어주어 보내주지 않으면 보내주지 않은 값에 대해서는 null이 나온다.
  >
  > PATCH 메서든 일부를 업데이트할 때 유용하다.
  > PUT 메서드와는 다르게 일부값만 보내도 나머지는 원래값이 들어간 상태로 나오게 된다.
  > 즉. PATCH 메서드를 사용하면 필요한 부분만 수정해도 null값이 나오지 않고 원하는 업데이트 자료(?) 를 얻을 수 있다!!

---

> res.send()는 send에 전해진 argument에 따라서 Content-type이 자동적으로 만들어진다. 이게 기본이다.
> res.json()은 json이 아닌 것도 json 형식으로 바꾸어서 보내준다. 즉 content-type 헤더를 application/JSON으로 고정한다. 그런데 결국 res.json()도 마지막에 res.send()를 호출한다.
> res.end()는 보내줄 아무 데이터도 없는데 response를 끝내고 싶을 때 사용한다.

```react
import { NextPage } from "next";

export default function Main(): JSX.Element {
  return (
    <>
      <div>Hello Typescript</div>
    </>
  );
}
```

- const Main으로 함수를 만든뒤 Main: 해서 적으면 Main이라는 변수의 타입을 의미하는데,
- pages폴더에서의 컴포넌트 타입은 NextPage이다.
- 화살표 함수형으로 적고 변수뒤에 타입을 NextPage로 적어주면 되는데
- 함수 선언식의 경우에는 NextPage타입을 사용하는 함수는 반환형이 JSX.Element으로 명시해줘야한다.
- 함수의 이름을 지정하고 export default 함수이름 으로 명시적으로 내보내는 것이 가독성이 좋다.

> import type 구문이 필요하지 않을 수도 있습니다. 예를 들어, 타입스크립트 환경에서 JSX.Element 타입은 기본적으로 내장되어 있으므로, import React 구문 없이도 JSX.Element 타입을 사용할 수 있습니다. 이와 같이, NextPage 타입도 일부 경우에는 이미 다른 모듈에서 불러와져서 사용되고 있을 수 있습니다. 하지만, 보통은 NextPage를 사용하기 위해서는 import type { NextPage } from 'next' 구문을 추가해야 합니다.

> 신기한 사실을 알게되었다. 컴포넌트를 분리하고 스타일파일을 따로 만들었더라도, 이어붙인 컴포넌트에 해당 className이 있다면 그대로 적용이된다. => bg-${컬러이름} 이 부분이 listItem에 자동으로 적용되었다.

---

### 드디어 next를 활용한 todoList 완성!!!

<img width="696" alt="스크린샷 2023-05-06 오후 7 31 34" src="https://user-images.githubusercontent.com/114386587/236619142-7291fc58-7a3a-49e8-a95f-b0dfe0b0ebf3.png">

- delete메서드를 활용해 특정 List를 삭제하고,
- patch메서드를 사용해 checked를 true로 바꾸어 완료표시를 하거나, 다시 되돌리기,
- get메서드를 사용해 저장해 놓은 데이터 가져오기,
- post메서드를 사용해 List추가하기

---

### Redux사용하기

- 상태관리를 위해 가장 많이 사용하는 redux를 활용해보았다.
- 구조중심이 아닌 기능중심으로 파일을 나누는 ducks패턴 사용해보기.-> 아직 감이 잡히지 않는다.. 많이 사용하다보면 공부가 될 것같다.

> 리덕스를 사용해 서버사이드에서 api로 받아온 투두리스트 데이터를 _리덕스 스토어에 저장_
> 저장된 스토어를 _클라이언트에 전달_.

리덕스 홈페이지에 들어가보니 리덕스 툴킷 이라는 것을 설치 하라고 권장하는 것을 보았다.
첫 설치때는 안나와있어서 왜지 싶었는데 순서가 좀 뒤로 밀렸던것 같다.
오늘은 *리덕스 툴킷*을 설치해본다. => 리덕스 사용을 더 간편하게 만들어주는 것이다.

리덕스 툴킷에는 데브툴즈가 자체적으로 포함되어있다.
설정에서 configureStore에 devTools:true만 해주면 데브툴즈를 사용할 수 있다.

>

```js
// 미들웨어 적용을 위한 스토어 enhancer
// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
                  // 리덕스 툴킷이 없을때 데브툴을 사용하기 위해 설치하고 설정해주었던 부분
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

==>
const initStore = () => {
  return configureStore({
    reducer,
    //  bindMiddleware([])
    devTools: true, // 데브툴즈 사용허용
    // 툴킷을 설치한 후에는 안에 포함되어있는 데브툴즈를 허용만 해주면 설정끝
  });
};
```

#### useSelector를 사용해 데이터를 사용하는 방법

- 리덕스 스토어의 값 받아오기
  useSelector의 state타입은 RootState에서 가져오기

  >

  ```js
  > // 스토어 타입
  > export type RootState = ReturnType<typeof rootReducer>;
  >
  ```

  다만 매변 RootState를 불러와 타입을 지정해주는것이 조금 번거로우니 아예 타입을 지정해 놓은 useSelector를 만들어 사용해보자.

- useSelector 사용해 todos불러오기 ==> todo값을 받아옴.

#### Todo가 변경되었을때 변경된 todoList로 변경하기.

액션실행 => dispatch사용!!

액션을 실행시키기 위해 디스패치를 통해 실행한다.
디스패치를 간단히 사용하는 방법은 useDispatch 라는 훅을 사용하는 것이다.!!
