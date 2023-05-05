import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <section>

                <div id="sidebar" className="flex">
                    <h1>Welcome </h1>
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