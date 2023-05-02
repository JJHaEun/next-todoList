import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;

  .add-todo-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50% 0 0;
    align-items: center;
    .add-todo-header-title {
      font-size: 21px;
    }
    .todo-submit-button {
      padding: 4px 8px;
      border: 1px solid black;
      background-color: white;
      outline: none;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
