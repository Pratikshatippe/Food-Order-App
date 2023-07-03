//import './Header.css';
import { LOGO_URL } from '../Utils/config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    const [loginButton, setLoginButton] = useState("Login");
    console.log("header");

    const loginHandler = () =>{
        loginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login");
    }
    useEffect(()=>{
        console.log("inside useEffect hook");
    },[loginButton])
return(
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 text-white">
    <div className="header flex justify-between">
        <div className="logo w-36 p-3">
            <img alt="header-logo-img" className="header-logo-img" src={LOGO_URL}></img>
        </div>
        <div className="nav-item m-7">
            <ul className='flex'>
                <li className='p-2 text-3xl'><Link to="/" className='text-link'>Home</Link></li>
                <li className='p-2 text-3xl'><Link to="/about" className='text-link'>About Us</Link></li>
                <li className='p-2 text-3xl'><Link to="/contact" className='text-link'>Contact Us</Link></li>
                <li className='p-2 text-3xl'><Link to="/grocery" className='text-link'>Grocery</Link></li>
                <li className='p-2 text-3xl'>Cart</li>
                <button className='login p-2 text-2xl bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={loginHandler}>{loginButton}</button>
            </ul>
        </div>
    </div>
    </nav>
)
}

export default Header;