import { Outlet } from "react-router-dom";

export default function Navigation() {


    return (
        <>
            <section className="flex">

                <div id="sidebar" className=" w-1/6 ">

                    {/* logo */}
                    <div>
                        <h1 className="text=[#5282FB]">Healthcare</h1>
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