import React from 'react'
import Timer from './Timer'
import Table from './Statistics'

export default function Hero() {
  return (
    <section id='hero' className="relative min-h-screen pt-20  pb-12 lg:pt-48" style={{ backgroundColor: "#FBF5F3" }}>
    <img
      src="/static/images/hero/hero1.jpg"
      className="absolute top-0 left-0 w-full h-full object-cover"
      alt="LevelUp237 Conference hero background"
    />
    <div className="absolute top-0 justify-center  space-y-4 left-0 right-0 bottom-0 flex flex-col  items-start   text-center w-full h-full sm:px-16" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none" style={{ color: "#FFB81C" }}>IM<span className="text-white">237</span></h1>
      <h2 className="text-xl lg:text-3xl mt-6 font-
      semibold text-white">International Tech Conference</h2>
      button with text "get your ticket now" */}
      <div className="flex w-full h-screen py-24 lg:py-0 items-center  space-y-8 space-x-4 flex-col lg:flex-row justify-start lg:justify-between">
      <div className="flex flex-col items-center lg:items-start">
      <div className="text-4xl font-bold font-cinzel mb-2 lg:mb-2  text-white">
      IMPACT FESTIVAL 2023 in:
      </div>
      <Timer />
      <a href="#tickets"  className="mt-0 font-biko md:mt-8 px-8 py-4 bg-button text-white text-lg font-semibold rounded-lg shadow-md hover:bg-transparent hover:border hover:border-white">Get Your Ticket Now</a>
</div>

<Table />
<div className="h-0"></div>
      </div>
      
    </div>
  
  </section>
  )
}
