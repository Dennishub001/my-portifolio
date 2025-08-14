import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Python", level: 88 },
        { name: "Flask", level: 85 },
        { name: "REST APIs", level: 82 },
        { name: "Git", level: 80 }
      ]
    },
    {
      title: "Database Management",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 78 },
        { name: "Database Design", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Food Science & Analysis",
      icon: "🔬",
      skills: [
        { name: "Data Analysis", level: 92 },
        { name: "Research Methods", level: 90 },
        { name: "Quality Control", level: 88 },
        { name: "Process Optimization", level: 85 }
      ]
    },
    {
      title: "Soft Skills & Leadership",
      icon: "🤝",
      skills: [
        { name: "Entrepreneurial Mindset", level: 90 },
        { name: "Communication", level: 88 },
        { name: "Collaboration", level: 92 },
        { name: "Problem Solving", level: 95 },
        { name: "Critical Thinking", level: 90 },
        { name: "Project Management", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <p className="skills-intro">
          A comprehensive skill set combining modern software development technologies 
          with analytical expertise from food science background.
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Technologies & Tools</h3>
          <div className="tech-badges">
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express.js</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">Bootstrap</span>
            <span className="tech-badge">Tailwind CSS</span>
            <span className="tech-badge">Postman</span>
            <span className="tech-badge">VS Code</span>
            <span className="tech-badge">GitHub</span>
            <span className="tech-badge">Netlify</span>
            <span className="tech-badge">Statistical Analysis</span>
            <span className="tech-badge">Effective and Efficient Communication</span>
            <span className="tech-badge">Team Leadership</span>
            <span className="tech-badge">Agile Methodology</span>
            <span className="tech-badge">Time Management</span>
            <span className="tech-badge">Adaptability</span>
          </div>
        </div>
      </div>
    </section>
  );
}

