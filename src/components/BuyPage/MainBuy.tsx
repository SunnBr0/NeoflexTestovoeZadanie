import React from "react";
import "../../style/MainBuy.css";
import ItemBuyDevice from "./ItemBuyDevice";
function MainBuy() {
  return (
    <>
      <div className="mainDevice">
        <span className="nameDevice">Корзина</span>
        <ItemBuyDevice/>

      </div>
    </>
  );
}

export default MainBuy;
