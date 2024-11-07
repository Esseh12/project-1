import { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const ApplyingForAHomeLoanDocumentsYouWillNeed = () => {
  useEffect(() => {
    // External scripts to be loaded dynamically
    const scripts = [
      "/ResourcePackages/MCBMU/assets/dist/vendor/plugins/js/plugins.min7306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/theme7306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/views/view.contact7306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/demos/demo-business-consulting-27306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/custom7306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/ma5-menu7306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/theme.init7306.js?package=MCBMU",
      "/ResourcePackages/MCBMU/assets/dist/js/card7306.js?package=MCBMU",
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
      <meta name="title" content="Home Loan Documentation Guide | MCB" />
      <meta
        name="description"
        content="With quick approval times, competitive rates, and attractive repayment terms, the MCB home loan (Housing Loan) can help you to buy your dream home! Apply today!"
      />
      <title>Home Loan Documentation Guide | MCB</title>{" "}
      <meta property="og:title" content="Home Loan Documentation Guide | MCB" />
      <meta
        property="og:description"
        content="With quick approval times, competitive rates, and attractive repayment terms, the MCB home loan (Housing Loan) can help you to buy your dream home! Apply today!"
      />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/loans/home-loan/applying-for-a-home-loan-documents-you-will-need"
      />
      <link
        rel="canonical"
        href="/personal/loans/home-loan/applying-for-a-home-loan-documents-you-will-need"
      />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* reusable header component */}
        <Header />
        <div role="main" className="main">
          <section
            className="banner-small custom-bg-color-light-2 position-relative border-0 pb-sm-0 pt-lg-4 m-0 mt-80"
            style={{
              backgroundImage:
                "url(../../../images/mcb/personal/banners/personal-first-time-buyer-banner4a26.jpeg?sfvrsn=2bad7a59_0)",
            }}
          >
            <div className="overlay" />
            <div className="container position-relative custom-negative-margin-1 z-index-3 pb-lg-5 pb-sm-0 mb-lg-3">
              <div className="row d-flex">
                <div
                  className="col-lg-6 mb-5 mb-lg-0 appear-animation order-2 order-lg-1"
                  data-appear-animation="fadeInRightShorter"
                  data-appear-animation-delay={450}
                >
                  <h1
                    className="text-color-dark font-weight-semi-bold text-10 line-height-1 mb-3 pe-5 me-5"
                    style={{ color: "#ffffff!important" }}
                  >
                    What you&#39;ll need when applying for a Home Loan
                  </h1>
                  <p
                    className="lead line-height-2 text-4 pe-5 mb-4 pb-2"
                    style={{ color: "#ffffff!important" }}
                  >
                    Whether you&#39;re a first-time buyer, expanding your
                    property portfolio, or planning a renovation, we guide you
                    through the checklist of documents needed for your
                    application.
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-start order-1 order-lg-2"></div>
              </div>
            </div>
          </section>
          <div
            id="Main_C002_Col00"
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
                    <h2>Acquisition (House, apartment or land)</h2>
                    <ul>
                      <li>
                        Identification documents (Proof of address / Proof of
                        identification / Birth certificate / Wedding
                        certificate)
                      </li>
                      <li>Last 3 pay slips / MRA return / Financial (OTC)</li>
                      <li>Confirmation letter (if applicable)</li>
                      <li>
                        Bank statement (last 12 months at least) if not banking
                        with MCB
                      </li>
                      <li>PDV/Seller’s contract (Title deed)</li>
                      <li>Site and location plan / PIN</li>
                      <li>Equifax or equivalent (For foreigners)</li>
                      <li>
                        Letter of consent from syndic (Applicable for an
                        apartment)
                        <br />
                      </li>
                    </ul>
                    <h2>&nbsp;</h2>
                    <h2>
                      Construction, extension or renovation
                      <br />
                    </h2>
                    <ul>
                      <li>
                        Identification documents (Proof of address / Proof of
                        identification / Birth certificate / Wedding
                        certificate)
                      </li>
                      <li>Last 3 pay slips / MRA return / Financial (OTC)</li>
                      <li>Confirmation letter (if applicable)</li>
                      <li>
                        Bank statement (last 12 months at least) if not banking
                        with MCB
                      </li>
                      <li>PDV/Seller’s contract (Title deed)</li>
                      <li>Site and location plan / PIN</li>
                      <li>Quotation</li>
                      <li>Building permit</li>
                      <li>Construction plan</li>
                      <li>Equifax or equivalent (For foreigners)</li>
                    </ul>
                    <h2>&nbsp;</h2>
                    <h2>Refinancing</h2>
                    <ul>
                      <li>
                        Identification documents (Proof of address / Proof of
                        identification / Birth certificate / Wedding
                        certificate)
                        <br />
                      </li>
                      <li>Last 3 pay slips / MRA return / Financial (OTC)</li>
                      <li>Confirmation letter (if applicable)</li>
                      <li>
                        Bank statement (last 12 months at least) if not banking
                        with MCB
                      </li>
                      <li>Title deed</li>
                      <li>Site and location plan / PIN</li>
                    </ul>
                    <div>
                      <br />
                    </div>
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
                id="Main_C005_Col00"
                className="sf_colsIn col-lg-12"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="card card-cta-red border-radius-0 bg-color-light box-shadow-1 box-shadow-1-hover">
                        <div className="card-body">
                          <h3 className="card-title mb-1  font-weight-normal text-7 text-transform-none">
                            Ready to apply for a Home Loan?
                          </h3>
                          <p className="card-text mt-3 lead font-weight-medium text-4">
                            You have a clear goal, checked your eligibility, and
                            gathered your documents. Now, let us guide you
                            through our seamless Home Loan application process.
                          </p>
                          <a
                            href="https://app.mcb.mu/app/borrow/app/?product=HOME"
                            target="_blank"
                            className="mb-1 mt-1 me-1 btn btn-primary"
                          >
                            Apply now{" "}
                            <i className="fas fa-angle-right icons ms-1" />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* reusable footer component*/}
        <Footer />
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/loans/home-loan/applying-for-a-home-loan-documents-you-will-need by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 07:17:07 GMT */}
    </>
  );
};
export default ApplyingForAHomeLoanDocumentsYouWillNeed;
