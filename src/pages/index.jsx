import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BotaoFlutuante from "../components/Btn-flutuante";
import "./index.scss";
import Inicio from "../components/Inicio";
import Motorista from "../components/Motorista";
import { Reveal } from "../utils/delayEfect";
import { useEffect } from "react";
import SectionMix from "../components/Section-mix";
import Passageiro from "../components/Passegeiro";
import SectionPassageiro from "../components/Section-passageiro";
import SectionTuie from "../components/Section-tuie";

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", Reveal);
    }
  }, []);
  return (
    <>
      <div className="container-pages">
        <Menu />
        <Inicio />
        <Motorista />
        <SectionMix />
        <Passageiro />
        <SectionPassageiro />
        <SectionTuie />
        <BotaoFlutuante />
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Tuié comigo | Transportes </title>;
