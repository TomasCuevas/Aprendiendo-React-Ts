import { useState } from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div className="mt-2">
      <span>Milisegundos {milisegundos}</span>
      <br />
      <button onClick={() => setMilisegundos(1000)} className="btn btn-outline-success">
        1000
      </button>
      <button onClick={() => setMilisegundos(2000)} className="btn btn-outline-success mx-2 my-2">
        2000
      </button>

      <Timer milisegundos={milisegundos} />
    </div>
  );
};
