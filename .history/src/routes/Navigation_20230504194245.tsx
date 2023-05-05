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
    },
    {
        id: 2,
        name: 'Doctor',
        link: './do',
    },
    {
        id: 2,
        name: 'Department',
        link: './department',
    },
    {
        id: 2,
        name: 'Patient',
        link: './patient',
    },
    {
        id: 2,
        name: 'Payment',
        link: './payment',
    },
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