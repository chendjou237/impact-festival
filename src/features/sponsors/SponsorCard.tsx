import React from 'react'
import { BsBagDash} from "react-icons/bs";


export default function SponsorCard() {
  return (
    <div className="
    px-4
    py-6
    rounded-lg
    shadow-md
    flex
    flex-col
    justify-center
    items-start
    bg-cardBackground
    space-y-4
  ">
   <div className="flex space-x-4">
    <BsBagDash className="text-icon  text-4xl " />
    <div>
 <h2 className='text-lightHeading font-extrabold text-lg mb-2'>
    1. OFFICIAL(PLATINUM) SPONSORS-$20,000:
                </h2>
    <h3 className="text-xl mt-4 font-semibold text-white">Benefits: </h3>
    </div>


   </div>

<ul className="text-light list-disc px-8">
  <li>03 Busines Class Tickets</li>
  <li>03 Busines Class Tickets</li>
  <li>03 Busines Class Tickets</li>
  <li>03 Busines Class Tickets</li>
  <li>03 Busines Class Tickets</li>
  </ul>
  </div>
  )
}
