import React from "react";
import "../../style/MainBuy.css";
import ItemBuyDevice from "./ItemBuyDevice";
function MainBuy() {
  return (
    <>
      <div className="mainDevice">
        <span className="nameDevice">Корзина</span>
        <div className="containerItemsDeviceAnd">
          <div className="containerItemsDevice">
            <ItemBuyDevice />
            <ItemBuyDevice />
          </div>
          <div className="containerFinalPrice">
            <div className="cart"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBuy;
