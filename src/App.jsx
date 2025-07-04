import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
          <div className="logo-text">
            Flywheel<span>Technologies</span>
          </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero animate">
        <h1 className="typing-text">Powering SMEs with AI-driven Tools</h1>
        <p>
          We help businesses in Ghana streamline operations, track inventory, and delight customers.
        </p>
        <a href="#contact" className="cta">Get in Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className="about animate">
        <h2 className='typing-text'>Who We Are</h2>
        <p>
          Flywheel Technologies is a student-led AI innovation company building digital solutions for small businesses. We build Apps, Websites, Data Solutions and AI features, automating the boring stuff so you can focus on what truly matters.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services animate">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Inventory Tracking</h3>
            <p>Know what you have, when you need it, in real time.</p>
          </div>
          <div className="card">
            <h3>Client Management</h3>
            <p>Keep records of your customers and follow up easily.</p>
          </div>
          <div className="card">
            <h3>Sales & Reports</h3>
            <p>Track your daily sales and performance metrics.</p>
          </div>
        </div>
      </section>
      {/* 360° Digital Solutions Section */}
      <section className="solutions animate">
        <h2 className="typing-text-alt">360° Digital Solutions for your Business</h2>
        <p>We don’t just build — we brand, market, and brainstorm with you.</p>
      </section>

      {/* Trusted Services Section */}
      <section className="trusted-services animate">
        <h2>Services You Can Trust</h2>
        <p>Build your business without breaking the Bank.</p>
      </section>

  
      {/* Clients Section */}
      <section id="clients" className="clients animate">
        <h2>Our Clients</h2>
        <div className="client-cards">
          <div className="client-card">
            <h3>Anyinofi Blocks & Supplies</h3>
            <p><strong>Industry:</strong> Construction</p>
            <p>We built a system to manage their stock of cement, iron rods, and deliveries.</p>
          </div>
          <div className="client-card">
            <h3>DietWithDee</h3>
            <p><strong>Industry:</strong> Health</p>
            <p>Provided a fast, responsive website and blog page that allowed her to reach clients and promote her personal brand.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact animate">
        <h2 classname="typing-text">Contact Us</h2>
        <p>Want to work with us or learn more?</p>
        <a href="mailto:flywheeltechnologies2025@gmail.com" className="cta">Email Us</a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Flywheel Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
