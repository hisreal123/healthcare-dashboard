
import { Fragment } from 'react'
import Navigation from "./Navigation";
import ProfileHeader from '../holders/ProfileHeader'
import { Outlet } from "react-router-dom";

// type LayoutProps = {
//     children?: React.ReactNode
// }

const Layout = () => {

    return (
        <Fragment>

            <ProfileHeader />

            <section className='flex'>

                <Navigation />

                <div id="detail" className="w-full relative mx-auto ml-20 ">
                    <Outlet/>
                </div>
            </section>

        </Fragment>
    )
}

export default Layout