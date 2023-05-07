import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

type AddButtonProps = { btnStyle?: string, title: string, handleClick: any }


export default function AddNew({ btnStyle, title, handleClick }: AddButtonProps) {
    return (
        <button
            type='button'
            className={`${btnStyle} lg:shadow-xl flex space-x-2 items-center rounded-full bg-[#5282FB] hover:bg-[#3060db] text-white  p-1 lg:p-2 `}
            onClick={handleClick}
        >
            <AiOutlinePlus className="text-xs lg:text-md " />
            <span className=' text-xs lg:text-md '>{title}</span>
        </button>
    )
} 
