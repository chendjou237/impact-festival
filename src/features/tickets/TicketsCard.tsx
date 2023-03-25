import React from 'react'

export default function TicketsCard() {
  return (
    <div className='bg-cardBackground p-4 pb-8 rounded flex flex-col items-center space-y-4'>
        <img src="/static/images/tickets/Tickt3.png" alt=""  />
        <a href="#tickets" className="mt-8 px-8 py-2 bg-button text-white text-lg font-semibold rounded-sm shadow-md hover:bg-transparent hover:border hover:border-white ">Buy Now</a>
    </div>
  )
}
