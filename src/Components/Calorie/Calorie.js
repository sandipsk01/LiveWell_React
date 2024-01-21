import React, { useState } from "react";

export default function Calorie() {
  const [food, setFood] = useState("");
  const [details, setDetails] = useState();

  var options = {
    headers: {
      "X-Api-Key": "hW0nPXoI867n6vDfXE9s1A==ADrbiKlTA8NCRNKH",
    },
  };

  const handleEnter = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${food}`,
        options
      );
      const result = await response.json();
      setDetails(result.items[0]);
    } catch (error) {
      console.error("Error", error);
    }
    console.log(details);
  };
  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center ">
      <div className="mt-[2vh] font-serif font-bold text-slate-800 text-[25px] bg-clip-text">NUTRIENT FINDER</div>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Check the Amount of Nutrients in food item.</p>
      <div className="mt-[3vh]">
        <label className="mb-[5vh] text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-slate-950"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block p-2 ps-10 text-md text-slate-950 rounded-lg sm:w-[40vw]"
            placeholder="Enter Food..."
            value={food}
            onChange={(event) => setFood(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleEnter(event);
              }
            }}
            required
          />
        </div>
      </div>
      
      

      {details === undefined ? (
        <div className="flex flex-col justify-center items-center ">
          <div className="font-serif mt-[5vh]">No food found...</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2805/2805947.png"
            className="w-[20vw] sm:w-auto m-[5vh]"
          />
        </div>
      ) : (
        <div>
          <div className="m-[2vh] font-serif font-bold text-slate-700 text-[20px] bg-clip-text ">
            {details.name.toUpperCase()}
          </div>
          <div className="relative overflow-x-auto shadow-md mb-[3vh] sm:w-[40vw] rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="flex justify-around">
                  <th scope="col" className="px-6 py-3">Nutrition</th>
                  <th scope="col" className="px-6 py-3">Values per {details.serving_size_g} gm
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Calories
                  </th>
                  <td className="px-6 py-2">{details.calories}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Carbohydrates
                  </th>
                  <td className="px-6 py-2">
                    {details.carbohydrates_total_g} gm
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cholesterol
                  </th>
                  <td className="px-6 py-2">{details.cholesterol_mg} mg</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Total Fats
                  </th>
                  <td className="px-6 py-2">{details.fat_total_g} gm</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  {" "}
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Saturated Fats
                  </th>
                  <td className="px-6 py-2">{details.fat_saturated_g} gm</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Fiber
                  </th>
                  <td className="px-6 py-2">{details.fiber_g} gm</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Protein
                  </th>
                  <td className="px-6 py-2">{details.protein_g} gm</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Potassium
                  </th>
                  <td className="px-6 py-2">{details.potassium_mg} mg</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sodium
                  </th>
                  <td className="px-6 py-2">{details.sodium_mg} mg</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-around">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sugar
                  </th>
                  <td className="px-6 py-2">{details.sugar_g} gm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
