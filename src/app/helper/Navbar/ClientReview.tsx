"use client";
import React from 'react';
interface Props{
    image:string;
    name:string;
}

const ClientReview = ({image,name}:Props) => {
  return (
    <div className='p-4'>
      <div>
        <img src={image} alt={name} height={80} width={80}  className='rounded-full mx-auto'/>
      </div>
      <p className='mt-[2rem] text-center text-[16px] text-black opacity-60'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis maxime aperiam explicabo blanditiis accusantium, soluta repellat. Perferendis placeat necessitatibus exercitationem quas?
      </p>
    </div>
  );
}

export default ClientReview;
