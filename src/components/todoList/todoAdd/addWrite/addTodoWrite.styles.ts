import styled from "styled-components";
import palette from "../../../../../styles/palette";

export const TextareaWrap = styled.section`
  textarea {
    width: 100%;
    height: 300px;
    resize: none;
    border-color: ${palette.gray};
    /* outline: none; */
    padding: 20px;
    :focus {
      outline: none;
    }
    font-size: 15px;
  }
`;
