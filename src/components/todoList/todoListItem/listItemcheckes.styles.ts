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
  .todo-checking {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .todo-trash {
    width: 16px;
    path {
      fill: ${palette.deep_red};
    }
  }
  .todo-check {
    /* width: 16px; */
    path {
      fill: ${palette.navy};
    }
  }
`;
