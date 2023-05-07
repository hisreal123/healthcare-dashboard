import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

type AddButtonProps = { btnStyle: string, title: string }


export default function AddNew({ btnStyle, title }: AddButtonProps) {
    return (
        <button type='button' className={`${btnStyle} flex items-center rounded-full bg-[#5282FB] text-white px-2 `}>
            <AiOutlinePlus className="text-xs lg:text-md " />
            <span className=' text-xs lg:text-md '>{title}</span>
        </button>
    )
} 
