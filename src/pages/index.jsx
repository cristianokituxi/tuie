import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BotaoFlutuante from "../components/Btn-flutuante";
import "./index.scss";

const IndexPage = () => {
  return (
    <>
      <div className="container-pages">
        <Menu />
        <BotaoFlutuante />
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Tuié comigo|Transportes </title>;
