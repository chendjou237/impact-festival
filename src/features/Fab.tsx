import React from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Fab() {
  return (
    <div className="fixed bottom-4 right-4">
      <Link to="hero" smooth={true} duration={500}>
        <button className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-2 px-2 rounded-full">
            <BsArrowUp />
        </button>
      </Link>
    </div>
  );
}
