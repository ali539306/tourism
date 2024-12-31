"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-[2rem] pt-[7rem] bg-gray-100">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="footer_heading">support</h1>
        
        <div>
          <a className="footer_link" href="#">Help Center</a>
          <a className="footer_link" href="#">Safety Information</a>
          <a className="footer_link" href="#">Cancellation Options</a>
          <a className="footer_link" href="#">Medical Doctor</a>
        </div>
        </div>

        {/* second */}


        <div>
          <h1 className="footer_heading">Company</h1>
        
        <div>
        <a className="footer_link" href="#">About Us</a>
          <a className="footer_link" href="#">Community Blog</a>
          <a className="footer_link" href="#">Careers</a>
          <a className="footer_link" href="#">Privacy policy</a>
          <a className="footer_link" href="#">Terms of Service</a>
        </div>
        </div>

        {/* third */}

        <div>
          <h1 className="footer_heading">Contact</h1>
        
        <div>
          <a className="footer_link" href="#">Partnerships</a>
          <a className="footer_link" href="#">FAQ</a>
          <a className="footer_link" href="#">Get in Touch</a>
         
        </div>
        </div>
         <div>
            <h1 className="footer_link">Social</h1>
            <div className="flex items-center space-x-4 text-white text-[1.3rem]">
                <div className="footer_icon bg-[#0165e1]">
                    <FaFacebookF/>
                </div>
                <div className="footer_icon bg-[#cd486b]">
                    <FaInstagram/>
                </div>
                <div className="footer_icon bg-[#1da1f2]">
                    <FaTwitter/>
                </div>
                <div className="footer_icon bg-[#cd201f]">
                    <FaYoutube/>
                </div>
                
            </div>
         </div>
        
      </div>
      <div className="mt-[1rem] grid grid-cols-1 gap-[1.4rem ] sm:grid-cols-2 justify-between w-[80%] mx-auto ">
        <p className="text-[17px]">&#169; copyright</p>

      </div>
    </div>
  );
};

export default Footer;