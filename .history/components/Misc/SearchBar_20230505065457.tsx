import React from 'react'


type SearchProps = {
    SearchStyle: string
}
export default function SearchBar() {
    return (
        <>
            <div className="search">
                <input type="text" placeholder='search' className="" aria-expanded />
            </div>
        </>
    )
}
