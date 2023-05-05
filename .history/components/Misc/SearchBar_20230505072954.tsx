import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}
export default function SearchBar({ SearchStyle }: SearchProps) {


    const handleFormSearch = (e)
    return (
        <>
            <div className="search flex rounded-3xl overflow-hidden border items-center  w-1/2 ">
                <form className='flex items-center' onSubmit={handleFormSearch}>
                    <span className='px-3 relative'>
                        <AiOutlineSearch className="text-gray-300" />
                    </span>
                    <input
                        type="text"
                        placeholder='search'
                        className={`${SearchStyle}  outline-none w-full py-2 pl-3 `}
                        aria-expanded
                    />
                </form>
            </div>
        </>
    )
}
