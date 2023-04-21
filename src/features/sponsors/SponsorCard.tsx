import React from 'react'

import { ReactSVG } from "react-svg";

export default function SponsorCard(props: SponsorProps) {
  const { title, icon, benefits } = props
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
    <ReactSVG src={icon} className="text-icon  text-4xl " />
    <div>
 <h2 className='text-lightHeading font-extrabold text-lg mb-2 font-cinzel'>
                  {title}
    {/* 1. OFFICIAL(PLATINUM) SPONSORS-$20,000: */}
                </h2>
    <h3 className="text-xl mt-4 font-semibold text-white font-cinzel">Benefits: </h3>
    </div>
   </div>

<ul className="text-light list-disc px-8 font-biko">
    {benefits.map((benefit) => (
      <li className="text-light">{benefit}</li>
    ))}
  </ul>
  </div>
  )
}

type SponsorProps = {
  title: string,
  icon: string,
  benefits: string[],
}