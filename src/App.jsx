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
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <div className="logo-text">
            Flywheel<span>Technologies</span>
          </div>
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
        <h2>Who We Are</h2>
        <p>
          Flywheel Technologies is a student-led AI innovation company building digital solutions for small businesses. We build Apps, Websites, Databases and AI features that take your brand to the next level. Reach out to us today!
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
        <h2>Contact Us</h2>
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
