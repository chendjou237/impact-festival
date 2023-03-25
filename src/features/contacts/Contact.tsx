import React from 'react'
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";


function Contact() {
  return (
    <section id="contact" className="bg-light pt-16 pb-24 px-8 relative">
               <div className="absolute inset-0    skew-y-3 bg-background "></div>
               <div className="relative ">

    <h2 className="text-4xl font-bold mb-8 text-center text-light">Contact Us</h2>
    <hr className="mx-auto mb-8 border-primary border-solid border-2 w-16 rounded-full" />
    <p className="text-lg leading-relaxed text-paragraph text-center mb-2">
    Not sure about something? <br />
Leave us a message or call us and we'll be glad to help :)</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
  <div className="bg-light flex flex-col items-center py-4 rounded-sm shadow-lg shadow-black">
    <div className=" p-3 rounded-full border-dotted border-2 border-primary">

    <HiOutlineLocationMarker className='text-3xl text-primary'/>
    </div>
    <h3 className="text-2xl font-bold text-paragraph mt-2">Event Address</h3>
    <p className="text-sm leading-relaxed mt-2 text-navFocus " >
    Palais De Sport, Yaounde
              </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-light flex flex-col items-center py-4 rounded-sm shadow-lg shadow-black">
    <div className=" p-3 rounded-full border-dotted border-2 border-primary">

    <FiMail className='text-3xl text-primary'/>
    </div>
    <h3 className="text-2xl font-bold text-paragraph mt-2">Email Us</h3>
    <ul className="text-sm leading-relaxed mt-2 text-navFocus  text-center" >
    <li><a href="">info@levelup237.com</a></li>
    <li><a href="">contact@levelup237.com</a></li>
    <li><a href="">admin@levelup237.com</a></li>
              </ul>
  </div>
  <div className="bg-light flex flex-col items-center py-4 rounded-sm shadow-lg shadow-black">
    <div className=" p-3 rounded-full border-dotted border-2 border-primary">

    <FiPhoneCall className='text-3xl text-primary'/>
    </div>
    <h3 className="text-2xl font-bold text-paragraph mt-2">Call Us</h3>
    <ul className="text-sm leading-relaxed mt-2 text-navFocus  text-center" >
    <li><a href="">+447869768407,</a></li>
    <li><a href="">+237 695012241,</a></li>
    <li><a href="">+237 677777405</a></li>
              </ul>
  </div>
  </div>
  
  
</div>
   <div className="flex items-center justify-center  bg-light rounded-sm  py-8 px-4">
      <form className="max-w-md mx-auto flex flex-col items-center w- min-w-96 ">
        <div className="flex space-x-4
  ">
        <input type="text" id="name" name="name" placeholder="Your name" className="px-4 py-2 border   mb-6 rounded-md" />

        <input type="tel" id="email" name="phone" placeholder="Your Phone Number" className="px-4 py-2 border  mb-6 rounded-md" />
        </div>
        <input type="text" id="subject" name="subject" placeholder="Subject" className="px-4 py-2 border w-full   mb-6 rounded-md" />
  
  
        <textarea id="message" placeholder='Enter Message' name="message" rows={6} className="px-4 py-2 border w-full mb-6 rounded-md"></textarea>
  
        <button type="submit" className="bg-primary text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">Send Message</button>
      </form>
      </div>
</div>

 
     
    </div>
  </section>
  
  )
}

export default Contact