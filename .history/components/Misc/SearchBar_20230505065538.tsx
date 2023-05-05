import React from 'react'


type SearchProps = {
    SearchStyle: string
}
export default function SearchBar({SearchStyle} : SearchProps) {
    
    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder='search'
                    className=""
                    aria-expanded
                />
            </div>
        </>
    )
}
