import React from 'react'
const collectionCard = [
    {title:"Menz Winter Jacket",image:"/yellowShirt.webp",variant:"default"},
    {title:"Menz Winter Jacket",image:"/bluePant.webp",variant:"special"},
    {title:"Menz Winter Jacket",image:"/hoodie.webp",variant:"default"},
]
function Collection() {
  return (
    <div className='flex mainWidth justify-between !mb-30 max-[572px]:flex-col max-[572px]:gap-8'>
        <div className="collectionCon flex flex-col justify-between max-[572px]:gap-8 items-start w-[25%] max-[820px]:w-[100%]">
          <div className='flex flex-col gap-8 items-start'>
            <h1 className='text-5xl font-playfair font-bold'>Best Collection of This Month</h1>
            <p className='text-xl'>Designers who are interesten crea.</p>
            <button className='py-3 px-10 rounded-full text-xl bg-[#2577fd] text-white'>Shop Now</button>
          </div>
            <img src="/pent.png" alt="" />
        </div>
        <img className='max-[820px]:hidden' src="collectionMan.png" alt="" />
        <div className="collections flex flex-col justify-end gap-7">
                {collectionCard.map((collection)=>(
                <div className="collectionCard flex items-end gap-2 max-[572px]:justify-between">
                    {collection.variant === "default" && (
                    <h3 className='font-medium text-xl w-[50%] max-[572px]:w-[50%] text-end'>{collection.title}</h3>
                    )}
                    {collection.variant === "special" && (
                    <h3 className='font-medium text-xl w-[50%] max-[572px]:w-[50%] text-end flex justify-center items-center py-3 px-6 bg-[#2577fd] text-white rounded-xl'>{collection.title}</h3>
                    )}
                    <img src={collection.image} alt="" />
                </div>
                ))}
        </div>
    </div>
  )
}

export default Collection