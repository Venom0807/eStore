import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaBehance, FaFacebook, FaGlobe, FaTwitter } from 'react-icons/fa';
const footerData = [
  {
    title:"Quick Links",
    links:["About","Offers & Discounts","Get Coupon","Contact Us"]
  },
  {
    title:"New Products",
    links:["Woman Cloth","Fashion Accessories","Man Accessories","Rubber made Toys"]
  },
  {
    title:"Support",
    links:["Frequently Asked Questions","Terms & Conditions","Privacy Policy","Privacy Policy","Report a Payment Issue"]
  },
]
function Footer() {
  return (
    <div className='mainWidth h-[50vh] flex flex-col justify-center gap-25 max-[303px]:h-max'>
    <div className="footerTop flex justify-between flex-wrap">
      <div className="footerLogo flex flex-col gap-10 text-start">
        <img className='w-[100px]' src="/logo.png.webp" alt="" />
        <p className='w-[30ch] text-[#868c98]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div className="footerLinks flex justify-between w-[70%] max-[745px]:w-full flex-wrap">
        {footerData.map((footer)=>(
          <div className="links flex flex-col gap-10 max-[745px]:mb-4">
            <h3 className='font-semibold text-xl'>{footer.title}</h3>
            <div className='flex flex-col gap-3'>
            {footer.links.map((links)=>(
              <ul>
                <li> <a
                      href="#"
                      className="
                        inline-block
                        text-[#868c98]
                        transition-transform duration-300
                        hover:text-[#2577fd]
                        hover:translate-x-1
                      "
                    >{links}</a></li>
              </ul>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="footerSocial flex justify-between max-[815px]:flex-col max-[815px]:items-center">
      <p className='flex items-center gap-1'>Copyright ©2025 All rights reserved | This template is made with <CiHeart className='text-[#2577fd]' /> by <a className='text-[#2577fd]' href="">Ahmer Khan</a></p>
      <div className="social flex gap-4 text-[#222222]">
        <FaTwitter className='hover:text-[#2577fd] transition-all duration-[.3s] cursor-pointer' />
        <FaFacebook className='hover:text-[#2577fd] transition-all duration-[.3s] cursor-pointer' />
        <FaBehance className='hover:text-[#2577fd] transition-all duration-[.3s] cursor-pointer' />
        <FaGlobe className='hover:text-[#2577fd] transition-all duration-[.3s] cursor-pointer' />
      </div>
    </div>
    </div>
  )
}

export default Footer