import React from 'react'
import '../../pages/style.css'
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import foodApp from '../../Assets/foodApp.png'
import eventsApp from '../../Assets/eventsApp.png'
import westShoreye from '../../Assets/westShoreEye.png'
import phpWebDesign from '../../Assets/phpWebDesign.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import DarkVeil from '../../ReactBits/DarkVeil'

function Projectlist() {
  return (
    <div className="projectbackground" style={{ marginTop: "20px" }}>
      {/* this stays fixed behind everything */}
      <div className="project-background-veil">
        <DarkVeil />
      </div>

      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={foodApp}
                isBlog={false}
                title="Flavour Dash"
                description="Food Order App using react.js as FE, firebase as a backend, and deploye don Github. Provides users with an interactive way to place an order from pre-defined items and display a cart indicating the Total price and quantity of items. Users can further vary the amount from within the cart and input the address for the order to be delivered."
                  ghLink="https://github.com/Deol7777/Food-App"
              />
            </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={eventsApp}
                isBlog={false}
                title="EventHub"
                description="A modern full-stack events management platform built with React and Node.js, featuring secure authentication, beautiful glass-morphism design, and complete CRUD functionality for event creation and modification."
                ghLink="https://github.com/Deol7777/Events-Manager"
              />
            </Col>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={phpWebDesign}
                isBlog={false}
                title="PHP Web Desgin"
                description="PHP Web Design built using Joomla 5, fully responsive and deployed with PayPal integration. Allows customers to log in, purchase premium extensions, and access their downloads securely. Users can also leave feedback on products, enhancing engagement and trust across the platform."
                webLink="https://www.php-web-design.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={westShoreye}
                isBlog={false}
                title="West Shore Eyecare"
                description="West Shore Eye Care – built using Joomla 5 with a fully responsive layout and seamless navigation on any device. It features a contact form and embedded map for easy location access, along with sections showcasing eyewear brands, services offered, and team member profiles. Visitors can quickly learn about the practice and reach out—all through a clean, well-organized interface."
                webLink="https://westshoreeyecare.ca/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                webLink="https://gridlinesbuilders.in/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Projectlist