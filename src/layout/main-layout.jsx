import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
export const MainLayout = () => {
    const token = Cookies.get("token");
    if (!token) {
        return <Navigate to={"/auth"} />;
    }

    return (
        <>
            <header>
                Header
                <Link to={"/home"}>home</Link>
                <Link to={"/home/contact"}>contact</Link>
                <Link to={"/home/about"}>about</Link>

            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    )
}