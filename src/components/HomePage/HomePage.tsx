import React, { createContext, useEffect, useState } from "react";
import Navigate from "./Navigate";
import Footer from "./Footer";
import MainDeviceList from "./MainDeviceList";
import "../../style/HomePage.css";
const HomePage: React.FC = () => {
  return (
    <div className="devPage">
      <Navigate />
      <MainDeviceList />
      <Footer />
    </div>
  );
};

export { HomePage };
