import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";

const Footer = () =>{
    let [buttoneName, setButtonName] = useState('login')

    return (
        <div className="header">
            <div className="logos">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{  
                        buttoneName == "login" ? setButtonName("logout"): setButtonName("login")
                    }}>{buttoneName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Footer;