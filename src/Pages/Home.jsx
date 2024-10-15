import React, { useState, useEffect } from 'react';
import useTheme from '../context/Theme'; 
import SlideTrack from '../components/SlideTrack';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import About from './About';
import Intro from '../components/Intro';

function Home() {
  const [role, setRole] = useState("Developer");

  // Using custom hook from Theme context
  const { darkmode, lightmode, mode, thememode } = useTheme();

  useEffect(() => {
    let name = ["Mern Stack", "React", "Full Stack", "Front-End", "Back-End"];

    let i = 0;
    const interval = setInterval(() => {
      setRole(name[i]);
      i = (i + 1) % name.length;
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <main>
       <section className={`bg-dual-cloud-gradient animate-cloud px-2 md:px-0  ${mode === 'dark' ? 'dark:bg-dark-cloud-gradient' : ''} min-h-screen flex items-center justify-center`}>
         <div >
           <h1 className="text-xl font-bold text-blue-900">Vishal Rai</h1>
           <hr className="w-24 bg-blue-900 h-1 p-0 " />
           <h2 id="role" className="text-3xl md:text-7xl font-bold text-blue-900 relative"> {role} Developer</h2>
         </div>
       </section>
       {/* //about */}
       <Intro/>
    </main>
  );
}

export default Home;
