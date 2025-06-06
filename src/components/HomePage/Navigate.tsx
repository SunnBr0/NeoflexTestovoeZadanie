import React, { useEffect, useState } from "react";
import "../../style/Navigate.css";
interface Device {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  discountPrice?: number;
}
const Navigate: React.FC = () => {
  // на будущее,если лайки реализовывать
  const [likes, setLikes] = useState(0);
  const [valueBuy, setValueBuy] = useState(0);
  const storedData = sessionStorage.getItem("deviceClickCounts");
  useEffect(() => {
    let sumCount = 0;
    if (storedData) {
      const parsedData: Array<[Device, number]> = JSON.parse(storedData);
      parsedData.forEach(([device, count]) => {
        sumCount += count;
      });
      
    }
    setValueBuy(sumCount);
  },[storedData]);
  

  return (
    <div className="header">
      <div className="navigate">
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="nameBrandText">QPICK</span>
        </a>
        <div className="containerIconFavouritesBay">
          <div className="iconFavourites">
            <img
              className="iconFavouritesPart"
              src="./assets/Favourites.svg"
              alt=""
            />
            {likes > 0 && (
              <>
                <img
                  className="iconCircleFavouritesPart"
                  src="./assets/Circle.svg"
                  alt=""
                />
                <span className="countFavouritesPart">{likes}</span>
              </>
            )}
          </div>
          <div className="iconBay">
            <a href="buy">
              <img className="iconBayPart" src="./assets/Bay.svg" alt="" />
            </a>
            {valueBuy > 0 && (
              <>
                <img
                  className="iconCircleBayPart"
                  src="./assets/Circle.svg"
                  alt=""
                />
                <span className="countBayPart">{valueBuy}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
