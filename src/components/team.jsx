import { useState } from 'react'
import './App.css'
import doc2 from './images/doc2.PNG'
import doc7 from './images/doc 7.PNG'
import doc4 from './images/doc 4.PNG'
import docOther from './images/doc....PNG'
import hugImage from './images/hug 8.PNG'

function Team() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-icon" aria-hidden="true"></span>
          <span className="brand-label">afyacare</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#find-care">Find Care</a>
          <a className="nav-link" href="#book">Book Appointment</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link nav-link--active" href="#team">Team</a>
        </nav>
      </header>

      <section className="hero-section" id="team">
        <div className="hero-copy">
          <h1>Meet Our Team</h1>
          <p>
            A dedicated group of healthcare professionals and technology experts committed to revolutionizing healthcare accessibility.
          </p>
        </div>
      </section>

      <section className="leadership-section">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={doc2} alt="Dr. Sarah Johnson" className="team-image" />
            <div className="team-info">
              <h3>Dr. Sarah Johnson</h3>
              <p className="team-title">Chief Medical Officer</p>
              <p className="team-description">Board-certified physician with 15+ years of experience in internal medicine and digital health.</p>
              <div className="team-tags">
                <span className="tag">Internal Medicine</span>
                <span className="tag">Digital Health</span>
                <span className="tag">AI Healthcare</span>
              </div>
              <div className="team-contact">
                <a href="#email" className="contact-icon">✉</a>
                <a href="#linkedin" className="contact-icon">👤</a>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={docOther} alt="Dr. Michael Chen" className="team-image" />
            <div className="team-info">
              <h3>Dr. Michael Chen</h3>
              <p className="team-title">Head of AI Research</p>
              <p className="team-description">Leading AI researcher specializing in machine learning applications for healthcare diagnostics.</p>
              <div className="team-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Medical AI</span>
                <span className="tag">Data Science</span>
              </div>
              <div className="team-contact">
                <a href="#email" className="contact-icon">✉</a>
                <a href="#linkedin" className="contact-icon">👤</a>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={doc7} alt="Emily Rodriguez" className="team-image" />
            <div className="team-info">
              <h3>Emily Rodriguez</h3>
              <p className="team-title">Director of Nursing</p>
              <p className="team-description">Registered nurse with expertise in patient care coordination and telemedicine services.</p>
              <div className="team-tags">
                <span className="tag">Patient Care</span>
                <span className="tag">Telemedicine</span>
                <span className="tag">Healthcare Management</span>
              </div>
              <div className="team-contact">
                <a href="#email" className="contact-icon">✉</a>
                <a href="#linkedin" className="contact-icon">👤</a>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={doc4} alt="Dr. James Park" className="team-image" />
            <div className="team-info">
              <h3>Dr. James Park</h3>
              <p className="team-title">Medical Advisor</p>
              <p className="team-description">Specialist in emergency medicine with a focus on rapid diagnosis and patient safety.</p>
              <div className="team-tags">
                <span className="tag">Emergency Medicine</span>
                <span className="tag">Patient Safety</span>
                <span className="tag">Clinical Guidelines</span>
              </div>
              <div className="team-contact">
                <a href="#email" className="contact-icon">✉</a>
                <a href="#linkedin" className="contact-icon">👤</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advisory-section">
        <h2>Advisory Board</h2>
        <div className="advisory-grid">
          <div className="advisory-card">
            <div className="advisory-icon">🏆</div>
            <h3>Prof. Lisa Anderson</h3>
            <p className="advisory-title">Medical Ethics Advisor</p>
            <p className="advisory-credentials">MD, PhD - Stanford Medical School</p>
          </div>
          <div className="advisory-card">
            <div className="advisory-icon">🏆</div>
            <h3>Dr. Robert Williams</h3>
            <p className="advisory-title">Technology Advisor</p>
            <p className="advisory-credentials">PhD Computer Science - MIT</p>
          </div>
          <div className="advisory-card">
            <div className="advisory-icon">🏆</div>
            <h3>Dr. Maria Garcia</h3>
            <p className="advisory-title">Public Health Advisor</p>
            <p className="advisory-credentials">MD, MPH - Johns Hopkins</p>
          </div>
        </div>
      </section>

      <section className="healthcare-section" style={{ backgroundImage: `linear-gradient(135deg, rgba(31, 122, 28, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%), url(${hugImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="healthcare-content">
          
        </div>
      </section>

      <section className="careers-section">
        <div className="careers-content">
          <h2>Join Our Growing Team</h2>
          <p>We're always looking for talented healthcare professionals and technologists who share our vision of making healthcare accessible to everyone.</p>
          <button className="careers-button">View Open Positions</button>
        </div>
      </section>

      <section className="commitment-section">
        <div className="commitment-content">
          <h2>Our Commitment</h2>
          <p>"We are committed to leveraging technology to break down barriers in healthcare. Our team combines medical expertise with technological innovation to create solutions that truly make a difference in people's lives. Every day, we work towards a future where quality healthcare guidance is accessible to everyone, everywhere."</p>
        </div>
      </section>

      <button className="chat-button" type="button">
        <span className="chat-icon">💬</span>
        <span>Chat with me</span>
      </button>
    </div>
  )
}

export default Team
