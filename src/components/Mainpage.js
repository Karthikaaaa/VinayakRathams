import React from "react";
import Header from "./Header";
import "../styles/MainPage.css";
import {ApplicationDetail} from '../Models/Metadata';
import Cards from './Cards';
import Dialog from './Dialog'

const MainPage = () => {
    const [onclickDialog, setOnclickDialog] = React.useState(false);
    const [valueState, setValueState] = React.useState({});
    const handleOnclick = async(e, value) => {
        // e.preventDefault();
        await setValueState(value)
        await setOnclickDialog(true);
    }
return (
    <React.Fragment>
        <div className="mainDiv">
            <Header />
        
        <div>
            <div className="productDiv">
                Product Details
            </div>
            <br />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="cardsDiv">
                {
                    ApplicationDetail.map((value, index) => {
                        return <div key={index} onClick={(e) => handleOnclick(e, value)}><Cards {...value} /></div>
                    })
                }
            </div>
            
        </div>
        <br />
        <div className="contactDiv">Contact us on 9597508606</div>
        <br />
        <div>We are here to make your events a memorable one!</div>
        <div>Wishing you all success!!</div>
        </div>
        {
            onclickDialog && <div><Dialog {...setOnclickDialog} {...onclickDialog} {...valueState} /></div>
        }
    {/* <div>@copywrite 2023 belongs to Vinayak Ratham's and events</div> */}
    </React.Fragment>
)
}
export default MainPage