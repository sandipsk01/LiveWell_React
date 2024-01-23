import React from 'react'
import fitmen from "./menfit.jpg"
export default function Fitmen() {
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className=" sm:w-[70vw] mb-2 sm:my-3  ">
        <img
          className=" h-[45vh] sm:h-auto border sm:rounded-lg"
          src={fitmen}
          alt="fitmen"
        />

        <h5 className="my-2 text-[20px] font-serif  text-gray-700">
        Whether you're looking to shed pounds or add bulk, here's how to tailor your workout to help you reach your fitness goals.
        </h5>
      </div>
      <div className="flex justify-around w-[80vw] space-x-2 space-y-1 sm:space-y-0 items-center flex-wrap p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-slate-900" role="group">
            <button type="button" className="px-5 py-1.5 w-[70vw] sm:w-[150px] font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                Home
            </button>
            <button type="button" className="px-5 py-1.5 w-[70vw] sm:w-[150px] font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg">
                Beginner
            </button>
            <button type="button" className="px-5 py-1.5 w-[70vw] sm:w-[150px] font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                Intermediate
            </button>
            <button type="button" className="px-5 py-1.5 w-[70vw] sm:w-[150px] font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                Advanced
            </button>
        </div>
    </div>
  )
}
