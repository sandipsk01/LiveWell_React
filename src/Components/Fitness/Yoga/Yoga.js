import React from 'react'
import yoga from "./yoga.jpg"
export default function Yoga() {
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className=" sm:w-[70vw] mb-2 sm:my-3  ">
        <img
          className=" h-[45vh] sm:h-auto border sm:rounded-lg"
          src={yoga}
          alt="fitmen"
        />

        <h5 className="my-2 text-[20px] font-serif  text-gray-700">
          Spirituality is a fundamental aspect of human experience, which can
          significantly benefit physical and mental health. Research has shown
          that spirituality can reduce stress and anxiety and improve coping
          skills and overall health.
        </h5>
      </div>
    </div>
  )
}
