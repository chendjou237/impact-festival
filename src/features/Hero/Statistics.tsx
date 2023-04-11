import React from 'react';
import { BiDiamond } from 'react-icons/bi';
import { ReactSVG } from "react-svg";
import diamond from "./diamond.svg"
import silver from "./silver.svg"
import general from "./general.svg"
import gold from "./gold.svg"

const Table = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
    <div className="grid grid-cols-4 gap-4 md:gap-12 min-w-98">
        <h2 className='text-white font-bold
         text-lg'>Ticket Type</h2>
        <h2 className='text-white font-bold
         text-lg'>Ticket Sold</h2>
        <h2 className='text-white font-bold
         text-lg'>Ticket Left</h2>
        <h2 className='text-white font-bold
         text-lg'>Confirmed</h2>
        <div className=' bg-table1  px-2 py-2 md:py-6  rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40 sm:w-30 flex items-c
        enter '><div className="rounded-full  mr-2 p-1 self-center bg-white"><ReactSVG src={diamond} /></div> <span className="hidden md:block font-cinzel">DIAMOND</span></div>
        <div className=' bg-table1  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 50</div>
        
        <div className=' bg-table1  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 0</div>
        


        <div className=' bg-table1  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 40</div>
        <div className=' bg-table2  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg text-white w-24 md:justify-start justify-center md:w-40 flex items-c
        enter '><div className="rounded-full mr-2 p-1 self-center bg-white"><ReactSVG src={gold} /></div> <span className="hidden md:block font-cinzel">GOLD</span></div>
        <div className=' bg-table2  px-2 py-2 md:py-6 rounded-md text-white font-semibold  text-lg w-24 md:justify-start justify-center md:w-40  '> 300</div>
        
        <div className=' bg-table2  px-2 py-2 md:py-6 rounded-md text-white font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 0</div>
        


        <div className=' bg-table2  px-2 py-2 md:py-6 rounded-md text-white font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 0</div>
        <div className=' bg-table3  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24  md:w-40 flex md:justify-start justify-center  items-c
        enter  '><div className="rounded-full mr-2  p-1 self-center bg-white"><ReactSVG src={silver} /></div>  <span className="hidden md:block font-cinzel">SILVER</span></div>
        <div className=' bg-table3  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 100</div>
        
        <div className=' bg-table3  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 0</div>
        


        <div className=' bg-table3  px-2 py-2 md:py-6 rounded-md  font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 70</div>
        <div className=' bg-table4  px-2 py-2 md:py-6 rounded-md text-white font-semibold text-lg w-24 md:justify-start justify-center md:w-40 flex items-c
        enter '><div className="rounded-full mr-2 p-1 self-center  bg-white"><ReactSVG src={general} /></div><span className="hidden md:block font-cinzel">GENERAL</span></div>
        <div className=' bg-table4  px-2 py-2 md:py-6 rounded-md text-white font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 0</div>
        
        <div className=' bg-table4  px-2 py-2 md:py-6 rounded-md text-white font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 100</div>
        


        <div className=' bg-table4  px-2 py-2 md:py-6 rounded-md  text-white font-semibold text-lg w-24 md:justify-start justify-center md:w-40  '> 50</div>
        
    </div>
    <div className="flex text-white space-x-8">
        <div className="">
            <p className='text-md font-bold'>Total seat capacity</p>
            <p className='text-2xl md:text-4xl font-bold'>/</p>
        </div>
        <div className="bg-table2 rounded-lg px-12 py-0 md:py-4 ">
            <p className='text-md font-bold'>Total seat Sold</p>
            <p className='text-2xl md:text-4xl font-bold'>520</p>
        </div>
        <div className="">
            <p className='text-md font-bold'>Total seats to sell</p>
            <p className='text-2xl md:text-4xl font-bold'>1000</p>
        </div>
    </div>
    </div>

  );
};

export default Table;
