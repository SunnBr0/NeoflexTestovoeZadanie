import React, { createContext, useState } from "react";
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
    console.log(arrProduct);

    let productExists: boolean = false;
    for (let i = 0; i < arrProduct.length; i++) {
      if (arrProduct[i].id === tempId) {
        ++arrProduct[i].count;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      arrProduct.push(itemDevice);
    }
    tempId = itemDevice.id;
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [buttonType]: prevCounts[buttonType] + 1,
    }));
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
