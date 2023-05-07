import React from 'react'
import 
type AddButtonProps = { btnStyle: string, title: string }


export default function AddNew({ btnStyle, title }: AddButtonProps) {
    return (
        <button type='button' className={`${btnStyle} `}>
            
            {title}
        </button>
    )
} 
