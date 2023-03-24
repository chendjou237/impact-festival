import React, { ReactPropTypes } from 'react'

export default function SpeakerCard({speaker}: Props) {


  return (
    <div className="h-64 w-64">
    <img src={speaker} alt="" className='w-full h-full object-cover' />
  </div>
  )
}


type Props = {
    speaker: string;
}