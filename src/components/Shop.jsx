import React from 'react'
const shopCards = [
    {name:"Women's",button:"Best New Deals",subtitle:"New Collection",backgoundimg:"/cat1.jpg.webp",variant:"default"},
    {name:"Winter Cloth",button:"Best New Deals",subtitle:"New Collection",discount:"Discount",backgoundimg:"/cat2.jpg.webp",variant:"special"},
    {name:"Men's Cloth",button:"Best New Deals",subtitle:"New Collection",backgoundimg:"/cat3.jpg.webp",variant:"default"},
]
function Shop() {
  return (
    <div className='w-[95%] m-auto h-[80vh] flex flex-col justify-center gap-20 shop'>
        <h1 className='text-5xl font-semibold text-center'>Shop by Category</h1>
        <div className="shopCards flex justify-between flex-wrap">
            {shopCards.map((shop)=>(

                <div className="shopCard relative flex ">
                        <img src={shop.backgoundimg} alt="" />
                        {shop.variant === "default" && (
                            <div className=" cardCon absolute right-5 bottom-[25%] max-[1292px]:bottom-[12%] max-[1292px]:right-0 text-start flex flex-col gap-4">
                            <h2 className='max-[1292px]:text-2xl text-5xl font-semibold font-playfair'>{shop.name}</h2>
                            <button className='max-[1292px]:py-1 max-[1292px]:text-sm max-[1292px]:px-2 py-2 px-4 rounded-3xl bg-[#ffce25] font-medium'>{shop.button}</button>
                            <p className='max-[1292px]:text-sm text-[#0071fe] font-extrabold relative bottom-7 text-2xl font-yellowtail italic [text-shadow:0px_-3px_0px_#fff]'>{shop.subtitle}</p>
                        </div>
                        )}
                        {shop.variant === "special" && (
                            <div className="cardCon absolute right-5 bottom-[35%] max-[1292px]:bottom-[20%] max-[1292px]:right-0 text-center ">
                            <p className='text-[#0071fe] font-extrabold  text-2xl font-yellowtail italic [text-shadow:0px_-3px_0px_#fff]'>{shop.discount}</p>
                            <h2 className='text-5xl max-[1292px]:text-2xl font-semibold font-playfair'>{shop.name}</h2>
                            <p className='mt-3 max-[1292px]:text-sm'>{shop.subtitle}</p>
                        </div>
                        )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shop