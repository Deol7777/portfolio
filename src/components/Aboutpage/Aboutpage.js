import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              Hey there, I'm Gurnoor Deol, a Vancouver-based Computing Science
              student at SFU. My journey revolves around designing responsive
              websites and engineering software solutions. During my 2 years of
              experience in the industry, I've had the privilege of working on
              diverse projects that have honed my skills in full-stack
              development, database management and UI design. Collaborative by
              nature, I relish the dynamic energy of team efforts. Beyond
              coding, you'll find me capturing the beauty of British Columbia's
              landscapes and exploring compelling sci-fi reads. Fueled by an
              unquenchable thirst for knowledge, I'm excited to carve a path in
              the ever-evolving tech landscape, one innovation at a time.
            </p>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
          <ul className="skilllist pl-0 text-lg">
            <Row>
              <h3 className="aboutmetext">Skills</h3>
              <Col md={4}>
                <li>HTML5/CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Python</li>

              </Col>
              <Col md={4}>
                <li>React Js</li>
                <li>Redux Js</li>
                <li>Angular</li>
                <li>Spring</li>

              </Col>
              <Col md={4}>
                <li>Git/Github</li>
                <li>AWS</li>
                <li>SQL</li>
                <li>Tailwind CSS</li>
                <li>Bootsrap 5</li>

              </Col>
            </Row>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
