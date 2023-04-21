import React from 'react';
import { BiDiamond } from 'react-icons/bi';
import { ReactSVG } from "react-svg";
import diamond from "../../assets/diamond.svg"
import silver from "../../assets/silver.svg"
import general from "../../assets/general.svg"
import gold from "../../assets/gold.svg"

const Table = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
    <div className="grid grid-cols-4 gap-x-3 gap-y-3 md:gap-x-12 md:gap-y-6  ">
        <h2 className='text-white font-bold 
         text-lg font-cinzel '>Ticket Type</h2>
        <h2 className='text-white font-bold
         text-lg font-cinzel'>Ticket Sold</h2>
        <h2 className='text-white font-bold
         text-lg font-cinzel'>Ticket Left</h2>
        <h2 className='text-white font-bold
         text-lg font-cinzel'>Confirmed</h2>
        <div className=' bg-diamond  px-2 py-2 md:py-4   rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  flex items-c
        enter '><div className="rounded-full font-biko  mr-2 p-1 self-center bg-white"><ReactSVG src={diamond} /></div> <span className="hidden md:block font-cinzel">DIAMOND</span></div>
        <div className=' bg-diamond  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 12</div>
        
        <div className=' bg-diamond  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 40</div>
        


        <div className=' bg-diamond  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 0</div>
        <div className=' bg-gold  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg text-white w-20 md:justify-start justify-center md:w-40 flex items-c
        enter '><div className="rounded-full font-biko mr-2 p-1 self-center bg-white"><ReactSVG src={gold} /></div> <span className="hidden md:block font-cinzel">GOLD</span></div>
        <div className=' bg-gold  px-2 py-2 md:py-4 rounded-md font-biko text-white font-semibold  text-lg w-20 md:justify-start justify-center md:w-40  '> 23</div>
        
        <div className=' bg-gold  px-2 py-2 md:py-4 rounded-md font-biko text-white font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 50</div>
        


        <div className=' bg-gold  px-2 py-2 md:py-4 rounded-md font-biko text-white font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 0</div>
        <div className=' bg-silver  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20  md:w-40 flex md:justify-start justify-center  items-c
        enter  '><div className="rounded-full font-biko mr-2  p-1 self-center bg-white"><ReactSVG src={silver} /></div>  <span className="hidden md:block font-cinzel">SILVER</span></div>
        <div className=' bg-silver  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 30</div>
        
        <div className=' bg-silver  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 80</div>
        


        <div className=' bg-silver  px-2 py-2 md:py-4 rounded-md font-biko  font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 0</div>
        <div className=' bg-general  px-2 py-2 md:py-4 rounded-md font-biko text-white font-semibold text-lg w-20 md:justify-start justify-center md:w-40 flex items-c
        enter '><div className="rounded-full font-biko mr-2 p-1 self-center  bg-white"><ReactSVG src={general} /></div><span className="hidden md:block font-cinzel">GENERAL</span></div>
        <div className=' bg-general  px-2 py-2 md:py-4 rounded-md font-biko text-white font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 455</div>
        
        <div className=' bg-general  px-2 py-2 md:py-4 rounded-md font-biko text-white font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 310</div>
        


        <div className=' bg-general  px-2 py-2 md:py-4 rounded-md font-biko  text-white font-semibold text-lg w-20 md:justify-start justify-center md:w-40  '> 0</div>
        
    </div>
    <div className="flex text-white space-x-8">
        <div className="font-cinzel">
            <p className='text-md font-bold'>Total seat capacity</p>
            <p className='text-2xl md:text-4xl font-bold text-primary sm:text-white'>/</p>
        </div>
        <div className="bg-gold rounded-lg px-12 py-0 md:py-4 font-alexandra">
            <p className='text-md font-bold'>Total seat Sold</p>
            <p className='text-2xl md:text-4xl font-bold ' >520</p>
        </div>
        <div className="font-cinzel">
            <p className='text-md font-bold'>Total seats to sell</p>
            <p className='text-2xl md:text-4xl font-bold text-primary sm:text-white'>1000</p>
        </div>
    </div>
    </div>

  );
};

export default Table;
