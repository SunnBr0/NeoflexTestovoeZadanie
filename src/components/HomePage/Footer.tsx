import React from "react";
import "../../style/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="divFooter">
        <div className="textFooter">QPICK</div>
        <div className="listOfTextFooter">
          <span>Избранное</span>
          <span>Корзина</span>
          <span>Конкакты</span>
        </div>
        <div className="servicetTextLangFooter">
          <span>Условия сервиса</span>
          <div className="langIconText">
            <img src="./assets/Lang.svg" alt="" />
            <span>Рус</span>
            <span>Eng</span>
          </div>
        </div>
        <div className="iconSocialNetworkFooter">
          <img className="iconVk" src="./assets/VK.svg" alt="" />
          <img className="iconTelegram" src="./assets/Telegram.svg" alt="" />
          <img className="iconWhatsapp" src="./assets/Whatsapp.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
