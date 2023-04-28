import styled from "styled-components";
import palette from "../../../styles/palette";

export const ContainerTodoList = styled.section`
  width: 100%;
  .todo-list-header {
    position: relative;
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};
  }

  .todo-list-last-todo {
    font-size: 14px;
    span {
      margin-left: 12px;
      font-weight: 500;
    }
  }
  .todo-list-header-colors {
    display: flex;
    padding-top: 15px;
    .header-color-num {
      display: flex;
      margin-right: 8px;
      p {
        font-size: 14px;
        line-height: 16px;
        margin: 0;
        margin-left: 8px;
      }
      .header-color-round {
        width: 16px;
        height: 16px;
        border-radius: 50%;
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
