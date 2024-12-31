"use client";
import React from 'react';
import { MapIcon } from "@heroicons/react/16/solid";
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-[2rem] mt-[3rem] w-[80%]'>
      
       <div className='flex items-center space-x-6'>
        <MapIcon className='h-[1.5rem] w-[1.5rem] text-red-600'/>
        <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>Location</p>
            <input className="outline-none border-none" type="date" placeholder="where are you going" />
        </div>
      </div>

      {/* // second  */}
      <div className='flex items-center space-x-6'>
        <CalendarDaysIcon className='h-[1.5rem] w-[1.5rem] text-red-600'/>
        <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>Start date</p>
            <input className="outline-none border-none" type="date" placeholder="where are you going" />
        </div>
      </div>

      {/* third */}

      <div className='flex items-center space-x-6'>
        <CalendarDaysIcon className='h-[1.5rem] w-[1.5rem] text-red-600'/>
        <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>END date</p>
            <input className="outline-none border-none" type="date" placeholder="where are you going" />
        </div>
      </div>
         {/* 4th */}

         <div className='flex items-center space-x-6'>
        <CalendarDaysIcon className='h-[1.5rem] w-[1.5rem] text-red-600'/>
        <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>Guest</p>
            <p className='text-[16px] font-normal'>1 Guest 1 Room</p>
        </div>
      </div>
         
    </div>
  );
}

export default SearchBox;
