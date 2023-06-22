import './Header.css';
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
    <div className="header">
        <div className="logo">
            <img alt="header-logo-img" className="header-logo-img" src={LOGO_URL}></img>
        </div>
        <div className="nav-item">
            <ul>
                <li><Link to="/" className='text-link'>Home</Link></li>
                <li><Link to="/about" className='text-link'>About Us</Link></li>
                <li><Link to="/contact" className='text-link'>Contact Us</Link></li>
                <li>Cart</li>
                <button className='login' onClick={loginHandler}>{loginButton}</button>
            </ul>
        </div>
    </div>
)
}

export default Header;