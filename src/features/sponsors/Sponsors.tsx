import React from 'react'
import SponsorCard from './SponsorCard'

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative bg-white pt-16 pb-24 px-8">
     <div className="absolute inset-0   skew-y-3 bg-background "></div>
  <div className="relative ">
    <h2 className="text-4xl font-bold mb-8 text-center text-lightHeading">SPONSORS</h2>
    <hr className="mx-auto mb-16 border-primary border-solid border-2 w-16 rounded-full" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     <SponsorCard />
     <SponsorCard />
     <SponsorCard />
    </div>
    </div>
  </section>
  )
}


