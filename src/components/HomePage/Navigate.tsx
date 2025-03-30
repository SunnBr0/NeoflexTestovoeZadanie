import React, { useEffect, useState } from "react";
import "../../style/Navigate.css"

// let buyValue: number = 0;
interface BuyCount {
  buyCount: number;
}
const  Navigate:React.FC<BuyCount> =({buyCount})=>{
  let likes: number = 0;
  // let [countValue,setCountValue] = useState(0);
  // countValueSet(4);
  // buyValue = countValue;
  // console.log(count)
  // sessionStorage.clear()
  // countValueSet(Number(count))

  // useEffect(()=>{
  //   let count : string|null = sessionStorage.getItem("sendDataProduct");
  //   if (count !== null) {
  //     setCountValue(Number(count));
  //   }
  //   // buyValue = Number(count)
  // })

  // function test(){
  //   setCountValue(++buyValue)
  // }

  return (
    <div className="header">
      <div className="navigate">
        <span className="nameBrandText" >QPICK</span>
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
            {buyCount > 0 ?
              <>
                <img className="iconCircleBayPart" src="./assets/Circle.svg" alt="" />
                <span className="countBayPart">{buyCount}</span>
              </> : <></>
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default Navigate;