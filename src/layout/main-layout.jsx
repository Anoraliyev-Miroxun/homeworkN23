import { Outlet,Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const MainLayout = () => {
    const token = Cookies.get("token");
    if (!token) {
        return <Navigate to={"/auth"} />;
    }

    return (
        <>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    )
}