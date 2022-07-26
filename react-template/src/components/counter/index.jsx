import * as S from './style';

export default function Counter({ number = 0, onIncrease = () => {}, onDecrease = () => {} }) {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
