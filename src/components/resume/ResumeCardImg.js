import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const ResumeCardImg = ({ title, des, img, downloadLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000" style={{ marginLeft: '5px' }}>
      <div className="w-full h-[100%] overflow-hidden rounded-lg">
        <img
          style={{ width: '200px', height: 'auto' }} 
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={img}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {downloadLink && (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe />
                  </a>
                </span>
              )}
            </div>
          </div>
          <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ResumeCardImg;
