import React from 'react'
import SearchBar from '../Misc/SearchBar'
import { BsFillBellFill } from 'react-icons/bs'

export default function ProfileHeader() {
    return (
        <>
            <section className='flex items-center justify-between relative w-full'>

                <SearchBar />

                <div className="right flex  items-center space-x-3">
                    <span>
                        <BsFillBellFill />
                    </span>

                    <div className=" h-5 w-7 overflow-hidden rounded-full bg-black ">
                        <img src='./profile.jpg' alt="" className='object-center ' />
                    </div>
                </div>
            </section>
        </>
    )
}
