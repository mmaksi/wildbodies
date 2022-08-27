import "./Form.scss"

const Form = () => {
  return (
    <section id="subscribe">
      <div class="form-paragraph">
        <p class="subscribe-paragraph">
          Join our newsletter for the latest updates about the fitness industry!
        </p>
      </div>
      <form
        class="subscribe-form"
        id="subscribe-form"
        onsubmit="catchSubscription(event)"
      >
        <div class="subscribe-name">
          <label>Enter your name:</label> <br />
          <input
            type="text"
            name="formName"
            id="formName"
            placeholder="Your name"
          />
        </div>
        <div class="subscribe-email">
          <label>Enter your e-mail:</label> <br />
          <input
            name="formEmail"
            id="formEmail"
            placeholder="example@example.com"
          />
          <br />
        </div>
        <div class="popup">
          <button type="submit" class="btn subscribe-btn-top">SUBSCRIBE!</button>
          <div class="popuptext hidden" id="success">
            <p>Thank you for choosing to be part of WILDBOIDES.</p>
          </div>
          <div class="popuptext-empty-error hidden" id="error">
            <p>Please fill empty fields</p>
          </div>
          <div class="popuptext-empty-error hidden" id="invalidEmail">
            <p>Invalid E-mail address</p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form