import React from "react";
import img1 from "../../images/motorista.png";
import img2 from "../../images/retrato-de-senhora-afro-americana-positiva-dentro-do-carro.jpg";
import img3 from "../../images/motorista-uber-elegante-dando-corrida-de-taxi.jpg";
import img4 from "../../images/driverpic.jpeg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";
import { FaDownload } from "react-icons/fa";
import { Reveal } from "../../utils/delayEfect";

const Motorista = () => {
  const [index, setIndex] = useState(0);

  window.addEventListener("scroll", Reveal);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div id="motorista" className="container-motorista reveal">
        <div className="container container-md d-flex justify-content-around">
          <Row>
            <Col md={4} xs={12}>
              <h2 className="text-center">Motorista</h2>
              <div
                className="text-center wow zoomIn"
                data-wow-delay="0.1s"
                Style="visibility: visible; animation-delay: 0.1s; animation-name: zoomIn;"
              >
                <div className="bg-warning w-100 p-2 py-5 rounded">
                  <h2 className="text-light p-2">
                    <b>Vamos-lá!!!</b>
                  </h2>

                  <p className="text-light p-2">
                    Instale a APP e faça dinheiro.
                  </p>
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
                <b>Ganhe dinheiro a conduzir</b>
              </h3>
              <p className="text-center">
                Faça o seu horário, seja o seu próprio chefe
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
                    alt="foto-motorista"
                    src={img3}
                    className="d-block w-100 mb-3 rounded"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100"
                    // height="50"
                    alt="foto-motorista"
                    src={img2}
                    className="d-block w-100 mb-3 rounded"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100"
                    // height="50"
                    alt="foto-motorista"
                    src={img4}
                    className="d-block w-100 mb-3 rounded"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="text-center">
                <Stack gap={2} className="col-md-5 mx-auto pb-3">
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
export default Motorista;
