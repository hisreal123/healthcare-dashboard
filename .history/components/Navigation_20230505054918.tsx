import { Outlet } from "react-router-dom";
import { Home, BarChart2 } from 'react-feather';
import { GiStethoscope, GiPerson, GiNurseMale } from 'react-icons/gi'
import { FaWheelchair } from 'react-icons/fa'
import { AiOutlineCreditCard, AiOutlinePieChart } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'

const list = [
    {
        id: 1,
        icon: <AiOutlinePieChart />,
        name: 'Dashboard',
        link: './dashboard',
    },
    {
        id: 2,
        icon: <GiStethoscope />,
        name: 'Appointment',
        link: './Appointment',
    },
    {
        id: 3,
        icon: <GiPerson />,
        name: 'Doctor',
        link: './doctor',
    },
    {
        id: 4,
        icon: <GiNurseMale />,
        name: 'Department',
        link: './department',
    },
    {
        id: 5,
        icon: <FaWheelchair />,
        name: 'Patient',
        link: './patient',
    },
    {
        id: 6,
        icon: <AiOutlineCreditCard />,
        name: 'Payment',
        link: './payment',
    },
    {
        id: 7,
        icon: <BiHelpCircle />,
        name: 'Help',
        link: './help',
    },
]


export default function Navigation() {

    return (
        <>
            <section className="flex px-5 h-screen shadow-xl bg-white">
                <div id="sidebar" className=" first-letter:  ">

                    {/* logo */}
                    <div >
                        <h1 className="py-5 text-[#5282FB] font-bold">Healthcare</h1>
                    </div>

                    {/* nav */}
                    <nav className="relative  pr-5">
                        <ul className="relative">
                            {list.map((list, index) => {
                                return (
                                    <li key={index} className="flex space-x-2 items-center py-3 last:border-t ">
                                        <span className="text-gray-200/70 text-md ">{list.icon}</span>
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