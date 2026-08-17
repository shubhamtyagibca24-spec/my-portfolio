function Projects() {

  const projects = [
    {
      title: "Smart Medicine Reminder",
      description:
        "A web application designed to help users manage medicine schedules and reminders.",
      technologies:
        "HTML, CSS, JavaScript",
      github: "#"
    },

    {
      title: "Restaurant Ordering Website",
      description:
        "A restaurant website where users can explore food items and manage their orders.",
      technologies:
        "HTML, CSS, JavaScript",
      github: "#"
    },

    {
      title: "E-Commerce Website",
      description:
        "An online shopping website with products, cart functionality and a modern user interface.",
      technologies:
        "React.js, Node.js, MongoDB",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="section-title">
        <p>My Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <span>
              {project.technologies}
            </span>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="#">
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;