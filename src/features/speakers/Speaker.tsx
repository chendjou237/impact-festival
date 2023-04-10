import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide ,} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./speaker.css";

// import required modules
import { Autoplay, Pagination, Navigation,Scrollbar } from "swiper";
import SpeakerCard from "./SwiperCard";

export default function Speaker() {
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
          return '<span class="' + className +" bg-primary"+ '">' + "</span>";
        },
      };
  return (

    <section className="relative">
   
    <div className="absolute inset-0   skew-y-3  bg-white"></div>
    <div className="relative ">
           
    
    <div className="py-16 ">
        <h2 className="text-4xl font-bold mb-2  text-background text-center ">Speakers</h2>
        <hr className="mx-auto mb-16 border-primary border-solid border-2 w-16 rounded-full" />


    <Swiper
      spaceBetween={300}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      slidesPerView={3}
      pagination={pagination}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide className="mb-16"><SpeakerCard img={'/static/images/speakers/wabo.png'} facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" linkedin="https://www.linkedin.com/" twitter="https://twitter.com/?lang=en" name="Wabo Collins" title="Founder of Iphone Cameroon" /></SwiperSlide>
      <SwiperSlide><SpeakerCard img={'/static/images/speakers/kyria.jpeg'} facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" linkedin="https://www.linkedin.com/" twitter="https://twitter.com/?lang=en" name="Kyria Chendjou" title="Mentors Leaders Nation"/></SwiperSlide>
      <SwiperSlide><SpeakerCard img={'/static/images/speakers/eunice.jpeg'} facebook="https://www.facebook.com/" instagram="https://www.instagram.com/" linkedin="https://www.linkedin.com/" twitter="https://twitter.com/?lang=en" name="Eunice Ajim" title="African Tech Startup Investor"/></SwiperSlide>
    
    </Swiper>
  </div>
  </div>
  </section>
  );
}
