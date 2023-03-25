import React from 'react'
import { IoNewspaper } from "react-icons/io5";
import { BiCubeAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";

export default function About() {
  return (
    <section id="about" className="relative bg-light pt-16 pb-24 px-16">
         <div className="absolute inset-0   skew-y-3 bg-background "></div>
  <div className="relative ">
         
    <h2 className="text-4xl font-bold mb-8  text-white">About the Conference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-evenly">
            <article>
              <p className="text-lg leading-relaxed text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit bibendum ante sed porttitor. Ut euismod lobortis augue, ut pellentesque nulla dapibus quis. Fusce feugiat semper dictum. Nunc condimentum arcu id nisl volutpat, ac efficitur nisi ultricies. Aliquam dapibus lectus eget leo suscipit malesuada.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-paragraph" >
                 Nam vel nibh at libero vulputate lacinia. Etiam urna sem, tincidunt vitae gravida quis, pulvinar finibus lectus. Sed ut suscipit sapien, vel hendrerit lorem. Quisque commodo tortor sed ex vehicula, nec lacinia est dignissim.
              </p>
              <p className="text-lg leading-relaxed mt-6 text-navFocus " >
                 Nam vel nibh at libero vulputate lacinia. Etiam urna sem, tincidunt vitae gravida quis, pulvinar finibus lectus. Sed ut suscipit sapien, vel hendrerit lorem. Quisque commodo tortor sed ex vehicula, nec lacinia est dignissim.
              </p>
              <div className="flex justify-center md:justify-start">
              <button className='mt-8 text-lightHeading border border-button py-2 px-4 rounded-full transition duration-500 ease-in-out hover:bg-button hover:text-white  flex items-center'>About Us    <IoIosArrowForward className='ml-2 ' /></button>
              </div>
            </article>
            <aside>
            <div className="flex space-x-12 flex-col md:flex-row  ">
              <div className="text-center md:text-left flex flex-col md:items-start items-center">
                <IoNewspaper className='text-navFocus text-4xl mb-8 ' />
                <h2 className='text-lightHeading font-extrabold text-lg mb-2'>
                Our Vision:
                </h2>
                <p className=' text-paragraph'>
                To empower and equip the next generation of young leaders in business, Finance, governance, technology and sports.
                </p>
              </div>
              <div className="text-center md:text-left flex  flex-col md:items-start items-center mt-12 md:mt-0">
                <BiCubeAlt className='text-navFocus text-4xl   mb-8  sm:flex sm:flex-col sm:items-center'/>
                <h2 className='text-lightHeading font-extrabold text-lg mb-2'>
                Our Mission
                </h2>
                <p className=' text-paragraph'>
                To create an environment where successful business leaders, corporate executives, professional entrepreneurs, leaders in technology and sports can provide mentorship to the next generation.
                </p>
              </div>

            </div>
            <div className=" mt-12">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <MdPhotoLibrary className='text-navFocus text-4xl mb-8 ' />
                <h2 className='text-lightHeading font-extrabold text-lg mb-2'>
                Our Objective:
                </h2>
                <ol className='text-paragraph list-decimal'>
                  <li>To impart the values of Integrity and excellence to the mindset and value set of young leaders.</li>
                <li>
                Create an opportunity for young leaders to network with captains of different industries.
                </li>
                <li>To bring together 5000 young young entrepreneurs, business executives and corporate and political leaders to network and share ideas for sustainable growth, strategic business alliances as well as National prosperity.
</li>
                <li>To create a platform for the birthing, grooming and maturing of new ventures and investment opportunities.
</li>
                <li>To contribute to a more productive and value-driven socio-economic landscape in Cameroon.
</li>
                </ol>
                <p className='mt-4 text-paragraph'>
                Finally, on day three we will have a business breakfast between the speakers and a selected number of entrepreneurs to network and exchange ideas on various investment opportunities. It would be a great honor for us to have you, or your organisation as an official sponsor, Guest speaker, artist or MC of this event slated for the 5Th, 6th,and 7th, of May 2023. The Cameroonian business community are so eager to learn and connect with the new wave of technology and models of businesses in this 21st Century and your patronage will make all the difference.

</p>
              </div>
              

            </div>
            </aside>
          </div>

  </div>

        
        </section>
  )
}
