import React from 'react'
import SearchBar from '../Misc/SearchBar'
import { BsFillBellFill } from 'react-icons/bs'

export default function ProfileHeader() {

    const count = 0
    return (
        <>
            <section className='flex items-center justify-between relative w-full'>

                <SearchBar />

                <div className="right flex  items-center space-x-3">

                    <span className='relative'>
                        <BsFillBellFill className="text-gray-400 rotate-45 " />
                        <span className="absolute -top-1 -right-1 text-xs text-white bg-red-400 rounded-full h-3 w-3  flex items-center  justify-center">
                            {count}
                        </span>
                    </span>


                    <div className=" h-5 w-5 overflow-hidden rounded-full bg-black ">
                        <img src='./profile.jpg' alt="" className='object-center ' />
                    </div>
                </div>
            </section>
        </>
    )
}
