import React, { useEffect, useRef } from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { animate, createScope } from 'animejs';
import { Link } from "react-router-dom";
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
        delay: (el, i) => i * 100 + 1000,

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
      self.add('hoverSkill', (target, enter = true, index = 0) => {
        // Calculate rotation based on index: alternate left/right
        const rotateAmount = (index % 2 === 0 ? 5 : -5);
        animate(target, {
          scale: enter ? [1, 1.5] : [1.5, 1],
          rotate: enter ? [0, rotateAmount] : [rotateAmount, 0],
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

  const handleSkillHover = (e, enter = true, index = 0) => {
    if (scope.current?.methods?.hoverSkill) {
      scope.current.methods.hoverSkill(e.target, enter, index);
    }
  };

  // Flattened skills array
  const skills = [
    "HTML5/CSS3", "JavaScript", "TypeScript", "Java", "Python",
    "React Js", "Redux Js", "Angular", "Spring",
    "Git/Github", "AWS", "SQL", "Tailwind CSS", "Bootstrap 5"
  ];

  // Import Link from react-router-dom at the top of your file:
  // import { Link } from "react-router-dom";

  return (
    <div ref={root} className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext" style={{ opacity: 0 }}>
              <span>WHO AM I</span>
            </h3>
            <div>
            <p className="aboutdetails">
              
  A curious and dedicated software developer who enjoys building clean, efficient, and user-friendly web applications.<br />
  I mostly work with Java and React, but I’m always exploring new tools, technologies, and ways to improve how we write and ship code.<br /><br />
  
  I care a lot about writing maintainable software, collaborating with teams, and making sure the end-user experience actually makes sense (because yes, buttons <em>should</em> do what they say).<br /><br />
  
  Outside of code, I like learning about infrastructure, observing how things break (so I can fix them), and occasionally wondering how we ever coded without dark mode.<br /><br />
  

</p>
</div>
          </Col>
          <Col md={5}>
            <div className="webimage" style={{ opacity: 0 }}></div>
          </Col>
        </Row>
        <p className="aboutdetails">
          <span id="stoppingBy">
            {/* Remove default link styling */}
            <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
              Thanks for stopping by—let’s connect!
            </Link>
          </span>
        </p>
        <Row>
        </Row>

        {/* Skills Section */}
        <h3 className="aboutmetext" style={{ marginTop: "2rem" }}>
          Skills
        </h3>
        <ul className="skilllist pl-0 text-lg">
          {skills.map((skill, index) => (
            <li
              key={skill}
              style={{ opacity: 0 }}
              onMouseEnter={(e) => handleSkillHover(e, true, index)}
              onMouseLeave={(e) => handleSkillHover(e, false, index)}
            >
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Aboutpage;
