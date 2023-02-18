import React from "react";
import logo from "../Assets/logo.jpeg"
import instaLogo from "../Assets/InstaLogo.jpg"
import youTube from "../Assets/youTube.jpg"
import whatsapp from "../Assets/whatsapp.png"
import "../styles/Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return(
        <React.Fragment>
            {/* <div className="rightAlign">
                <AccountCircleIcon />
            </div> */}
            <div className="headerDiv">
                <img src={logo} className="vinayakLogo" alt="logo" />
                <div>
                <h3>
                    Vinayak Ratham's and Events
                </h3>
                <div className="headerContent">
                    Vinayak Ratham's and Events is an event management company since 2010, We offer Chariot, Horses, Elephant, Pallakku, Lighting Umbrella, Chendamelam, Kathakali, welcome dances for all kind of functions.
                </div>
                <div className="links">
                     <a href="https://wa.me/message/ERJKCEH7IPKCH1"><img src={whatsapp} className="instaLogo" alt="Whatsapp" /></a>
                     <a href="https://www.youtube.com/@vinayakrathams5685" target="_blank"><img src={youTube} className="youTubeLogo" alt="YouTube" /></a>
                    <a href="https://instagram.com/vinayak_rathams?igshid=YmMyMTA2M2Y=" target="_blank"><img src={instaLogo} className="instaLogo" alt="Instagram" /></a>
                    <br />                    
                </div>
                <div className="contactDiv">
                Contact: 9597508606, 8903970999
                </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Header;