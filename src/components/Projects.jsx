import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Recruiter",
      description: "A full-stack group collaboration project for technical assessment. Built with React, Flask, and PostgreSQL.",
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
      description: "A full stack web application for managing rugby at grassroot levels. Built with React, Flask and SQL.",
      technologies: ["React", "Flask", "PostgreSQL", "Python", "JavaScript"],
      github: "https://github.com/Dennishub001/high-tackle",
      image: "🍽️",
      highlights: [
        "Members registration",
        "Team management",
        "Player profiles",
        "Coaches profiles",
        "Match scheduling"
      ]
    },

    {
      id: 3,
      title: "Soma Society",
      description: "A command-line interface (CLI) application that aims to ignite the reading and writting culture. It offers accesible and detailed books discovery and management in our communities.",
      technologies: ["Python", "Flask", "React", "MySQL"],
      github: "https://github.com/Dennishub001/soma-society",
      image: "🥗",
      highlights: [
        "Add new book",
        "Find books by Genre",
        "Find book Author",
        "List all books",
        "Delete book",
      ]
    },

    {
      id: 4,
      title: "Wick and Whistle Pantry",
      description: "A user-friendly recipe platform designed to help users discover, save, and share favorite recipes. Offers personalized cooking experience with favorites list and member login system.",
      technologies: ["Flask", "PostgreSQL", "Python", "REST API", "JWT"],
      github: "https://github.com/Algo-jtx/wick-whistle",
      image: "📦",
      highlights: [
        "Automated inventory alerts",
        "Usage pattern analysis",
        "Secure authentication system"
      ]
    },

    {
      id: 5,
      title: "AgriDairy-Connect",
      description: "A platform connecting dairy farmers and consumers. Provides seamless access to fresh dairy products and industry information. Creates awareness on proper handling to reduce contamination and wastage.",
      technologies: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/Dennishub001/AgriDairy-Connect",
      image: "📊",
      highlights: [
        "Dark mode",
        "View all dairy products",
        "Search functionality",
        "Add to cart"
        
        
      ]
    },

    {
      id: 6,
      title: "Quality Control Tracker",
      description: "Web application for tracking quality control tests and managing lab results. Generates compliance reports combining food science knowledge with modern web technologies.",
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