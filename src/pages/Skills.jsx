import React from 'react';
import { Container, Row, Col, ListGroup, Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
    const skillsList = [
        "HTML", "CSS", "Git", "JavaScript", "Bootstrap", "DOM Manipulation",
        "APIs", "JQuery", "JSON", "AJAX", "Node.js", "ES6",
        "Object-Oriented Programming", "Express.js", "SQL", "Sequelize",
        "Model-View-Controller (MVC) Paradigm", "Testing", "Agile Development",
        "Team Collaboration", "Progressive Web Applications", "React",
        "NoSQL", "MongoDB", "MERN Stack (MongoDB, Express, React, Node)",
        "Computer Science Fundamentals"
    ];

    const midpoint = Math.ceil(skillsList.length / 2);
    const leftColumnSkills = skillsList.slice(0, midpoint);
    const rightColumnSkills = skillsList.slice(midpoint);

    return (
        <div className="skills-page">
            <Navbar expand="lg" className="navbar-custom py-3">
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

            <header className="skills-hero">
                <Container>
                    <div className="skills-hero-content text-center">
                        <h1 className="section-title">My Skills</h1>
                        <p>Technologies I've mastered to build amazing applications</p>
                    </div>
                </Container>
            </header>

            <main>
                <Container className="my-5">
                    <Row>
                        <Col md={6}>
                            <ListGroup>
                                {leftColumnSkills.map((skill, index) => (
                                    <ListGroup.Item key={index} className="skill-item">
                                        {skill}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col md={6}>
                            <ListGroup>
                                {rightColumnSkills.map((skill, index) => (
                                    <ListGroup.Item key={index + midpoint} className="skill-item">
                                        {skill}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className="footer-custom py-4">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>Connect with me:</p>
                            <ul className="social-links">
                                <li>
                                    <a href="https://github.com/AshleydVon" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="social-icon" /> GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">
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

export default Skills;
