import React, { useContext, useEffect, useState } from "react";
import "../../style/Navigate.css";
import { ValueBuyContext } from "./ViewDevice";

const Navigate: React.FC = () => {
  let likes: number = 1;
  let valueBuy: number = 1;
  let countBuy = useContext(ValueBuyContext)
  // setInterval(()=>{
  //   console.log(countBuy)

  // },1000)
  useEffect(()=>{
    console.log(countBuy)
  },[countBuy])
  return (
    <div className="header">
      <div className="navigate">
        <span className="nameBrandText">QPICK</span>
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
            <img className="iconBayPart" src="./assets/Bay.svg" alt="" />
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
