import React from 'react'
import { CiStar } from "react-icons/ci";
const productLinks=["All","New","Featured","Offer"]
const products=[
    {
        productImage:"/product1.png.webp",
        productName:"Green Dress with details",
        price:"$40.00",
        discount:"$60.00"
    },
    {
        productImage:"/product2.png.webp",
        productName:"Green Dress with details",
        price:"$40.00",
        discount:"$60.00"
    },
    {
        productImage:"/product3.png.webp",
        productName:"Green Dress with details",
        price:"$40.00",
        discount:"$60.00"
    },
    {
        productImage:"/product4.png.webp",
        productName:"Green Dress with details",
        price:"$40.00",
        discount:"$60.00"
    },
    {
        productImage:"/product5.png.webp",
        productName:"Green Dress with details",
        price:"$40.00",
        discount:"$60.00"
    },
    {
        productImage:"/product6.png.webp",
        productName:"Green Dress with details",
        price:"$40.00",
        discount:"$60.00"
    },
]
function Products() {
  return (
    <div className='mainWidth flex flex-col gap-15'>
        <div className="productsCon max-[546px]:flex-col max-[546px]:items-start max-[546px]:gap-4 flex justify-between border-b-2 items-end pb-7 border-[#e8e8e8]">
            <h1 className='text-5xl font-semibold font-playfair'>Latest Products</h1>
            <ul className='flex gap-9'>
                {productLinks.map((product)=>(
                    <li><a className='text-[#8f8f96]' href="">{product}</a></li>
                ))}
            </ul>
        </div>
        <div className="products flex flex-wrap justify-between max-[822px]:justify-center">
            {products.map((mereProducts)=>(
                <div className="product mb-10 flex flex-col gap-4">
                    <img src={mereProducts.productImage} alt="" />
                    <div className="productCon flex flex-col items-center gap-3">
                        <div className="rating flex">
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                        </div>
                        <h3 className='font-medium font-playfair'>{mereProducts.productName}</h3>
                        <div className="pricing flex gap-4 font-medium">
                            <p>{mereProducts.price}</p>
                            <p className='text-[#ff003c] line-through'>{mereProducts.discount}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products