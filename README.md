# next-todoList

next-TodoList

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
