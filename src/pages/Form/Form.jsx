import "./Form.scss"

const Form = () => {
  return (
    <section id="subscribe">
      <p> Join our newsletter & sculpt the body of your dream!</p>
      <form>
        <div class="form-div subscribe-name">
          <label>Enter your name:</label>
          <input
            type="text"
            name="formName"
            id="formName"
            placeholder="Your name"
          />
        </div>
        <div class="form-div subscribe-email">
          <label>Enter your e-mail:</label>
          <input
            name="formEmail"
            id="formEmail"
            placeholder="example@example.com"
          />
        </div>
        {/* <div class="popup">
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
        </div> */}
      </form>
    </section>
  )
}

export default Form