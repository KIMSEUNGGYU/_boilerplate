import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  button {
    padding: 0.2rem 0.5rem;
    height: 3rem;
    width: 5rem;
    color: white;
    border: 0;
    cursor: pointer;
  }

  button + button {
    margin-left: 1rem;
  }

  button.increase {
    background-color: red;
  }
  button.decrease {
    background-color: blue;
  }
`;
