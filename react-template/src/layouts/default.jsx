import styled from '@emotion/styled';

import HeaderContainer from '../containers/header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <HeaderContainer />
      <Main>{children}</Main>
    </div>
  );
}

const Main = styled.main`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
