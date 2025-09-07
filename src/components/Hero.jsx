import React from 'react'

function Hero() {
  return (
    <div className='bg-[url("herobg.jpg")] flex justify-center items-center'>
        <img className='max-[1128px]:hidden' src="herogirl.png" alt="" />
        <div className="heroCon flex flex-col items-start gap-7 max-[1128px]:w-[100%] max-[1128px]:items-center max-[1128px]:text-center max-[1128px]:py-30">
            <h3 className='max-[1366px]:text-2xl text-3xl font-yellowtail text-[#2577fd]'>60% Discount</h3>
            <h1 className='max-[1366px]:text-6xl text-8xl font-bold md:w-[10ch] font-playfair '>Winter Collection</h1>
            <p className='text-xl'>Best Cloth Collection By 2020!</p>
            <button className=' py-2 px-8 font-medium text-xl bg-[#2577fd] text-white rounded-4xl'>Sign In</button>
        </div>
    </div>
  )
}

export default Hero