import React from 'react'
import SearchBar from '../Misc/SearchBar'
import { BsFillBellFill } from 'react-icons/bs'

export default function ProfileHeader() {
    return (
        <div>
            <SearchBar />

            <div className="left">
                <span>
                    <BsFillBellFill />
                </span>

                <span className="h-5 w-5 overflow-hidden rounded-full ">
                    <img src='./profile.jpg' alt="" className='rela' />
                </span>
            </div>
        </div>
    )
}
