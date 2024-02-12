import React from 'react';

function About() {
  return (
    <>
      {/* About Me Section */}
      <div className="flex flex-col justify-center items-center gap-3 py-20 dark:text-white dark:bg-[#160E2A]">
        <h1 className="text-4xl font-bold font-poppins">About Me</h1>
        <hr className="border-black dark:border-white border-2 w-10" />
        <p className="font-medium text-center">
          There are multiple modes for the scooter for your needs.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row w-full h-full dark:bg-[#160E2A] px-5 lg:px-10 py-10">

        {/* Left Side - Introduction */}
        <div className="flex flex-col w-full lg:w-1/2 max-sm:w-full dark:text-white">
          <h1 className='font-poppins font-bold text-center lg:text-left text-4xl'>Get to know me!</h1>
          <hr className="border-black px-1 mt-1 dark:border-white border-2 w-28" />          
        </div>

        {/* Right Side - Skills */}
        <div className="grid grid-col-2 justify-center  dark:text-white h-full lg:flex gap-5 px-10 lg:flex-col ">
          <div>
          <h1 className="font-poppins font-bold text-4xl">My Skills</h1>
          <hr className="border-black px-1 mt-1  dark:border-white border-2 w-28" />          
          </div>


          {/* Frontend Technologies */}
          <h1 className="font-bold font-mono text-3xl">Front-End Technology</h1>
          <img src="https://skillicons.dev/icons?i=html,css,tailwind" width="220px" alt="" />
          <img src="https://skillicons.dev/icons?i=js,ts,react" width="220px" alt="" />
          <img src="https://skillicons.dev/icons?i=redux,next," width="220px" alt="" />

          {/* Backend Technologies */}
          <h1 className="font-bold font-mono text-3xl">Back-End Technology</h1>
          <img src="https://skillicons.dev/icons?i=nodejs,express,postman" width="220px" alt="" />
          <img src="https://skillicons.dev/icons?i=py,mongo" width="147px" alt="" />

          {/* Other Technologies */}
          <h1 className="font-bold font-mono text-3xl">Other</h1>
          <img src="https://skillicons.dev/icons?i=vscode,git,mysql" width="220px" alt="" />
          <img src="https://skillicons.dev/icons?i=firebase,appwrite" width="147px" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
