import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript",  },
        { name: "React",  },
        { name: "HTML5",  },
        { name: "CSS3",  }
      ]
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Python",  },
        { name: "Flask",  },
        { name: "REST APIs",  },
        { name: "Git",  }
      ]
    },

    {
      title: "Database Management",
      skills: [
        { name: "PostgreSQL",  },
        { name: "MySQL",  },
        { name: "Database Design",  },
        { name: "SQL",  }
      ]
    },
    {
      title: "Food Science & Technology",
      skills: [
        { name: "Food Safety",  },
        { name: "Product Development",  },
        { name: "Quality Control and Assurance",  },
        { name: "Sensory Evaluation",  }
      ]
    },

    {
      title: "Soft Skills & Leadership",
      skills: [
        { name: "Project Management",  },
        { name: "Communication", },
        { name: "Collaboration",  },
        { name: "Problem Solving",  },
        { name: "Critical Thinking",  },
        { name: "Adaptability",  }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical and Soft Skills</h2>
        <p className="skills-intro">
          A versatile skill set that merges technical knowledge in modern software development with analytical expertise from Food Science, 
          supported by strong interpersonal, problem-solving, and adaptability skills.
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

