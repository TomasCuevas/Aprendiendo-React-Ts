import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  name: string;
  age?: number;
}

export const Form = () => {
  const { form, email, name, age, onInputChange } = useForm<FormData>({
    email: '',
    name: '',
  });

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={onInputChange}
            type="email"
            className="form-control"
            name="email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={name}
            onChange={onInputChange}
            type="text"
            className="form-control"
            name="name"
          />
        </div>
      </form>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  );
};
