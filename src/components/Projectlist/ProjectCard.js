import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsGlobe } from "react-icons/bs";



function ProjectCard(props) {
  return (
    <Card className="project-card-view d-flex flex-column">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body className="d-flex flex-column">
    <Card.Title>{props.title}</Card.Title>
    <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

    {/* Button row */}
    <div className="mt-auto d-flex flex-wrap gap-2 justify-content-center">
      {/* GitHub Button */}
      {props.ghLink && (
        <Button
          className="project-btn"
          variant="outline-light"
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub/>
        </Button>
      )}

      {/* Live Demo Button */}
      {props.demoLink && (
        <Button
          className="project-btn"
          variant="outline-light"
          href={props.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          color=""
        >
          <BsGlobe/>
        </Button>
      )}
    </div>
  </Card.Body>
</Card>

  );
}
export default ProjectCard;