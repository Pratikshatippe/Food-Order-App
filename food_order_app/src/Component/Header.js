import './Header.css';

const Header = () =>{
return(
    <div className="header">
        <div className="logo">
            <img className="header-logo-img" src="https://www.creativefabrica.com/wp-content/uploads/2020/09/04/Smile-Symbol-Food-Logo-Design-Graphics-5283452-1.jpg"></img>
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