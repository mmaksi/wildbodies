import "./Form.scss";

const Form = () => {
  return (
    <section id="subscribe">
      <p> Join our newsletter & sculpt the body of your dream!</p>
      <form>
        <div className="form-div subscribe-name">
          <label>Enter your name:</label>
          <input
            type="text"
            name="formName"
            id="formName"
            placeholder="Your name"
          />
        </div>
        <div className="form-div subscribe-email">
          <label>Enter your e-mail:</label>
          <input
            name="formEmail"
            id="formEmail"
            placeholder="example@example.com"
          />
        </div>
        <button type="submit" className="newsletter-btn">
          Join Us!
        </button>
      </form>
    </section>
  );
};

export default Form;
