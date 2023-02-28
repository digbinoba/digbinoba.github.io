import { Col, Card, Button, Badge } from "react-bootstrap";

export const ProjectCard = ({
  title,
  thumbnail,
  details,
  tags,
  caseStudyLink,
  liveDemoLink,
}) => {    
  console.log(thumbnail);

  return (
    <Col size={12} sm="auto" md="auto" lg={6} xl={6} xxl={4}>
      <Card style={{ width: "25rem" }} className="card-styling">
        <Card.Img
          variant="top"
          src={thumbnail}
          className="card-image"
          alt="project thumbnail"
        />
        <Card.Body>
          <Card.Title className="card-project-title">{title}</Card.Title>
          <Card.Title className="card-project-skills">
            {tags.map((tag, index) => {
              return (
                <Badge key={index} pill>
                  {tag}
                </Badge>
              );
            })}
          </Card.Title>
          <Card.Text className="card-project-details">{details}</Card.Text>
          <Card.Title className="card-project-demo">
            {caseStudyLink ? (
              <Button className="custom-case-study-button">
                <a href={caseStudyLink}>Case Study</a>
              </Button>
            ) : (
              ""
            )}
            {liveDemoLink ? (
              <Button className="custom-live-demo-button">
                <a href={liveDemoLink}>Demo</a>
              </Button>
            ) : (
              ""
            )}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
