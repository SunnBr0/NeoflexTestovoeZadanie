import React from "react";
import DeviceList from "./DeviceList";
import "../../style/Main.css"

interface MainProps {
    setBuyCount: React.Dispatch<React.SetStateAction<number>>;
}
const Main: React.FC<MainProps> = ({ setBuyCount }) =>{
    return (
        <div className="devMain">
            <DeviceList setBuyCount={setBuyCount}/>
        </div>
    );
}


export default Main;