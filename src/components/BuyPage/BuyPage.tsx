import React from "react";
import Footer from '../HomePage/Footer';
import "../../style/BuyPage.css"
import Navigate from "../HomePage/Navigate";
import MainBuy from "./MainBuy";
function buyPage() {
    return (
        <div>
            {/* <div className="containerFooter"> */}
            <Navigate/>
            <MainBuy/>
            <Footer />
            {/* </div> */}
        </div>
    );
}

export default buyPage;