import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>From Food Science to Full Stack</h1>
          <p className="hero-subtitle">Crafting Solutions with Precision</p>
          <p className="hero-description">
            Combining analytical expertise from Food Science & Technology with 
            cutting-edge software engineering skills to build innovative, data-driven and problem-solving solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1">🧬</div>
            <div className="element element-2">💻</div>
            <div className="element element-3">⚛️</div>
            <div className="element element-4">🐍</div>
            <div className="element element-5">🥼</div>
          </div>
        </div>
      </div>
    </section>
  );
}