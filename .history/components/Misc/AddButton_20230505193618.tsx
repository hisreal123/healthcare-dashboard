import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

type AddButtonProps = { btnStyle?: string, title: string }


export default function AddNew({ btnStyle, title }: AddButtonProps) {
    return (
        <button
            type='button'
            className={`${btnStyle} flex space-x-2 items-center rounded-full bg-[#5282FB] hover:bg-[#3060db] text-white  p-1 lg:p-2 `}
        >
            <AiOutlinePlus className="text-xs lg:text-md " />
            <span className=' text-xs lg:text-md '>{title}</span>
        </button>
    )
} 
