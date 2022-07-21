import styled from '@emotion/styled';


export default function DefaultLayout({ children }) {
  return (
    <div>
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
