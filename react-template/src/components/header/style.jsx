import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 0.5rem;
  }

  li {
    list-style: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  li + li {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: #40a9ff;
  }
  a.active {
    color: #096dd9;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  position: absolute;
  left: 0;
`;
