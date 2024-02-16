import React from 'react';

function Cards({ head, para, view ,color ,link }) {
    const cardStyle = {
        backgroundColor: color // Dynamically setting background color
      };
  
  return (
    <>
      <div className="relative duration-500 hover:-rotate-0 snap-center  hover:self-start   hover:z-10 [transform:rotate3d(1_,-1,_1,_60deg)]   border-sky-900 border-4 overflow-hidden hover:overflow-visible rounded-2xl  h-64 w-64 p-5 flex flex-col items-start  gap-4" style={cardStyle} >
        <div className="text-gray-50">
          <span className="font-bold text-5xl">{head}</span>
          <p className="text-lg font-bold">{para}</p>
        </div>
        <a href={link}>
        <button className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">{view}
          <svg className="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd"></path>
          </svg>
        </button>
        </a>
      </div>
    </>
  );
}

export default Cards;
