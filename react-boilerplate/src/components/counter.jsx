import styled from '@emotion/styled';

// 예제 - counter
export default function Counter({ number = 0, onIncrease = () => {}, onDecrease = () => {} }) {
  return (
    <Wrapper>
      <h2>{number}</h2>
      <button //
        className="increase"
        onClick={onIncrease}
      >
        +
      </button>
      <button //
        className="decrease"
        onClick={onDecrease}
      >
        -
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
