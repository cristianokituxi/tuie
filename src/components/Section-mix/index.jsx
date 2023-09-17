import React from "react";
import "./style.scss";
import img1 from "../../images/dinheiro.png";
import img2 from "../../images/app-namoro.png";
import img4 from "../../images/carro.png";

import { Row, Col } from "react-bootstrap";
// import img3 from '../images/dicas3.png'
// import img4 from '../images/dicas4.jpg'

const SectionMix = () => {
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
                <h3>Aceite uma viagem</h3>
                <p className="card-text text-center">
                  A Tuié disponibiliza-te viagens nas vias mais rápidas.
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
                src={img4}
                Style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
              />
              <div className="card-body text-center">
                <hr />
                <h3>Ótimos preços</h3>
                <p className="card-text text-center">
                  Queremos oferecer viagens aos melhores preços em toda Luanda.
                  Descobre por ti!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="card m-2 align-items-center p-3">
              <img width="200" className="img-fluid" src={img2} />
              <div className="card-body text-center">
                <hr />
                <h3>Fácil de usar</h3>
                <p className="card-text text-center">
                  Chegue rápido ao seu destino.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SectionMix;
