import React from 'react'

function FindProduct() {
  return (
    <div className=' h-[100vh] flex items-center'>
    <div className='flex gap-10 relative bg-[url("/card.png.webp")] bg-no-repeat bg-cover w-[95%] m-auto h-[60%]'>
        <div className="fProductImg flex items-end max-[1044PX]:hidden">
            <h1 className='rotate-270 relative bottom-25 z-0 -right-45 text-[117px] text-outline font-extrabold uppercase tracking-widest"'>MANZ</h1>
            <img src="/card-man.png.webp"  alt="" className='z-1' />
        </div>
        <div className="max-[1044PX]:w-[100%] max-[1044PX]:pl-4 fProductCon flex flex-col justify-center items-start gap-8 w-[40%]">
            <h1 className='max-[1044PX]:text-4xl text-6xl font-playfair font-bold '>Find The Best Product from Our Shop</h1>
            <p className='max-[1044PX]:text-xl text-2xl'>Designers who are interesten creating state ofthe.</p>
            <button className='bg-black text-white py-3 px-10 rounded-full text-xl hover:-translate-y-1 transition-all duration-[.4s]'>Shop Now</button>
        </div>
        <img className='absolute bottom-15 right-20 opacity-70 max-[538px]:hidden' src="shirt.webp" alt="" />
    </div>
    </div>
  )
}

export default FindProduct