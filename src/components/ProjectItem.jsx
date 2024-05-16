import React from 'react';

function ProjectItem({ name, description, link, image }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-xl overflow-hidden">
      {/* Image Section */}
      <div className="h-40 bg-gray-300">
        {image ? <img src={image} alt={name} className="object-cover w-full h-full" /> : null}
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-2 text-center bg-gray-600 p-2 rounded-md">{name}</h2>
        <hr className="my-4 border-t border-gray-300" />
        <p className="text-gray-600 h-40 overflow-y-auto">{description}</p>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-center font-semibold focus:outline-none focus:bg-green-600 transition duration-300 ease-in-out"
          >
            View Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
