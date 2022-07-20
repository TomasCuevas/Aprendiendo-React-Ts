import { useState } from 'react';

interface Users {
  _id: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<Users>({
    _id: '',
    name: '',
  });

  const onLogin = (): void => {
    setUser({
      _id: '123ABC',
      name: 'Tomas Cuevas',
    });
  };

  const onLogout = (): void => {
    setUser({
      _id: '',
      name: '',
    });
  };

  return (
    <div className="mt-4">
      <h3>User</h3>
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
      <button onClick={onLogout} className="btn btn-outline-primary mx-2">
        Logout
      </button>

      {user!._id.length > 0 ? (
        <pre className="mt-2">{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <pre className="mt-2">No hay usuario.</pre>
      )}
    </div>
  );
};
