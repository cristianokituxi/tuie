import React from "react";
import img1 from "../../images/passageiro.png";
import img2 from "../../images/african-american-business-man-car.jpg";
import img3 from "../../images/homem-bonito-e-elegante-em-um-salao-de-carro.jpg";
import img4 from "../../images/feche-amigos-sorridentes-dentro-do-carro.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Alert from "react-bootstrap/Alert";

import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";
import { FaDownload } from "react-icons/fa";

const Passageiro = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div id="motorista" className="container-Passageiro reveal">
        <div className="container container-md d-flex justify-content-around">
          <Row>
            <Col md={4} xs={12}>
              <h2 className="text-center">Passageiro</h2>
              <div
                className="text-center wow zoomIn"
                data-wow-delay="0.1s"
                Style="visibility: visible; animation-delay: 0.1s; animation-name: zoomIn;"
              >
                <div
                  className="w-100 p-2 py-5 rounded"
                  Style="background-color: #ff8c00 "
                >
                  <h2 className="text-light p-2">
                    <b>Vamos-lá!!!</b>
                  </h2>

                  <p className="text-light p-2">Instale a APP e viaje.</p>
                  <img
                    className="img-fluid wow zoomIn w-75"
                    data-wow-delay="0.5s"
                    src={img1}
                    Style="border: 10px solid rgb(85, 85, 85); border-radius: 15px; visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
                  />
                </div>
              </div>
            </Col>

            <Col className="mt-2">
              <h3 className="text-center">
                <b>Uma viagem em poucos minutos!</b>
              </h3>
              <p className="text-center">
                Escreve o teu destino, chama uma Tuié, espera pelo motorista e
                aproveita a viagem.
              </p>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
              >
                <Carousel.Item>
                  <img
                    width="100"
                    // height="50"
                    alt="foto-Passageiro"
                    src={img3}
                    className="d-block w-100 mb-3 rounded"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100"
                    // height="50"
                    alt="foto-Passageiro"
                    src={img2}
                    className="d-block w-100 mb-3 rounded"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100"
                    // height="50"
                    alt="foto-Passageiro"
                    src={img4}
                    className="d-block w-100 mb-3 rounded"
                  />
                </Carousel.Item>
              </Carousel>
              <Alert Style="background-color: #ff8c00 ">
                <Alert.Heading className="text-white text-center">
                  {" "}
                  PARA PASSAGEIROS
                </Alert.Heading>
                <hr />
                <p className="text-white  text-center">
                  Guia detalhado e Informações sobre a aplicação, conta e
                  viagens.
                </p>
              </Alert>
              <div className="text-center">
                <Stack gap={2} className="col-md-12 mx-auto pb-3">
                  <Button href="/sobre-a-clinica" variant="success">
                    Baixe agora o app {}
                    <FaDownload />
                  </Button>
                </Stack>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Passageiro;
