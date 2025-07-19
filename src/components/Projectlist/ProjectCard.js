import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCard(props) {
  return (
    <Card className="project-card-view d-flex flex-column">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body className="d-flex flex-column">
    <Card.Title>{props.title}</Card.Title>
    <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

    {/* This div will push to the bottom */}
    <div className="mt-auto d-flex flex-wrap gap-2 justify-center">
      <Button
        className="viewbtn"
        variant="dark"
        href={props.ghLink}
        target="_blank"
      >
        View
      </Button>

      {!props.isBlog && props.demoLink && (
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
        >
          Demo
        </Button>
      )}
    </div>
  </Card.Body>
</Card>

  );
}
export default ProjectCard;