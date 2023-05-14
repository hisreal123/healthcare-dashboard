import { Link } from "react-router-dom";
import { list } from "../../data/Links";

export default function Navigation() {
  return (
    <>
      <section className="shadow-xl pt-32">
        <aside id="sidebar" className="group ">
          <div className="warp relative h-full group-hover:w-full transition ease-in-out delay-150 ">
            {/* nav */}
            <nav className="relative h-full">
              <ul className="flex flex-col relative h-screen items-start group">
                {list.map((list , index) => {
                  return (
                    <li key={index} className=" py-3 px-2 flex items-center group-hover:space-x-2">
                      <span className="text-gray-500 group-hover:text-gray-600 text-md hover:cursor-pointer text-xl ">{list.icon}</span>
                      <Link to={`${list.link}`} className="focus:text-[#5282FB`] hidden group-hover:block scale-x-50 group-hover:scale-x-105 transition-all ">{list.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </aside>

      

      </section>
    </>
  )
}