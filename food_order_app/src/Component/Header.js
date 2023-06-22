import './Header.css';
import { LOGO_URL } from '../Utils/config';
import { useState } from 'react';

const Header = () =>{
    const [loginButton, setLoginButton] = useState("Login");

    const loginHandler = () =>{
        loginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login");
    }
return(
    <div className="header">
        <div className="logo">
            <img className="header-logo-img" src={LOGO_URL}></img>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className='login' onClick={loginHandler}>{loginButton}</button>
            </ul>
        </div>
    </div>
)
}

export default Header;