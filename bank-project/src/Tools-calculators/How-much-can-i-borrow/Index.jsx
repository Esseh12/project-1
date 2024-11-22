import { Helmet } from "react-helmet-async";
import PersonalHeader from "../../Components/Personal-header";
import Footer from "../../Components/Footer";
// fix calculator problem

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/tools-calculators/how-much-can-i-borrow/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:55:14 GMT */}
        <meta name="title" content="Loan Calculator | MCB	" />
        <meta
          name="description"
          content="Calculate potential loan amounts and understand how your personal circumstances impact repayment rates."
        />
        <title>Loan Calculator | MCB</title>
        <meta property="og:title" content="Loan Calculator | MCB" />
        <meta
          property="og:description"
          content="Calculate potential loan amounts and understand how your personal circumstances impact repayment rates."
        />
        <meta
          property="og:url"
          content="https://mcb.mu/tools-calculators/how-much-can-i-borrow"
        />
        <link rel="canonical" href="/how-much-can-i-borrow" />
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
          <div className="row" data-sf-element="Row">
            <div
              id="Main_C001_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div
                id="Main_C002_Col00"
                className="sf_colsIn container"
                data-sf-element="Container"
                data-placeholder-label="Container"
              >
                <div className="tabs tabs-bottom tabs-simple">
                  <ul className="nav nav-tabs justify-content-start">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="/tools-calculators/how-much-can-i-borrow"
                        tabIndex={-1}
                      >
                        How much can I borrow?
                      </a>
                    </li>
                    <li className="nav-item active" role="presentation">
                      <a
                        className="nav-link "
                        href="/tools-calculators/monthly-repayment"
                      >
                        Monthly Repayment
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="borrow-calculator">
                  <div className="row py-4">
                    <div
                      className="col-lg-7 mt-lg-0 appear-animation animated fadeIn appear-animation-visible"
                      data-appear-animation="fadeIn"
                      data-appear-animation-delay={650}
                      style={{ animationDelay: "650ms" }}
                    >
                      <div className="offset-anchor" id="contact-sent" />
                      <h1 className="mt-2 mb-4">How much can I borrow?</h1>
                      <p className="mb-4">
                        The calculator results below are based on the
                        representative APR for the amount you enter. Your actual
                        rates and repayments may differ and will be based on
                        your personal circumstances, the loan amount and term.
                      </p>
                      <form>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label className="form-label mb-1 text-2">
                              I would like to pay monthly(Rs)
                            </label>
                            <input
                              type="number"
                              onChange="calculate();"
                              required=""
                              data-msg-required="Please enter your name."
                              defaultValue={1000}
                              className="form-control text-3 h-auto py-2"
                              id="amount"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label className="form-label mb-1 text-2">
                              And pay it back over(years)
                            </label>
                            <input
                              type="number"
                              onChange="calculate();"
                              required=""
                              data-msg-required="Please enter your name."
                              defaultValue={30}
                              className="form-control text-3 h-auto py-2"
                              id="years"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label className="form-label mb-1 text-2">
                              Interest rate(%)
                            </label>
                            <input
                              type="number"
                              onChange="calculate();"
                              required=""
                              data-msg-required="Please enter your name."
                              defaultValue="5.40"
                              className="form-control text-3 h-auto py-2"
                              id="apr"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-submit calculate mt-4"
                          onClick="calculate();"
                        >
                          Calculate
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="row mb-70">
                    <div className="col-lg-8 mt-lg-5">
                      <div className="loan-cal-result d-none">
                        <p className="output text-6">
                          Total amount you can borrow:
                          <strong>
                            {" "}
                            Rs <span className="output" id="payment" />
                            .00
                          </strong>
                        </p>
                        <p className="output text-6">
                          Total interest amount:{" "}
                          <strong>
                            Rs <span className="output" id="totalinterest" />
                            .00
                          </strong>
                        </p>
                        <p className="output text-6">
                          Total amount payable:{" "}
                          <strong>
                            Rs <span className="output" id="total" />
                            .00
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="disclaimer">
                        <h3>Disclaimer</h3>
                        <p className="text-2 line-height-4">
                          <strong>
                            Interest rates and other relevant parameters are for
                            indicative purposes only and may be subject to
                            change depending on the segment / product.
                          </strong>
                        </p>
                        <p className="text-2 line-height-4">
                          Our loan calculator is an indicative tool and is meant
                          to provide information and estimates based on
                          information provided by you. The bank does not
                          guarantee the accuracy, adequacy and completeness of
                          any information or computation provided. The bank
                          shall not be liable for any errors, inaccuracies,
                          omissions or for any loss or damages suffered by any
                          person in connection with the use of the calculator.
                          Information provided on this calculator does not
                          constitute an offer of finance. Any loan request is
                          subject to assessment against normal lending criteria.
                          The bank reserves the right to change information or
                          features of the product and/or service listed at any
                          time without notice.
                        </p>
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
      {/* Mirrored from mcb.mu/tools-calculators/how-much-can-i-borrow/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:55:16 GMT */}
    </>
  );
};
export default Index;
