import React from 'react'

const AddButtonProps = { btnStyle: String, title: String }
export default function AddButton({ btnStyle, title }: AddButtonProp) {
    return (
        <button type='button'>
            {title}
        </button>
    )
} 
