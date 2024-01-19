import React from "react";
import exercise from "./exercise.png";
import meditation from "./meditation.png";
import diet from "./diet.png";

export default function Imp() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <div className="mb-8">
        <div className="font-serif">Importance Of Physical Exercise</div>
        <img
          className="w-[300px] sm:w-[30vw] object-cover rounded-md"
          src={exercise}
          alt="gymimg"
        />
      </div>

      <div className="mb-8 sm:ml-4">
        <div className="font-serif">Importance Of Mental Health</div>
        <img
          className="w-[300px] sm:w-[30vw] object-cover rounded-md"
          src={meditation}
          alt="meditation"
        />
      </div>

      <div className="sm:ml-4">
        <div className="font-serif">Importance Of Healthy Diet</div>
        <img
          className="w-[300px] sm:w-[30vw] object-cover rounded-md"
          src={diet}
          alt="diet"
        />
      </div>
    </div>
  );
}
