import { Outlet } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <section className="flex">

                <div id="sidebar" className=" w-1/6 ">
                  
                  
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