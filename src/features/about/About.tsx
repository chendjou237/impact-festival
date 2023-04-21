import React, { useEffect, useRef, useState } from 'react'
import { IoNewspaper } from "react-icons/io5";
import { BiCubeAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import "../../animation.css";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
var count = 0;
  useEffect(() => {
    const options = {
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(count < 1 ?entry.isIntersecting: true);
      count++
    }, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section id="about" className="relative bg-light pt-16 pb-24 px-16">
         <div className="absolute inset-0   skew-y-3 bg-background "></div>
  <div className="relative ">
         
    <h2 className="text-4xl font-bold mb-8  text-white font-cinzel">About The Festival🎉</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 justify-evenly  ${isVisible ? "animate-slide-in" : ""}`}>
         
            <article>
              <p className="text-lg leading-relaxed text-paragraph font-biko">
              Vous voulez faire partie des 2000 personnes qui seront touchées par Impact Festival de Leaders Nation durant l’été 2023 au Cameroun, mais vous ignorez comment faire ou à qui vous adresser ? 
              </p>
              <p className="text-lg leading-relaxed mt-4 text-paragraph font-biko" >
              Vous souhaitez vous aussi tirer profit de ce merveilleux évènement et rencontrer des personnes qui ont connu du succès, toutefois il y a de nombreuses questions sur lesquelles vous éprouvez encore des doutes ? Eh bien, ce document se veut être une réponse pratique à toutes les questions essentielles que vous pourrez vous poser. 
              </p>
              <p className="text-lg leading-relaxed mt-6 text-navFocus font-alexandra" >
              Un programme de formation pratique qui va s’étaler sur 3 jours pour réunir les chercheurs et donneurs d’emplois, les entreprises, investisseurs, entrepreneurs, coachs, clergés, hommes politiques, ONG, PME, sociétés civiles et bien plus.
              </p>
              <div className="flex justify-center md:justify-start font-biko">
              <button className='mt-8 text-lightHeading border border-button py-2 px-4 rounded-full transition duration-500 ease-in-out hover:bg-button hover:text-white  flex items-center'>About Us    <IoIosArrowForward className='ml-2 ' /></button>
              </div>
            </article>
            <aside>
            <div className="flex space-x-12 flex-col md:flex-row  ">
              <div className="text-center md:text-left flex flex-col md:items-start items-center">
                <IoNewspaper className='text-navFocus text-4xl mb-8 ' />
                <h2 className='text-lightHeading font-extrabold text-lg mb-2 font-cinzel'>
                Our Vision:
                </h2>
                <p className=' text-paragraph font-biko'>
Transformer les membres en leaders, et les leaders en agents de changement.
                </p>
              </div>
              <div className="text-center md:text-left flex  flex-col md:items-start items-center mt-12 md:mt-0 ">
                <BiCubeAlt className='text-navFocus text-4xl   mb-8  sm:flex sm:flex-col sm:items-center'/>
                <h2 className='text-lightHeading font-extrabold text-lg mb-2 font-cinzel'>
                Our Mission
                </h2>
                <p className=' text-paragraph font-biko'>
Faire ressortir son potentiel intérieur fin d'accomplir sa mission sur terre.
                </p>
              </div>
            </div>
            <div className=" mt-12">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <MdPhotoLibrary className='text-navFocus text-4xl mb-8 ' />
                <h2 className='text-lightHeading font-extrabold text-lg mb-2 font-cinzel'>
                Our Objective:
                </h2>
                <ol className='text-paragraph list-decimal font-biko'>
                  <li>Réunir plus de 1000 jeunes d’horizons et de professions divers pendant 3 jours </li>
                <li>
                Éveiller, Transformer et Booster l’état d’esprit des participants
                </li>
                <li>Transformer la passion que vous avez, le potentiel que vous regorgez et les cadeaux que vous offrez en argent ou en entreprise 
</li>
                <li>Investir de son temps, argent et plus dans des projets porteurs et d’avenir, 
</li>
                <li>Inciter les jeunes à entreprendre dans les secteurs futuristes et porteurs avec la possibilité de révolutionner les habitudes.
</li>
                <li>Réunir des communautés sœurs pour poser les jalons d’une collaboration d’envergure afin de booster à grande échelle les jeunes et atteindre des objectifs le plus rapidement et efficacement possible
</li>
                </ol>
                <p className='mt-4 text-paragraph font-alexandra'>
                Finally, on day three we will have a business breakfast between the speakers and a selected number of entrepreneurs to network and exchange ideas on various investment opportunities. It would be a great honor for us to have you, or your organisation as an official sponsor, Guest speaker, artist or MC of this event slated for the 5Th, 6th,and 7th, of June 2023. The Cameroonian business community are so eager to learn and connect with the new wave of technology and models of businesses in this 21st Century and your patronage will make all the difference.

</p>
              </div>
              

            </div>
            </aside>

  </div>
  </div>

        
        </section>
  )
}
