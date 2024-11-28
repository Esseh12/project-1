import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const DownloadDailyRates = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/tools-calculators/download-daily-rates by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:52:21 GMT */}
        <meta name="title" content="Download daily rates" />
        <title>Download daily rates</title>{" "}
        <meta property="og:title" content="Download daily rates" />
        <meta
          property="og:url"
          content="https://mcb.mu/tools-calculators/download-daily-rates"
        />
        <link rel="canonical" href="/download-daily-rates" />
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
            <div className="component component--spacing-top component--spacing-bottom">
              <div className="grid__row">
                <div className="grid__item grid__item-3-5-large">
                  <div className="grid__row">
                    <div className="grid__item grid__item--collapse grid__item--collapse-bottom content-centered">
                      <p id="Date"></p>
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__item grid__item--collapse content-centered">
                      <h1>Download daily rates</h1>
                    </div>
                  </div>
                  <div className="row mt-35">
                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                      <select
                        id="forexCurrency"
                        name="forexCurrency"
                        data-rule-required="true"
                        className="form-select form-select-md"
                      >
                        <option value="">Select Currency</option>
                        <option value="ALL">All Currencies</option>
                        <option value="AUD">Australia Dollars (AUD)</option>
                        <option value="NOK">
                          Bouvet Island Norway Kroner (NOK)
                        </option>
                        <option value="CAD">Canadian Dollar (CAD)</option>
                        <option value="CNY">China Yuan Renminbi (CNY)</option>
                        <option value="NZD">
                          Cook Islands New Zealand Dollars (NZD)
                        </option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">Great Britain Pound (GBP)</option>
                        <option value="HKD">Hong Kong Dollar (HKD)</option>
                        <option value="INR">India Rupee (INR)</option>
                        <option value="JPY">Japan Yen (JPY)</option>
                        <option value="KES">Kenya Shilling (KES)</option>
                        <option value="MGA">Malagasy Ariary (MGA)</option>
                        <option value="PKR">Pakistan Rupees (PKR)</option>
                        <option value="SAR">Saudi Arabia Riyals (SAR)</option>
                        <option value="SCR">Seychelles Rupees (SCR)</option>
                        <option value="SGD">Singapore Dollars (SGD)</option>
                        <option value="ZAR">South Africa Rand (ZAR)</option>
                        <option value="LKR">Sri Lanka Rupee (LKR)</option>
                        <option value="CHF">Switzerland Franc (CHF)</option>
                        <option value="TZS">Tanzania Shillings (TZS)</option>
                        <option value="AED">UAE Dirham (AED)</option>
                        <option value="USD">United States Dollars (USD)</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="grid__row"
                    id="chartRow"
                    style={{ display: "none" }}
                  >
                    <div className="grid__item grid__item--collapse">
                      <div
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                        }}
                      >
                        <div
                          id="chartContainer"
                          style={{ height: 350, padding: 10 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div id="download">
                    <div className="row">
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label
                          className="form-label mb-1 text-2"
                          htmlFor="forexDateStart"
                        >
                          Starting on
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="forexDateStart"
                          aria-describedby="dateHelp"
                          defaultValue="04/01/2024"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label
                          htmlFor="forexDateEnd"
                          className="form-label mb-1 text-2"
                        >
                          Ending on
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="forexDateEnd"
                          aria-describedby="dateHelp"
                          defaultValue="04/01/2024"
                        />
                      </div>
                    </div>
                    <div className="grid__row mb-5 mt-15">
                      <div className="grid__item grid__item--collapse grid__item--collapse-bottom content-centered">
                        <div className="vertically-aligned" data-eh="true">
                          <div className="form__input-container content-right">
                            <button
                              className="button form__submit btn btn-primary btn-modern pull-right"
                              type="submit"
                              id="buttonId"
                              disabled=""
                            >
                              <span className="button__button button__button--submit">
                                <span>Download</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__row">
                      <div className="grid__item">
                        <div className="rich-text rich-text--full-width content-centered">
                          <hr className="hr--half-margin hr--natural-width" />
                          <p className="h3">Important note about this tool</p>
                          <p>
                            The exchange rates provided by this converter are
                            intended only as a guide. The rates are subject to
                            change at the Bank&#39;s discretion and without
                            notice. Whilst every effort is made to ensure the
                            information is accurate, you should confirm rates
                            with the Bank prior to making any decisions.
                          </p>
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
      {/* Mirrored from mcb.mu/tools-calculators/download-daily-rates by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:52:24 GMT */}
    </>
  );
};
export default DownloadDailyRates;
