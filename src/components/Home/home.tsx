import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router-dom';
import './home.css';
export default function Home() {
    return (
        <div className='header--container'>
            <Header />
            <div className='main-content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
