import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchStyle?: string
}

export default function SearchBar({ SearchStyle }: SearchProps) {
    const [name, setName] = React.useState('');



    const handleSearchClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        alert('Submitted !!')
        
    }

    const handleFormSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Submitted !!')

        setName('')
    }
    return (
        <>
            <div className="search flex rounded-3xl overflow-hidden border items-center  ">
                <form className='flex items-center' onSubmit={handleFormSearch}>
                    <span className='px-3 relative'>
                        <AiOutlineSearch className="text-gray-300" onClick={handleSearchClicked} />
                    </span>
                    <input
                        type="text"
                        placeholder='search'
                        className={`${SearchStyle}  outline-none w-full py-2 pl-3 `}
                        aria-expanded
                        value={name}
                        onChange={handleSearchClicked}
                    />
                </form>
            </div>
        </>
    )
}
