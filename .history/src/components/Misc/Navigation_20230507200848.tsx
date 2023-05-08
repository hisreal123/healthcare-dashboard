import { Link, Outlet } from "react-router-dom";
import { list } from "../../data/Links";

export async function loader(){
    const List  = await getList()
    return{ list }
}


export default function Navigation() {

    return (
        <>
            <section className="flex space-x-4 -z-10">
                <div id="sidebar" className="  h-screen shadow-xl group">
                    <div className="px-4 ">

                        {/* logo */}
                        <div >
                            <h1 className="py-5 text-[#5282FB] font-bold">Healthcare</h1>
                        </div>

                        {/* nav */}
                        <nav className="relative pr-5 ">
                            <ul className="relative">
                                {list.map((list, index) => {
                                    return (
                                        <li key={index} className="flex space-x-2 items-center py-3 last:border-t ">
                                            <span className="text-gray-200/70 text-md ">{list.icon}</span>
                                            <Link to={`./${list.link}`} className="focus:text-[#5282FB] ">{list.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id="detail" className="relative w-full"><Outlet /></div>
            </section>
        </>
    );
}