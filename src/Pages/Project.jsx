import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProjectItem from '../components/ProjectItem';

function Project() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/vishalra-i");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Github Error:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="min-w-full min-h-screen bg-[#a55eea] dark:bg-[#121212] dark:text-white">
      {/* Example Profile Section */}
      <div className="px-5 py-20 sm:px-2 md:px-11 lg:px-24 flex flex-wrap justify-between dark:text-white text-4xl">
        <img src={data.avatar_url} className="rounded-full shadow-2xl dark:shadow-purple-300 shadow-purple-900" alt="" />
        <div className='self-center w-full py-5 sm:py-0 md:w-1/2 gap-5'>
          <h1 className='text-2xl font-semibold'>{data.bio}</h1>
          <Link to={data.html_url}><Button children='GitHub Repository' className='mt-5'/></Link> 
        </div>
      </div>
      
      {/* My Project Section */}
        <h1 className='text-center text-4xl font-bold font-poppins py-5'>My Projects</h1>
      <div className='w-full px-20 py-2 grid grid-cols-1  sm:grid-cols-2 gap-10'>
        <ProjectItem 
          name={"Blog App"} 
          description={`
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
          `}
          link={"https://bloghunter.vercel.app/"}
        />
        <ProjectItem 
          name={"Videomate || Youtube clone"} 
          description={`
          MERN stack, ensuring scalability.
          • Developed a secure authentication and authorization system.
          • Enhanced user experience with seamless video uploading and
          streaming .
          • Implemented community engagement features like likes,
          comments, and search functionality.
          • Utilized MongoDB, Express.js,cloduinary , multer and React.js for
          efficient data storage, backend API, and intuitive frontend,
          respectively; testing api with postman and deployed on Netlify for
          a live project.
          `}
          link={"https://github.com/Vishalra-i/VideoTube-Youtube-clone"}
          image={"./src/assets/Screenshot 2024-04-07 113343.png"}
        />
        <ProjectItem 
          name={"ELEARNING COURSE API"} 
          description={`
             Developed a blog application using React.js with Appwrite backend.
             • Implemented user authentication and blog post management features.
             • Designed a responsive UI with Tailwind CSS and utilized React Router
             forrouting.
             • Capable of interfacing variable-latency RAM
             • Configured and deployed the application on Vercel .
          `}
          link={"https://coursesapi.vercel.app/"}
        
        />
      </div>
    </div>
  );
}

export default Project;
