import React from "react";
import "./style.scss";
import img1 from "../../images/escudo.png";
import img2 from "../../images/atendimento-ao-cliente.png";
import img4 from "../../images/8-horas-da-manha.png";

import { Row, Col } from "react-bootstrap";
// import img3 from '../images/dicas3.png'
// import img4 from '../images/dicas4.jpg'

const SectionPassageiro = () => {
  return (
    <div id="dicas" className="container-section reveal ">
      <div className="container d-block">
        <Row>
          <Col xs={12} sm={4}>
            <div className="card m-2 align-items-center p-3">
              <img
                width="200"
                className="img-fluid wow zoomIn "
                data-wow-delay="0.5s"
                src={img1}
                Style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
              />
              <div className="card-body text-center">
                <hr />
                <h3> Segura e conveniente</h3>
                <p className="card-text text-center">
                  As deslocações com os motoristas da Tuié são seguras e
                  convenientes.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="card m-2 align-items-center p-3">
              <img
                width="200"
                className="img-fluid wow zoomIn"
                data-wow-delay="0.5s"
                src={img2}
                Style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
              />
              <div className="card-body text-center">
                <hr />
                <h3> Motorista contentes, clientes contentes</h3>
                <p className="card-text text-center">
                  Os motoristas da Tuié ganham mais graças às nossas comissões
                  baixas.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="card m-2 align-items-center p-3">
              <img width="200" className="img-fluid" src={img4} />
              <div className="card-body text-center">
                <hr />
                <h3> Pede uma viagem</h3>
                <p className="card-text text-center">
                  As deslocações com a Tuié são fáceis, convenientes e rápidas.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SectionPassageiro;
