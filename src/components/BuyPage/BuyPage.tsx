import React from "react";
import Footer from '../HomePage/Footer';
import "../../style/BuyPage.css"
import Navigate from "../HomePage/Navigate";
function buyPage() {
    return (
        <div className="buyPage">
            {/* <div className="containerFooter"> */}
            <Navigate/>
            <Footer />
            {/* </div> */}
        </div>
    );
}

export default buyPage;