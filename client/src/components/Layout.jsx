/* eslint-disable react/prop-types */
import { LocalizationProvider } from '@mui/x-date-pickers';
import Footer from './Footer';
import Header from './Header';
import './Layout.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return(
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='layout'>
            <Header />
            <main>{children}</main>
        </div>
        {/* <Footer /> */}
        <div className='dev'>
            <Link to='/subscribe'>SUBSCRIBE ✅</Link>
            <Link to='/ai-training-for-realtors'>EBOOK</Link>
            <Link to='/book-a-consultation'>BOOKING</Link>
            <Link to="/checkout">CHECKOUT</Link>
        </div>
        </LocalizationProvider>
        </>
    );
}

export default Layout;