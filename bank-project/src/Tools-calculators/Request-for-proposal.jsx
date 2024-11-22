import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const RequestForProposal = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/tools-calculators/request-for-proposal by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:25:34 GMT */}
        <meta name="title" content="Request for proposal" />
        <title>Request for proposal</title>
        <meta property="og:title" content="Request for proposal" />
        <meta
          property="og:url"
          content="https://mcb.mu/tools-calculators/request-for-proposal"
        />
        <link rel="canonical" href="/request-for-proposal" />
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
        {/* End Google Tag Manager (noscript) */}
        {/* Header */}
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
                id="Main_C002_Col00"
                className="sf_colsIn col-lg-9"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h1>Request for proposal</h1>
                  </div>
                </div>
              </div>
              <div
                id="Main_C002_Col01"
                className="sf_colsIn col-lg-3"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              ></div>
            </div>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C003_Col00"
                className="sf_colsIn col-lg-8"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div data-sf-role="form-container">
                  <input
                    type="hidden"
                    data-sf-role="form-id"
                    defaultValue="4a6bf4e9-1307-41de-a489-0751e432a9fd"
                    name="FormId"
                  />
                  <input
                    type="hidden"
                    data-sf-role="marketo-settings"
                    defaultValue='{"syncFormFieldsToLeadFields":false,"doSpecificWebCalls":false}'
                    name="MarketoSettings"
                  />
                  <form
                    action="https://mcb.mu/tools-calculators/request-for-proposal?sf_cntrl_id=ctl00%24Main%24C005"
                    method="POST"
                    name="defaultFormctl00$Main$C005"
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
                          defaultValue='{"maxLength":"Company / Organisation Name field must be less than 255 characters", "required": "Company / Organisation Name field input is required", "invalid": "Entry is not valid!", "regularExpression": "Company / Organisation Name field input is invalid"}'
                        />
                        <label className="form-label" htmlFor="Textbox-3">
                          Company / Organisation Name
                        </label>
                        <input
                          id="Textbox-3"
                          type="text"
                          className="form-control"
                          name="TextFieldController_2"
                          defaultValue=""
                          aria-required="true"
                          data-sf-role="text-field-input"
                          required="required"
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
                          aria-describedby="TextboxErrorMessage-4"
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
                        <label className="form-label" htmlFor="Textbox-4">
                          Telephone
                        </label>
                        <input
                          id="Textbox-4"
                          type="number"
                          className="form-control"
                          name="TextFieldController_1"
                          placeholder="Include country code"
                          defaultValue=""
                          aria-required="true"
                          data-sf-role="text-field-input"
                          required="required"
                          pattern="(?=^.{0,255}$)^^[-+]?[0-9]+((,|\.)[0-9]+)?$"
                          aria-describedby="TextboxErrorMessage-5"
                        />
                        <div
                          id="TextboxErrorMessage-5"
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
                          defaultValue='{ "required": "Industry field input is required"}'
                        />
                        <label className="form-label" htmlFor="Dropdown-2">
                          Industry
                        </label>
                        <select
                          id="Dropdown-2"
                          data-sf-role="dropdown-list-field-select"
                          name="DropdownListFieldController"
                          required="required"
                          className="form-select"
                          aria-required="true"
                          aria-describedby="DropdownErrorMessage-2"
                        >
                          <option value="">- Select -</option>
                          <option value="Banking">Banking</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Energy and commodities">
                            Energy and commodities
                          </option>
                          <option value="Financial services">
                            Financial services
                          </option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Infrastructure">Infrastructure</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Others">Others</option>
                          <option value="Professional services">
                            Professional services
                          </option>
                          <option value="Public sector">Public sector</option>
                          <option value="Real estate">Real estate</option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Utilities">Utilities</option>
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
                          defaultValue='{"maxLength":"RFP Instructions / Other Remarks field input is too long", "required": "RFP Instructions / Other Remarks field input is required"}'
                        />
                        <label className="form-label" htmlFor="Textarea-1">
                          RFP Instructions / Other Remarks{" "}
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
                      <div
                        className="my-3"
                        data-sf-role="file-field-container"
                        data-sf-config='{"AllowMultipleFiles":false,"AcceptedFileTypes":[".jpg",".jpeg",".png",".gif",".bmp",".pdf",".doc",".docx",".ppt",".pptx",".pps",".ppsx",".xls",".xlsx"],"IsRequired":false,"MinFileSizeInMb":0,"MaxFileSizeInMb":5}'
                      >
                        <label className="form-label" htmlFor="FileUpload-1">
                          Upload file(s)
                        </label>
                        <div data-sf-role="file-field-inputs"></div>
                        <div
                          className="invalid-feedback"
                          role="alert"
                          aria-live="assertive"
                          data-sf-role="required-violation-message"
                          style={{ display: "none" }}
                        >
                          This field is required
                        </div>
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
                          Send RFP
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
              </div>
              <div
                id="Main_C003_Col01"
                className="sf_colsIn col-lg-4"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              ></div>
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
      {/* Mirrored from mcb.mu/tools-calculators/request-for-proposal by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:25:34 GMT */}
    </>
  );
};
export default RequestForProposal;
