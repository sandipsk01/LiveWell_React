import React, { useEffect, useState } from "react";
import landing from "./land.jpg";
import yoga from "./yoga.jpg";
import diet from "./diet.jpg";
import prev from "./prev.png";
import next from "./next.png";

export default function Curosal() {
  const banners = [landing, yoga, diet];
  const [activeBanner, setActiveBanner] = useState(0);

  const prevButton = () => {
    setActiveBanner(!activeBanner ? banners.length - 1 : activeBanner - 1);
  };

  const nextButton = () => {
    setActiveBanner((activeBanner + 1) % banners.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextButton();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeBanner]);

  return (
    <div className="flex justify-center">
      {banners.map((banner, i) => (
        <div
          key={banner}
          className={"relative  " + (activeBanner === i ? "block" : "hidden")}
        >
          <img src={banner} alt="banner" className="aspect-[9/11] sm:aspect-[4/2] h-[50vh] w-[100vw] md:h-[60vh] lg:h-[90vh] object-fill" />
          <button
            className="absolute top-1/3 sm:top-[40vh] transform -translate-y-1/2 left-4"
            onClick={prevButton}
          >
            <img className="w-6" src={prev} />
          </button>
          <button
            className="absolute top-1/3 sm:top-[40vh] transform -translate-y-1/2 right-4"
            onClick={nextButton}
          >
            <img className="w-6" src={next} />
          </button>
        </div>
      ))}
    </div>
  );
}
