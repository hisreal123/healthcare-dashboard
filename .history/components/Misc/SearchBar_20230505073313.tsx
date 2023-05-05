import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}

export default function SearchBar({ SearchStyle }: SearchProps) {
    const [name, setName] = React.useState('');

    const handleFormSearch = (e: any) => {
        e.preventDefault()
        console.log(name)

        setName('')
    }
    return (
        <>
            <div className="search flex rounded-3xl overflow-hidden border items-center  w-1/2 ">
                <form className='flex items-center' onSubmit={handleFormSearch}>
                    <span className='px-3 relative'>
                        <AiOutlineSearch className="text-gray-300" onClick=/>
                    </span>
                    <input
                        type="text"
                        placeholder='search'
                        className={`${SearchStyle}  outline-none w-full py-2 pl-3 `}
                        aria-expanded
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </form>
            </div>
        </>
    )
}
