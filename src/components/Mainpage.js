import React from "react";
import logo from '../logo.svg';
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
        console.log("onclick",onclickDialog,valueState);
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
            {/* <ChariotCard />
            <PallakkuCard />
            <UmbrellaCard />
            <HorseCard />
            <ElephantCard />
            <ChandaiCard />
            <BandCard />
            <KathakaliCard />
            <KavadiCard /> */}
            </div>
            
        </div>
        </div>
        {
            onclickDialog && <div><Dialog {...valueState} /></div>
        }

    </React.Fragment>
)
}
export default MainPage