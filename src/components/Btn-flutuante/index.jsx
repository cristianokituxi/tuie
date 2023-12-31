import React, { useEffect } from "react";
import icon3 from "../../images/whatsapp-icon.png";

import "./style.scss";

const BotaoFlutuante = () => {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      (document.documentElement.scrollTop > 20 &&
        document.documentElement.scrollTop < 2700)
    ) {
      document.getElementById("icon").style.display = "block";
    } else {
      document.getElementById("icon").style.display = "none";
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        scrollFunction();
      };
    }
  }, []);
  return (
    <div>
      <a
        target="_blank"
        id="icon"
        href="https://wa.me/244926024456?text=ol%C3%A1%21+gostaria+de+uma+ajuda+referente a ..."
      >
        <img src={icon3} alt="icone do whatssap" />
      </a>
    </div>
  );
};
export default BotaoFlutuante;
