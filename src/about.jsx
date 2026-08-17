import myPhoto from "./assets/photo 3.png";

function About() {
  return (
    <section id="about" className="section about">

      <div className="shape shape-sky"></div>
      <div className="shape shape-coral"></div>

      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image-box">
          <div className="about-image-border"></div>

          <img
            src={myPhoto}
            alt="Shubham Tyagi"
            className="about-image"
          />
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-content">

          <p className="about-small-title">
            ABOUT ME
          </p>

          <h2>
            I'm <span>Shubham Tyagi</span>
          </h2>

          <h3>
            Frontend Developer
          </h3>

          <p className="about-description">
            I'm a BCA student passionate about web development
            and creating modern, responsive and user-friendly
            websites.
          </p>

          <p className="about-description">
            I enjoy working with HTML, CSS, JavaScript and React.
            I'm continuously improving my development skills and
            looking for opportunities to learn, build and
            contribute to real-world projects.
          </p>

          {/* INFORMATION */}
          <div className="about-info">

            <div>
              <strong>Name</strong>
              <span>Shubham Tyagi</span>
            </div>

            <div>
              <strong>Education</strong>
              <span>BCA</span>
            </div>

            <div>
              <strong>Role</strong>
              <span>Frontend Developer</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Agra, India</span>
            </div>

          </div>

          <a
            href="#contact"
            className="about-button"
          >
            Let's Connect →
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;