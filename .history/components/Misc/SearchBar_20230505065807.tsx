import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}
export default function SearchBar({ SearchStyle }: SearchProps) {

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder='search'
                    className={`${SearchStyle} rounded-3xl border `}
                    aria-expanded
                />
            </div>
        </>
    )
}
