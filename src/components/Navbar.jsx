import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <h1>PE Event</h1>
          <p className="logo-subtitle">Prompt Engineering</p>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('highlights')}>Highlights</button>
          <button onClick={() => scrollToSection('speakers')}>Speakers</button>
          <button onClick={() => scrollToSection('schedule')}>Schedule</button>
          <button onClick={() => scrollToSection('registration')}>Register</button>
          <button onClick={() => scrollToSection('faq')}>FAQ</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
