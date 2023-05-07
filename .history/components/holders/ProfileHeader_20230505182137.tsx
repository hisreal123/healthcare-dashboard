import React from 'react'
import SearchBar from '../Misc/SearchBar'
import { BsFillBellFill } from 'react-icons/bs'



type Image
export const ImageWrapper = ({ ImageWrapperStyle }: String) => {
    return (
        <>
            <div className={` ${ImageWrapperStyle} cursor-pointer h-6 w-6 overflow-hidden rounded-full bg-black hover:h-6 hover:w-6`}>
                <img src='./profile.jpg' alt="" className='object-center ' />
            </div>
        </>
    )
}


export default function ProfileHeader() {

    const count = 0
    return (
        <>
            <section className='flex items-center justify-between relative w-full'>

                <SearchBar />

                <div className="right flex  items-center space-x-3">

                    <span className='relative group'>
                        <BsFillBellFill className=" cursor-pointer text-xl text-gray-300 rotate-[25deg] group-hover:text-gray-400" />
                        <span className=" cursor-pointer absolute -top-1 -right-1 text-xs text-white border-2 border-white  bg-red-400  group-hover:bg-red-600 rounded-full h-4 w-4  flex items-center  justify-center">
                            {count}
                        </span>
                    </span>


                    <ImageWrapper />
                </div>
            </section>
        </>
    )
}
