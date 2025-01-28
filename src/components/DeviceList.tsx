import React from 'react';
import { dataDevice } from '../data/dataDevice';
import "../style/DeviceList.css"
interface Device {
  img: string;
  title: string;
  price: number;
  rate: number;
}

const DeviceList: React.FC = () => {

  return (
    // <div className='containersItemDevice'>
    <>
      {dataDevice.map((device: Device, index: number) => (
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
    // </div>
  );
};

export default DeviceList;
