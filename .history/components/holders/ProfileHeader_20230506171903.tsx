import React from 'react'
import SearchBar from '../Misc/SearchBar'
import AddNew from '../Misc/AddButton'
import { BsFillBellFill } from 'react-icons/bs'



type ImageWrapperProp = {
    ImageWrapperStyle?: string
}
type ProfileHeaderProps = {
    handleClick?: React.MouseEventHandler
    children: React.ReactNode

}
export const ImageWrapper = ({ ImageWrapperStyle }: ImageWrapperProp) => {
    return (
        <>
            <div className={` ${ImageWrapperStyle} cursor-pointer  h-5 w-5 lg:h-8 lg:w-8 overflow-hidden rounded-full bg-black `}>
                <img src='./profile.jpg' alt="" className='object-center ' />
            </div>
        </>
    )
}

// {children}

export default function ProfileHeader({ handleClick, children }: ProfileHeaderProps) {

    const count = 0

    return (
        <>
            <section className='flex items-center justify-between relative w-full'>
                <div className="left w-1/2 flex items-center space-x-3">
                    <SearchBar />
                    {children}
                </div>

                {/* right */}
                <div className="right flex  items-center space-x-3">

                    <span className='relative group'>
                        <BsFillBellFill className=" cursor-pointer  text-md lg:text-2xl text-gray-300 rotate-[25deg] group-hover:text-gray-400" />
                        <span className=" cursor-pointer absolute -top-1 -right-1  lg:-top-2 lg:-right-2 text-white border-2 border-white  bg-red-400  group-hover:bg-red-600 rounded-full lg:h-5 lg:w-5  flex items-center  justify-center">
                            {count}
                        </span>
                    </span>


                    <ImageWrapper ImageWrapperStyle='' />
                </div>
            </section>
        </>
    )
}
