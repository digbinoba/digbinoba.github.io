import { Container, Row, Col } from "react-bootstrap";
import headshot from "../assets/img/headshot.JPG";
import resume from "../assets/files/Resume.pdf";
export const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <Container>
        <Row>
          <Col md={12} lg={6} className="headshot-container">
            <img src={headshot} alt="headshot" className="headshot" />
          </Col>
          <Col md={12} lg={6}>
            <p>
              Pleasure to meet you. My name is Delano and I enjoy creating
              something out of nothing. I'm always in the pursuit of learning
              new skills to take on new and interesting challenges.
            </p>
            <p>
              I have always been fascinated in creativity and how individuals
              leverage design and technology to develop unique and exceptional experiences. As a software engineer, I
              am passionate in bridging the  connection between engineering and
              design.
            </p>
            <p>
              My purpose is to build compelling & memorable experiences that are
              efficient as they are beautiful. I specialize creating software while focusing on UX/UI design to prototype apps into potential experiences.
            </p>
            <p>Here are a few technologies & tools I am proficient in:</p>
            <Row>
              <Col md={6} xs="auto">
                <ul>
                  <li>JavaScript / TypeScript (ES6+)</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Node.js</li>
                </ul>
              </Col>
              <Col md={6} xs="auto">
                <ul>
                  <li>Unity</li>
                  <li>C#</li>
                  <li>Figma</li>
                  <li>Python</li>
                </ul>
              </Col>
            </Row>
            <p>
              Interested in my work? Here is a copy of my{" "}
              <a href={resume} target="_blank">
                resume
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
