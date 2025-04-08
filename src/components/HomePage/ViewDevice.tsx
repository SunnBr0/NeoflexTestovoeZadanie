import React, { createContext, useContext, useState } from "react";
import { headPhones } from "../../data/dataDevice";
import "../../style/ViewDevice.css";
import { ValueClick } from "../../App";

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
  const { handleClickCount }: any = useContext(ValueClick);
  return (
    <>
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
              <button
                className="bayDevice"
                onClick={() => handleClickCount("buy", device.id)}
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { ViewDevice };
