import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from 'react-typed';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import myPhoto from '../assets/images/syul.jpg';
import MyCV from '../assets/files/CV_Syamsul Amilien.pdf';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = MyCV;
    link.download = 'CV_Syamsul Amilien.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} data-aos="fade-right" className="text-center">
            <div className="image-container">
              <img
                src={myPhoto}
                alt="About Me Portrait"
                className="img-fluid rounded-circle shadow-lg animated-photo"
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

          <Col xs={12} md={6} data-aos="fade-left" className="text-center text-md-start">
            <h2 className="mb-4 fs-1 animated-text text-gradient">About Me</h2>
            <p className="lead animated-text">
              <ReactTyped
                strings={[
                  "I am a student of the university of aisyiyah yogyakarta and I take the information technology study program, I am only in the 3rd semester, and my hobby is hanging out..",
                  "I love Yuli antika sari.",
                  "saya sayang banget.",
                  "HEHEHE",
                ]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1200}
                loop={true}
                showCursor={true}
                cursorChar="|"
              />
            </p>
            <Button
            onClick={handleDownload}
            variant="primary"
            className="mt-4"
            style={{
            backgroundColor: '#6c757d', // Warna tombol
            color: 'white', // Warna teks tombol
            border: 'none', // Menghilangkan border
            transition: 'background-color 0.3s ease',
         }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#282c34')} // Efek hover
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#121212')} // Kembali ke warna asli
              
               > Download CV <ArrowRightCircle size={25} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
