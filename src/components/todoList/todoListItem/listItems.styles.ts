import styled from "styled-components";
import palette from "../../../../styles/palette";

export const TodoListItem = styled.section`
  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 45px;
      border-bottom: 1px solid ${palette.navy};

      .left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .color-block {
          width: 1%;
          height: 100%;
        }
        .checked-todo {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          padding-left: 12px;
          font-size: 16px;
        }
      }
    }
  }
`;
