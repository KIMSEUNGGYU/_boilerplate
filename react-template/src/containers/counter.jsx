import { useDispatch, useSelector } from 'react-redux';

import { debounce } from '../utils/debounce';
import { throttle } from '../utils/throttle';

import { incrementThunk, decrementThunk } from '../modules/couter';

import Counter from '../components/counter';

export default function CounterContainer() {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    throttle(() => {
      dispatch(incrementThunk());
    }, 500);
  };

  const handleDecrease = () => {
    debounce(() => {
      dispatch(decrementThunk());
    }, 500);
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
