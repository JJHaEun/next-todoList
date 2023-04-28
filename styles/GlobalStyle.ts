import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans KR;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
