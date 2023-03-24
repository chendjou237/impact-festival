import React from 'react'

export default function Header() {
  return (
    <header className="fixed flex justify-between items-center w-full px-8 py-6 bg-black text-white z-10">
          <a href="#" className="text-xl font-bold">
            IMPACT <span className="text-navFocus">FESTIVAL</span>
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-yellow-500">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#tickets" className="hover:text-yellow-500">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </header>
  )
}
