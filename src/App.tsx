import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import BuyPage from "./components/BuyPage/BuyPage";
import PayCard from "./components/BuyListDevice/PayCard";
interface ClickCounts {
  buy: number;
  like: number;
}
let mapItemDevice = new Map<number, number>();
const ValueClick = createContext({});
function App() {
  const [clickCounts, setClickCounts] = useState<ClickCounts>({
    buy: 0,
    like: 0,
  });
  function handleClickCount(buttonType: keyof ClickCounts, idDevice: number) {
    const storedData = sessionStorage.getItem("deviceClickCounts");
    if (storedData) {
      const parsedData: Array<[number, number]> = JSON.parse(storedData);
      mapItemDevice = new Map(parsedData);

    }
    if (buttonType === "buy") {
      const currentCountItemDevice = mapItemDevice.get(idDevice) || 0;
      mapItemDevice.set(idDevice, currentCountItemDevice + 1);
      const mapData = Array.from(mapItemDevice.entries());
      sessionStorage.setItem("deviceClickCounts", JSON.stringify(mapData));
    }
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [buttonType]: prevCounts[buttonType] + 1,
    }));
  }
  return (
    <ValueClick.Provider value={{ clickCounts, handleClickCount }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/buyListDevice" element={<PayCard />} />
        </Routes>
      </Router>
    </ValueClick.Provider>
  );
}
export { App, ValueClick };
