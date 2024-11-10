import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SecurityCentre = () => {
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
      {/* Mirrored from mcb.mu/security-centre by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:32:05 GMT */}
      <meta name="title" content="Security Centre | MCB	" />
      <meta
        name="description"
        content="Learn more on the security measures deploys by MCB to reduce your exposure to certain types of fraud."
      />
      <title>Security Centre | MCB</title>
      <meta property="og:title" content="Security Centre | MCB" />
      <meta
        property="og:description"
        content="Learn more on the security measures deploys by MCB to reduce your exposure to certain types of fraud."
      />
      <meta property="og:url" content="https://mcb.mu/security-centre" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="/security-centre" />
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
                "url(images/mcb/personal/banners/personal-security-centre-banner1f03.jpeg?sfvrsn=3ea0e51b_0)",
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
                    Security Centre
                  </h1>
                  <p
                    className="lead line-height-2 text-4 pe-5 mb-4 pb-2"
                    style={{ color: "#ffffff!important" }}
                  >
                    Secure your online experience.
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
                id="Main_C004_Col00"
                className="sf_colsIn col-lg-6 mb-50"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div
                  className="title-left owl-item active"
                  style={{ marginRight: 10 }}
                >
                  <div>
                    <div className="card bg-color-light box-shadow-1 box-shadow-1-hover anim-hover-translate-top-10px transition-3ms">
                      <div className="card-body" data-mh-l1="tiles-block">
                        <div className="d-flex flex-column align-items-start">
                          <h3
                            className="card-title mb-2 text-5 font-weight-medium text-decoration-none text-transform-none"
                            data-mh-l2="tiles-title"
                          >
                            Online and Mobile
                          </h3>
                          <p className="card-text line-height-5 mt-2">
                            The protection of your privacy matters to us.
                            Whether you are banking online or using our mobile
                            app, rest assured that our services rely on
                            high-security mechanisms to protect your finances.
                            Your collaboration is key. Remember to take some
                            precautions too.
                          </p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <p className="mb-0 mt-3">
                            <a
                              href="security-centre/online-and-mobile"
                              target="_self"
                              className="read-more text-color-primary font-weight-semibold mt-2 text-2"
                            >
                              Protecting your Identity
                              <i className="fas fa-angle-right position-relative top-1 ms-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="Main_C004_Col01"
                className="sf_colsIn col-lg-6 mb-50"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <div
                  className="title-left owl-item active"
                  style={{ marginRight: 10 }}
                >
                  <div>
                    <div className="card bg-color-light box-shadow-1 box-shadow-1-hover anim-hover-translate-top-10px transition-3ms">
                      <div className="card-body" data-mh-l1="tiles-block">
                        <div className="d-flex flex-column align-items-start">
                          <h3
                            className="card-title mb-2 text-5 font-weight-medium text-decoration-none text-transform-none"
                            data-mh-l2="tiles-title"
                          >
                            Cards and ATMs
                          </h3>
                          <p className="card-text line-height-5 mt-2">
                            Our security measures are continually updated and
                            improved to safeguard your cards activities.
                          </p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <p className="mb-0 mt-3">
                            <a
                              href="/security-centre/cards-and-atms"
                              target="_self"
                              className="read-more text-color-primary font-weight-semibold mt-2 text-2"
                            >
                              Keeping your cards secure
                              <i className="fas fa-angle-right position-relative top-1 ms-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C007_Col00"
                className="sf_colsIn col-lg-6 mb-50"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div
                  className="title-left owl-item active"
                  style={{ marginRight: 10 }}
                >
                  <div>
                    <div className="card bg-color-light box-shadow-1 box-shadow-1-hover anim-hover-translate-top-10px transition-3ms">
                      <div className="card-body" data-mh-l1="tiles-block">
                        <div className="d-flex flex-column align-items-start">
                          <h3
                            className="card-title mb-2 text-5 font-weight-medium text-decoration-none text-transform-none"
                            data-mh-l2="tiles-title"
                          >
                            Fraud and Scams
                          </h3>
                          <p className="card-text line-height-5 mt-2">
                            We are dedicated to fighting fraud, which is
                            increasingly ingenious, as well as help you reduce
                            your exposure to them.
                          </p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <p className="mb-0 mt-3">
                            <a
                              href="/security-centre/fraud-and-scams"
                              target="_self"
                              className="read-more text-color-primary font-weight-semibold mt-2 text-2"
                            >
                              Staying on the Alert
                              <i className="fas fa-angle-right position-relative top-1 ms-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="Main_C007_Col01"
                className="sf_colsIn col-lg-6 mb-50"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <div
                  className="title-left owl-item active"
                  style={{ marginRight: 10 }}
                >
                  <div>
                    <div className="card bg-color-light box-shadow-1 box-shadow-1-hover anim-hover-translate-top-10px transition-3ms">
                      <div className="card-body" data-mh-l1="tiles-block">
                        <div className="d-flex flex-column align-items-start">
                          <h3
                            className="card-title mb-2 text-5 font-weight-medium text-decoration-none text-transform-none"
                            data-mh-l2="tiles-title"
                          >
                            Money Muling
                          </h3>
                          <p className="card-text line-height-5 mt-2">
                            Il s’agit de recevoir de l’argent sur le compte
                            bancaire pour le renvoyer à quelqu’un d’autre sous
                            quelque forme que ce soit ou de le retirer au
                            guichet.
                          </p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <p className="mb-0 mt-3">
                            <a
                              href="security-centre/money-muling"
                              target="_self"
                              className="read-more text-color-primary font-weight-semibold mt-2 text-2"
                            >
                              En savoir plus
                              <i className="fas fa-angle-right position-relative top-1 ms-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C010_Col00"
                className="sf_colsIn col-lg-12 mb-50"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="card card-cta-red border-radius-0 bg-color-light box-shadow-1 box-shadow-1-hover">
                        <div className="card-body">
                          <h3 className="card-title mb-1  font-weight-normal text-7 text-transform-none">
                            Report suspicious activities
                          </h3>
                          <div>
                            <p>&nbsp;</p>
                            <p>
                              If you think your MCB account has been
                              compromised, contact us straight away. In case
                              you’ve received a suspicious email, forward it to
                              us immediately on{" "}
                              <a
                                href="cdn-cgi/l/email-protection.html"
                                className="__cf_email__"
                                data-femail="16777a736462567b7574387b63"
                              >
                                contact@mcblogin.com
                              </a>{" "}
                              and then delete it.
                              <br />
                            </p>
                            <h3>
                              Call us on +230 202 6060
                              <br />
                            </h3>
                          </div>
                          <a
                            href="personal/contact-us.html"
                            target="_blank"
                            className="mb-1 mt-1 me-1 btn btn-primary"
                          >
                            Get in touch{" "}
                            <i className="fas fa-angle-right icons ms-1" />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C012_Col00"
                className="sf_colsIn col-lg-12"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h3>Disclaimer</h3>
                    <p>
                      MCB makes no warranties, express or implied, or
                      representations as to the quality, accuracy, completeness
                      or timeliness of the contents of the website. MCB reserves
                      itself the right to modify the website at any time,
                      whether temporarily or permanently without notice. This
                      may mean that the website is unavailable from time to
                      time.
                    </p>
                    <p>
                      The contents of the website are not intended to be
                      exhaustive and do not constitute any form of inducement or
                      advice or recommendation upon which a specific decision
                      should be made. Before making any decision or taking any
                      action, you should consult MCB or your professional
                      adviser.
                    </p>
                    <p>
                      MCB expressly disclaims any liability for any special,
                      incidental or consequential damages, including without
                      limitation, lost revenues, or lost profits, resulting from
                      the use or misuse of the contents of the Website or the
                      operation of the website.
                    </p>
                    <p>
                      By using the website, you assume all risks associated with
                      its use, including any risk to your computer, software or
                      data being damaged by a virus, software or any other files
                      which might be transmitted or activated via the website.
                      Information provided and opinions expressed by others do
                      not necessarily represent the opinion of MCB.
                    </p>
                    <p>
                      MCB expressly disclaims any and all liability resulting
                      from reliance on such information or opinions. Furthermore
                      MCB takes no responsibility for and will not be liable for
                      any claims, penalties, loss, damages or expenses arising
                      from the use or the inability to use the website or from
                      any unauthorised access or alteration to the website by a
                      third party.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reusable footer component */}
        <Footer />
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/security-centre by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:32:23 GMT */}
    </>
  );
};
export default SecurityCentre;
