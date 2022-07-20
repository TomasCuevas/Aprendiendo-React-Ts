// useState
import { Counter } from './components/Counter';
import { User } from './components/User';

// useEffect
import { TimerPadre } from './components/TimerPadre';

// useReducer
import { CounterRed } from './components/CounterRed';

export const App = () => {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>useState</h2>
      <hr />
      <Counter />
      <User />

      <h2 className="mt-5">useEffect - useRef</h2>
      <hr />
      <TimerPadre />

      <h2 className="mt-5">useReducer</h2>
      <hr />
      <CounterRed />
    </>
  );
};
