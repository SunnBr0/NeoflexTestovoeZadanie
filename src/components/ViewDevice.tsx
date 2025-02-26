import React from 'react';
import { headPhones } from '../data/dataDevice';
import "../style/ViewDevice.css"
interface Device {
  img: string;
  title: string;
  price: number;
  rate: number;
}
interface DeviceListProps {
  devices: Device[];
}
const ViewDevice: React.FC<DeviceListProps> = ({ devices }) => {

  return (
    // <div className='containersItemDevice'>
    <>
      {devices.map((device: Device, index: number) => (
        <div key={index}className='itemDevice'>
          <img src={(device.img)} alt={device.title} />
          <div className='infoDevice'>
            <div className='namePriceDevice'>
              <span className='nameDevice'>{device.title}</span>
              <div className='infoPriceDevice'>
                {index === 0 ?
                  <><span className='currentPriceDevice'>{device.price} ₽</span><span className='earlyPriceDevice'>{device.price} ₽</span></>
                  : <span className='currentPriceDevice'>{device.price} ₽</span>}
              </div>
            </div>
            <div className='rateBayDevice'>
              <div className='blockRateDevice'>
                <img src="./assets/star.png" alt="" />
                <span className='rateDevice'>{device.rate}</span>
              </div>
              <span className='bayDevice'>Купить</span>
            </div>
          </div>
        </div>
      ))}
      </>
  );
};

export default ViewDevice;
