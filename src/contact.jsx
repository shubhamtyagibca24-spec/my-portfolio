function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="shape shape-violet"></div>
      <div className="shape shape-coral"></div>

      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
    <center>
      <i>
      <p className="contact-text">
        <strong>
        I'm open to internships, opportunities and connecting
        with other developers.
      </strong>
      </p>
      </i>
    </center>
      <div className="contact-icons">

        <a
          href="mailto:shubhamtyagi11hr@gmail.com"
          className="contact-icon"
          title="Email"
        >
          ✉
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-tyagi-009ba4410/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
          title="LinkedIn"
        >
          in
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
          title="GitHub"
        >
          ◉
        </a>

        <a
          href="https://wa.me/916396350342"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
          title="WhatsApp"
        >
          ☎
        </a>

      </div>

    </section>
  );
}

export default Contact;