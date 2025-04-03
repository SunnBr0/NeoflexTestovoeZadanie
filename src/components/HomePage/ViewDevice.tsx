import React, { createContext, useContext, useState } from "react";
import { headPhones } from "../../data/dataDevice";
import "../../style/ViewDevice.css";
import { ValueBuyContext } from "./HomePage";


let countAllProduct: number = 0;
let arrProduct: Array<jsonProduct> = [];
let tempId: number;
let temp: jsonProduct;
let indexDuplicate;
interface Device {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  discountPrice?: number;
}
interface DeviceListProps {
  devices: Device[];
}
interface jsonProduct {
  id: number;
  title: string;
  price: number;
  srcImg: string;
  count: number;
}

const ViewDevice: React.FC<DeviceListProps> = ({ devices }) => {
  // function sendDataProduct(id: number, title: string, price: number, srcImg: string) {
  //   const hash = simpleHash(title,price, srcImg);
  //   let jsonProduct = {
  //     id: hash,
  //     title: title,
  //     price: price,
  //     srcImg: srcImg,
  //     count: 1
  //   };
    // let productExists = false;
    // for (let i = 0; i < arrProduct.length; i++) {
    //   if (arrProduct[i].id === hash) {
    //     ++arrProduct[i].count;
    //     productExists = true;
    //     break;
    //   }
    // }

  //   if (!productExists) {
  //       arrProduct.push(jsonProduct);
  //   }
  //   tempId = jsonProduct.id;
  //   arrProduct.map((item)=>{
  //     countAllProduct+=item.count
  //   })
  //   // setBuyCount(countAllProduct);
  //   countAllProduct = 0
  //   // console.log(jsonProduct);
  //   console.log(arrProduct);
  //   console.log(arrProduct.length);
  // }
  // const valueBuy = useContext()
  // const [ countBuy,setCountBuy] = useState(0)

  const {handleClickCount}:any = useContext(ValueBuyContext);
  return (
    <>
    {/* <ValueBuyContext.Provider value={countBuy}> */}
      {devices.map((device: Device, index: number) => (
        <div key={index} className="itemDevice">
          <img src={device.img} alt={device.title} />
          <div className="infoDevice">
            <div className="namePriceDevice">
              <span className="nameDevice">{device.title}</span>
              <div className="infoPriceDevice">
                {device.discountPrice ? (
                  <>
                    <span className="currentPriceDevice">
                      {device.discountPrice} ₽
                    </span>
                    <span className="earlyPriceDevice">{device.price} ₽</span>
                  </>
                ) : (
                  <span className="currentPriceDevice">{device.price} ₽</span>
                )}
              </div>
            </div>
            <div className="rateBayDevice">
              <div className="blockRateDevice">
                <img src="./assets/star.png" alt="" />
                <span className="rateDevice">{device.rate}</span>
              </div>
              <button className="bayDevice" onClick={()=>handleClickCount("buy",device)}>Купить</button>
            </div>
          </div>
        </div>
      ))}
      {/* </ValueBuyContext.Provider> */}
    </>
  );
};

export {ViewDevice};
