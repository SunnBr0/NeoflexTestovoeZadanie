import React from "react";
import "../style/Navigate.css"

function Navigate() {
  return (
    <div className="header">
      <div className="navigate">
        <span className="nameBrandText">QPICK</span>
        <div className="containerIconFavouritesBay">
          <div className="iconFavourites">
            <img className="iconFavouritesPart" src="./assets/Favourites.svg" alt="" />
            {/* <img className="iconCircleFavouritesPart" src="./assets/Circle.svg" alt="" /> */}
            {/* <span className="countFavouritesPart">10</span> */}
          </div>
          <div className="iconBay">

            <img className="iconBayPart" src="./assets/Bay.svg" alt="" />
            {/* <img className="iconCircleBayPart" src="./assets/Circle.svg" alt="" /> */}
            {/* <span className="countBayPart">1</span> */}
          </div>
        </div>
        {/* <div className="iconLike"></div>
        <div className="iconShoppingCart"></div> */}
      </div>
    </div>
  );
}

export default Navigate;