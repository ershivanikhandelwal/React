import { LOGO_URL } from "../utils/constants";


export const HeaderComponent=()=>(
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
            </ul>
        </div>
    </div>
)

export default HeaderComponent;