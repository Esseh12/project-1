import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Institutional = () => {
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
      <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <meta name="title" content="Institutional Banking Solutions | MCB" />
      <meta
        name="description"
        content="Explore MCB's global expertise for institutions worldwide. Your gateway to institutional banking excellence"
      />
      <title>Institutional Banking Solutions | MCB</title>
      <meta
        property="og:title"
        content="Institutional Banking Solutions | MCB"
      />
      <meta
        property="og:description"
        content="Explore MCB's global expertise for institutions worldwide. Your gateway to institutional banking excellence"
      />
      <meta property="og:url" content="https://mcb.mu/institutional" />
      <link rel="canonical" href="/institutional" />

      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* reusable header component */}
        <Header />

        <div role="main" className="main">
          {/* Banner Section */}
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
                      "url(/images/mcb/institutional/institutional-banner3677.jpg)",
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
                          The doorway to MCB&#39;s Global Capabilities
                        </h1>
                        <div className="description">
                          <p>
                            Industry specialists with global expertise and
                            understanding of local markets to serve financial
                            institutions worldwide.
                          </p>
                        </div>
                        <a
                          href="institutional/our-solutions.html"
                          className="btn btn-more text-light d-flex align-items-center appear-animation ps-0"
                          data-appear-animation="fadeInUpShorter"
                          data-appear-animation-delay={500}
                          data-plugin-options="{'minWindowWidth': 0}"
                        >
                          <i
                            className="icon icon-arrow-right text-10 pe-2"
                            aria-hidden="true"
                          />
                          <span>View our solutions</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section 1 */}
          <div className="row mt-50" data-sf-element="Row">
            <div className="sf_colsIn col-lg-12" data-sf-element="Column 1">
              <div className="sf_colsIn container" data-sf-element="Container">
                <img
                  loading="lazy"
                  className="mw-100 h-auto"
                  src="images/mcb/institutional/assets/legaladvicea826.jpeg"
                  title="LegalAdvice"
                  alt="LegalAdvice"
                />
                <div className="check-ul-styling">
                  <h3>Your one-stop shop banking relationship management</h3>
                  <p>
                    As we commit to build trust-based and lasting relationships,
                    our highly skilled professionals bring relevant offerings
                    that meet your requirements and unlock opportunities.
                  </p>
                  <ul>
                    <li>
                      Offloading excess exposure via secondary assets trading,
                      for additional capacity building
                    </li>
                    <li>
                      Club loans and syndications, participant and arranger
                    </li>
                    <li>
                      Fulfillment of Mauritian business needs and those of your
                      clients, with dedicated products
                    </li>
                  </ul>
                  <h3>Dedicated initiatives for African counterparties</h3>
                  <ul>
                    <li>
                      Replicating MCB’s best of breed solutions into African
                      banks
                    </li>
                    <li>Your safe conduit into the complex African market</li>
                    <li>
                      Close relationships with a wide range of counterparties on
                      the continent
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section 2 */}
          <div
            className="sf_colsIn grid-bg-light-gray"
            data-sf-element="Container Light Gray"
          >
            <div className="sf_colsIn container" data-sf-element="Container">
              <div className="row" data-sf-element="Row">
                <div
                  className="sf_colsIn col-lg-8 mt-50"
                  data-sf-element="Column 1"
                >
                  <div className="check-ul-styling">
                    <h3>On-the-ground MCB representative offices</h3>
                    <p>
                      We have representative offices with market and regulatory
                      coverage, deep local knowledge of Financial institutions
                      and corporates operating across the continent:
                    </p>
                    <ul>
                      <li>Our Johannesburg office serves Southern Africa</li>
                      <li>Our Nairobi office serves East and West Africa</li>
                      <li>Our Dubai Office serves MENA and the Asia Region</li>
                      <li>Our Paris office serves Europe</li>
                    </ul>
                    <p>
                      We act as marketing arm for MCB Group and can introduce
                      you to the MCB network for project financing and
                      investment opportunities.
                    </p>
                  </div>
                </div>
                <div
                  className="sf_colsIn col-lg-4 mt-50"
                  data-sf-element="Column 2"
                >
                  <img
                    loading="lazy"
                    className="mw-100 h-auto"
                    src="images/mcb/institutional/assets/mcb-institutional-rep-officebf24.jpg"
                    title="mcb-institutional-rep-office"
                    alt="mcb-institutional-rep-office"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section 3 */}
          <div className="sf_colsIn container" data-sf-element="Container">
            <div className="row" data-sf-element="Row">
              <div
                className="sf_colsIn col-lg-4 mt-50"
                data-sf-element="Column 1"
              >
                <img
                  loading="lazy"
                  className="mw-100 h-auto"
                  src="images/mcb/institutional/assets/mcb-institutional-dfi8f2d.jpg"
                  title="mcb-institutional-dfi"
                  alt="mcb-institutional-dfi"
                />
              </div>
              <div
                className="sf_colsIn col-lg-8 mt-50"
                data-sf-element="Column 2"
              >
                <div className="check-ul-styling">
                  <h3>Partnerships with Development Finance Institutions</h3>
                  <p>
                    We are MCB Group’s dedicated point of contact with
                    Development Finance Institutions (DFIs) – specialised
                    multilateral, bilateral or national development banks or
                    subsidiaries which support private sector development in
                    emerging and developing countries.
                  </p>
                  <p>
                    We undertake proactive market prospection and networking,
                    relationship building and management as well as business
                    development with DFIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Institutional;
