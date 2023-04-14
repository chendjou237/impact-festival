import React, { ReactPropTypes } from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

export default function SpeakerCard({img, title, name, facebook,linkedin, twitter, instagram}: Props) {


  return (
    <div className="flex items-center space-x-4 min-w-fit">
 <div className="relative h-80 w-64  text-transparent">
   <img src={img} alt="" className=' rounded-md w-full  h-full object-cover' />
   <div className="absolute opacity-0 rounded-md hover:opacity-100 inset-0 flex  items-end bg-black hover:bg-opacity-50 bg-opacity-0 transition duration-500 ease-in-out">
     <div className="mx-auto text-white text-center p-4 pb-8 ">
<h3 className="text-lg font-bold ">{name}</h3>
       <p className="text-sm text-primary font-bold">{title}</p>
     </div>
   </div>
 </div>
 <div className="flex flex-col space-y-4 items-center">
  <a target="_blank" href={facebook}>
    
    <FaFacebook />
    </a>
  <a target="_blank" href={twitter}>
    <BsTwitter />
    </a>
    <a target="_blank" href={instagram}>
  <FiInstagram />
    </a>
    <a target="_blank" href={linkedin}>
  <BsLinkedin />
    </a>
  <div className="w-0.5  h-20 bg-primary"></div>
 </div>
    </div>

  )
}


type Props = {
    img: string;
    name: string;
    title: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;

}