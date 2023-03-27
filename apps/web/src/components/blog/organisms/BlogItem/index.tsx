import React from 'react';

const BlogItem = () => {
  return (
    <article className="grid grid-cols-12 justify-items-center gap-2 gap-y-4 py-8">
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
        <div className="flex w-full flex-col">
          <div className="relative">
            <a href="#">
              <img src="https://picsum.photos/seed/59/300/200" className="h-auto w-96" />
            </a>
          </div>
          <div className="mt-2 flex flex-row gap-2">
            <a href="#">
              <img src="https://picsum.photos/seed/1/40/40" className="max-w-10 max-h-10 rounded-full" />
            </a>

            <div className="flex flex-col">
              <a href="#">
                <p className="text-sm font-semibold text-gray-100">Learn CSS Box Model in 8 Minutes</p>
              </a>
              <a className="mt-2 text-xs text-gray-400 hover:text-gray-100" href="#">
                {' '}
                Web Dev Simplified{' '}
              </a>
              <p className="mt-1 text-xs text-gray-400">241K views . 3 years ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
        <div className="flex w-full flex-col">
          <div className="relative">
            <a href="#">
              <img src="https://picsum.photos/seed/60/300/200" className="h-auto w-96" />
            </a>

            <p className="py absolute right-2 bottom-2 bg-gray-900 px-1 text-xs text-gray-100">1:15</p>
          </div>

          <div className="mt-2 flex flex-row gap-2">
            <a href="#">
              <img src="https://picsum.photos/seed/4/40/40" className="max-w-10 max-h-10 rounded-full" />
            </a>

            <div className="flex flex-col">
              <a href="#">
                <p className="text-sm font-semibold text-gray-100">Learn CSS Box Model in 8 Minutes</p>
              </a>
              <a className="mt-2 text-xs text-gray-400 hover:text-gray-100" href="#">
                {' '}
                Web Dev Simplified{' '}
              </a>
              <p className="mt-1 text-xs text-gray-400">241K views . 3 years ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
        <div className="flex w-full flex-col">
          <div className="relative">
            <a href="#">
              <img src="https://picsum.photos/seed/22/300/200" className="h-auto w-96" />
            </a>

            <p className="py absolute right-2 bottom-2 bg-gray-900 px-1 text-xs text-gray-100">1:15</p>
          </div>

          <div className="mt-2 flex flex-row gap-2">
            <a href="#">
              <img src="https://picsum.photos/seed/88/40/40" className="max-w-10 max-h-10 rounded-full" />
            </a>

            <div className="flex flex-col">
              <a href="#">
                <p className="text-sm font-semibold text-gray-100">Learn CSS Box Model in 8 Minutes</p>
              </a>
              <a className="mt-2 text-xs text-gray-400 hover:text-gray-100" href="#">
                Web Dev Simplified
              </a>
              <p className="mt-1 text-xs text-gray-400">241K views . 3 years ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
        <div className="flex w-full flex-col">
          <div className="relative">
            <a href="#">
              <img src="https://picsum.photos/seed/90/300/200" className="h-auto w-96" />
            </a>

            <p className="py absolute right-2 bottom-2 bg-gray-900 px-1 text-xs text-gray-100">1:15</p>
          </div>

          <div className="mt-2 flex flex-row gap-2">
            <a href="#">
              <img src="https://picsum.photos/seed/57/40/40" className="max-w-10 max-h-10 rounded-full" />
            </a>

            <div className="flex flex-col">
              <a href="#">
                <p className="text-sm font-semibold text-gray-100">Learn CSS Box Model in 8 Minutes</p>
              </a>
              <a className="mt-2 text-xs text-gray-400 hover:text-gray-100" href="#">
                Web Dev Simplified
              </a>
              <p className="mt-1 text-xs text-gray-400">241K views . 3 years ago</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
