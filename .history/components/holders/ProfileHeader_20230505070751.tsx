import React from 'react'
import SearchBar from '../Misc/SearchBar'
import { BsFillBellFill } from 'react-icons/bs'

export default function ProfileHeader() {
    return (
        <>
            <section className='flex items-center justify-between relative w-full'>

                <SearchBar />

                <div className="left">
                    <span>
                        <BsFillBellFill />
                    </span>

                    <div className=" h-5 w-5  rounded-full bg-black ">
                        {/* <img src='./profile.jpg' alt="" className='relative' /> */}
                    </div>
                </div>
            </section>
        </>
    )
}
