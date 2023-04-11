import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import Position from "./Position";


function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(event:any) {
    event.preventDefault();
    setIsLoading(true);
    try {
      emailjs.sendForm('service_wojivtr', 'template_sj78eea',event.target, 'j7bPxlQAr55luJEi_')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
    } catch (error) {
      alert(error)
      setIsLoading(false);
    }
   

    setName('');
    setPhone('');
    setSubject('');
    setMessage('');
    setIsLoading(false);
  }
  return (
    <section id="contact" className="bg-light pt-16 pb-0 pr-8 relative flex ">
      <div className="w-8 bg-background">.</div>
        <div className="flex-grow">

      <div className="absolute inset-0    skew-y-3 bg-background "></div>
               <div className="relative ">
        <Position />

    <h2 className="text-4xl font-bold mb-8 text-center text-light">Contact Us</h2>
    <hr className="mx-auto mb-8 border-primary border-solid border-2 w-16 rounded-full" />
    <p className="text-lg leading-relaxed text-paragraph text-center mb-2">
    Not sure about something? <br />
Leave us a message or call us and we'll be glad to help :)</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background">
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
    <h3 className="text-2xl font-bold text-paragraph mt-2">phone Us</h3>
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
  <div className="flex items-center justify-center bg-light rounded-sm py-8 px-4">
    <form className="max-w-md mx-auto w-full flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="flex space-x-4 w-full">
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="px-4 py-2 border mb-6 rounded-md w-full" />
  
        <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} name="phone" placeholder="Your Phone Number" className="px-4 py-2 border mb-6 rounded-md w-full" />
      </div>
      <input type="text" id="subject" name="subject" onChange={e => setSubject(e.target.value)} value={subject} placeholder="Subject" className="px-4 py-2 border w-full mb-6 rounded-md" />
  
  
      <textarea id="message" placeholder='Enter Message' onChange={e => setMessage(e.target.value)} value={message} name="message" rows={6} className="px-4 py-2 border w-full mb-6 rounded-md"></textarea>
  
      <button type="submit" disabled={isLoading}  className="bg-primary text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">{ isLoading? "sending":"Send Message"}</button>
    </form>
  </div>
  
</div>

 
     
    </div>
      </div>
             
  </section>
  
  )
}

export default Contact