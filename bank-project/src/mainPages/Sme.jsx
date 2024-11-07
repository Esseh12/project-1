// main div at the top isn't showing and script tag isn't completed
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Sme = () => {
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
      <meta name="title" content="SME Banking | MCB	" />
      <meta
        name="description"
        content="Explore MCB's SME banking services. We provide financial solutions, resources, and a thriving community for local entrepreneurs to succeed and grow their businesses."
      />{" "}
      <title>SME Banking | MCB</title>{" "}
      <meta property="og:title" content="SME Banking | MCB" />
      <meta
        property="og:description"
        content="Explore MCB's SME banking services. We provide financial solutions, resources, and a thriving community for local entrepreneurs to succeed and grow their businesses."
      />
      <meta
        property="og:image"
        content="https://mcb.mu/images/mcb/sme/banners/sme-lokal-is-beautiful.jpeg?sfvrsn=6e79d86e_1"
      />
      <link rel="canonical" href="/sme" />
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
                      "url(/images/mcb/sme/banners/sme-lokal-is-beautifule6ff.jpeg?sfvrsn=6e79d86e_1)",
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
                          Small Medium Enterprises
                        </h1>
                        <div className="description">
                          <p>Your energy deserves our total commitment.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row link-slider-hp others" data-sf-element="Row">
            <div
              id="Main_C046_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <section className="bg-color-light p-relative z-index-2">
                <div
                  className="cards custom-cards custom-cards-slider home h-auto pt-5 pb-4 container appear-animation"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay={100}
                >
                  <div className="row bg-color-light cards-container d-flex justify-content-center justify-content-xl-between w-100 mb-5 mx-0 box-shadow-1 p-relative top-0">
                    <div
                      className="owl-carousel owl-theme stage-margin nav-style-1 hp"
                      data-plugin-options="{'items': 3 , 'margin': 0, 'loop': false, 'nav': true, 'dots': false, 'stagePadding': 40,'responsive': {'0': {'items': 1, 'loop':true}, '479': {'items': 1, 'loop':true}, '768': {'items': 2, 'loop':true}, '991': {'items': 3, 'loop':true}}}"
                    >
                      <div className=" bg-light p-0 shadow-none">
                        <div className="card border-radius-0 border-0 shadow-none">
                          <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                            <a href="sme/structure.html">
                              <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                Structure
                              </h4>
                            </a>
                            <a href="sme/structure.html">
                              <div className="card-text link-button text-center pt-2">
                                <p>
                                  Take advantage of our unique product offerings
                                  to make better business decisions.
                                </p>
                              </div>
                            </a>
                            <a
                              href="sme/structure.html"
                              className="font-weight-bold text-uppercase text-decoration-none mt-3"
                            >
                              More info
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" bg-light p-0 shadow-none">
                        <div className="card border-radius-0 border-0 shadow-none">
                          <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                            <a href="sme/finance.html">
                              <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                Finance
                              </h4>
                            </a>
                            <a href="sme/finance.html">
                              <div className="card-text link-button text-center pt-2">
                                <p>
                                  We provide you with a wide range of financial
                                  solution to manage your cash flow.
                                </p>
                              </div>
                            </a>
                            <a
                              href="sme/finance.html"
                              className="font-weight-bold text-uppercase text-decoration-none mt-3"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" bg-light p-0 shadow-none">
                        <div className="card border-radius-0 border-0 shadow-none">
                          <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                            <a href="/signup.html">
                              <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                Onboarding
                              </h4>
                            </a>
                            <a href="/signup.html">
                              <div className="card-text link-button text-center pt-2">
                                <p>
                                  Online account opening for local
                                  entrepreneurs.
                                </p>
                              </div>
                            </a>
                            <a
                              href="/signup.html"
                              className="font-weight-bold text-uppercase text-decoration-none mt-3"
                            >
                              Apply now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div
            id="Main_C024_Col00"
            className="sf_colsIn container hp-juice"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C025_Col00"
                className="sf_colsIn col-lg-6 mb-5 order-2 order-sm-2 order-lg-1"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <div className="text-content">
                      <h4 className="sub-title text-dark">Pay+</h4>
                      <h2 className=" text-dark">Safe. Simple. Smart</h2>
                      <ul>
                        <li>
                          A user-friendly touchscreen interface, just like a
                          smartphone
                        </li>
                        <li>
                          Enjoy free data connectivity and the ability to
                          operate without Wi-Fi
                        </li>
                        <li>
                          Accept contactless payments and chip cards with ease
                        </li>
                        <li>
                          Pay+ generates error-free QR codes based on the
                          specified amount, ensuring seamless and accurate
                          transactions
                        </li>
                        <li>
                          Purchase receipts are instantly sent to customers by
                          SMS
                        </li>
                        <li>
                          With its all-day battery life, you can use it without
                          the need to worry about plugging it in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="Main_C025_Col01"
                className="sf_colsIn col-lg-6 order-1 order-sm-1 order-lg-2"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <img
                  loading="lazy"
                  className="mw-100 h-auto"
                  src="images/mcb/sme/assets/sme-payplus03bf3458c377432eb3090164efdd9bb3e81b.png?sfvrsn=c1c877c5_0"
                  title="sme-payplus"
                  alt="sme-payplus"
                />
              </div>
            </div>
          </div>
          <div
            id="Main_C037_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row mt-5" data-sf-element="Row">
              <div
                id="Main_C042_Col00"
                className="sf_colsIn col-lg-12"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h3>Why choose Bank Of Africa SME Banking?</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row why-sme" data-sf-element="Row">
              <div
                id="Main_C038_Col00"
                className="sf_colsIn col-lg-4"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <section className="img-text-cta">
                  <div className="container my-5">
                    <div className="row my-lg-5">
                      <div className="col-lg-12">
                        <span className="thumb-info border-all thumb-info-show-button-hover">
                          <span
                            className="thumb-info-wrapper"
                            style={{
                              backgroundImage:
                                "url(images/mcb/sme/assets/sme-hp-financeb3e5.jpg?sfvrsn=6f67004_1)",
                            }}
                          >
                            <span className="thumb-info-title bg-transparent">
                              <h3 className="card-title mb-4 text-6 font-weight-medium text-light w-50 w-100-mobile">
                                Finance
                              </h3>
                              <p className="card-text font-weight-medium text-light w-75 w-100-mobile">
                                We provide you with a wide range of financial
                                solution to manage your cash flow.
                              </p>
                              <a
                                href="sme/finance.html"
                                target="_self"
                                className="btn btn-more text-light d-flex align-items-center ps-0"
                              >
                                <i
                                  className="icon icon-arrow-right me-2 text-9"
                                  aria-hidden="true"
                                />
                                Learn more
                              </a>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="Main_C038_Col01"
                className="sf_colsIn col-lg-4"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <section className="img-text-cta">
                  <div className="container my-5">
                    <div className="row my-lg-5">
                      <div className="col-lg-12">
                        <span className="thumb-info border-all thumb-info-show-button-hover">
                          <span
                            className="thumb-info-wrapper"
                            style={{
                              backgroundImage:
                                "url(images/mcb/sme/assets/sme-hp-partnerships35f2.jpg?sfvrsn=346ecadd_1)",
                            }}
                          >
                            <span className="thumb-info-title bg-transparent">
                              <h3 className="card-title mb-4 text-6 font-weight-medium text-light w-50 w-100-mobile">
                                Partnerships
                              </h3>
                              <p className="card-text font-weight-medium text-light w-75 w-100-mobile">
                                We are focused on providing innovative products
                                and services that are value-driven.
                              </p>
                              <a
                                href="sme/partnerships.html"
                                target="_self"
                                className="btn btn-more text-light d-flex align-items-center ps-0"
                              >
                                <i
                                  className="icon icon-arrow-right me-2 text-9"
                                  aria-hidden="true"
                                />
                                Learn more
                              </a>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="Main_C038_Col02"
                className="sf_colsIn col-lg-4"
                data-sf-element="Column 3"
                data-placeholder-label="Column 3"
              >
                <section className="img-text-cta">
                  <div className="container my-5">
                    <div className="row my-lg-5">
                      <div className="col-lg-12">
                        <span className="thumb-info border-all thumb-info-show-button-hover">
                          <span
                            className="thumb-info-wrapper"
                            style={{
                              backgroundImage:
                                "url(images/mcb/sme/assets/sme-hp-libf24c.jpg?sfvrsn=1614db38_1)",
                            }}
                          >
                            <span className="thumb-info-title bg-transparent">
                              <h3 className="card-title mb-4 text-6 font-weight-medium text-light w-50 w-100-mobile">
                                Lokal is Beautiful Scheme
                              </h3>
                              <p className="card-text font-weight-medium text-light w-75 w-100-mobile">
                                Good for your business, the country, the planet.
                              </p>
                              <a
                                href="sme/borrow/lokal-is-beautiful.html"
                                target="_self"
                                className="btn btn-more text-light d-flex align-items-center ps-0"
                              >
                                <i
                                  className="icon icon-arrow-right me-2 text-9"
                                  aria-hidden="true"
                                />
                                Learn more
                              </a>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="row" data-sf-element="Row">
            <div
              id="Main_C015_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div className="container py-5">
                <div className="row py-3 justify-content-start">
                  <div className="col-lg-12 ">
                    <h2 className="text-7 font-weight-normal mb-4">
                      Your path to business success
                    </h2>
                  </div>
                  <div className="feature_three row">
                    <div
                      className="col-sm-8 col-md-4 mb-4 mb-md-4 appear-animation animated fadeIn appear-animation-visible"
                      data-appear-animation="fadeIn"
                      style={{ animationDelay: "100ms" }}
                    >
                      <a
                        href="sme/sme-connect/manage-your-business.html"
                        className="text-decoration-none"
                      >
                        <article>
                          <div className="row">
                            <div className="col">
                              <img
                                src="images/mcb/sme/product-features/sme-manage-your-business186c.jpg?sfvrsn=cb39d8f3_1"
                                className="img-fluid hover-effect-2 mb-3"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <h4 className="mb-0">Manage</h4>
                              <p className="mb-2 lead text-4" />
                              <p>
                                Are you dreaming big and aiming for that edge
                                above the competition? Stay on top of your
                                business financial health with our useful guides
                                and expert advice.
                              </p>
                              <p />
                            </div>
                          </div>
                        </article>
                      </a>
                    </div>
                    <div
                      className="col-sm-8 col-md-4 mb-4 mb-md-4 appear-animation animated fadeIn appear-animation-visible"
                      data-appear-animation="fadeIn"
                      style={{ animationDelay: "100ms" }}
                    >
                      <a
                        href="sme/sme-connect/start-your-business.html"
                        className="text-decoration-none"
                      >
                        <article>
                          <div className="row">
                            <div className="col">
                              <img
                                src="images/mcb/sme/product-features/sme-start-your-businessb912.jpg?sfvrsn=898c02a3_1"
                                className="img-fluid hover-effect-2 mb-3"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <h4 className="mb-0">Start</h4>
                              <p className="mb-2 lead text-4" />
                              <p>
                                Thinking of starting your own business and
                                looking for guidance? Use our online resources
                                to build your roadmap to success.
                              </p>
                              <p />
                            </div>
                          </div>
                        </article>
                      </a>
                    </div>
                    <div
                      className="col-sm-8 col-md-4 mb-4 mb-md-4 appear-animation animated fadeIn appear-animation-visible"
                      data-appear-animation="fadeIn"
                      style={{ animationDelay: "100ms" }}
                    >
                      <a href="#" className="text-decoration-none">
                        <article>
                          <div className="row">
                            <div className="col">
                              <img
                                src="images/mcb/sme/product-features/sme-grow-your-business8b9b.jpg?sfvrsn=724307c4_1"
                                className="img-fluid hover-effect-2 mb-3"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <h4 className="mb-0">Grow</h4>
                              <p className="mb-2 lead text-4" />
                              <p>
                                If you’re ready to grow, we’re ready to help.
                                Explore other strategies on how you can capture
                                new business opportunities regionally and
                                internationally.
                              </p>
                              <p />
                            </div>
                          </div>
                        </article>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/sme by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:40:28 GMT */}
    </>
  );
};

export default Sme;
