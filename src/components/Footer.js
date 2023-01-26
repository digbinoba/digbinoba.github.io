import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" height="100" width="100" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <h2>"Do what you love; love what you do"</h2>
            <p>CopyRight 2023. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
