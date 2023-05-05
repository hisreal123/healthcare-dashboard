import { Outlet } from "react-router-dom";



const list = [
    {
        id: 1,
        name: 'Dashboard',
        link: './dashboard',
    },
    {
        id: 2,
        name: 'Appointment',
        link: './Appointment',
    }, []
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
                      {list.map((list,))}
                        </ul>
                    </nav>
                </div>
                <div id="detail"><Outlet /></div>
            </section>
        </>
    );
}