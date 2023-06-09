import styled from "styled-components";
import palette from "../../../styles/palette";

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 55px;
  padding: 0 20px;
  border-bottom: 1px solid ${palette.gray};
  h1 {
    font-size: 21px;
  }
`;
