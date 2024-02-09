import React from 'react'

function About() {
  return (
    <div className='flex justify-between w-full h-full dark:bg-[#292626] px-20 py-10'>
       <div className='grid grid-col-2 item-center  h-full lg:flex gap-5 py-10 px-10 lg:flex-col'>
                <h1 className='font-bold font-mono  text-blue-600  text-3xl'>Front-End Technology</h1>
                <img src="https://skillicons.dev/icons?i=html,css,tailwind" width= "220px" alt="" />
                <img src="https://skillicons.dev/icons?i=js,ts,react" width= "220px" alt="" />
                <img src="https://skillicons.dev/icons?i=redux,next," width= "220px" alt="" />
                <h1 className='font-bold font-mono  text-blue-600  text-3xl'>Back-End Technology</h1>
                <img src="https://skillicons.dev/icons?i=nodejs,express,postman" width= "220px" alt="" />
                <img src="https://skillicons.dev/icons?i=py,firebase,mongo" width= "220px" alt="" />
                <h1 className='font-bold font-mono  text-blue-600  text-3xl'>Other</h1>
                <img src="https://skillicons.dev/icons?i=vscode,git,mysql" width= "220px" alt="" />
          </div>
          <div className='flex justify-center items-center h-full'>
               <h1>Hii I am Vishal Rai</h1>
          </div>
    </div>
  )
}

export default About