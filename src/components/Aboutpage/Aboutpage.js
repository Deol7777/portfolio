import React, { useEffect, useRef } from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { animate, createScope } from 'animejs';

function Aboutpage() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: root.current }).add(self => {
      // Animate the "About Me" text on page load
      animate('.aboutmetext', {
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        ease: 'out(3)',
        delay: 200
      });

      // Animate the description paragraph
      animate('.aboutdetails', {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        ease: 'out(2)',
        delay: 600
      });

      // Animate skills with staggered effect
      animate('.skilllist li', {
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 600,
        ease: 'out(2)',
        delay: (el, i) => i * 100 + 1000
      });

      // Animate the web image
      animate('.webimage', {
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 1000,
        ease: 'out(3)',
        delay: 400
      });

      // Create hover animations for skills
      self.add('hoverSkill', (target, enter = true) => {
        animate(target, {
          scale: enter ? [1, 1.1] : [1.1, 1],
          rotate: enter ? [0, 5] : [5, 0],
          duration: 300,
          ease: 'out(2)'
        });
      });

      // Create a floating animation for the web image
      animate('.webimage', {
        translateY: [-10, 10],
        duration: 3000,
        loop: true,
        direction: 'alternate',
        ease: 'inOut(2)',
        delay: 2000
      });
    });

    return () => scope.current?.revert();
  }, []);

  const handleSkillHover = (e, enter = true) => {
    if (scope.current?.methods?.hoverSkill) {
      scope.current.methods.hoverSkill(e.target, enter);
    }
  };

  const skills = [
    ["HTML5/CSS3", "JavaScript", "TypeScript", "Java", "Python"],
    ["React Js", "Redux Js", "Angular", "Spring"],
    ["Git/Github", "AWS", "SQL", "Tailwind CSS", "Bootstrap 5"]
  ];

  return (
    <div ref={root} className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext" style={{ opacity: 0 }}>
              About <span>Me</span>
            </h3>
            <p className="aboutdetails" style={{ opacity: 0 }}>
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
            <div className="webimage" style={{ opacity: 0 }}></div>
          </Col>
          <ul className="skilllist pl-0 text-lg">
            <Row>
              <h3 className="aboutmetext">Skills</h3>
              {skills.map((colSkills, colIdx) => (
                <Col md={4} key={colIdx}>
                  {colSkills.map((skill, idx) => (
                    <li
                      key={skill}
                      style={{ opacity: 0 }}
                      onMouseEnter={(e) => handleSkillHover(e, true)}
                      onMouseLeave={(e) => handleSkillHover(e, false)}
                    >
                      {skill}
                    </li>
                  ))}
                </Col>
              ))}
            </Row>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
