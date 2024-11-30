import { Helmet } from "react-helmet-async";
import PersonalHeader from "../../Components/Personal-header";
import Footer from "../../Components/Footer";

const FinancialReports = () => {
  return (
    <>
      <Helmet>
        <meta name="title" content="Oops! Page not found" />
        <meta name="description" />
        <title>Oops! Page not found</title>
        <meta property="og:title" content="Oops! Page not found" />
        <meta property="og:url" content="https://mcb.mu/error-pages/404" />
        <meta property="og:site_name" content="MCB Mauritius" />
        <link rel="canonical" href="https://mcb.mu/error-pages/404" />
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
        <div role="main" className="main">
          <div
            className="owl-carousel owl-carousel-top-banner owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-vertical-center dots-align-right dots-orientation-portrait custom-dots-style-1 show-dots-hover show-dots-xs nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover mb-0"
            data-plugin-options="{'autoplayTimeout': 36000000}"
            data-dynamic-height="['650px','650px','650px','550px','500px']"
            style={{ height: 650 }}
          >
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div
                  className="owl-item position-relative overlay overlay-show overlay-op-3"
                  style={{
                    backgroundImage:
                      "url(https://mcb.mu/images/mcb/default-album/search-banner-error-404.jpeg?sfvrsn=4229b3f3_0)",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                >
                  <div className="container position-relative z-index-3 h-100">
                    <div className="row align-items-center h-100">
                      <div className="col pb-4">
                        <h1
                          className="text-color-light w-50 w-100-mobile font-weight-medium text-12 line-height-2 mb-2 appear-animation text-decoration-none"
                          data-appear-animation="fadeInUpShorter"
                          data-appear-animation-delay={500}
                          data-plugin-options="{'minWindowWidth': 0}"
                        >
                          Oops! Page not found
                        </h1>
                        <div className="description">
                          <p>
                            This page might still be in the dark right now but
                            don’t worry, we are working actively to help you see
                            the light soon.
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
    </>
  );
};
export default FinancialReports;
