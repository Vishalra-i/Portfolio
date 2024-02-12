import React from 'react'
import HamburgerMenu from './Hamburger'

function Home() {
   
  (function service() {
     let name = ["Mern Stack","React","Full Stack","Front-End","Back-End"]
     function hexColorGenerator(){
       let hex = "0123456789ABCDEF"
       let color = "#"
       for(let i=0;i<6;i++){
         color += hex[Math.floor(Math.random()*16)]
       }
       return color
     }
     
     let i = 0;
     setInterval(
       ()=>{
         let names = document.getElementById("service")
         names.innerHTML = name[i];
         names.style.color = hexColorGenerator()
         document.getElementById("devlop").style.color = hexColorGenerator();
        
          if(i !== name.length)i++
          if(i==name.length){
           i=0;
         }
       }
       ,2000
     )

  })()

  return (
    <div className='flex justify-between flex-col lg:h-screen md:h-screen sm:h-full md:flex-row  lg:flex-row xl:flex-row 2xl:flex-row sm:px-5 md:px-11 lg:px-24 py-10 w-full bg-[#00000000] dark:bg-[#292626] dark:text-white  text-4xl'>
          <div className='flex  py-20 md:py-15  px-10 md:px-5 sm:px-2 lg:gap-12 max-sm:gap-6 sm:gap-5 sm:item-center md:item-center flex-col'>
              <h1 className='animate-bounce max-sm:text-[2.1rem] sm:text-[2.5rem] md:text-[3.0rem] lg:text-[5.0rem] xl:text-[5.5rem] 2xl:text-[7.0rem]   font-semibold text-gray-700  font-["poppins"] ' id='service'></h1>
              <h1 className='max-sm:text-[2.0rem] sm:text-[2.3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[6.7rem]  font-semibold font-["poppins"]' id='devlop'>Developer</h1>
               <div className=''>
                 <p className=' max-sm:text-sm sm:text-sm md:text-2xl max-lg:text-2xl  text-gray-500 dark:text-white font-["protest"]'>Hi , I'm <span className='text-red-300'>Vishal Rai</span>.A Passionate Full Stack</p>
                 <p className='max-sm:text-sm sm:text-sm md:text-2xl max-lg:text-2xl text-gray-500 dark:text-white font-["protest"] '>Developer from Jashpur,India📍</p>
               
                <div className='flex flex-row gap-4 py-3 animate-slideInFromLeft'>
                  <a href="https://www.linkedin.com/in/vishalrai07"><img width="48" height="48" className='grayscale hover:grayscale-0' src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>
                  <a href="https://github.com/Vishalra-i"><img width="48" height="48" className='grayscale hover:hue-rotate-90' src="https://img.icons8.com/fluency/48/github.png" alt="linkedin"/></a>
                  <a href="https://twitter.com/Vishal____rai"><img width="48" height="48" className='grayscale hover:grayscale-0' src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/></a>
                </div>
               </div>
          </div>
          
          <div className=''>
          <img src= ".\.\src\assets\hi.svg" width="420px" height="420px" alt="" />
          
          </div>
         
    </div>
  )
}

export default Home