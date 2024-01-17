import React, { useEffect, useState } from "react";
import gym from "./gym.jpg";
import yoga from "./yoga.jpg";
import diet from "./diet.jpg";
import prev from "./prev.png";
import next from "./next.png";
export default function Curosal() {
  const banners = [gym, yoga, diet];
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
    <div className="relative">
      {banners.map((banner, i) => (
        <div
          key={banner}
          className={"relative max-w-screen-xl max-h-screen-xl aspect-[9/14] sm:aspect-[3.5/2] " + (activeBanner === i ? "block" : "hidden")}
        >
          <img src={banner} alt="banner" className="w-full h-full object-cover" />
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4"
            onClick={prevButton}
          >
            <img className="w-6" src={prev} />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4"
            onClick={nextButton}
          >
            <img className="w-6" src={next} />
          </button>
        </div>
      ))}
    </div>
  );
}