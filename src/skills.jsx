function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Java",
    "Node.js",
    "Express.js",
   
  ];

  return (
    <section id="skills" className="section">

      <div className="section-title">
        <p>What I Know</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">

        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill}
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;