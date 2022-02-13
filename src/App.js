import { useState } from 'react';

const App = () => {
  return (
    <div className='form-container'>
      <form className='form'>
        <input type='text' name='email' placeholder='Email address' className='form__input' />
        <input type='password' name='password' placeholder='Password' className='form__input' />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm password'
          className='form__input'
        />

        <div className='form__marketing'>
          <input type='checkbox' name='newsLetter' id='okayToEmail' />
          <label htmlFor='okayToEmail'>I want to join the newsletter</label>
        </div>
        <button className='form__submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default App;
