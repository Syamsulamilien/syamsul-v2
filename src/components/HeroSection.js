import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from 'react-typed';
import myPhoto from '../assets/images/celigt.jpg';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Container
      id="home"
      className="py-5 text-light"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center text-md-start" data-aos="fade-right">
          <h2 className="display-3" style={{ color: '#000' }}>Welcome to My Portfolio</h2>
          <p className="lead">
            <ReactTyped
              className="fs-2 text-primary"
              strings={[
                "I have no father.",
                "I have a very good grandfather.",
                "I have a very tough and independent mother",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>
        </Col>

        <Col xs={12} md={6} className="text-center" data-aos="fade-left">
      <div className="foto-container">
    <img
      src={myPhoto}
      alt="Portrait of Me"
      className="img-fluid rounded-circle shadow-lg rounded-photo"
      style={{
       
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
      }}
    />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
