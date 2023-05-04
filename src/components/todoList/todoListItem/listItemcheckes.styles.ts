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
    cursor: pointer;
  }
  .todo-checking {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .todo-trash {
    width: 16px;
    cursor: pointer;
    path {
      fill: ${palette.deep_red};
    }
  }
  .todo-check {
    width: 20px;
    cursor: pointer;

    path {
      fill: ${palette.green};
    }
  }
`;
