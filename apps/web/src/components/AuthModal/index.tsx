import React from 'react';
import { Controller } from 'react-hook-form';

import { useAuthActions } from '@/application/auth/authActions';
import { useLoginForm } from '@/application/auth/loginForm';
import { ISchemaAuth } from '@/application/port';

const AuthModal = () => {
  const { login, errorLogin, isModalAuthOpen, onToggleAuthModal } = useAuthActions();
  const { handleSubmit, control } = useLoginForm();

  const onSubmit = (data: ISchemaAuth) => {
    login(data);
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className={`${
        isModalAuthOpen ? '' : 'hidden'
      } overflow-x-hidden overflow-y-auto fixed h-modal h-full top-4 left-0 right-0 inset-0 z-50 justify-center items-center`}>
      <div className="absolute inset-x-0 inset-y-0  w-3/4 m-auto rounded-lg rounded-t-none w-full max-w-md px-4 h-3/6">
        <div className="rounded-lg shadow-xl relative dark:bg-dark-mode border border-current">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={onToggleAuthModal}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-light-heading text-dark-heading">Sign in</h3>
            {errorLogin?.error?.message ? (
              <div
                className="flex p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">{errorLogin?.error?.message}</span>
                </div>
              </div>
            ) : null}

            <div>
              <label
                htmlFor="email"
                className="text-left text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Your email
              </label>
              <Controller
                control={control}
                name="identifier"
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@gmail.com"
                  />
                )}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-left text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Your password
              </label>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                )}
              />
            </div>
            <button
              className="w-full inline-block border border-current px-6 py-2 text-xs font-medium dark:text-light-content"
              type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
