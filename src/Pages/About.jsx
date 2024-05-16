import React from 'react';
import SlideTrack from '../components/SlideTrack.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards.jsx'
function About() {
  const skillsTech = [
    "https://skillicons.dev/icons?i=html,css,tailwind",
    "https://skillicons.dev/icons?i=js,ts,react",
    "https://skillicons.dev/icons?i=redux,next,",
    "https://skillicons.dev/icons?i=nodejs,express,postman",
    "https://skillicons.dev/icons?i=py,mongo",
    "https://skillicons.dev/icons?i=vscode,git,mysql",
    "https://skillicons.dev/icons?i=firebase,appwrite"
  ];
  
  return (
    <>
      {/* Contact section */}
      <div className="flex flex-col  justify-between lg:flex-row max-w-full bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400')]  text-white py-28">
        <div className='font-bold px-5 py-5 font-poppins flex justify-between'>
          <img src="https://avatars.githubusercontent.com/u/135126334?v=4" className='max-h-36 max-w-36 rounded-full' alt="" />
          <div className='self-center px-5'>
            <h1 className='text-3xl '>Vishal Rai</h1>
            <p className='flex-shrink'>Jashpurnagar Chhattisgarh , India</p>
            
          </div>
        </div>
        <div className='self-center font-bold px-5 py-5 space-y-5 text-white font-poppins'>
          <h1 className='text-lg '> ✉️ Vishalrai0392@gmail.com</h1>
           
           <div className='flex item-center gap-5'>
           {/* linked In */}
           <a href="https://www.linkedin.com/in/vishalrai07">
             <button
                class="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6"
              >
                <svg
                  class="w-8 h-8 fill-neutral-50"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
                  ></path>
                </svg>
                <span class="border-l-2 px-1">Vishal Rai</span>
                <div
                  class="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
                >
                  See my profile!
                </div>
             </button>
            </a>
            {/* Github */}
            <a href="https://github.com/Vishalra-i">
            <button
                class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-[11px] border text-left p-4 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
              >
                <svg
                  class="w-6 h-6 fill-neutral-50"
                  height="80"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    class="svg-fill-primary"
                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                  ></path>
                </svg>
                Github
             </button>
             </a>

              </div>
        </div>
      </div>
       {/* Main Content */}
        <div className='min-h-screen px-5 py-10 bg-[#a55eea] dark:bg-[#160E2A] dark:text-white'>
        <div className='min-w-full relative space-y-6  min-h-screen mx-auto py-5  ' id="container">

           <h1 className='font-semibold font-poppins text-gray-500 text-3xl'>About</h1>
           <p className='  font-bold border-solid border-3  border-gray-300'>Passionate Full Stack Developer with expertise in MERN Stack and strong proficiency in ReactJS. Excels in teamwork, fostering effective communication, and demonstrating brilliant interpersonal skills. Proven ability to collaborate with cross-functional teams to drive projects to success. Adept at coding and leveraging creativity to develop innovative solutions. Constantly exploring the digital realm and committed to staying at the forefront of tech innovation.</p>
           <div className="flex items-center gap-5">
             <a href="https://drive.google.com/file/d/1QigW8aPvmaJ5qyWPWTYs4o2WhBdlGl2I/view?usp=drive_link">
                <Button children='Resume CV'/>
            </a>
             <Link to='/contact'> <Button children='Contact Me' className='my-5' /> </Link>
           </div>
           <h1 className='font-semibold font-poppins text-gray-500 text-3xl'>Certification</h1>
           <div className='flex flex-row justify-start gap-2 p-5 lg:px-10 lg:gap-10  overflow-hidden'>
               <Cards head="PW SKills" para="Full Stack Devloper" view="View"  color="purple" link="https://learn.pwskills.com/certificate/c315d754-5b18-4876-bc80-0e9385d8db07"/>
               <Cards head="Hacker Rank" para="Javascript Intermediate" view="View"  color="Blue" link="https://www.hackerrank.com/certificates/3a3b48dc2de2"/>
               <Cards head="Hacker Rank" para="Problem Solving" view="View"  color="green" link="https://www.hackerrank.com/certificates/c557673d505e"/>
           </div>
           <h1 className='font-semibold text-gray-500 font-poppins text-3xl'>Skills</h1>
            <SlideTrack/>
            

            {/* Experience */}
            <h1 className='font-semibold text-gray-500 font-poppins text-3xl'>Experience</h1>
            <div className="flex">
              <span className='block'><h3 className='inline text-gray-400 font-bold text-xl'>Web Developer intern</h3>||<h3 className='inline text-2xl font-bold '>Internpe</h3></span>
            </div>
           {/* Button for social */}

          
         </div>  
        </div>

    </>
  );
}

export default About;
