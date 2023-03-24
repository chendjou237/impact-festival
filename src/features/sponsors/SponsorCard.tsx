import React from 'react'

export default function SponsorCard() {
  return (
    <div className="
    bg-gray-50
    px-4
    py-6
    rounded-lg
    shadow-md
    flex
    flex-col
    justify-center
    items-center
  ">
    <img
      src="/sponsor-1.png"
      width={200}
      height={90}
      alt="LevelUp237 Conference sponsor"
    />
    <h3 className="text-xl mt-4 font-semibold">Company A</h3>
  </div>
  )
}
