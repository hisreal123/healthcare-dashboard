import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}
export default function SearchBar({ SearchStyle }: SearchProps) {

    return (
        <>
            <div className="search flex rounded-3xl border items-center bg-red-300 w-1/2">
                <span className='px-3'>
                    <AiOutlineSearch className="" />
                </span>
                <input
                    type="text"
                    placeholder='search'
                    className={`${SearchStyle}   border-none outline-none py-2 w-full pl-2 `}
                    aria-expanded
                />
            </div>
        </>
    )
}
