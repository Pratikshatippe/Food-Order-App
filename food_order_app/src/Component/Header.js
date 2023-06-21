import './Header.css';
import { LOGO_URL } from '../Utils/config';

const Header = () =>{
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
            </ul>
        </div>
    </div>
)
}

export default Header;