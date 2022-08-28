import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="about-info">
        <div className="about">
          <h5>About</h5>
          <p>
            Mark Maksi is a Syrian young polymath. He is a NASM certified
            Personal Trainer with a MSc in Medical Biotechnologies.
          </p>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <p>
            If you have any questions, please don't hesitate to contact me. I'll
            reaach out to you ASAP.
          </p>
          <a href="mailto:artistoflife74@gmail.com" className="contact-email">
            mmaksi.dev@gmail.com
          </a>
        </div>
      </div>
      <div className="social-info">
        <h5>Follow</h5>
        <div className="social-links">
          <a href="www.facebook.com" className="facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="www.instagram.com" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="www.twitter.com" className="twitter">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="www.youtube.com" className="youtube">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
