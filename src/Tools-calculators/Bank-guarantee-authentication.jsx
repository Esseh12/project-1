import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const BankGuaranteeAuthentication = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/tools-calculators/bank-guarantee-authentication by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 07:10:19 GMT */}
        <meta name="title" content="Bank Guarantee Authentication | MCB	" />
        <meta
          name="description"
          content="Verify the authenticity of your bank guarantee by entering the reference, amount, currency, issue date, and expiry date in the fields provided."
        />
        <title>Bank Guarantee Authentication | MCB</title>
        <meta
          property="og:title"
          content="Bank Guarantee Authentication | MCB"
        />
        <meta
          property="og:description"
          content="Verify the authenticity of your bank guarantee by entering the reference, amount, currency, issue date, and expiry date in the fields provided."
        />
        <meta
          property="og:url"
          content="https://mcb.mu/tools-calculators/bank-guarantee-authentication"
        />
        <link rel="canonical" href="/bank-guarantee-authentication" />
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
            <div className="check-ul-styling">
              <div>
                <h1>Bank guarantee authentication</h1>
                <p>
                  In case you would like to ensure the genuineness of your
                  guarantee, please fill in the fields below.
                </p>
              </div>
            </div>
            <div className="component" id="formcal">
              <div className="component__inner">
                <div className="grid__row">
                  <div className="grid__item">
                    <div className="form-container form-container--bordered form-container--bordered-at-large form-container--collapse-at-small-only">
                      <div className="form-container__inner">
                        <div id="repayment-calculator">
                          <div className="repayment-calculator__inner">
                            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                              <label htmlFor="guaRef">
                                Guarantee Reference
                              </label>
                              <input
                                type="text"
                                id="txtRNumber"
                                name="txtRNumber"
                                className="form-control"
                                data-rule-required="true"
                                defaultValue=""
                                maxLength={12}
                              />
                            </div>
                            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                              <label htmlFor="rateDate">Guarantee Amount</label>
                              <input
                                type="number"
                                name="txtAmount"
                                id="txtAmount"
                                className="form-control"
                                placeholder=""
                                defaultValue=""
                                rel=""
                                data-rule-required="true"
                              />
                            </div>
                            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                              <label htmlFor="rateDate">Currency</label>
                              <input
                                type="text"
                                id="txtCurrency"
                                name="txtCurrency"
                                className="form-control"
                                data-rule-required="true"
                                defaultValue=""
                                maxLength={3}
                              />
                            </div>
                            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                              <label htmlFor="rateDate">
                                Guarantee date Date
                              </label>
                              <input
                                type="date"
                                id="txtvalueDate"
                                name="txtvalueDate"
                                className="form-control"
                                data-rule-required="true"
                                max="2024-01-04"
                              />
                            </div>
                            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                              <label htmlFor="rateDate">
                                Guarantee Expiry Date
                              </label>
                              <input
                                type="date"
                                id="txtendDate"
                                name="txtendDate"
                                className="form-control"
                                data-rule-required="true"
                              />
                            </div>
                            <div
                              className="grid__row errMsg"
                              style={{ display: "none" }}
                            >
                              <div className="grid__item">
                                <p>
                                  <span className="icon--error" />
                                  <span className="icon-label" />
                                </p>
                              </div>
                            </div>
                            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                              <button
                                className="button form__submit btn btn-primary btn-modern pull-right"
                                type="submit"
                                id="btnSubmit"
                              >
                                <span className="button__button button__button--submit">
                                  <span>Submit</span>
                                </span>
                              </button>
                            </div>
                            <div id="bankResult" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End form calculation*/}
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/tools-calculators/bank-guarantee-authentication by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 07:10:34 GMT */}
    </>
  );
};
export default BankGuaranteeAuthentication;
