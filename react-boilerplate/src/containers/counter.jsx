import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../modules/couter';

import Counter from '../components/counter';

// 예제 - counter
export default function CounterContainer() {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  const { number } = useSelector((state) => state.counter);

  return (
    <Counter //
      number={number}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
}
