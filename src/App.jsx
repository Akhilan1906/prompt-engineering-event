import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Prompt Engineering Event</h1>
            <p className="hero-subtitle">Master the Art of AI Communication</p>
            <p className="hero-description">
              Join us for an exciting event to learn advanced prompt engineering techniques,
              best practices, and real-world applications in AI and machine learning.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Register Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About The Event</h2>
          <div className="about-content">
            <div className="about-card">
              <h3>What is Prompt Engineering?</h3>
              <p>
                Prompt engineering is the practice of designing and refining prompts to get the best
                results from large language models. Learn how to communicate effectively with AI.
              </p>
            </div>
            <div className="about-card">
              <h3>Why Attend?</h3>
              <p>
                Gain practical skills, network with experts, and discover how to leverage AI in your
                projects. Perfect for developers, researchers, and AI enthusiasts.
              </p>
            </div>
            <div className="about-card">
              <h3>What You'll Learn</h3>
              <p>
                Advanced techniques, real-world case studies, hands-on workshops, and Q&A sessions
                with industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="highlights">
        <div className="container">
          <h2>Event Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <h3>Expert Sessions</h3>
              <p>Learn from industry leaders and AI researchers</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">💻</div>
              <h3>Hands-on Labs</h3>
              <p>Practice with real AI models and tools</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤝</div>
              <h3>Networking</h3>
              <p>Connect with peers and professionals</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏆</div>
              <h3>Competitions</h3>
              <p>Win prizes and recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="speakers">
        <div className="container">
          <h2>Featured Speakers</h2>
          <div className="speakers-grid">
            <div className="speaker-card">
              <div className="speaker-avatar">👨‍💼</div>
              <h3>John Doe</h3>
              <p className="speaker-title">AI Researcher</p>
              <p className="speaker-bio">Expert in NLP and prompt optimization</p>
            </div>
            <div className="speaker-card">
              <div className="speaker-avatar">👩‍💼</div>
              <h3>Jane Smith</h3>
              <p className="speaker-title">ML Engineer</p>
              <p className="speaker-bio">Specializes in AI integration</p>
            </div>
            <div className="speaker-card">
              <div className="speaker-avatar">👨‍💻</div>
              <h3>Mike Johnson</h3>
              <p className="speaker-title">Tech Lead</p>
              <p className="speaker-bio">Building AI-powered applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="schedule">
        <div className="container">
          <h2>Event Schedule</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">09:00 AM</div>
              <div className="timeline-content">
                <h3>Registration & Welcome</h3>
                <p>Check-in and networking breakfast</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">10:00 AM</div>
              <div className="timeline-content">
                <h3>Keynote Speech</h3>
                <p>Introduction to Prompt Engineering</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">11:30 AM</div>
              <div className="timeline-content">
                <h3>Workshop Session 1</h3>
                <p>Advanced Prompting Techniques</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">01:00 PM</div>
              <div className="timeline-content">
                <h3>Lunch Break</h3>
                <p>Networking and food</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">02:00 PM</div>
              <div className="timeline-content">
                <h3>Workshop Session 2</h3>
                <p>Real-world Applications</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">04:00 PM</div>
              <div className="timeline-content">
                <h3>Q&A Panel</h3>
                <p>Ask our experts anything</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="registration">
        <div className="container">
          <h2>Register Now</h2>
          <form className="registration-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" name="organization" placeholder="Your company/school" />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience Level</label>
              <select id="experience" name="experience" required>
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Comments</label>
              <textarea id="message" name="message" placeholder="Tell us about yourself..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is this event free?</h3>
              <p>Yes! This is a free community event open to everyone interested in prompt engineering.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need prior AI experience?</h3>
              <p>No, we welcome beginners! We have sessions for all experience levels.</p>
            </div>
            <div className="faq-item">
              <h3>Will there be a certificate?</h3>
              <p>Yes, all attendees receive a certificate of participation.</p>
            </div>
            <div className="faq-item">
              <h3>Can I attend online?</h3>
              <p>Yes, we offer both in-person and online attendance options.</p>
            </div>
            <div className="faq-item">
              <h3>What should I bring?</h3>
              <p>Just bring your laptop and enthusiasm to learn!</p>
            </div>
            <div className="faq-item">
              <h3>How do I get support?</h3>
              <p>Contact us at support@promptevent.com or use the contact form below.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 Location</h3>
                <p>123 Tech Park Avenue<br/>San Francisco, CA 94105</p>
              </div>
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>info@promptevent.com</p>
              </div>
              <div className="contact-item">
                <h3>📱 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h3>🕐 Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Prompt Engineering Event. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
