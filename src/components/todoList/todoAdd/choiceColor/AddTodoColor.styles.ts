import styled from "styled-components";
import palette from "../../../../../styles/palette";
export const TodoColorWrap = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50% 0 0;
  .add-todo-color-list {
    display: flex;
    flex-direction: row;
    button {
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border-radius: 50%;
      outline: none;
      border: none;
      &:last-child {
        margin: 0;
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }
`;
