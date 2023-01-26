import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import projects from "../assets/files/projects.json";
export const Portfolio = () => {
  /* TO DO: Integrate with firebase to capture projects from db */
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Portfolio</h2>
            <p>Here are a few projects that I worked on.</p>
            <Tab.Container id="portfolio-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">UX/UI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Apps</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.projectType === "UX/UI") {
                        return <ProjectCard key={index} {...project} />;
                      }
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.projectType === "App") {
                        return <ProjectCard key={index} {...project} />;
                      }
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={"bg"} />
    </section>
  );
};
