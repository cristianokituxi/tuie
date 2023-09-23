import React from "react";
import img1 from "../../images/icone.jpg";
import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";
import {
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SectionTuie = () => {
  return (
    <div id="SectionTuie" className="container-SectionTuie  mt-5">
      <div className="container container-md d-flex justify-content-around">
        <Row>
          <Col xs={12} md={5} className="mb-5">
            <Row>
              <Col>
                <img
                  className="img-fluid wow zoomIn "
                  data-wow-delay="0.5s"
                  src={img1}
                  // Style="border: 10px solid rgb(85, 85, 85); border-radius: 15px; visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"
                />
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <div className="text-center">
              <h1 className="text-clinica text-center">Quem somos</h1>
              <p className="text-clinica text-center">
                Somos uma empresa de direito angolano, inserida no mercado para
                oferecer o melhor serviço de táxi personalizado de angola.
                Estabelecendo metas e compromisso com o seu destino.
              </p>
              <Row className="col-md-12 aligne-items-center justify-content-center  mt-5">
                <Col xs={2}>
                  <a class="btn btn-outline-warning btn-square" href="#">
                    <FaFacebookF />
                  </a>
                </Col>
                <Col xs={2}>
                  <a class="btn btn-outline-warning btn-square" href="#">
                    <FaTwitter />
                  </a>
                </Col>
                <Col xs={2}>
                  <a class="btn btn-outline-warning btn-square" href="#">
                    <FaInstagram />
                  </a>
                </Col>
                <Col xs={2}>
                  <a class="btn btn-outline-warning btn-square" href="#">
                    <FaLinkedinIn />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SectionTuie;
