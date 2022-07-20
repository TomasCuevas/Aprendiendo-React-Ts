import { useReducer } from 'react';

const initialState = {
  counter: 10,
};

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'custom'; payload: number };

const counterReducer = (state: typeof initialState, action: Action) => {
  switch (action?.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'custom':
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

  const onIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const onDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <>
      <h4>Counter: {counter}</h4>
      <button onClick={onIncrement} className="btn btn-outline-primary">
        +1
      </button>
      <button onClick={onDecrement} className="btn btn-outline-primary mx-2">
        -1
      </button>
      <button
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
        className="btn btn-outline-primary mx-2"
      >
        100
      </button>
    </>
  );
};
