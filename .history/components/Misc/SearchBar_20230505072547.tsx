import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}
export default function SearchBar({ SearchStyle }: SearchProps) {

    return (
        <>
            <div className="search flex rounded-3xl  border items-center  w-1/2 ">
                <span className='px-3 bg-red-200 h-full relative'>
                    <AiOutlineSearch className="" />
                </span>
                <input
                    type="text"
                    placeholder='search'
                    className={`${SearchStyle}   border-none outline-none w-full  pl-3 `}
                    aria-expanded
                />
            </div>
        </>
    )
}
