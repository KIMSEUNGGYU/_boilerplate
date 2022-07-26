import styled from '@emotion/styled';

export default function Header() {
  return (
    <Wrapper>
      <h1>오늘 할 일</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #1890ff;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
`;
