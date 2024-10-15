import React from 'react';
import ExperiencCard from './ExperiencCard';
import Linkedin from './Social Buttons/Linkedin';
import Github from './Social Buttons/Github';
import Button from './Button';

function Intro() {
  return (
    <div className='flex flex-col lg:flex-row justify-between box-border px-4 lg:px-8 w-full min-h-screen font-poppins bg-dual-gradient py-4 text-blue-900'>
      {/* Left Section */}
      <div className="w-full lg:w-2/3 relative">
        <h3 className="text-7xl md:text-7xl lg:text-8xl mx-auto font-bold relative">
          Hey! 
          <span className='text-lg md:text-xl absolute -bottom-4 left-3 md:-bottom-4 md:left-10'>its, Vishal</span>
        </h3>
        <p className='mt-6 md:mt-9'>
          MERN Stack Developer at PRR Technology Pvt Ltd Hyderabad
        </p>
        <p className='mt-4 w-full text-sm font-medium'>
          Full Stack Developer with around 1 year of experience in full-stack development using Next.js, React, Express, MongoDB, and Node.js. Demonstrated in JavaScript, TypeScript, and REST API design. Adept at delivering scalable solutions, contributing to cross-functional teams, and ready to deliver impactful solutions for your organization’s success.
        </p>

        {/* Experiences */}
        <h3 className='text-2xl md:text-4xl mt-6 md:mt-8 mx-auto font-bold'>Experiences</h3>
        <div id="experience" className='px-4 md:px-8 py-5 relative'>
          <hr className='w-1 h-full absolute top-2 left-0 bg-blue-900' />
          <ExperiencCard from={"Aug 2023"} to={"Present"} role={"MERN Stack Developer"} company={"PRR Technology Pvt Ltd"} location={"Hyderabad"} />
          <ExperiencCard from={"Jan 2023"} to={"Jan 2024"} role={"Web Developer intern"} company={"Internpe"} location={"Remote"} />
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full lg:w-1/3 relative mt-10 lg:mt-0'>
        <hr className='w-full lg:w-[700px] border-2 border-blue-900 p-3 rounded-[30px] mx-auto my-10 lg:absolute lg:-left-96' />
        <div className="rounded-xl md:my-24 text-center mx-auto w-full lg:w-auto p-5 bg-white">
          <img src="https://avatars.githubusercontent.com/u/135126334?v=4" alt="Profile" className='rounded-xl w-60 h-60 md:w-72 md:h-72 object-cover mx-auto' />
          <h3 className='text-xl md:text-2xl lg:text-3xl p-2 font-semibold'>Vishal Rai</h3>
          <div className="flex flex-wrap justify-center md:gap-4 mt-4">
            <Linkedin />
            <Github />
          <Button children='Resume' className='w-full h-10 text-sm mt-4' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
