import React, { useState } from 'react';
import { headPhones } from '../../data/dataDevice';
import "../../style/ViewDevice.css"
let countAllProduct: number = 0;
let arrProduct: Array<jsonProduct> = [];
let tempId: number;
let temp: jsonProduct;
let indexDuplicate;
interface Device {
  img: string;
  title: string;
  price: number;
  rate: number;
}
interface DeviceListProps {
  devices: Device[];
  setBuyCount: React.Dispatch<React.SetStateAction<number>>;

}
interface jsonProduct {
  id: number,
  title: string,
  price: number,
  srcImg: string,
  count: number
}

function simpleHash(title: string, price: number, img: string): number {
  // Преобразуем строки в числовые значения
  let hash = 0;
  const data = `${title}${price}${img}`;

  for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      // Простая формула хеширования
      hash = (hash << 5) - hash + charCode;
      hash |= 0; // Преобразуем в 32-битное целое число
  }

  return hash;
}
const ViewDevice: React.FC<DeviceListProps> = ({ devices, setBuyCount }) => {

  function sendDataProduct(id: number, title: string, price: number, srcImg: string) {
    const hash = simpleHash(title,price, srcImg);
    let jsonProduct = {
      id: hash,
      title: title,
      price: price,
      srcImg: srcImg,
      count: 1
    };
    let productExists = false;
    for (let i = 0; i < arrProduct.length; i++) {
      if (arrProduct[i].id === hash) {
        ++arrProduct[i].count;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
        arrProduct.push(jsonProduct);
    }
    tempId = jsonProduct.id;
    arrProduct.map((item)=>{
      countAllProduct+=item.count
    })
    setBuyCount(countAllProduct);
    countAllProduct = 0
    // console.log(jsonProduct);
    console.log(arrProduct);
    console.log(arrProduct.length);
  }

  return (
    <>
      {devices.map((device: Device, index: number) => (
        <div key={index} className='itemDevice'>
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
              <button className='bayDevice' onClick={() => sendDataProduct(index, device.title, device.price, device.img)}>Купить</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewDevice;
