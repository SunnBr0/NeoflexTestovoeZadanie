import React from "react";
import "../style/Navigate.css"

function Navigate() {
  let likes: number = 0;
  let buyValue: number = 0;
  return (
    <div className="header">
      <div className="navigate">
        <span className="nameBrandText">QPICK</span>
        <div className="containerIconFavouritesBay">
          <div className="iconFavourites">
            <img className="iconFavouritesPart" src="./assets/Favourites.svg" alt="" />
            {likes > 0 ?
              <>
                <img className="iconCircleFavouritesPart" src="./assets/Circle.svg" alt="" />
                <span className="countFavouritesPart">{likes}</span>
              </> : <></>
            }
          </div>
          <div className="iconBay">
            <img className="iconBayPart" src="./assets/Bay.svg" alt="" />
            {buyValue > 0 ?
              <>
                <img className="iconCircleBayPart" src="./assets/Circle.svg" alt="" />
                <span className="countBayPart">{buyValue}</span>
              </> : <></>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigate;