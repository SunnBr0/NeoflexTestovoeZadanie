import React from "react";
import "../../style/MainBuy.css";
import ItemBuyDevice from "./ItemBuyDevice";
function MainBuy() {
  return (
    <>
    {/* {console.log(sessionStorage.getItem("deviceClickCounts"))} */}
      <div className="mainDevice">
        <span className="nameDevice" style={{marginTop:"29px"}}>Корзина</span>
        <div className="containerItemsDeviceAndPrice">
          <div className="containerItemsDevice">
            {/* <ItemBuyDevice /> */}
            {/* <ItemBuyDevice /> */}
            {/* <ItemBuyDevice /> */}
          </div>
          <div className="containerFinalPrice">
            <div className="cartBlockPrice">
              <div className="infoFinalPrice">
                <span>ИТОГО</span>
                <span>₽ 2 927</span>
              </div>
            </div>
            <button>Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBuy;
