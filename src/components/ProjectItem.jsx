import React from 'react'

function ProjectItem({name , description , link}) {
  return (
    <div className='w-full space-y-5 shadow-md p-5 my-5 rounded-xl shadow-green-400'>
        <h1 className='text-4xl'>{name}</h1>
        <p>{description}</p>

        <a href={link} target="_blank" className='my-5' rel="noreferrer">
            <button className='bg-green-400 p-2 rounded-md '>View Preview</button>
        </a> 
        
    </div>
  )
}

export default ProjectItem