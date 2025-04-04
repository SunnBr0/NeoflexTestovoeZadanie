import React, { createContext, useEffect, useState } from "react";
import Navigate from "./Navigate";
import Footer from "./Footer";
import MainDeviceList from "./MainDeviceList";
import "../../style/HomePage.css";

interface ClickCounts {
  buy: number;
  like: number;
}
interface Device {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  discountPrice?: number;
  count: number;
}
let tempId: number;
let arrProduct: Array<Device> = [];
let mapItemDevice = new Map<Object, number>();
const ValueBuyContext = createContext({});
const HomePage: React.FC = () => {
  // const [buyCount, setBuyCount] = useState(0);
  const [clickCounts, setClickCounts] = useState<ClickCounts>({
    buy: 0,
    like: 0,
  });

  function handleClickCount(buttonType: keyof ClickCounts, itemDevice: Device) {
    // itemDevice["count"] =1
    // console.log(itemDevice)
    // let countAllProduct: number = 0;
    // let temp: jsonProduct;
    // let indexDuplicate;
    // console.log(arrProduct);

    // let productExists: boolean = false;
    // for (let i = 0; i < arrProduct.length; i++) {
    //   if (arrProduct[i].id === tempId) {
    //     ++arrProduct[i].count;
    //     productExists = true;
    //     break;
    //   }
    // }
    // if (!productExists) {
    //   arrProduct.push(itemDevice);
    // }
    // tempId = itemDevice.id;
    // map.set(itemDevice,1)
    const storedData = sessionStorage.getItem("deviceClickCounts");
    if (storedData) {
      const parsedData: Array<[Device, number]> = JSON.parse(storedData);

      mapItemDevice = new Map(parsedData);
    }
    if (buttonType === "buy") {
      const currentCountItemDevice = mapItemDevice.get(itemDevice) || 0;
      mapItemDevice.set(itemDevice, currentCountItemDevice + 1);
      const mapData = Array.from(mapItemDevice.entries());
      sessionStorage.setItem("deviceClickCounts", JSON.stringify(mapData));
    }
    // console.log( sessionStorage.getItem('deviceClickCounts') )
    // sessionStorage.setItem('test', String(mapItemDevice));
    // sessionStorage.clear()
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [buttonType]: prevCounts[buttonType] + 1,
    }));
    // window.dispatchEvent(new Event('storage'));

  }

  return (
    <ValueBuyContext.Provider value={{ clickCounts, handleClickCount }}>
      <div className="devPage">
        {/* <Main /> */}
        {/* <Navigate buyCount={buyCount}/>
      <Main setBuyCount={setBuyCount}/>
      <Footer /> */}
        <Navigate />
        <MainDeviceList />
        <Footer />
      </div>
    </ValueBuyContext.Provider>
  );
};

export { HomePage, ValueBuyContext };
