import React, { useState } from "react";
import { Link } from "react-router-dom";
import spiritual from "./spirituality.jpg";
import videos from "./video.json";
import books from "./books.json";
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

      {content === "video" ? (
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
      ) : (
        <div className="flex flex-wrap justify-center">
          {books.map((book, index) => {
            return (
              <div key={index} className="w-[300px] mx-6 my-4 rounded-lg bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                
                  <img
                    className="rounded-t-lg object-fill w-[300px] aspect-[3/4]"
                    src={book.imgUrl}
                    alt="bookimg"
                  />
                
                <div className="p-5">
                  
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {book.title}
                    </h5>
                  
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.author}
                  </p>
                  <Link
                    to={book.buyUrl}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buy Now
                    
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Spiritual;
