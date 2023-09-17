import React from "react";
import img1 from "../../images/motorista.png";
import img2 from "../../images//passageiro.png";
import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";

const Inicio = () => {
  return (
    <div id="inicio" className="container-inicio ">
      <div className="container container-md d-flex justify-content-around">
        <Row>
          <Col xs={12} md={5}>
            <Row>
              <Col>
                <div className="py-3 p-lg-4 text-center">
                  <h6>Motorista</h6>
                  <img
                    className="img-fluid wow zoomIn w-75"
                    data-wow-delay="0.5s"
                    src={img1}
                    Style="border: 10px solid rgb(85, 85, 85); border-radius: 15px; visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
                  />
                </div>
              </Col>
              <Col>
                <div className="py-3 p-lg-4 text-center">
                  <h6>Passageiro</h6>
                  <img
                    className="img-fluid wow zoomIn w-75"
                    data-wow-delay="0.5s"
                    src={img2}
                    Style="border: 10px solid rgb(85, 85, 85); border-radius: 15px; visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <div className="text-center">
              <h1 className="text-clinica text-center">
                Peça o seu táxi personalizado <br /> a custo competitivo do
                mercado
              </h1>
              <p className="text-clinica text-center">
                Disponibilizamos preços nunca antes vistos no mercado angolano,
                elevamos a mais alto padrão do conforto em sua viagem. O seu
                destino é a nossa missão.
              </p>
              <Stack gap={2} className="col-md-12 mx-auto pb-3">
                <Button href="/sobre-a-clinica" variant="success">
                  Download
                </Button>
                <Button href="/sobre-a-clinica" variant="dark">
                  Contacte-nos
                </Button>
              </Stack>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Inicio;
