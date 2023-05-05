import { Outlet } from "react-router-dom";

export default function Navigation() {

    const logo = <svg width="142" height="30" viewBox="0 0 142 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><rect width="142" height="30" fill="url(#pattern0)" /><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink: href="#image0_2524_3340" transform="scale(0.00352113 0.016129)" /></pattern><image id="image0_2524_3340" width="310" height="62" xlink: href="data:image/png;base64,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" /></defs></svg>

    return (
        <>
            <section className="flex">

                <div id="sidebar" className=" w-1/6 ">

                    {/* logo */}
                    <div>
                        <img src={logo} alt="" />

                        <h1>Healthcare</h1>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li>
                                <a href="/appointment">Appointment</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detail"><Outlet /></div>
            </section>
        </>
    );
}