import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const ResumeCardImg = ({ title, img, result, des, downloadLink }) => {
  return (
    <div className="w-full h-1/2 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          <div>
            <h3 className="text-xl md:text-xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <div className="flex gap-4 items-start">
              <img
                src={img}
                alt={title}
                style={{ width: '250px', height: 'auto' }}
                className="mt-2"
              />
              <p className="text-sm md:text-base font-medium text-gray-300 group-hover:text-gray-300 duration-300 mt-4">
                {des}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex items-center justify-center shadow-shadowOne text-sm font-medium">
              {result}
              {downloadLink && (
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FaGlobe className="text-designColor hover:text-white duration-300 cursor-pointer text-xl" />
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCardImg;
