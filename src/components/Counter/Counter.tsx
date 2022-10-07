import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { decrement, increment, incrementByAmount } from '../../store/slices/counter/counterSlice';
import styles from "./Counter.module.css";

const Counter = () => {

  const {} = styles;  

  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementValue, setIncrementValue] = useState('0');

  const numberValue = Number(incrementValue) || 0;

  return (
    <div>
      <p>El valor es: {value}</p>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <input
        aria-label="Set Increment value"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
      />
      <button
        onClick={() => dispatch(incrementByAmount(numberValue))}
      >
        Sumar valor
      </button>
    </div>
  );
};

export default Counter;
