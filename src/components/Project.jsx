import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

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
    <div className="min-w-full min-h-screen bg-[#121212]">
      <div className="px-5 py-20 sm:px-2 md:px-11 lg:px-24 flex justify-between dark:text-white text-4xl">
         <img src={data.avatar_url} className="rounded-full" alt="" />
         <div className='self-center w-1/2 gap-5'>
           <h1>{data.bio}</h1>
          <Link to={data.html_url}><Button children='GitHub Repositary' className='mt-5'/></Link> 
          
         </div>
      </div>
    </div>
  )
}

export default Project
