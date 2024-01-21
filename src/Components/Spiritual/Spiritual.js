import React from "react";
import spiritual from "./spirituality.jpg";
import videos from "./video.json";
function Spiritual() {
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className="sm:w-[70vw] my-2  dark:bg-gray-800 ">
        <img className="rounded-lg" src={spiritual} alt="spiritual" />

        <h5 className="my-2 text-2xl font-serif  text-gray-700 dark:text-white">
          Spirituality is a fundamental aspect of human experience, which can
          significantly benefit physical and mental health. Research has shown
          that spirituality can reduce stress and anxiety and improve coping
          skills and overall health.
        </h5>
      </div>

    <h3 className="my-2 text-[5vh] font-serif font-semibold text-gray-800 dark:text-white">SPIRITUAL VIDEOS</h3>
      <div className="flex flex-wrap justify-center">
        {videos.map((video, index)=>{
            return(
                <iframe title={index} className="w-[300px] mx-6 my-4 rounded-lg" allowFullScreen={true} src={`https://www.youtube.com/embed/videoseries?list=${video.videoID}&rel=0`} type="video/mp4" />

            )
        })}
      </div>

    </div>


  );
}

export default Spiritual;
