// form doesn't work because it's not connected to the backend
import { useEffect } from "react";
import Header from "../components/Header";

const FileComplaintForm = () => {
  useEffect(() => {
    // External scripts to be loaded dynamically
    const scripts = [
      "ResourcePackages/MCBMU/assets/dist/vendor/plugins/js/plugins.min7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/theme7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/views/view.contact7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/demos/demo-business-consulting-27306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/custom7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/ma5-menu7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/theme.init7306.js?package=MCBMU",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    // Cleanup scripts on component unmount
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <meta name="title" content="File a complaint" />
      <meta property="og:title" content="File a complaint" />
      <link rel="canonical" href="file-a-complaint.html" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* Reusable header component */}
        <Header />
        <div role="main" className="main no-banner-spacing">
          <div
            id="Main_C001_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C003_Col00"
                className="sf_colsIn col-lg-9"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h1>File a complaint</h1>
                    <h6>Issues, Customer Experience &amp; Feedback</h6>
                  </div>
                </div>
              </div>
              <div
                id="Main_C003_Col01"
                className="sf_colsIn col-lg-3"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              ></div>
            </div>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C004_Col00"
                className="sf_colsIn col-lg-6"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
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
                    <p>Please fill in the form below to file your complaint.</p>
                  </div>
                </div>
                <div data-sf-role="form-container">
                  <input
                    type="hidden"
                    data-sf-role="form-id"
                    defaultValue="db030ce8-bd41-49d1-9098-20f46e0e76ca"
                    name="FormId"
                  />
                  <input
                    type="hidden"
                    data-sf-role="marketo-settings"
                    defaultValue='{"syncFormFieldsToLeadFields":false,"doSpecificWebCalls":false}'
                    name="MarketoSettings"
                  />
                  <div
                    data-sf-role="success-message"
                    className="alert alert-success my-3"
                    style={{ display: "none" }}
                  >
                    Thank you for filling out our form.
                  </div>
                  <div
                    data-sf-role="error-message"
                    className="alert alert-danger my-3"
                    style={{ display: "none" }}
                  />
                  <div data-sf-role="loading-img" style={{ display: "none" }}>
                    <div
                      className="spinner-border text-primary my-3"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div data-sf-role="fields-container">
                    <div
                      className="my-3"
                      data-sf-role="dropdown-list-field-container"
                    >
                      <input
                        type="hidden"
                        data-sf-role="violation-messages"
                        defaultValue='{ "required": "Your title field input is required"}'
                      />
                      <label className="form-label" htmlFor="Dropdown-1">
                        Your title
                      </label>
                      <select
                        id="Dropdown-1"
                        data-sf-role="dropdown-list-field-select"
                        name="DropdownListFieldController"
                        className="form-select"
                        aria-required="false"
                        aria-describedby="DropdownErrorMessage-1"
                      >
                        <option selected="" value="- Select -">
                          - Select -
                        </option>
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
                        defaultValue='{"maxLength":"First Name field must be less than 255 characters", "required": "First Name field input is required", "invalid": "Entry is not valid!", "regularExpression": "First Name field input is invalid"}'
                      />
                      <label className="form-label" htmlFor="Textbox-1">
                        First Name
                      </label>
                      <input
                        id="Textbox-1"
                        type="text"
                        className="form-control"
                        name="First_Name"
                        placeholder="First Name"
                        defaultValue=""
                        aria-required="false"
                        data-sf-role="text-field-input"
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
                        defaultValue='{"maxLength":"Last name field must be less than 255 characters", "required": "Last name field input is required", "invalid": "Entry is not valid!", "regularExpression": "Last name field input is invalid"}'
                      />
                      <label className="form-label" htmlFor="Textbox-2">
                        Last name
                      </label>
                      <input
                        id="Textbox-2"
                        type="text"
                        className="form-control"
                        name="Last_name"
                        placeholder="Last name"
                        defaultValue=""
                        aria-required="false"
                        data-sf-role="text-field-input"
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
                        defaultValue='{"maxLength":"Email field must be less than 255 characters", "required": "Email field input is required", "invalid": "Entry is not valid!", "regularExpression": "Email field input is invalid"}'
                      />
                      <label className="form-label" htmlFor="Textbox-3">
                        Email
                      </label>
                      <input
                        id="Textbox-3"
                        type="text"
                        className="form-control"
                        name="Email"
                        placeholder="Email"
                        defaultValue=""
                        aria-required="false"
                        data-sf-role="text-field-input"
                        pattern=".{0,255}"
                        aria-describedby="TextboxErrorMessage-3"
                      />
                      <div
                        id="TextboxErrorMessage-3"
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
                        defaultValue='{"maxLength":"Phone Number field must be less than 255 characters", "required": "Phone Number field input is required", "invalid": "Entry is not valid!", "regularExpression": "Phone Number field input is invalid"}'
                      />
                      <label className="form-label" htmlFor="Textbox-4">
                        Phone Number
                      </label>
                      <input
                        id="Textbox-4"
                        type="text"
                        className="form-control"
                        name="Phone_Number"
                        placeholder="Phone Number"
                        defaultValue=""
                        aria-required="false"
                        data-sf-role="text-field-input"
                        pattern=".{0,255}"
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
                      data-sf-role="paragraph-text-field-container"
                    >
                      <input
                        type="hidden"
                        data-sf-role="violation-messages"
                        defaultValue='{"maxLength":"Message field input is too long", "required": "Message field input is required"}'
                      />
                      <label className="form-label" htmlFor="Textarea-1">
                        Message{" "}
                      </label>
                      <textarea
                        id="Textarea-1"
                        className="form-control"
                        rows={4}
                        data-sf-role="paragraph-text-field-textarea"
                        name="Message"
                        placeholder="Message"
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
                          <label htmlFor="TNC_1-1" className="form-check-label">
                            You have read and understood our Terms and
                            Conditions Governing Data Protection and Processing
                          </label>
                          <input
                            type="checkbox"
                            name="TNC"
                            id="TNC_1-1"
                            className="form-check-input"
                            defaultValue="You have read and understood our Terms and Conditions Governing Data Protection and Processing"
                            data-sf-role="checkboxes-field-input"
                            role="checkbox"
                            aria-required="true"
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
                    <fieldset
                      className="my-3"
                      data-sf-role="checkboxes-field-container"
                    >
                      <legend
                        className="form-label fs-6"
                        id="CheckboxGroupLabel-2"
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
                        aria-labelledby="CheckboxGroupLabel-2"
                        aria-describedby="CheckboxGroupErrorMessage-2"
                      >
                        <li className="form-check">
                          <label
                            htmlFor="Acknowledge_1-1"
                            className="form-check-label"
                          >
                            You acknowledge that The Mauritius Commercial Bank
                            Ltd (“Bank”) is not obliged to perform an audit,
                            verification or similar review of the information
                            imparted to the Bank (“Information”) in furtherance
                            of the present complaint. In this respect, the Bank
                            shall not, in any circumstance whatsoever, (i) be
                            held responsible for any delay in the processing of
                            the Complaint, or the outcome following any
                            assessment of the Information, and (ii) be liable
                            for any damage or loss which may result from the
                            inaccuracy or incompleteness of the Information.
                          </label>
                          <input
                            type="checkbox"
                            name="Acknowledge"
                            id="Acknowledge_1-1"
                            className="form-check-input"
                            defaultValue="You acknowledge that The Mauritius Commercial Bank Ltd (“Bank”) is not obliged to perform an audit, verification or similar review of the information imparted to the Bank (“Information”) in furtherance of the present complaint. In this respect, the Bank shall not, in any circumstance whatsoever, (i) be held responsible for any delay in the processing of the Complaint, or the outcome following any assessment of the Information, and (ii) be liable for any damage or loss which may result from the inaccuracy or incompleteness of the Information."
                            data-sf-role="checkboxes-field-input"
                            role="checkbox"
                            aria-required="true"
                          />
                        </li>
                      </ul>
                      <div
                        id="CheckboxGroupErrorMessage-2"
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
                        Submit
                      </button>
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
                  </div>
                  <input
                    type="hidden"
                    data-sf-role="ajax-submit-url"
                    defaultValue="/webapi/misc/LogComplain2"
                  />
                  <input type="hidden" data-sf-role="redirect-url" />
                  <input
                    type="hidden"
                    data-sf-role="widget-id"
                    defaultValue="f6a828a6-4d0d-40c8-9e73-5363c2004bab"
                    name="WidgetId"
                  />
                </div>
              </div>
              <div
                id="Main_C004_Col01"
                className="sf_colsIn col-lg-6"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <div className="check-ul-styling">
                  <div>
                    <h2>Complaints escalation process</h2>
                    <p>
                      Should you be unsatisfied with the outcome at the end of
                      the investigation, you may put your complaint in writing
                      to our Complaints Officer on{" "}
                      <a
                        target="_blank"
                        href="cdn-cgi/l/email-protection.html#97f4f8fae7fbfef6f9f4f2baf4f8fae7fbf6fef9e3e4d7faf4f5b9fae2"
                      >
                        <span
                          className="__cf_email__"
                          data-femail="97f4f8fae7fbfef6f9f4f2baf4f8fae7fbf6fef9e3e4d7faf4f5b9fae2"
                        >
                          contact@mcblogin.com
                        </span>
                        &nbsp;
                      </a>
                    </p>
                    <h4>Appeal process</h4>
                    <p>
                      Should the outcome not meet your expectations, a final
                      appeal may then be escalated to our Complaints Manager on{" "}
                      <a
                        target="_blank"
                        href="cdn-cgi/l/email-protection.html#bdded2d0cdd1d4dcd3ded890ded2d0cdd1dcd4d3c9ced0dcd3dcdad8d0d8d3c9fdd0dedf93d0c8"
                      >
                        <span
                          className="__cf_email__"
                          data-femail="5b3834362b37323a35383e763834362b373a32352f28363a353a3c3e363e352f1b36383975362e"
                        >
                          contact@mcblogin.com
                        </span>
                      </a>
                    </p>
                    <h4>
                      Escalation to the Office of the Ombudsperson for Financial
                      Services&nbsp;
                    </h4>
                    <p>
                      Should the ultimate outcome not meet your expectations or
                      should you not receive a reply after a period of 10 days
                      as from the date the complaint was made, you may escalate
                      your complaint to:&nbsp;
                    </p>
                    <p>
                      The Office of the Ombudsperson for Financial
                      Services,&nbsp;
                      <br />
                      8th floor, SICOM Tower,&nbsp;
                      <br />
                      Wall Street, Ebene Cybercity&nbsp;
                      <br />
                      Phone: (230) 460 0473 or 460 0474
                      <br />
                      Fax: (230) 468 6473
                      <br />
                      Email:{" "}
                      <a
                        target="_blank"
                        href="cdn-cgi/l/email-protection.html#ea8587889f8e999a8f989985848c99aa858c99878b9f98839e839f99c485988d"
                      >
                        <span
                          className="__cf_email__"
                          data-femail="543b3936213027243126273b3a3227143b3227393521263d203d21277a3b2633"
                        >
                          contact@mcblogin.com
                        </span>
                      </a>
                      <br />
                      Website:{" "}
                      <a
                        href="https://ofsmauritius.govmu.org/"
                        target="_blank"
                        data-sf-ec-immutable=""
                      >
                        https://ofsmauritius.govmu.org
                      </a>
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div className="check-ul-styling">
                  <div>
                    <h3>
                      Do you have questions about our products and services?
                    </h3>
                    <p>
                      We have a comprehensive list of frequently asked questions
                      which you might find useful. If you are facing any issues
                      or have any queries, please don’t hesitate to contact us.
                    </p>
                    <p>
                      <a
                        href="personal/help-centre/faq.html"
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Read our FAQs
                      </a>
                      &nbsp; &nbsp;&nbsp;
                      <a
                        href="https://mcbmu-aut.sitefinity.cloud/mauritius/personal/contact-us"
                        target="_blank"
                        data-sf-ec-immutable=""
                        className="btn btn-primary"
                      >
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <footer
          id="footer"
          className="footer-top-border without-border bg-color-light-scale-1 pt-0 mt-0"
        ></footer>{" "}
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/file-a-complaint by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:38:48 GMT */}
    </>
  );
};

export default FileComplaintForm;
