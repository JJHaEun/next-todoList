import { NextPage } from "next";

export default function Main(): JSX.Element {
  // const Main으로 함수를 만든뒤 Main: 해서 적으면 Main이라는 변수의 타입을 의미하는데,
  // pages폴더에서의 컴포넌트 타입으 NextPage이다.
  // 화살표 함수형으로 적고 변수뒤에 타입을 NextPage로 적어주면 되는데
  // 함수 선언식의 경우에는 NextPage터압울 사용하는 함수는 반환형이 JSX.Element으로 명시해줘야한다.
  return (
    <>
      <div>Hello Typescript</div>
    </>
  );
}
