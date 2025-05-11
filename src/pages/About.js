import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <Container className="px-5">
      <Row>
        {/* Empty column on the left */}
        <Col md={1}></Col>

        {/* Profile column */}
        <Col md={3} className="text-center">
          <Image
            src={profileImage}
            roundedCircle
            fluid
            alt="Liangliang"
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover'
            }}
          />

          <div className="my-3">
            <a
              href="https://www.linkedin.com/in/liangma422/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} style={{ color: 'rgb(72, 166, 167)' }} />
            </a>
          </div>
        </Col>
        <Col md={1}></Col>

        {/* Main content column */}
        <Col md={6} style={{ marginTop: '2rem' }}>
          
          <p>
            My expertise spans data engineering, analytics, and language technologies, with a focus on creating solutions that are both effective and thoughtful. I approach both technology and life with a spirit of exploration and lifelong learning.
          </p>
          <p>If you'd like to know more about me professionally, my CV is linked above.</p>
          <p>Or check out Elsewhere, a space for the things I enjoy beyond work.</p>
        </Col>

        {/* Empty column on the right */}
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default About;
