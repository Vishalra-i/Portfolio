import React from 'react';

// Contact component
function Contact() {
  return (
    // Container with gradient background
    <div className='min-w-full relative flex justify-center items-center min-h-screen px-10 py-24 lg:py-36 bg-gradient-to-br from-[#dfe0e6] via-[#5e234f] to-[#0a1346]' id="container">
      {/* Contact Form Container */}
      <div className="rounded-2xl flex flex-col justify-between bg-white lg:flex-row lg:justify-between lg:top-24 lg:w-[900px]">
        {/* Left side of the form */}
        <div className="lg:w-[60%]   rounded-tl-2xl justify-between rounded-bl-2xl flex  dark:bg-black dark:text-white p-5 lg:p-10">
          <img className='max-h-[30px] mx-2 max-w-[30px]  brightness-150 ' src="https://img.icons8.com/ios-filled/50/228BE6/like--v1.png" alt="like--v1"/>
          <section className='w-[90%]'>
            <p className='font-bold text-xl font-poppins'>Hello, Let's get in touch</p>
            <form action="" className='py-10 flex flex-col  gap-10'>
                      <input type="text" placeholder='Enter Your Name'   
                      className='border-b-2 border-0 placeholder:text-white border-black dark:border-gray-400 dark:bg-black outline-none'
                      name="" id="" />            

                      <input type="email"
                        placeholder='Enter Your Email'
                        className='border-b-2 border-0 placeholder:text-white border-black dark:border-gray-400 dark:bg-black outline-none'
                      name="" id="" />        

                      <textarea name="" 
                      placeholder='Enter Your Message'
                      className='border-2  p-2 placeholder:text-white border-black dark:border-gray-400 dark:bg-black outline-none'
                      id="" cols="10" rows="10"></textarea>
                      <div className='flex justify-between'>
                        <div></div>
                      <button type="submit" className='bg-red-600 font-bold  before:w-[80%] w-fit text-white px-6 py-3 rounded-[30px]'>Send Message</button>
                      </div>


                   </form>
          </section>
        </div>
        {/* Right side of the form */}
        <div className="lg:w-[40%] rounded-tr-2xl flex-col rounded-br-2xl flex justify-center items-center dark:bg-gray-800 dark:text-white p-5 lg:p-10">
              <div className=' font-poppins'>
              <h1 className='text-gray-300 text-5xl'>We'd love to</h1>
              <h1 className='text-gray-500 text-7xl'>Hear From You</h1>
              <h1 className='text-gray-200  p-3'>Vishalrai0392@gmail.com</h1>

              </div>
        </div>
       
      </div>
    </div>
  );
}



export default Contact;
