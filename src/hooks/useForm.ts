import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return {
    // properties
    ...form,
    form,

    // methods
    onInputChange,
  };
};
