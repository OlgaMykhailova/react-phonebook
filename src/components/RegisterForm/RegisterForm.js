import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      );
      console.log({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
   
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='on'>
      <label>
        Username
        <input type="text" name="name"></input>
        <input type="email" name="email"></input>
        <input type="password" name="password"></input>
        <button type="submit">Register</button>
      </label>
    </form>
  );
};
