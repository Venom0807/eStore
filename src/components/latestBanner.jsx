import React from 'react'

function LatestBanner() {
  return (
    <div className='h-[400px] bg-[url("/banner.webp")] bg-no-repeat bg-cover w-[95%] m-auto flex items-center relative mb-20 '>  
        <div className='absolute -bottom-19 pl-8 '>
        <img  src="bannerMan.webp" alt="" className='h-[100%] max-[1255px]:hidden' />
        </div>
        <div className="bannerCon flex ml-[25%] max-[1599px]:ml-[33%] max-[1255px]:ml-[0%] max-[1255px]:justify-center gap-10 items-center w-[100%] max-[822px]:flex-col max-[822px]:text-center">
            <div className="con flex flex-col gap-4">
            <h1 className='text-5xl font-playfair font-bold'>Get Our <br /> Latest Offers News</h1>
            <p  className='text-2xl'>Subscribe news latter</p>
            </div>
            <div className="bannerSearch relative flex justify-between rounded-full w-[400px] h-[60px] max-[432px]:w-[300px] overflow-auto">
                <input className='outline-none focus:outline-none focus:ring-0 bg-white h-[100%] w-[100%] pl-8' type="email" placeholder='Your email here' />
                <button className='bg-[#2577fd] text-white px-10 max-[432px]:px-6 rounded-full absolute h-[100%] right-0'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default LatestBanner