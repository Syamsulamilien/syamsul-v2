import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import komponen
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MySkill from './components/MySkill';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials'; // Impor komponen komentar

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main>
        <section id="about" className="py-5 bg-light">
          <About />
        </section>

        <section id="myskills" className="py-5">
          <MySkill />
        </section>

        <section id="projects" className="py-5 bg-light">
          <Projects />
        </section>

        <section id="testimonials" className="py-5 bg-light">
          <Testimonials /> {/* Tambahkan bagian komentar */}
        </section>
      </main>

        <section id="contact" className="py-5">
          <Contact />
        </section>

        

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
