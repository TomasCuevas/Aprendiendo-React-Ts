// useState
import { Counter } from './components/Counter';
import { User } from './components/User';

// useEffect
import { TimerPadre } from './components/TimerPadre';

// useReducer
import { CounterRed } from './components/CounterRed';

// customHooks
import { Form } from './components/Form';

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

      <h2 className="mt-5">Custom Hooks</h2>
      <hr />
      <Form />
    </>
  );
};
