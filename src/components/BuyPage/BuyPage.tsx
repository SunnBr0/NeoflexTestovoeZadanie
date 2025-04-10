import React from "react";
import Footer from "../HomePage/Footer";
import Navigate from "../HomePage/Navigate";
import MainBuy from "./MainBuy";
function buyPage() {
  if (sessionStorage.length === 0) {
        sessionStorage.setItem("deviceClickCounts", JSON.stringify([]));
  }
  return (
    <div>
      <div className="devPage">
        <Navigate />
        <MainBuy />
        <Footer />
      </div>
    </div>
  );
}

export default buyPage;
