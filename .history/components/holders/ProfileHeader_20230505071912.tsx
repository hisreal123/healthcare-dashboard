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

                    <span className='relative group'>
                        <BsFillBellFill className="text-lg text-gray-300 rotate-[25deg] group-hover:text-gray-400" />
                        <span className="absolute -top-1 -right-1 text-xs text-white border-2 border-white  bg-red-400  group-hover:bg-red-600 rounded-full h-4 w-4  flex items-center  justify-center">
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
