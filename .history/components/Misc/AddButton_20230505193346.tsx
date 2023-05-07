import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

type AddButtonProps = { btnStyle: string, title: string }


export default function AddNew({ btnStyle, title }: AddButtonProps) {
    return (
        <button type='button' className={`${btnStyle} flex items-center `}>
            <AiOutlinePlus className="text-xs lg:text-md " />
            <span className=' text-xm lg:text-md '>{title}</span>
        </button>
    )
} 
