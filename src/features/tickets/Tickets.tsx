import React from 'react'
import TicketsCard from './TicketsCard'

export default function Tickets() {
  return (
    <section id="tickets" className="bg-white pt-16 pb-24 px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-background">TICKETS</h2>
          <hr className="mx-auto mb-8 border-primary border-solid border-2 w-16 rounded-full" />
          <p className="text-lg leading-relaxed text-center mb-2">
          Each ticket comes with a bundle of benefits so read the benefits carefully before buying :)
              </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TicketsCard />
            <TicketsCard />
            <TicketsCard />
          </div>
        </section>
  )
}
