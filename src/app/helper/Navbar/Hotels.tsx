"use client";
import React from 'react';
import HotelCard from "./HotelCard"
const Hotels = () => {
  return (
    <div className='pt-[5rem] bg-gray-200 pb-[4rem]' >
       <h1 className='heading'>Best Hotel</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
           <div data-aos='fade-left'>
             <HotelCard name="Hotel Nextus" city=" Rajistan" price="$123" reviewNum='21' image='h1.png'/>
           </div>
           <div data-aos='zoom-in' data-aos-delay='300'>
             <HotelCard name="Hotel Nextus" city=" Texas" price="$223" reviewNum='10' image='h2.png'/>
           </div>
           <div data-aos='fade-right' data-aos-delay='600'>
             <HotelCard name="Hotel Nextus" city="Muridke" price="$323" reviewNum='20' image='h3.png'/>
           </div>
           <div data-aos='fade-left' data-aos-delay='900'>
             <HotelCard name="Hotel Nextus" city=" Tokyo" price="$423" reviewNum='41' image='h4.png'/>
           </div>
           <div data-aos='zoom-in' data-aos-delay='1200'>
             <HotelCard name="Hotel Nextus" city=" Osaka" price="$523" reviewNum='21' image='h5.png'/>
           </div>
           <div data-aos='fade-right' data-aos-delay='1600'>
             <HotelCard name="Hotel Nextus" city=" Andalus" price="$623" reviewNum='11' image='h6.png'/>
           </div>
          
       </div>
    </div>
  );
}

export default Hotels;
