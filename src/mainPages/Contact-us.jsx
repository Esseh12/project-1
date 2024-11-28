import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/institutional/contact-us by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:25:40 GMT */}
        <meta name="title" content="Contact us" />
        <title>Contact us | MCB</title>
        <meta property="og:title" content="Contact us" />
        <meta
          property="og:url"
          content="https://mcb.mu/institutional/contact-us"
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */} {/* Header */}
        <PersonalHeader />
        {/* Header */}
        <div role="main" className="main no-banner-spacing">
          <div
            id="Main_C001_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C006_Col00"
                className="sf_colsIn col-lg-9"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h1>Contact us</h1>
                    <p>
                      No matter what question you may have, we&#39;re here to
                      help you 24/7.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="Main_C006_Col01"
                className="sf_colsIn col-lg-3"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              ></div>
            </div>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C003_Col00"
                className="sf_colsIn col-lg-6"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h2>Make an enquiry or request assistance</h2>
                    <h6>Questions, Troubleshooting &amp; Support</h6>
                    <p>
                      We want to make sure you have a smooth experience with our
                      products and services. If you are facing any issues or
                      have any queries, please don’t hesitate to contact us. Our
                      teams are ready to assist you with any questions you may
                      have, such as:
                    </p>
                    <ul>
                      <li>
                        You have changed your mobile number and you would like
                        us to update your client profile
                      </li>
                      <li>
                        You would like us to call you back regarding our
                        products or services
                      </li>
                      <li>
                        You have consulted our website and you would like to
                        have more information on our products or services
                      </li>
                    </ul>
                    <div>
                      <br />
                    </div>
                    <p>
                      These are just some examples and we are happy to answer
                      any other questions you may have.
                    </p>
                    <p />
                  </div>
                </div>
                <div data-sf-role="form-container">
                  <input
                    type="hidden"
                    data-sf-role="form-id"
                    defaultValue="d76d9807-c3b8-48d7-bf42-05d34bab12a8"
                    name="FormId"
                  />
                  <input
                    type="hidden"
                    data-sf-role="marketo-settings"
                    defaultValue='{"syncFormFieldsToLeadFields":false,"doSpecificWebCalls":false}'
                    name="MarketoSettings"
                  />
                  <form
                    action="https://mcb.mu/personal/contact-us?sf_cntrl_id=ctl00%24Main%24C002"
                    method="POST"
                    name="defaultFormctl00$Main$C002"
                    encType="multipart/form-data"
                    role="form"
                  >
                    {" "}
                    <div
                      id="C001_Col00"
                      className="sf_colsIn form-content"
                      data-sf-element="Container"
                      data-placeholder-label="Container"
                    >
                      <div
                        className="my-3"
                        data-sf-role="dropdown-list-field-container"
                      >
                        <input
                          type="hidden"
                          data-sf-role="violation-messages"
                          defaultValue='{ "required": "Your Title field input is required"}'
                        />
                        <label className="form-label" htmlFor="Dropdown-1">
                          Your Title
                        </label>
                        <select
                          id="Dropdown-1"
                          data-sf-role="dropdown-list-field-select"
                          name="DropdownListFieldController_0"
                          required="required"
                          className="form-select"
                          aria-required="true"
                          aria-describedby="DropdownErrorMessage-1"
                        >
                          <option value="">...</option>
                          <option value="Miss">Miss</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                        </select>
                        <div
                          id="DropdownErrorMessage-1"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      {/* InputCssClass class variable */}
                      <div className="my-3" data-sf-role="text-field-container">
                        <input
                          data-sf-role="violation-restrictions"
                          type="hidden"
                          defaultValue='{"maxLength":"255", "minLength": "0"}'
                        />
                        <input
                          data-sf-role="violation-messages"
                          type="hidden"
                          defaultValue='{"maxLength":"First name field must be less than 255 characters", "required": "First name field input is required", "invalid": "Entry is not valid!", "regularExpression": "First name field input is invalid"}'
                        />
                        <label className="form-label" htmlFor="Textbox-1">
                          First name
                        </label>
                        <input
                          id="Textbox-1"
                          type="text"
                          className="form-control"
                          name="TextFieldController"
                          defaultValue=""
                          aria-required="true"
                          data-sf-role="text-field-input"
                          required="required"
                          pattern=".{0,255}"
                          aria-describedby="TextboxErrorMessage-1"
                        />
                        <div
                          id="TextboxErrorMessage-1"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      {/* InputCssClass class variable */}
                      <div className="my-3" data-sf-role="text-field-container">
                        <input
                          data-sf-role="violation-restrictions"
                          type="hidden"
                          defaultValue='{"maxLength":"255", "minLength": "0"}'
                        />
                        <input
                          data-sf-role="violation-messages"
                          type="hidden"
                          defaultValue='{"maxLength":"Surname field must be less than 255 characters", "required": "Surname field input is required", "invalid": "Entry is not valid!", "regularExpression": "Surname field input is invalid"}'
                        />
                        <label className="form-label" htmlFor="Textbox-2">
                          Surname
                        </label>
                        <input
                          id="Textbox-2"
                          type="text"
                          className="form-control"
                          name="TextFieldController_0"
                          defaultValue=""
                          aria-required="true"
                          data-sf-role="text-field-input"
                          required="required"
                          pattern=".{0,255}"
                          aria-describedby="TextboxErrorMessage-2"
                        />
                        <div
                          id="TextboxErrorMessage-2"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      <div
                        className="my-3"
                        data-sf-role="email-text-field-container"
                      >
                        <input
                          data-sf-role="violation-restrictions"
                          type="hidden"
                          defaultValue='{"maxLength":"255", "minLength": "0"}'
                        />
                        <input
                          data-sf-role="violation-messages"
                          type="hidden"
                          defaultValue='{"maxLength":"Email field must be less than 255 characters", "required": "Email address is required", "invalid": "Entry is not valid!", "regularExpression": "Email address is invalid"}'
                        />
                        <label className="form-label" htmlFor="Email-1">
                          Email
                        </label>
                        <input
                          id="Email-1"
                          data-sf-role="email-text-field-input"
                          type="email"
                          className="form-control"
                          name="EmailTextFieldController"
                          defaultValue=""
                          aria-required="true"
                          required="required"
                          pattern="^[a-zA-Z0-9.!#$%&'*\+\-/=?^_`{|}~]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$"
                          aria-describedby="TextboxErrorMessage-3"
                        />
                        <div
                          id="EmailErrorMessage-1"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      {/* InputCssClass class variable */}
                      <div className="my-3" data-sf-role="text-field-container">
                        <input
                          data-sf-role="violation-restrictions"
                          type="hidden"
                          defaultValue='{"maxLength":"255", "minLength": "0"}'
                        />
                        <input
                          data-sf-role="violation-messages"
                          type="hidden"
                          defaultValue='{"maxLength":"Telephone field must be less than 255 characters", "required": "Telephone field input is required", "invalid": "Entry is not valid!", "regularExpression": "Telephone field input is invalid"}'
                        />
                        <label className="form-label" htmlFor="Textbox-3">
                          Telephone
                        </label>
                        <input
                          id="Textbox-3"
                          type="number"
                          className="form-control"
                          name="TextFieldController_1"
                          placeholder="Include country code"
                          defaultValue=""
                          aria-required="true"
                          data-sf-role="text-field-input"
                          required="required"
                          pattern="(?=^.{0,255}$)^^[-+]?[0-9]+((,|\.)[0-9]+)?$"
                          aria-describedby="TextboxErrorMessage-4"
                        />
                        <div
                          id="TextboxErrorMessage-4"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      <div
                        className="my-3"
                        data-sf-role="dropdown-list-field-container"
                      >
                        <input
                          type="hidden"
                          data-sf-role="violation-messages"
                          defaultValue='{ "required": "Subject field input is required"}'
                        />
                        <label className="form-label" htmlFor="Dropdown-2">
                          Subject
                        </label>
                        <select
                          id="Dropdown-2"
                          data-sf-role="dropdown-list-field-select"
                          name="DropdownListFieldController_1"
                          required="required"
                          className="form-select"
                          aria-required="true"
                          aria-describedby="DropdownErrorMessage-2"
                        >
                          <option value="">...</option>
                          <option value="Accounts (Current/Savings/Deposits/Foreign)">
                            Accounts (Current/Savings/Deposits/Foreign)
                          </option>
                          <option value="Cards">Cards</option>
                          <option value="Factoring">Factoring</option>
                          <option value="Foreign Exchange Services">
                            Foreign Exchange Services
                          </option>
                          <option value="Internet Banking">
                            Internet Banking
                          </option>
                          <option value="Leasing">Leasing</option>
                          <option value="Loans">Loans</option>
                          <option value="Private Banking">
                            Private Banking
                          </option>
                          <option value="Trade Finance">Trade Finance</option>
                          <option value="Shareholders Info">
                            Shareholders Info
                          </option>
                          <option value="Social Affairs">Social Affairs</option>
                          <option value="Careers">Careers</option>
                          <option value="Others">Others</option>
                        </select>
                        <div
                          id="DropdownErrorMessage-2"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      <div
                        className="my-3"
                        data-sf-role="paragraph-text-field-container"
                      >
                        <input
                          type="hidden"
                          data-sf-role="violation-messages"
                          defaultValue='{"maxLength":"Your comments field input is too long", "required": "Your comments field input is required"}'
                        />
                        <label className="form-label" htmlFor="Textarea-1">
                          Your comments{" "}
                        </label>
                        <textarea
                          id="Textarea-1"
                          className="form-control"
                          rows={4}
                          data-sf-role="paragraph-text-field-textarea"
                          name="ParagraphTextFieldController"
                          required="required"
                          aria-describedby="ParagraphErrorMessage-1"
                          defaultValue={""}
                        />
                        <div
                          id="ParagraphErrorMessage-1"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="check-ul-styling">
                        <div>
                          <a target="_blank" href="https://on.mcb.mu/f2388">
                            Read our Terms and Conditions&nbsp;Governing Data
                            Protection and Processing
                          </a>
                        </div>
                      </div>
                      <fieldset
                        className="my-3"
                        data-sf-role="checkboxes-field-container"
                      >
                        <legend
                          className="form-label fs-6"
                          id="CheckboxGroupLabel-1"
                        >
                          Please confirm
                        </legend>
                        <input
                          type="hidden"
                          data-sf-role="violation-messages"
                          defaultValue='{ "required": "Please confirm This information is required"}'
                        />
                        <input
                          type="hidden"
                          data-sf-role="required-validator"
                          defaultValue="True"
                        />
                        <ul
                          className="list-unstyled"
                          aria-labelledby="CheckboxGroupLabel-1"
                          aria-describedby="CheckboxGroupErrorMessage-1"
                        >
                          <li className="form-check">
                            <label
                              htmlFor="CheckboxesFieldController_1-1"
                              className="form-check-label"
                            >
                              You have read and understood our Terms and
                              Conditions Governing Data Protection and
                              Processing
                            </label>
                            <input
                              type="checkbox"
                              name="CheckboxesFieldController"
                              id="CheckboxesFieldController_1-1"
                              className="form-check-input"
                              defaultValue="You have read and understood our Terms and Conditions Governing Data Protection and Processing"
                              data-sf-role="checkboxes-field-input"
                              role="checkbox"
                              aria-required="true"
                              required="required"
                            />
                          </li>
                        </ul>
                        <div
                          id="CheckboxGroupErrorMessage-1"
                          data-sf-role="error-message"
                          role="alert"
                          aria-live="assertive"
                          className="invalid-feedback"
                        />
                      </fieldset>
                      <div className="my-3">
                        <input
                          type="hidden"
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                        />
                        <input
                          type="hidden"
                          name="action"
                          defaultValue="validate_captcha"
                        />
                        <button type="submit" className="btn btn-primary">
                          Send my enquiry
                        </button>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      defaultValue=""
                      name="sf_antiforgery"
                    />
                    <input
                      type="hidden"
                      defaultValue="/sitefinity/anticsrf"
                      name="antiCsrfService"
                    />
                    <input
                      type="hidden"
                      defaultValue="X-SF-ANTIFORGERY-REQUEST"
                      name="antiCsrfCustomHeaderName"
                    />
                  </form>
                </div>
                <div className="check-ul-styling">
                  <div>
                    <h2>File a complaint</h2>
                    <h6>Issues, Customer Experience &amp; Feedback</h6>
                    <p>
                      If you have received poor customer service or had a less
                      than satisfactory experience with our products or
                      services, we want to know.
                    </p>
                    <p>
                      Please share your experience with us if you have faced any
                      issue or inconvenience, such as:
                    </p>
                    <ul>
                      <li>
                        Your MCB credit or debit card is not working as expected
                      </li>
                      <li>
                        You are unable to transfer money through MCB Juice or
                        Internet Banking
                      </li>
                      <li>
                        You have tried calling the bank for assistance but you
                        did not receive satisfactory service&nbsp;
                      </li>
                    </ul>
                    <div>
                      <br />
                    </div>
                    <p>
                      These are just some examples and we welcome any other
                      feedback you may have.
                    </p>
                    <p>
                      <a
                        href="/file-a-complaint"
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Make a complaint
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="Main_C003_Col01"
                className="sf_colsIn col-lg-6"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <div className="check-ul-styling">
                  <div>
                    <h3>
                      Do you have questions about our products and services?
                    </h3>
                    <p>
                      We have a comprehensive list of frequently asked questions
                      which you might find useful
                    </p>
                    <p>
                      <a
                        href="/personal/help-centre/faq"
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Read our FAQs
                      </a>
                    </p>
                  </div>
                </div>
                <div className="check-ul-styling">
                  <div>
                    <p>
                      If you would prefer to speak to someone directly, you can
                      call us or contact us via WhatsApp 24/7 on
                    </p>
                    <h3>+230 202 6060</h3>
                    <ul>
                      <li>
                        For general enquiries on products and services or to
                        book an appointment in one of our branches
                      </li>
                      <li>To report a lost or stolen card</li>
                      <li>
                        If you have any queries on card merchant authorisation
                        and services
                      </li>
                    </ul>
                    <div>
                      <br />
                    </div>
                    <h3>Email us</h3>
                    <p>
                      <a
                        target="_blank"
                        href="/cdn-cgi/l/email-protection.html#97f4f8f9e3f6f4e3d7faf4f5b9fae2"
                      >
                        <span className="__cf_email__" data-femail="">
                          contact@mcblogin.com
                        </span>
                      </a>
                    </p>
                    <h3>Find us</h3>
                    <p>
                      <a target="_blank" href="/locate-us">
                        Locate your nearest branch or ATM
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/institutional/contact-us by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:25:40 GMT */}
    </>
  );
};
export default ContactUs;
