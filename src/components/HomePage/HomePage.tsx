import React, { createContext, useState } from "react";
import Navigate from "./Navigate";
// import Main from './components/Main'
import Footer from "./Footer";
import MainDeviceList from "./MainDeviceList";
// import Main from "./Main";
import "../../style/HomePage.css";

// const ValueBuyContext = createContext(0)
const HomePage : React.FC = () => {
  // const [buyCount, setBuyCount] = useState(0);
  return (
    // <ValueBuyContext.Provider >
    <div className="devPage">
      {/* <Main /> */}
      {/* <Navigate buyCount={buyCount}/>
      <Main setBuyCount={setBuyCount}/>
      <Footer /> */}
      <Navigate />
      <MainDeviceList />
      <Footer />
    </div>
    // {/* </ValueBuyContext.Provider> */}
  );
};

export default HomePage;
