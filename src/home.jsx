function Home() {
  return (
    <section id="home" className="hero">

      <div className="shape shape-violet"></div>
      <div className="shape shape-sky"></div>
      <div className="shape shape-coral"></div>

      <div className="hero-content">

        <p className="hello">
          Hello, I'm
        </p>

        <h1>
          Shubham Tyagi
        </h1>

        <h2>
          Frontend Developer
        </h2>

        <p className="hero-description">
          I am a BCA student passionate about web development
          and building modern, responsive websites.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;