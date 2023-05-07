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
            <div className={` ${ImageWrapperStyle} cursor-pointer  h-5 w-5 lg:h-8 lg:w-8 overflow-hidden rounded-full bg-black hover:h-6 hover:w-6`}>
                <img src='./profile.jpg' alt="" className='object-center ' />
            </div>
        </>
    )
}


export default function ProfileHeader({ handleClick, children }: ProfileHeaderProps) {

    const count = 0

    return (
        <>
            <section className='flex items-center justify-between relative w-full'>

                {/* left */}
            
            </section>
        </>
    )
}
