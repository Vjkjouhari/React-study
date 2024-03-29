import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header = () =>{
    let [buttoneName, setButtonName] = useState('login')

    return (
        <div className="header">
            <div className="logos">
                <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{  
                        buttoneName == "login" ? setButtonName("logout"): setButtonName("login")
                    }}>{buttoneName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;