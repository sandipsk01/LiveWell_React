import React from "react";
import exercise from "./exercise.png";
import meditation from "./meditation.png";
import diet from "./diet.png";

export default function Imp() {
  const physical = ["Improve your health", "Reduce your risk of disease", "Help with manage weight", "Improves sleep quality", "Strengthen Your Bones and Muscles"];

  const mental=["Greater peace and calmness", "More meaningful lives", "Connection to a larger community", "Greater physical health", "Improved relationships"];

  const food=["May help you live longer", "Keeps skin, teeth, and eyes healthy", "Boosts immunity", "Supports muscles","Strengthens bones"];

  return (
    <div className="flex flex-col lg:flex-row mt-[5vh] justify-center items-center font-thin font-serif">
      <div className="mb-8">
        <div className="font-serif font-bold">Importance Of Physical Exercise</div>
        <img
          className="w-[90vw] lg:w-[30vw] h-[50vh] items-center object-cover rounded-md"
          src={exercise}
          alt="gymimg"
        />
        <ul>
        {physical.map((benefit)=>(<li key={benefit} className="mb-2">{benefit}</li>))}
        </ul>
        
      </div>

      <div className="mb-8 sm:ml-4">
        <div className="font-serif font-bold">Importance Of Spiritual Activities</div>
        <img
          className="w-[90vw] h-[50vh] lg:w-[30vw] object-cover rounded-md"
          src={meditation}
          alt="meditation"
        />
        <ul>
        {mental.map((benefit)=>(<li key={benefit} className="mb-2">{benefit}</li>))}
        </ul>
      </div>

      <div className="mb-8 sm:ml-4">
        <div className="font-serif font-bold">Importance Of Healthy Diet</div>
        <img
          className="w-[90vw] h-[50vh] lg:w-[30vw] object-cover rounded-md"
          src={diet}
          alt="diet"
        />
        <ul>
        {food.map((benefit)=>(<li key={benefit} className="mb-2">{benefit}</li>))}
        </ul>
      </div>
    </div>
  );
}
