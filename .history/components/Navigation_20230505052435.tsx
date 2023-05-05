import { Outlet } from "react-router-dom";
import { Home, BarChart2 } from 'react-feather';



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
    },
    {
        id: 3,
        name: 'Doctor',
        link: './doctor',
    },
    {
        id: 4,
        name: 'Department',
        link: './department',
    },
    {
        id: 5,
        name: 'Patient',
        link: './patient',
    },
    {
        id: 6,
        name: 'Payment',
        link: './payment',
    },
]



export default function Navigation() {

    return (
        <>
            <section className="flex px-4">
                <div className="flex flex-col h-screen w-64 bg-gray-900 shadow-lg">
                    <div className="h-16 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">Sidebar</span>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white">
                            <Home className="w-6 h-6 mr-2" />
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white">
                            <BarChart2 className="w-6 h-6 mr-2" />
                            Analytics
                        </a>
                    </div>
                </div>
                In this example, we import the Home and BarChart2 icons from react-feather, and use them instead of the svg elements in the original code. We also add the className prop to the icons to specify their size and margin.








                <div id="sidebar" className=" w-1/6 ">

                    {/* logo */}
                    <div >
                        <h1 className="py-5 text-[#5282FB] font-bold">Healthcare</h1>
                    </div>

                    <nav>
                        <ul>
                            {list.map((list, index) => {
                                return (
                                    <li key={index}>
                                        <a href={`./${list.link}`}>{list.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div id="detail"><Outlet /></div>
            </section>
        </>
    );
}