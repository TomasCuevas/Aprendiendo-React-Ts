import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = (number: number): void => {
    setCounter(number + 1);
  };

  const onDecrement = (number: number): void => {
    setCounter(number - 1);
  };

  return (
    <div className="mt-2">
      <h3>Counter: {counter}</h3>
      <br />
      <button onClick={() => onIncrement(counter)} className="btn btn-outline-primary">
        +1
      </button>
      <button onClick={() => onDecrement(counter)} className="btn btn-outline-primary mx-2">
        -1
      </button>
      <button onClick={() => setCounter(10)} className="btn btn-outline-danger">
        Reset
      </button>
    </div>
  );
};
