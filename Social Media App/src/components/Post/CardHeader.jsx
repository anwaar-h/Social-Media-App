import React from 'react'
import userImg from "/src/assets/userImg.jpg"

export default function CardHeader({avatar,header,subHeader}) {
    return (
    <div className="flex">
        <img onError={(e) => e.target.src = userImg} className=" rounded-full w-10 h-10 mr-3" src={avatar} alt="true" />
    <div>    
        <h3 className="text-md font-semibold ">{header}</h3>
        <p className="text-xs text-gray-500">{subHeader}</p>
    </div>
    </div>  )
}
