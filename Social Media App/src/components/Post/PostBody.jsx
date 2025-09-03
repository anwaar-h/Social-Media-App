import React from 'react'

export default function PostBody({caption,image}) {
  return (
    <>
        {caption && <p classname="mt-4">{caption}</p>}
        {image && <img src={image} className='w-full h-90 mt-3 object-cover' alt="" />} 
    </> 
)
}
