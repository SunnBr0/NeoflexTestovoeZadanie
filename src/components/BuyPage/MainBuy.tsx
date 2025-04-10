import React, { useState } from "react";
import "../../style/MainBuy.css";
import ItemsBuyDevice from "./ItemsBuyDevice";
function MainBuy() {
  const [finalSumDevice,setFinalSumDevice] =  useState(0)
  return (
    <>
      <div className="mainDevice">
        <span className="nameDevice" style={{ marginTop: "29px" }}>
          Корзина
        </span>
        <div className="containerItemsDeviceAndPrice">
          <div className="containerItemsDevice">
            <ItemsBuyDevice setFinalSum={setFinalSumDevice}/>
          </div>
          <div className="containerFinalPrice">
            <div className="cartBlockPrice">
              <div className="infoFinalPrice">
                <span>ИТОГО</span>
                <span>₽ {finalSumDevice}</span>
              </div>
            </div>
            <a href="buyListDevice">
            <button>Перейти к оформлению</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBuy;
