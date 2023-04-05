import "./contact.css";

const Contact = () => {
  return (
    <div>
    
      <form id="contact" action="" method="post">
        <h3>Colorlib Contact Form</h3>
        <h4>Contact us for custom quote</h4>
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabIndex={1}
            required=""
            autofocus=""
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            tabIndex={2}
            required=""
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabIndex={3}
            required=""
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Web Site (optional)"
            type="url"
            tabIndex={4}
            required=""
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            tabIndex={5}
            required=""
            defaultValue={""}
          />
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
        <p className="copyright">
          Designed by{" "}
          <a href="https://colorlib.com" target="_blank" title="Colorlib">
            Colorlib
          </a>
        </p>
      </form>
    </div>
  );
};

export default Contact;
