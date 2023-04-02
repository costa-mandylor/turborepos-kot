import React from 'react';
import { useDispatch } from 'react-redux';

import { useMutation } from '@tanstack/react-query';

import { setUser } from '@/redux/reducer/userSlice';
import { ICMSUserRes, cmsLogin, getCMSUser } from '@/service/cms-auth';

const Login = () => {
  const dispatch = useDispatch();

  const [isModal, setModal] = React.useState(false);

  const _onClick = () => {
    setModal((value) => !value);
  };

  const { isLoading, isSuccess, isError, data, error, mutate } = useMutation({
    mutationFn: async () => {
      return await cmsLogin({ identifier: 'costa32001', password: 'Duc123123' });
    },
    onSuccess: async ({ jwt }: ICMSUserRes) => {
      const user = await getCMSUser(jwt).then((res) => res);

      dispatch(setUser({ ...user, jwt, isLoggingIn: true }));
    },
    onError: (err) => {
      console.log('error', err);
    },
  });

  return (
    <>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
        className="inline-block border border-current px-6 py-2 text-xs font-medium dark:text-light-content"
        onClick={_onClick}>
        Login
      </button>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className={`${
          isModal ? '' : 'hidden'
        } overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center`}>
        <div className="absolute inset-x-0 inset-y-0  w-3/4 md:w-2/5 m-auto rounded-lg rounded-t-none w-full max-w-md px-4 h-3/6">
          <div className="rounded-lg shadow-xl relative dark:bg-dark-mode">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
                onClick={_onClick}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
              <h3 className="text-xl font-medium text-gray-900 dark:text-light-heading text-dark-heading">Sign in</h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-left text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-left text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="text-sm ml-3">
                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="w-full inline-block border border-current px-6 py-2 text-xs font-medium dark:text-light-content"
                onClick={() => mutate()}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
