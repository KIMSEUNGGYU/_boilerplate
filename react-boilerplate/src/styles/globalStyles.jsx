import { css, Global } from '@emotion/react';

const GlobalStyle = (reset) => {
  const global = css`
    ${reset}
    * {
      box-sizing: border-box;
      outline: none;
      border: none;
    }
    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }
  `;

  return <Global styles={global} />;
};

export default GlobalStyle;
