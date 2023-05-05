import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}
export default function SearchBar({ SearchStyle }: SearchProps) {

    return (
        <>
            <div className="search flex rounded-3xl border items-center">
                <span>
                    <AiOutlineSearch />
                </span>
                <input
                    type="text"
                    placeholder='search'
                    className={`${SearchStyle}  `}
                    aria-expanded
                />
            </div>
        </>
    )
}
