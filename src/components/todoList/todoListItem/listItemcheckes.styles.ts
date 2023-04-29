import styled from "styled-components";
import palette from "../../../../styles/palette";

export const Checkboxes = styled.section`
  display: flex;
  padding-right: 12px;
  .todo-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${palette.gray};
    outline: none;
    background-color: transparent;
  }
`;
