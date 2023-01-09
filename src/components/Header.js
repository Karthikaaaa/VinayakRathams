import React from "react";
import logo from "../Assets/logo.jpeg"
import "../styles/Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return(
        <React.Fragment>
            <div className="rightAlign">
                <AccountCircleIcon />
            </div>
            <div className="headerDiv">
                <img src={logo} className="vinayakLogo" alt="logo" />
                <div>
                <h3>
                    Vinayak Ratham's and Events
                </h3>
                <div>
                    Vinayak Ratham's and Events is an event management company since 2010, We offer Chariot, Horses, Elephant, Pallakku, Lighting Umbrella, Chendamelam, Kathakali, welcome dances for all kind of functions.
                </div>
                <div className="links">
                    <a href="https://www.youtube.com/@vinayakrathams5685" target="_blank">Vinayak Ratham's YouTube Channel</a>
                    <a href="https://instagram.com/vinayak_rathams?igshid=YmMyMTA2M2Y=" target="_blank">Vinayak Ratham's Instagram Page</a>
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