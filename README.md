# next-todoList

#### 타입스크립트를 적용한 Next를 이용한 todoList만들기

next-TodoList

- styled-component사용해보기
  ( HTML 내에서 첫 번째 렌더링에 필요한 스타일을 제공하고 나머지는 클라이언트에서 로드할 수 있습니다. 이 경우 styled-components 를 사용하고 있습니다 .)

  - 이미 적용되어있는 스타일을 초기화 하기위해 전체선택자 '\*'을 사용하여 margin:0; 등을 지정할 수도 있으나, 이미 있는 모든 스타일을 초기화 하는 styled-reset등을 사용하면 브라우저 호환성을 높일 수 있음 (styled-reset을 설치한 뒤 글로벌 css에 reset만 import해주면 됨)

- 필요한 색상을 미리 객체로 정리해 파일로 만들어두고 import해서 사용.
- 타입파일을 만들어 관련타입끼리 관리.
  - todo.d.ts 라는 파일을 만드는데 이 d.ts 라는 확장자의 파일은 타입스크립트의 타입추론을 돕는 파일.

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
