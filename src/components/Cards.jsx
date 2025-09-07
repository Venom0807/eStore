import React from 'react'
import { BsBox } from "react-icons/bs";
import { MdLockOpen } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
const cards = [
    {
        icon: BsBox,
        title:"Free Shipping Method",
        text:"aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
    },
    {
        icon: MdLockOpen,
        title:"Secure Payment System",
        text:"aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
    },
    {
        icon: TfiReload,
        title:"Secure Payment System",
        text:"aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.",
    },
]
function Cards() {
  return (
    <div className='mainWidth flex h-[50vh] justify-between items-center flex-wrap max-[898px]:h-max max-[898px]:py-10 max-[598px]:justify-center'>
      {cards.map((card)=>
      {
        const Icon = card.icon
        return(
          <div className='h-[50%] flex flex-col gap-5 max-[898px]:mb-10 '>
            <Icon className='text-5xl' />
            <h3 className='font-medium text-2xl'>{card.title}</h3>
            <p className='w-[25ch] text-xl'>{card.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cards