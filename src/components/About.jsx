import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              With a background in <strong>Food Science & Technology</strong> and recent completion of a 
              comprehensive <strong>full-stack software engineering bootcamp</strong>, I bring a unique 
              perspective that bridges scientific rigor with modern technology solutions.
            </p>
            <p>
              My academic background in food science has equipped me with exceptional 
              <strong> analytical thinking</strong>, <strong>attention to detail</strong>, <strong>product development</strong>, <strong>quality assurance</strong>, and 
              <strong> research methodologies</strong> that translate seamlessly into software development. 
              The systematic approach to problem-solving, data analysis, and process optimization 
              I developed in the lab now drives my approach to building efficient, scalable applications.
            </p>
            <p>
              Through intensive training in <strong> HTML,CSS,JavaScript, React, Python, and Flask</strong>, 
              I've developed expertise in creating full-stack web applications with robust database 
              systems. My scientific background enhances my ability to approach complex technical 
              challenges methodically, ensuring clean, well-documented code and thorough testing procedures.
            </p>
            <div className="resume-download">
              <a href="/resume.pdf" className="btn btn-primary" download>
                📄 Download Resume
              </a>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🥼 Scientific Foundation</h3>
              <p>BSc in Food Science & Technology providing strong analytical and research skills</p>
            </div>
            <div className="highlight-card">
              <h3>💻 Tech Expertise</h3>
              <p>Full-stack development with modern JavaScript, React, Python, Flask, and database technologies</p>
            </div>
            <div className="highlight-card">
              <h3>🎯 Soft Skills</h3>
              <p>Analytical thinker who pays attention to detail, problem-solving, adaptability, teamwork, and clear communication.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}