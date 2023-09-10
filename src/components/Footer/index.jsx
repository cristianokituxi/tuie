import React from "react";
import "./style.scss";
import icon1 from "../../images/insta-footer.png";
import icon2 from "../../images/face-footer.png";
import icon3 from "../../images/whats-footer.png";
import icon4 from "../../images/gmail-footer.png";
import icone5 from "../../images/google.png";
// import icone6 from "../../images/applestore.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer-container text-center text-lg-start  "
    >
      <div className="container d-flex justify-content-between p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3 mb-md-0 ">
            <h4 className="text-clinica text-align-center mb-0">Missão</h4>
            <p class="text-justify-center text-white text-dr">
              Proporcionar aos nossos clientes um serviço de transporte
              particular seguro, confiável e de qualidade, garantindo sua
              satisfação e comodidade em cada viagem.
            </p>
            <h4 className="text-clinica text-align-center">Visão</h4>
            <p class="text-justify-center text-white  text-dr">
              Ser referência no mercado de transporte particular, reconhecidos
              pela excelência dos nossos serviços, pela satisfação dos nossos
              clientes e pela eficiência da nossa equipe.
            </p>
            <h4 className="text-clinica text-align-center">Valores</h4>
            <p class="text-justify-center text-white  text-dr">
              <br />
              Segurança: Priorizamos a segurança dos nossos clientes e
              colaboradores em todas as nossas operações, adotando medidas e
              procedimentos para garantir viagens seguras.
              <br />
              Confiabilidade: Buscamos estabelecer uma relação de confiança com
              nossos clientes, cumprindo sempre com os prazos e entregando um
              serviço de qualidade.
              <br />
              Qualidade: Oferecemos um serviço de alta qualidade, desde a frota
              até os motoristas, com veículos bem equipados e profissionais
              capacitados.
              <br />
              Atendimento ao cliente: Valorizamos a comunicação e o
              relacionamento com nossos clientes, buscando sempre entender e
              atender às suas necessidades e expectativas.
              <br />
              Sustentabilidade: Comprometemo-nos em seguir práticas
              sustentáveis, buscando minimizar nosso impacto ambiental e
              contribuir para um futuro mais sustentável.
              <br />
              Inovação: Estamos sempre em busca de melhorias e inovações em
              nossos serviços e processos, visando proporcionar uma experiência
              ainda mais positiva aos nossos clientes.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h4 className="mb-0 text-center">Contato</h4>

            <ul className="list-unstyled mb-0">
              {/* <li className="m-1">
                <p className="text-center text-white">
                  Endereço: Av. Presidente Tancredo de Almeida Neves, 1187-W (em
                  frente ao fórum) <br />
                  Parque das Mansões - Tangará da Serra - MT - CEP 78302-028{" "}
                </p>
              </li> */}
              <p className="text-center text-white">
                Celular: <a href="tel:+244926024456">+244 926 024-456</a>
              </p>
              <li className="m-1">
                <p className="text-center text-white">
                  Telefone: <a href="tel:+244222-001-983">+244 222-001-983</a>
                </p>
              </li>
              <li className="m-1">
                <address className="text-center text-white">
                  E-mail: <a href="mailto:geral@tuie.com">geral@tuie.com</a>
                </address>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0  ">
            <h4 className="text-center">Disponível</h4>
            <ul className="d-flex justify-content-around">
              <li className="m-1">
                <a href="mailto:drlucas@drlucascarazza.com.br">
                  <img
                    src={icone5}
                    alt="icone do email"
                    width="300"
                    height="50"
                  />
                </a>
              </li>

              {/* <li className="m-1">
                <a href="">
                  <img
                    src={icone6}
                    alt="icone do facebook"
                    width="100"
                    height="50"
                  />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="icons-footer  p-3">
        <div className="text-center text-white">
          © Copyright {new Date().getFullYear()}. Tuié comigo - Todos Direitos
          Reservados
        </div>
        <div className="d-flex justify-content-around">
          <ul className="d-flex justify-content-around">
            <li className="m-1">
              <a href="mailto:drlucas@drlucascarazza.com.br">
                <img
                  className="img-icon-footer"
                  src={icon4}
                  alt="icone do email"
                />
              </a>
            </li>
            <li className="m-1">
              <a href="https://www.instagram.com/tuie_comigo/?igshid=MzMyNGUyNmU2YQ%3D%3D">
                <img
                  className="img-icon-footer"
                  src={icon1}
                  alt="icone do istagram"
                />
              </a>
            </li>
            <li className="m-1">
              <a href="">
                <img
                  className="img-icon-footer"
                  src={icon2}
                  alt="icone do facebook"
                />
              </a>
            </li>
            <li className="m-1">
              <a href="https://wa.me/244926024456?text=ol%C3%A1%21+gostaria+de+uma+ajuda+referente">
                <img
                  className="img-icon-footer"
                  src={icon3}
                  alt="icone do whatssap"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
