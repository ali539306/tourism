"use client"
import React, { useEffect, useState } from 'react';
import MobileNav from './helper/Navbar/mobileNav';
import Navbar from './helper/Navbar/navbar'
import Hero from './helper/Navbar/hero';
import Topdestination from './helper/Navbar/topdestination';
import Hotels from './helper/Navbar/Hotels';
import Reviews from './helper/Navbar/Reviews';
import Contact from './Contact';
import Footer from './helper/Navbar/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Page() {
  const [nav , setNav]=useState(false);
  const openNavHndler=()=>setNav(true);
  const closeNavHndler=()=>setNav(false);

  useEffect(()=>{
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  },[])
  return (
    <div className='overflow-x-hidden' >
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
