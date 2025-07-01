import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Flywheel<span>Technologies</span></div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Powering SMEs with AI-driven Tools</h1>
        <p>We help businesses in Ghana streamline operations, track inventory, and delight customers.</p>
        <a href="#contact" className="cta">Get in Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Who We Are</h2>
        <p>Flywheel Technologies is a student-led AI innovation company building digital solutions for small businesses. We build Apps, Websites, Databases and AI features that  take your brand to the next level. Reach out to us today!.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
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
<section id="clients" className="clients">
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
      <section id="contact" className="contact">
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
