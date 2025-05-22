import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('');
  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className=" flex flex-col w-[90%] sm:max-w-md mx-auto mt-14 text-gray-800">
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <p className="text-3xl prata-regular">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === 'Login' ? null : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800 rounded"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800 rounded"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800 rounded"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm border-gray-800 mt-1">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer "
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer "
            >
              Login Here
            </p>
          )}
        </div>

        <button
          type="submit"
          className='bg-black text-white font-light px-8 py-2 mt-4'
        >
          {currentState === 'Login' ? 'Sign In' :'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default Login;
