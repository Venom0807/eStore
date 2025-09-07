import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
const headerLinks = [
    {name:"My Account"},{name:"Wish List"},{name:"Shopping"},{name:"Cart"},{name:"Checkout"},
]
const navLinks = [
    {name:"Home"},{name:"Categori"},{name:"Latest"},{name:"Blog"},{name:"Pages"},{name:"Contact"},
]
function Navbar() {
  return (
    <div>
        <header className='bg-black text-white py-6 max-[1072px]:hidden'>
            <div className="headerMain mainWidth flex justify-between">
            <div className="headerCon flex gap-8">
            <div className="country flex gap-4 items-center">
                <img src="header_icon.png.webp" alt="" />
                <select className='bg-black text-white'>
                    <option value="">USA</option>
                    <option value="">SPN</option>
                    <option value="">CDA</option>
                    <option value="">USD</option>
                </select>
            </div>
            <div><p>+777 2345 7886</p></div>
            </div>
            <div className="headerLinks flex gap-6">
                {headerLinks.map((header)=>{
                    return(
                        <ul>
                            <li><a href="">{header.name}</a></li>
                        </ul>
                    )
                })}
            </div>
            </div>
        </header>
        <nav className='py-5 flex'>
            <div className="navMain mainWidth flex justify-between items-center">
            <img src="/logo.png.webp" alt="" />
            <div className="navLinks flex gap-6 max-[1072px]:hidden">
                {navLinks.map((nav)=>{
                    return(
                        <ul>
                            <li><a  href="">{nav.name}</a></li>
                        </ul>
                    )
                })}
            </div>
            <div className="navSearch flex items-center gap-6 max-[1072px]:hidden">
                <div className="search flex items-center relative">
                    <input type="text" placeholder='Search Products' className='border-1  p-2 rounded-3xl border-[#eeeeee]' />
                    <IoSearchSharp className='absolute right-2' />
                </div>
                <div className="icons flex gap-6">
                    <FaRegHeart className='border-1 border-[#eeeeee] w-[40px] h-[40px] rounded-full p-2 text-[#4e4e4e]'/>
                    <FaCartShopping className='border-[#eeeeee]  border-1 w-[40px] h-[40px] rounded-full p-2 text-[#4e4e4e]'/>
                </div>
                <button className='py-3 px-6 font-medium text-xl bg-[#2577fd] text-white rounded-4xl'>Sign In</button>
            </div>
            <div className="menu hidden max-[1072px]:flex text-2xl">
            <IoIosMenu />
            </div>
                            </div>
        </nav>
    </div>
  )
}

export default Navbar