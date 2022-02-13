import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    newsLetter: true,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log('Passwords match');
    } else {
      console.log('Passwords do not match');
      return;
    }

    if (formData.newsLetter) {
      console.log('You will receive our newsletter');
    }
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder='Email address'
          className='form__input'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='form__input'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm password'
          className='form__input'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className='form__marketing'>
          <input
            type='checkbox'
            name='newsLetter'
            id='okayToEmail'
            name='newsLetter'
            checked={formData.newsLetter}
            onChange={handleChange}
          />
          <label htmlFor='okayToEmail'>I want to join the newsletter</label>
        </div>
        <button className='form__submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default App;
