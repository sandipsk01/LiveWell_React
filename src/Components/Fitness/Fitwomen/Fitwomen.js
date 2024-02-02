import React from 'react'
import fitwomen from "./womenfit.jpg"
export default function Fitwomen() {
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className=" sm:w-[70vw] mb-2 sm:my-3  ">
        <img
          className=" h-[45vh] sm:h-auto border sm:rounded-lg"
          src={fitwomen}
          alt="fitwomen"
        />

        <h5 className="my-2 text-[20px] font-serif  text-gray-700">
        Feeling aimless in your fitness routine? Not sure how to Tetris your cardio and strength workouts together to get the most results? This four-week workout plan for women will be like your personal trainer and accountability buddy in one, offering expert workout guidance and a solid schedule to keep you on track.
        </h5>
      </div>
    </div>
  )
}
