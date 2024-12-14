import React from 'react';
import personalImage from '../assets/images/Pic.jpeg';
import logo from '../assets/images/Logo.png';
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">Ashley D Von</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-button">Home</Nav.Link>
              <Nav.Link href="/projects" className="nav-button">Projects</Nav.Link>
              <Nav.Link href="/skills" className="nav-button">Skills</Nav.Link>
              <Nav.Link href="/contact" className="nav-button">Contact</Nav.Link>
              <Nav.Link href="/resume" className="nav-button">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero">
        <Container className="text-center d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" className="logo animated-logo mb-3" />
          <div className="hero-content">
            <h1 className="welcome-title">Welcome to My Portfolio</h1>
            <p className="hero-text">
              Hello! I'm Ashley D Von, a dedicated full stack developer
              specializing in creating efficient, scalable, and user-friendly web
              applications. My focus is on solving complex problems with creative
              technical solutions.
            </p>
          </div>
        </Container>
      </div>

      <main className="home-main">
        <Container>
          <Card className="about-card">
            <Row className="g-0">
              <Col md={6} className="image-column">
                <div className="image-wrapper">
                  <img
                    src={personalImage}
                    alt="Ashley D Von"
                    className="personal-image"
                  />
                </div>
              </Col>
              <Col md={6} className="content-column">
                <Card.Body className="about-content">
                  <h2 className="section-title">About Me</h2>
                  <p className="about-text">
                    I have a steadfast belief that the pursuit of knowledge and the
                    persistence to grow are key elements to success in the tech
                    industry. I combine and build upon my skills and versatility to
                    create innovative, user-focused solutions. As a passionate full
                    stack developer, I strive to be the best I can be, continuously
                    expanding my expertise and pushing the boundaries of what's
                    possible. My commitment to connecting with others and embracing
                    new ideas drives my commitment to the success of every project I
                    work on, ensuring that I deliver high-quality, impactful results.
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </main>

      <footer className="footer-custom">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="connect-text">Connect with me:</p>
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/AshleydVon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="social-icon" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ashley-von-0600a9239/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="social-icon" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:AshleydVon630@gmail.com">
                    <MdEmail className="social-icon" /> Email: AshleydVon630@gmail.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
