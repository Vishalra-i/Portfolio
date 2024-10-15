import React from 'react'

function ExperiencCard({from , to , role , company , location}) {
  return (
    <div className='py-4'>
        <p className='text-sm'>{from} - {to}</p>
        <p className='font-bold'>{role}</p>
        <p className='text-sm'>{company}</p>
        <p className='text-sm'>{location}</p>
    </div>
  )
}

export default ExperiencCard