import React from 'react'

type AddButtonProps = { btnStyle: string, title: st }


export default function AddButton({ btnStyle, title }: AddButtonProps) {
    return (
        <button type='button'>
            {title}
        </button>
    )
} 
