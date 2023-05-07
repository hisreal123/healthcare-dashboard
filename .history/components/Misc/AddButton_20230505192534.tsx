import React from 'react'

const AddButtonProps = { btnStyle: String, title: String }
export default function AddButton({ btnStyle, title }: AddButtonProps) {
    return (
        <button type='button'>
            {title}
        </button>
    )
} 