import React from 'react'

type AddButtonProps = { btnStyle: string, title: string }


export default function Add({ btnStyle, title }: AddButtonProps) {
    return (
        <button type='button' className={`${btnStyle} `}>
            {title}
        </button>
    )
} 
