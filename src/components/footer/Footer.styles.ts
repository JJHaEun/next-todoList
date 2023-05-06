import styled from "styled-components";
import palette from "../../../styles/palette";

export interface IPropsStyle {
  isMain: boolean;
  // onClick: () => void;
}

export const Container = styled.footer`
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0; // 뷰의 끝으로 가게함.
  border-top: 1px solid ${palette.gray};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10% 0 0;
  /* .footer-button {

  } */
`;
export const FooterButton = styled.button<IPropsStyle>`
  font-size: 32px;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: snow;
  outline: none;
  padding-bottom: ${(props) => (props.isMain ? 0 : "5px")};
  cursor: pointer;
`;
