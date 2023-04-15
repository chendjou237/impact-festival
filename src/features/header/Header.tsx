import React from 'react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed flex justify-between items-center w-full px-8 py-6 bg-background text-white z-10 shadow-md shadow-black">
      <a href="#" className="text-xl font-bold">
        IMPACT <span className="text-navFocus">FESTIVAL</span>
      </a>

      {/* Hamburger menu on mobile */}
      <div className="flex md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-white hover:text-gray-300 focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ?
              <path fillRule="evenodd" clipRule="evenodd" d="M4.92857 6.85714H19.0714C19.5074 6.85714 19.8571 7.20677 19.8571 7.64286C19.8571 8.07896 19.5074 8.42858 19.0714 8.42858H4.92857C4.49254 8.42858 4.14286 8.07896 4.14286 7.64286C4.14286 7.20677 4.49254 6.85714 4.92857 6.85714ZM4.92857 12H19.0714C19.5074 12 19.8571 12.3496 19.8571 12.7857C19.8571 13.2218 19.5074 13.5714 19.0714 13.5714H4.92857C4.49254 13.5714 4.14286 13.2218 4.14286 12.7857C4.14286 12.3496 4.49254 12 4.92857 12ZM19.0714 17.1429H4.92857C4.49254 17.1429 4.14286 16.7932 4.14286 16.3571C4.14286 15.921 4.49254 15.5714 4.92857 15.5714H19.0714C19.5074 15.5714 19.8571 15.921 19.8571 16.3571C19.8571 16.7932 19.5074 17.1429 19.0714 17.1429Z" /> :
              <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11ZM3 16C3 15.4477 3.44772 15 4 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16Z" />
            }
          </svg>
        </button>
      </div>

      {/* Navigation menu */}
      <nav className={`md:flex md:items-center md:w-auto w-full ${isOpen ? "block" : "hidden"} font-cinzel`}>
        <ul className="md:flex-row md:flex space-y-4 md:space-y-0 list-none items-center">
          <li className="md:hidden">
            <a href="#" className="px-5 py-2 rounded-lg bg-navFocus text-white font-semibold hover:bg-opacity-75 focus:bg-opacity-75">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block md:inline-block mt-4 md:mt-0 mr-6 hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#speaker" className="block md:inline-block mt-4 md:mt-0 mr-6 hover:text-yellow-500">
              Speakers
            </a>
          </li>
          <li>
            <a href="#sponsors" className="block md:inline-block mt-4 md:mt-0 mr-6 hover:text-yellow-500">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#tickets" className="block md:inline-block mt-4 md:mt-0 mr-6 hover:text-yellow-500">
              Tickets
            </a>
          </li>
          <li>
            <a href="#position" className="block md:inline-block mt-4 md:mt-0 mr-6 hover:text-yellow-500">
              Position
            </a>
          </li>
          <li>
            <a href="#contact" className="block md:inline-block mt-4 md:mt-0 mr-6 hover:text-yellow-500">
              Contact Us
            </a>
          </li>
          <li className="hidden md:block font-alexandra">
            <a href="#tickets" className="px-5 py-2 rounded-lg bg-navFocus text-white font-semibold hover:bg-opacity-75 focus:bg-opacity-75 transition duration-1000 ease-in-out">
              Buy Tickets
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
