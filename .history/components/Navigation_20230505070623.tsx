import { Outlet } from "react-router-dom";
import { list } from "../src/data/Links";

export default function Navigation() {

    return (
        <>
            <section className="flex space-x-4">
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
                                            <a href={`./${list.link}`} className="focus:text-[#5282FB] ">{list.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}