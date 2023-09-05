import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const HeaderComponent=()=>{
const [btnName,setBtnName]=useState("Login");
return (
    <div className="header">
        <div className="logo">
            <img className="logo_img" src={LOGO_URL}/>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="btn btn-success login" onClick={()=>{
                    btnName=="Login"?setBtnName("Logout"):setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
)}

export default HeaderComponent;