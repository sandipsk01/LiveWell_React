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
        Whether you’re looking to shed pounds or add bulk, here’s how to tailor your workout to help you reach your fitness goals.
        </h5>
      </div>
    </div>
  )
}
