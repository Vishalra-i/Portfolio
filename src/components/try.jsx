import React from 'react'

function Contact() {
  return (
    <div className='min-w-full relative flex justify-center items-center min-h-screen px-10 py-96 bg-gradient-to-br from-[#dfe0e6] via-[#5e234f] to-[#0a1346]' id="container">
             
             <div className="rounded-2xl  flex justify-between bg-white absolute top-24 w-[900px]">
              <div className="  w-[60%] rounded-tl-2xl justify-between rounded-bl-2xl flex dark:bg-black dark:text-white p-10">
                 <img className='max-h-[30px] max-w-[30px]' src="https://img.icons8.com/ios-filled/50/228BE6/like--v1.png" alt="like--v1"/>
                 <section className='w-[90%]'>
                  <p className='font-bold text-xl font-poppins'>Hello,Let's get in touch</p>
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
              </div>
    </div>
  )
}

export default Contact

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};