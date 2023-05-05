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

                <span></span>
            </div>
        </div>
    )
}
