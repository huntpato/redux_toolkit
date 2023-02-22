import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { decrement, increment, incrementByAmount } from '../../store/slices/counter/counterSlice';
import styles from "./Counter.module.css";

const Counter = () => {

  const { container,container_buttons } = styles;  

  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementValue, setIncrementValue] = useState('0');

  const numberValue = Number(incrementValue) || 0;

  return (
    <div className={container}>
      <p>El valor total es: {value}</p>
      <div className={container_buttons}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          disabled={value === 0}
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
    </div>
  );
};

export default Counter;
