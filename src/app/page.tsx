"use client"
import React, { useState } from 'react';
import MobileNav from './helper/Navbar/mobileNav';
import Navbar from './helper/Navbar/navbar'
import Hero from './helper/Navbar/hero';
import Topdestination from './helper/Navbar/topdestination';
import Hotels from './helper/Navbar/Hotels';
import Reviews from './helper/Navbar/Reviews';
import Contact from './Contact';
import Footer from './helper/Navbar/Footer';
function Page() {
  const [nav , setNav]=useState(false)
  const openNavHndler=()=>setNav(true)
  const closeNavHndler=()=>setNav(false)
  return (
    <div className='' >
      <MobileNav nav={nav} closeNav={closeNavHndler}/>
      <Navbar openNav={openNavHndler}/>
      <Hero/>
      <Topdestination/>
      <Hotels/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Page;
