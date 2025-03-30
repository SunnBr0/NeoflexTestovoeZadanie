import React from 'react';
import { headPhones, wirelessHeadPhone, devicesItems } from '../../data/dataDevice';
import ViewDevice from './ViewDevice';
import "../../style/DeviceList.css"
interface MainProps {
    setBuyCount: React.Dispatch<React.SetStateAction<number>>;
}

const DeviceList: React.FC<MainProps> = ({setBuyCount}) => {
  return (
    <>
      {
        Object.entries(devicesItems).map(([category, devices]) => (
          <div className="mainDevice">
            <span className="textCategory">{category}</span>
            <div className='containerDevice'>
              <ViewDevice devices={devices} setBuyCount={setBuyCount}/>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default DeviceList;
