import React, { useContext, useEffect } from "react";
import "../../style/ItemsBuyDevice.css";
import { devicesItems } from "../../data/dataDevice";
import { ValueClick } from "../../App";
let parsedData: Array<[number, number]>;
function ItemsBuyDevice({ setFinalSum }: any) {
  const { handleClickCount }: any = useContext(ValueClick);
  const storedData = sessionStorage.getItem("deviceClickCounts");
  parsedData = storedData?  JSON.parse(storedData):[]
  const calculateTotalSum = () => {
    let total = 0;
    // Пройдем по всем элементам в parsedData (массив типа [deviceId, count])
    parsedData.forEach(([deviceId, count]) => {
      // Проходим по всем категориям в devicesItems
      Object.keys(devicesItems).forEach((category) => {
        // Ищем устройство в текущей категории
        const device = devicesItems[category].find(
          (item) => item.id === deviceId
        );
        if (device) {
          // Если устройство найдено, добавляем его цену к общей сумме
          total += (device.discountPrice || device.price) * count;
        }
      });
    });
    // Обновляем итоговую сумму в родительском компоненте
    setFinalSum(total);
  };

  function handleClickBuy(type: string, id: number) {
    handleClickCount("buy", id);
    parsedData = parsedData
      .map(([currentId, value]): [number, number] => {
        if (currentId === id) {
          if (type === "add") {
            return [currentId, value + 1];
          } else if (type === "remove" && value > 0) {
            return [currentId, value - 1];
          } else if (type === "delete") {
            return [currentId, 0];
          }
        }
        return [currentId, value]; // Возвращаем неизменённую пару
      })
      .filter(
        (item): item is [number, number] => item !== undefined && item[1] > 0
      ); // Фильтруем undefined и те элементы, у которых value <= 0

    sessionStorage.setItem("deviceClickCounts", JSON.stringify(parsedData));
    calculateTotalSum();
  }
  useEffect(() => {
    calculateTotalSum();
  }, []);

  return (
    <>
      {parsedData
        ?.map(([key, values]) => {
          return Object.keys(devicesItems)
            .map((keys) => {
              const value = devicesItems[keys];
              return value
                .map((item) => {
                  if (item.id === key) {
                    return (
                      <div key={item.id} className="itemBuyCart">
                        <div className="itemBuyCartIconFuncButton">
                          <img src={item.img} alt="" />
                          <div className="FuncButton">
                            <button
                              className="Button"
                              onClick={() => handleClickBuy("remove", item.id)}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 0H14V2H0V0Z" fill="white" />
                              </svg>
                            </button>
                            <span>{values}</span>

                            <button
                              className="Button"
                              onClick={() => handleClickBuy("add", item.id)}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.20557 6V0H8.20557V6H14.2056V8H8.20557V14H6.20557V8H0.205566V6H6.20557Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="itemBuyCartInfo">
                          <span className="itemBuyCartText">{item.title}</span>
                          <span className="itemBuyCartPrice">
                            {/* {item.price} ₽ */}
                            {item.discountPrice
                              ? String(item.discountPrice)[0] +
                                " " +
                                String(item.discountPrice).slice(1) +
                                " ₽"
                              : String(item.price)[0] +
                                " " +
                                String(item.price).slice(1) +
                                " ₽"}
                          </span>
                        </div>
                        <div className="itemBuyCarDeletePrice">
                          <button
                            onClick={() => handleClickBuy("delete", item.id)}
                          >
                            <svg
                              width="21"
                              height="17"
                              viewBox="0 0 21 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z"
                                fill="#DF6464"
                              />
                            </svg>
                          </button>
                          <span>
                            {item.discountPrice
                              ? String(item.discountPrice)[0] +
                                " " +
                                String(item.discountPrice).slice(1) +
                                " ₽"
                              : String(item.price)[0] +
                                " " +
                                String(item.price).slice(1) +
                                " ₽"}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })
                .filter((item) => item !== null);
            })
            .flat();
        })
        .flat()}
    </>
  );
}

export default ItemsBuyDevice;
