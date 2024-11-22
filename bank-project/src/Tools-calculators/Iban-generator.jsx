import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const IbanGenerator = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/tools-calculators/iban-generator by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:25:33 GMT */}
        <meta name="title" content="IBAN Generator" />
        <title>IBAN Generator</title>{" "}
        <meta property="og:title" content="IBAN Generator" />
        <meta
          property="og:url"
          content="https://mcb.mu/tools-calculators/iban-generator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MCB Mauritius" />
        <link rel="canonical" href="iban-generator.html" />
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
            id="Main_C003_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="component component--spacing-top component--spacing-bottom">
              <div className="grid__row">
                <div className="grid__item grid__item-3-5-large">
                  <div className="grid__row">
                    <div className="grid__item grid__item--collapse grid__item--collapse-bottom content-centered">
                      <p className="h5 titlecase" id="date" />
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__item grid__item--collapse">
                      <h2 className="h2 h2--popup content-centered" />
                    </div>
                  </div>
                  <div className="form-group col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="rateDate">Account number</label>
                    <input
                      type="text"
                      id="txtAcctNo"
                      name="txtAcctNo"
                      className="form-control"
                      data-rule-required="true"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6 col-lg-6 display-none">
                    <input type="hidden" id="hdnIBAN" />
                  </div>
                  <div>
                    <div id="iban_result" />
                  </div>
                  <div className="form-group col-sm-12 col-md-6 col-lg-6">
                    <button
                      className="button form__submit btn btn-primary btn-modern pull-right"
                      type="submit"
                      id="btnIBAN"
                    >
                      <span className="button__button button__button--submit">
                        <span>Generate IBAN</span>
                      </span>
                    </button>
                  </div>
                  <div className="form-group col-sm-12 col-md-6 col-lg-6">
                    <button
                      className="button form__submit btn btn-primary btn-modern pull-right"
                      type="submit"
                      id="btnPDF"
                    >
                      <span className="button__button button__button--submit">
                        <span>Download PDF</span>
                      </span>
                    </button>
                  </div>
                  <div className="grid__row">
                    <div className="grid__row">
                      <div className="grid__item">
                        <div className="rich-text rich-text--full-width">
                          <hr className="hr--half-margin hr--natural-width" />
                          <p className="h3 content-centered" />
                        </div>
                      </div>
                    </div>
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
      {/* Mirrored from mcb.mu/tools-calculators/iban-generator by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:25:34 GMT */}
    </>
  );
};
export default IbanGenerator;
