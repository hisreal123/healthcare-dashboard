import { Outlet } from "react-router-dom";

export default function Navigation() {

    const logo = <svg width="142" height="30" viewBox="0 0 142 30" fill="#5282FB" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><rect width="142" height="30" fill="url(#pattern0)" /><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink: href="#image0_2524_3340" transform="scale(0.00352113 0.016129)" /></pattern><image id="image0_2524_3340" width="310" height="62" ></image></defs></svg>

    return (
        <>
            <section className="flex">

                <div id="sidebar" className=" w-1/6 ">

                    {/* logo */}
                    <div>
                        <p>{logo}</p>
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