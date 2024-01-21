import React, { useState } from "react";
import spiritual from "./spirituality.jpg";
import videos from "./video.json";
function Spiritual() {
  const [content, setContent] = useState("video");

  const handleContent = (cont) => {
    setContent(cont);
  };
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className=" sm:w-[70vw] mb-2 sm:my-3  ">
        <img
          className=" h-[45vh] sm:h-auto border sm:rounded-lg"
          src={spiritual}
          alt="spiritual"
        />

        <h5 className="my-2 text-[20px] font-serif  text-gray-700">
          Spirituality is a fundamental aspect of human experience, which can
          significantly benefit physical and mental health. Research has shown
          that spirituality can reduce stress and anxiety and improve coping
          skills and overall health.
        </h5>
      </div>

      <div className="my-2 text-[30px] font-serif font-semibold ">
        <button
          className={content === "video" ? "text-gray-800" : "text-gray-500"}
          onClick={() => {
            handleContent("video");
          }}
        >
          SPIRITUAL VIDEOS
        </button>
        |
        <button
          className={content === "book" ? "text-gray-800" : "text-gray-500"}
          onClick={() => {
            handleContent("book");
          }}
        >
          SPIRITUAL BOOKS
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {videos.map((video, index) => {
          return (
            <iframe
              title={index}
              key={index}
              className="w-[300px] h-[200px] mx-6 my-4 rounded-lg"
              allowFullScreen={true}
              src={`https://www.youtube.com/embed/videoseries?list=${video.videoID}&rel=0`}
              type="video/mp4"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Spiritual;
