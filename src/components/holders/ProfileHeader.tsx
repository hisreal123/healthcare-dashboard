import {Link} from "react-router-dom";

type ImageWrapperProp = {
    ImageWrapperStyle?: string
    propsImga?: any
}

// type ProfileHeaderProps = {
//     handleClick?: React.MouseEventHandler
//     children?: React.ReactNode
//
// }
export const ImageWrapper = ({ ImageWrapperStyle, propsImga }: ImageWrapperProp) => {
    return (
        <>
            <div className={` ${ImageWrapperStyle} cursor-pointer  h-5 w-5  overflow-hidden rounded-full bg-black `}>
                <img src={propsImga} alt="" className='object-center ' />
            </div>
        </>
    )
}

export default function ProfileHeader() : JSX.Element {
    return (
        <>
            <section className='flex relative w-full bg-white border-b py-3 mb-2'>
                <div>
                    <h1 className="">
                        <Link to='/' className=' px-2 text-[#5282FB] font-bold'>
                            Healthcare
                        </Link>
                    </h1>
                </div>
            </section>
        </>
    )
}
