import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const ForeignExchangeConvertor = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/tools-calculators/foreign-exchange-convertor by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 07:10:34 GMT */}
        <meta name="title" content="Cross Currency Exchange Calculator | MCB	" />
        <meta
          name="description"
          content="Calculate approximate currency conversion rates from one foreign currency to another using our cross-currency exchange calculator."
        />
        <title>Cross Currency Exchange Calculator | MCB</title>
        <meta
          property="og:title"
          content="Cross Currency Exchange Calculator | MCB"
        />
        <meta
          property="og:description"
          content="Calculate approximate currency conversion rates from one foreign currency to another using our cross-currency exchange calculator."
        />
        <meta
          property="og:url"
          content="https://mcb.mu/tools-calculators/foreign-exchange-convertor"
        />
        <link rel="canonical" href="/foreign-exchange-convertor" />
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
                <h1>Foreign exchange calculator</h1>
              </div>
            </div>
            <div className="component component--collapsed component--collapse-spacing">
              <div className="component component--collapsed component--collapse-spacing">
                <div className="grid__row">
                  <div className="grid__item grid__item-1-5-large visible-at-large"></div>
                  <div className="grid__item grid__item-3-5-large">
                    <div className="grid__row">
                      <div className="grid__item grid__item--collapse grid__item--collapse-bottom content-centered">
                        <p className="h5" id="Date" />
                      </div>
                    </div>
                    <div className="grid__row">
                      <div className="grid__item grid__item--collapse content-centered">
                        <p className="h2 h2--popup"> Cross Currencies</p>
                        <p>
                          Evaluate approximately the amount you will receive in
                          return from your conversion in foriegn currencies and
                          acknowledge the disclaimer below.
                        </p>
                      </div>
                    </div>
                    <div id="calculator">
                      <div className="grid__row">
                        <div className="grid__item grid__item--collapse content-centered">
                          <p className="h3">Please Select Currencies</p>
                        </div>
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="fromCurrency">From</label>
                        <select
                          id="FromCurrency"
                          name="FromCurrency"
                          required="true"
                          className="form-select form-select-md"
                        >
                          <option value="">Select Currency</option>
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
                          <option value="USD">
                            United States Dollars (USD)
                          </option>
                        </select>
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="forexCurrency1">To</label>
                        <select
                          id="ToCurrency"
                          name="ToCurrency"
                          required="true"
                          className="form-select form-select-md"
                        >
                          <option value="">Select Currency</option>
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
                          <option value="USD">
                            United States Dollars (USD)
                          </option>
                        </select>
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="convertamount">Convert Amount</label>
                        <input
                          type="number"
                          id="convertamount"
                          name="convertamount"
                          min={1}
                          className="form-control"
                          data-rule-required="true"
                        />
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="rateDate">With the rate* of</label>
                        <input
                          type="date"
                          id="rateDate"
                          name="rateDate"
                          className="form-control"
                          data-rule-required="true"
                          defaultValue="03/01/2024"
                        />
                      </div>
                      <div className="grid__row" data-equal="[data-eh]">
                        <div className="grid__item grid__item--collapse grid__item-3-5-medium"></div>
                        <div
                          className="grid__item grid__item--collapse grid__item-2-5-medium"
                          data-eh="true"
                        >
                          <div className="form__input-container content-right">
                            <button
                              className="button form__submit btn btn-primary btn-modern pull-right"
                              type="submit"
                              id="btnConvert"
                            >
                              <span className="button__button button__button--submit">
                                <span>Convert</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="result"></div>
                    <div className="rich-text rich-text--full-width content-left">
                      <p>* MCB Indicative Foreign Exchange Rates</p>
                    </div>
                    <hr className="hr--half-margin hr--natural-width" />
                    <br />
                    <div className="grid__row">
                      <div className="grid__row">
                        <div className="grid__item">
                          <div className="rich-text rich-text--full-width content-centered">
                            <p className="h3">Important note about this tool</p>
                            <p>
                              The exchange rates provided by this converter are
                              indicative only. At no time should they be
                              considered as equivalent to the rates applied by
                              the bank. Customers should therefore contact bank
                              officials for the market rate prior to entering
                              into any firm transaction. It is understood and
                              agreed that under no circumstances whatsoever
                              shall MCB be liable for any direct/indirect or
                              consequential loss arising from the use of these
                              rates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="cType" id="cType" />
                <input type="hidden" name="cText" id="cText" />
                <input type="hidden" name="cText1" id="cText1" />
                <input type="hidden" name="pText" id="pText" />
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
      {/* Mirrored from mcb.mu/tools-calculators/foreign-exchange-convertor by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 07:10:51 GMT */}
    </>
  );
};
export default ForeignExchangeConvertor;
