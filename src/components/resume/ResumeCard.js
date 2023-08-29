import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-auto group flex flex-col md:flex-row" style={{ marginLeft: '5px' }}>
      <div className="w-10 h-[4px] md:mt-16 relative">
        <span className="absolute w-4 h-4 rounded-full -top-1 -left-2 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-2 h-2 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-2 md:lgl:px-4 flex flex-col justify-center gap-2 lgl:gap-4 shadow-shadowOne">
        <div className="flex flex-col md:flex-row justify-between gap-2 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-base md:text-lg font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-xs mt-1 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-2 py-1 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
