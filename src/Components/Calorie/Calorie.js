import React, { useState } from "react";

export default function Calorie() {
  const [food, setFood] = useState("");


    var options = {
        'method': 'GET',
        'headers': {
          'x-app-id': "d6204c1a",
          'x-app-key': "47a4439a259fccdc91b9e2c481aed5da"
        }
      };

  const handleEnter = async (event) => {
    event.preventDefault();
    try {
      console.log("Before axios request");
      const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant/?query=${food}`, options);
      const result = await response.json();
      console.log(result.branded[1]);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="bg-slate-200 flex justify-center">
      <form>
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
            className="block p-2 ps-10 text-md text-slate-950 rounded-lg border-slate-700"
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
      </form>
    </div>
  );
}
