import { Outlet } from "react-router-dom";




const list = [
    {
        id:1
    }
]
export default function Navigation() {

    return (
        <>
            <section className="flex px-4">

                <div id="sidebar" className=" w-1/6 ">

                    {/* logo */}
                    <div >
                        <h1 className="py-5 text-[#5282FB] font-bold">Healthcare</h1>
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