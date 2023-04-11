import React from 'react'

import { BsTwitter } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center py-8 space-y-2 px-16 md:justify-between bg-background">
    <div className="">
      <h3 className='text-light'>© Copyright <span className='text-primary font-bold'>Impact Festival</span> . All Rights Reserved
</h3>
      <p className='text-light text-center md:text-left'>Designed by <span className='text-primary font-bold'><a href="https://chendjou-honore.web.app">Chendjou Honore</a>
</span>
</p>
    </div>
    <div className="flex space-x-4">

      <div className="py-2 px-1 rounded-sm bg-cardBackground">
    <a href="#">
      <BsTwitter className="text-white text-sm mx-2" />
    </a>
      </div>
      <div className="py-2 px-1 rounded-sm bg-cardBackground">
      <a href="#">
      <FaFacebookF className="text-white text-sm mx-2" />
      </a>
      </div>
      <div className="py-2 px-1 rounded-sm bg-cardBackground">
      <a href="#">
      <BsInstagram className="text-white text-sm mx-2" />
      </a>
      </div>
      <div className="py-2 px-1 rounded-sm bg-cardBackground">
      <a href="#">
      <FaLinkedinIn className="text-white text-sm mx-2" />
      </a>
      </div>
    </div>
  </div>
  )
}
