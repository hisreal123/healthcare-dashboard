import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type SearchProps = {
    SearchInputStyle?: string
    mainStyle?: string
    wrapperStyle?: string
    SPlaceholder?  : string
}

export default function SearchBar({ SearchInputStyle, mainStyle, wrapperStyle , SPlaceholder}: SearchProps) {
    const [name, setName] = React.useState('');



    const handleSearchClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleFormSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Submitted !!' + ' ' + name)
        setName('')
    }
    return (
        <>
            <div className={`${wrapperStyle} relative flex  lg:w-[70%] rounded-3xl overflow-hidden border items-center  `}>
                <form className={ `${mainStyle} flex items-center`} onSubmit={handleFormSearch}>
                    <span className='px-3 relative'>
                        <AiOutlineSearch className="text-gray-300" onClick={handleSearchClicked} />
                    </span>
                    <input
                        type="text"
                        placeholder={SPlaceholder || 'search'}
                        className={`${SearchInputStyle}  outline-none w-full py-2 pl-3 `}
                        aria-expanded
                        value={name}
                        onChange={handleSearchClicked}
                    />
                </form>
            </div>
        </>
    )
}
