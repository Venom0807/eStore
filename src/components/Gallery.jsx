import React from 'react'
const gallery = ["/gallery1.jpg.webp","/gallery2.jpg.webp","/gallery3.jpg.webp","/gallery4.jpg.webp","/gallery5.jpg.webp",]
function Gallery() {
  return (
    <div className='h-[50vh] max-[723px]:h-[2000px]'>
    <div className='flex justify-center max-[723px]:flex-wrap'>
        {gallery.map((gallery)=>(
            <div className="image">
                <img src={gallery} alt="" />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Gallery