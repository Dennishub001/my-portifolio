import "./Skills.css";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiFlask, SiPostgresql, SiMysql } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare size={22} color="#F7DF1E" /> },
        { name: "React", icon: <FaReact size={22} color="#61DBFB" /> },
        { name: "HTML5", icon: <FaHtml5 size={22} color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt size={22} color="#1572B6" /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython size={22} color="#306998" /> },
        { name: "Flask", icon: <SiFlask size={22} color="#000000" /> },
        { name: "REST APIs", icon: <FaDatabase size={22} color="#6c757d" /> },
        { name: "Git", icon: <FaGitAlt size={22} color="#F05032" /> },
      ],
    },

    {
      title: "Database Management",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql size={22} color="#336791" /> },
        { name: "MySQL", icon: <SiMysql size={22} color="#4479A1" /> },
        { name: "Database Design", icon: <FaDatabase size={22} color="#333" /> },
        { name: "SQL", icon: <FaDatabase size={22} color="#333" /> },
      ],
    },

    {
      title: "Food Science & Technology",
      skills: [
        { name: "Food Safety" },
        { name: "Product Development" },
        { name: "Quality Control" },
        { name: "Quality Assurance" },
      ],
    },

    {
      title: "Soft Skills & Leadership",
      skills: [
        { name: "Communication" },
        { name: "Collaboration" },
        { name: "Problem Solving" },
        { name: "Adaptability" },
        { name: "Time Management" },
        { name: "Team Leadership" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical and Soft Skills</h2>
        <p className="skills-intro">
          A versatile skill set that merges technical knowledge in modern
          software development with analytical expertise from Food Science,
          supported by strong interpersonal, problem-solving, and adaptability
          skills.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <h3>{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Technologies, Soft Skills & Tools</h3>
          <div className="tech-badges">
            <span className="tech-badge">Bootstrap</span>
            <span className="tech-badge">Tailwind CSS</span>
            <span className="tech-badge">Postman</span>
            <span className="tech-badge">VS Code</span>
            <span className="tech-badge">GitHub</span>
            <span className="tech-badge">Netlify</span>
            <span className="tech-badge">Artificial Intelligence</span>
            <span className="tech-badge">Project Planning</span>
            <span className="tech-badge">Team Leadership</span>
            <span className="tech-badge">Agile Methodology</span>
            <span className="tech-badge">Entrepreneurship</span>
            <span className="tech-badge">Emotional Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  );
}