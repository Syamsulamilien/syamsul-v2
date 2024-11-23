import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Tambahkan FaEnvelope untuk ikon email

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="form-container">
          <h2 className="text-center mb-4" style={{ color: '#6c757d' }}>Find Me On</h2>
          <p className="text-center mb-4" style={{ color: '#6c757d' }}>
            Feel free to connect with me on any of the platforms below:
          </p>
          <Row className="justify-content-center">
            <Col xs="auto">
              <a
                href="https://www.instagram.com/syceliii"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <FaInstagram size={40} />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <FaLinkedin size={40} />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://github.com/Syamsulamilien"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <FaGithub size={40} />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="mailto:your.email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link email"
              >
                <FaEnvelope size={40} />
              </a>
            </Col>
          </Row>
          <p className="text-center mt-4" style={{ color: '#6c757d' }}>
            <a
              href="mailto:your.email@example.com"
              style={{ textDecoration: 'underline', color: '#007bff' }}
            >
            
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
