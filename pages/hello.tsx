import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* https://reffect.co.jp/html/tailwindcss-for-beginners */}
      <h1 className="text-3xl bg-indigo-100 p-2 mb-4 text-green-600 font-semibold rounded">
        Hello World!
      </h1>
      <h1 className="text-3xl bg-indigo-100 p-2 hover:text-red-300 hover:bg-fuchsia-100 text-green-600 font-semibold mb-4">
        Hello World!
      </h1>

      {/* Utility-First Fundamentals */}
      <h2 className="text-2xl text-center font-bold mb-2">
        Utility-First Fundamentals
      </h2>
      {/* https://tailwindcss.com/docs/utility-first */}
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-2">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mb-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/favicon.ico"
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left ">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>

      <h2 className="text-2xl text-center font-bold mb-2">
        Handling Hover, Focus, and Other States
      </h2>

      <div className="flex flex-col items-center space-y-4 mb-4">
        <button className="max-w-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-xl">
          Save changes
        </button>

        {/* Styling based on parent state */}
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              New project
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
      </div>

      {/* Responsive Design */}
      <h2 className="text-2xl text-center font-bold mb-2">Responsive Design</h2>
      <div className="flex flex-col items-center">
        <img className="w-16 md:w-32 lg:w-48" src="/vercel.svg" />
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/vercel.svg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
