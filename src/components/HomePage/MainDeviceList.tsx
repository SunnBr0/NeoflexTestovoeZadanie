import React from 'react';
import { headPhones, wirelessHeadPhone, devicesItems } from '../../data/dataDevice';
import {ViewDevice} from './ViewDevice';
import "../../style/MainDeviceList.css"
import "../../style/Main.css"



const MainDeviceList: React.FC = () => {
  return (
    <div className="devMain">
      {
        Object.entries(devicesItems).map(([category, devices],index) => (
          <div key={index} className="mainDevice">
            <span className="textCategory">{category}</span>
            <div className='containerDevice'>
              <ViewDevice devices={devices}/>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default MainDeviceList;
