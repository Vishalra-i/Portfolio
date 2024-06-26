import React from 'react';
import useTheme from '../context/Theme';
import SlideTrack from '../components/SlideTrack';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
function Home() {
  // Function for rotating service names and changing colors
  (function service() {
    let name = ["Mern Stack", "React", "Full Stack", "Front-End", "Back-End"];
    function hexColorGenerator() {
      let hex = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    let i = 0;
    setInterval(() => {
      let names = document.getElementById("service");
      names.innerHTML = name[i];
      names.style.color = hexColorGenerator();
      document.getElementById("devlop").style.color = hexColorGenerator();

      if (i !== name.length) i++;
      if (i == name.length) {
        i = 0;
      }
    }, 2000);
  })();

  // Using custom hook from Theme context
  const { darkmode, lightmode, mode, thememode } = useTheme();

  return (
    <div className="min-w-full min-h-screen bg-[#a55eea] dark:bg-[#160E2A]">
      <div className="flex flex-col items-center max-[1024px]:justify-between lg:flex-row px-5 py-20 sm:px-2 md:px-11 lg:px-24  dark:text-white text-4xl">
        {/* Left Section */}
        <div className="flex flex-col flex-grow justify-center lg:justify-start lg:py-16 gap-8 ma-w-full">
          {/* Service Name */}
          <div>
            <h1
              className="animate-bounce text-6xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-semibold text-gray-700 font-poppins"
              id="service"
            ></h1>
            {/* Developer Label */}
            <h1
              className="text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold font-poppins"
              id="devlop"
            >
              Developer
            </h1>
          </div>
          
          {/* Bio */}
          <div>
            <p className="text-2xl sm:text-lg md:text-2xl max-lg:text-2xl text-gray-500 dark:text-white font-protest">
              Hi, I'm <span className="text-[#3867d6]">Vishal Rai</span>. A Passionate Full Stack
            </p>
            <p className="text-2xl sm:text-lg md:text-2xl max-lg:text-2xl text-gray-500 dark:text-white font-protest">
              Developer from Jashpur, India📍
            </p>
            {/* Social Links */}
            <div className="flex flex-row gap-6 py-4 animate-slideInFromLeft">
              <a href="https://www.linkedin.com/in/vishalrai07">
                <img
                  width="48"
                  height="48"
                  className="grayscale hover:grayscale-0"
                  src="https://img.icons8.com/fluency/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/Vishalra-i">
                <img
                  width="48"
                  height="48"
                  className="grayscale hover:hue-rotate-90"
                  src="https://img.icons8.com/fluency/48/github.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://twitter.com/Vishal____rai">
                <img
                  width="48"
                  height="48"
                  className="grayscale hover:grayscale-0"
                  src="https://img.icons8.com/color/48/twitter--v1.png"
                  alt="twitter--v1"
                />
              </a>
              
            </div>
            {/* Button */}
              <a href="https://drive.google.com/file/d/1QigW8aPvmaJ5qyWPWTYs4o2WhBdlGl2I/view?usp=drive_link">
                <Button children='Resume CV'/>
              </a>
          
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:w-1/2 px-5 py-5">
          {/* Image */}
          <img
            src="https://finwave.co/images/gif/Platform-Tools-04_v1.gif"
            alt=""
            className="max-w-full"
          />
        </div>
      </div>
      <SlideTrack/>
    </div>
  );
}

export default Home;
