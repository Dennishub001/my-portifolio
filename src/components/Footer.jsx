import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Let's Connect</h3>
            <p>
              Combining food science expertise with modern software development 
              to create innovative solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com/Dennishub001" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/dennis-ochieng-0a37a630b/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:ochiengdennis32@gmail.com">
                Email
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Skills Highlight</h3>
            <div className="skill-tags">
              <span>JavaScript</span>
              <span>React</span>
              <span>Python</span>
              <span>Flask</span>
              <span>SQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Agile Methodology</span>
              <span> Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {2025} Dennis Ochieng. All rights reserved.</p>
          <p>From Food Science to Full Stack - Crafting Solutions with Precision</p>
        </div>
      </div>
    </footer>
  );
}