export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/home">Your Name</a>
                        </li>
                        <li>
                            <a href="/home">Your Friend</a>
                        </li>
                        <li>
                            <a href='./home'>Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}