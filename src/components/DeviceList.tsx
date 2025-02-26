import React from 'react';
import { headPhones, wirelessHeadPhone, devicesItems } from '../data/dataDevice';
import ViewDevice from './ViewDevice';
import "../style/DeviceList.css"

const DeviceList: React.FC = () => {
  return (
    <>
      {
        Object.entries(devicesItems).map(([category, devices]) => (
          <div className="mainDevice">
            <span className="textCategory">{category}</span>
            <div className='containerDevice'>
              <ViewDevice devices={devices} />
            </div>
          </div>
        ))
      }
    </>
  );
};

export default DeviceList;
