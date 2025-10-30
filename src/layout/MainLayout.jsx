
import { Outlet,Link } from 'react-router-dom';
import { Header } from './Header/Header';

export const MainLayout=()=>{
    return (
        <>
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        </>
    )
}