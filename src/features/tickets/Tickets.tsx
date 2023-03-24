import React from 'react'

export default function Tickets() {
  return (
    <section id="tickets" className="bg-white pt-16 pb-24 px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="
              bg-gray-50
              px-8
              py-12
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <p className="text-2xl font-semibold">$299</p>
              <p className="text-lg">General Admission Ticket</p>
              <button className="mt-8 py-4 px-6 bg-green-500 hover:bg-green-600 text-white text-xl font-semibold rounded-lg transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="
              bg-gray-50
              px-8
              py-12
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <p className="text-2xl font-semibold">$499</p>
              <p className="text-lg">VIP Admission Ticket</p>
              <button className="mt-8 py-4 px-6 bg-green-500 hover:bg-green-600 text-white text-xl font-semibold rounded-lg transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </section>
  )
}
