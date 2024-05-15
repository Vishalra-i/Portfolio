import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProjectItem from '../components/ProjectItem';

function Project() {
  const [data,setData] = React.useState([])

  useEffect(() => {
    const api = async ()=>{
      await fetch("https://api.github.com/users/vishalra-i")
      .then((Response)=>Response.json())
      .then((data)=>setData(data))
      .catch((err)=>console.log(`Github Error:: ${err}`))
    } 
    api()
  }, [])
  
  
 
  return (
    <div className="min-w-full min-h-screen bg-[#a55eea] dark:bg-[#121212] dark:text-white">
      <div className="px-5 py-20 sm:px-2 md:px-11 lg:px-24 flex justify-between dark:text-white text-4xl">
         <img src={data.avatar_url} className="rounded-full shadow-2xl dark:shadow-purple-300 shadow-purple-900" alt="" />
         <div className='self-center w-1/2 gap-5'>
           <h1>{data.bio}</h1>
          <Link to={data.html_url}><Button children='GitHub Repositary' className='mt-5'/></Link> 
         </div>

      </div>
         <div className='w-full px-20 py-2 '>
            <h1 className='text-center'>My Project</h1>
            <ProjectItem name={"Blog App"} description={`
            - Created a simple blog application using React.js and Appwrite as the backend service
            - Implemented user authentication using Appwrite authentication services
            - Developed features for creating, publishing, and editing blog posts
            - Designed a responsive user interface using Tailwind CSS
            - Utilized technologies such as React Router for client-side routing
            - Set up Appwrite and configured authentication and database services
            - Created React components for displaying and managing blog posts
            - Integrated Appwrite database service for storing and retrieving blog post data
            - Styled components using Tailwind CSS classes for a visually appealing UI
            - Tested the application locally and deployed it to a hosting service like Vercel or Netlify
            `} link={"https://bloghunter.vercel.app/"}/>

         </div>
    </div>
  )
}

export default Project
