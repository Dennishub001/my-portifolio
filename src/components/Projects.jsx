import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Recruiter",
      description: "A full-stack group collaboration project for technical assessment built with React, Flask, and PostgreSQL.",
      technologies: ["React", "Flask", "PostgreSQL", "JWT"],
      github: "https://github.com/KhalanHappiness/smart-recruiter",
      image: "🎯",
      highlights: [
        "Automated candidate assessment timer",
        "Real-time grading system",
        "Admin dashboard for recruiters",
        "Employee dashboard for assessment",
        "Single and bulk invitation management"
      ]
    },

    {
      id: 2,
      title: "High Tackle",
      description: "A full stack web application for managing rugby at grassroot levels .Built with React ,Flask and SQL .",
      technologies: ["React", "Flask", "PostgreSQL", "Python", "JavaScript"],
      github: "https://github.com/Dennishub001/high-tackle",
      image: "🍽️",
      highlights: [
        "Real-time monitoring dashboard",
        "Automated compliance reporting",
        "Data visualization for quality metrics"
      ]
    },

    {
      id: 3,
      title: "Soma Society",
      description: "A CLI application that manages community library to enhance the reading and writing culture.",
      technologies: ["Python", "Flask", "React", "MySQL", "Chart.js"],
      github: "https://github.com/Dennishub001/soma-society",
      image: "🥗",
      highlights: [
        "Advanced nutritional calculations",
        "Interactive charts and visualizations",
        "Dietary restriction filtering"
      ]
    },

    {
      id: 4,
      title: "Inventory Management API",
      description: "RESTful API for laboratory and kitchen inventory management with automated reorder points, expiration tracking, and usage analytics. Built with Flask and PostgreSQL.",
      technologies: ["Flask", "PostgreSQL", "Python", "REST API", "JWT"],
      github: "https://github.com/yourusername/inventory-api",
      demo: "https://inventory-api-docs.herokuapp.com",
      image: "📦",
      highlights: [
        "Automated inventory alerts",
        "Usage pattern analysis",
        "Secure authentication system"
      ]
    },

    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing food production and quality control data. Features real-time charts, trend analysis, and exportable reports using React and D3.js.",
      technologies: ["React", "D3.js", "JavaScript", "Python", "Flask"],
      github: "https://github.com/yourusername/data-dashboard",
      demo: "https://food-data-dashboard.netlify.app",
      image: "📊",
      highlights: [
        "Real-time data visualization",
        "Customizable chart types",
        "Export functionality for reports"
      ]
    },

    {
      id: 6,
      title: "Quality Control Tracker",
      description: "Web application for tracking quality control tests, managing lab results, and generating compliance reports. Combines my food science knowledge with modern web technologies.",
      technologies: ["React", "Flask", "MySQL", "Python", "Bootstrap"],
      github: "https://github.com/yourusername/qc-tracker",
      demo: "https://qc-tracker-demo.netlify.app",
      image: "🔬",
      highlights: [
        "Comprehensive test result tracking",
        "Automated report generation",
        "Statistical analysis tools"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="projects-intro">
          Here are some of my key projects that showcase the intersection of food science expertise 
          and software engineering skills, demonstrating my ability to build practical, data-driven solutions.
        </p>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">✓ {highlight}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {/* <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}