import React from 'react'

function SlideTrack() {
    const images = [
        "html",
        "css",
        "js",
        "python",
        "react",
        "tailwind",
        "nodejs",
        "mongodb",
        "express",
        "firebase",
        "appwrite",
        "vscode",
        "git",
        "aws",
      ];
  return (
    <div id="logos" className='overflow-hidden flex py-10 px-0'>
    <div id="logo-slider1" className='whitespace-nowrap animate-slide space-x-10 hover:[animation-play-state:paused]'>
             {images.map((src, index) => (
              <img key={index} src={`https://skillicons.dev/icons?i=${src}`} alt="" className='w-20 h-20 hover:scale-125  ' title={src.toUpperCase()} />
             ))}
     </div>  
     </div>
     )
}

export default SlideTrack