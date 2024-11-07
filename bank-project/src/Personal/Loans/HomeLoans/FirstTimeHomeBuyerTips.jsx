import { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const FirstTimeHomeBuyerTips = () => {
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
      <meta name="title" content="First time home buyer tips |MCB	" />
      <meta
        name="description"
        content="MCB can help you make the right decision on your first home. Find out all you need to know with these first-time home-buyer tips!"
      />
      <title>First time home buyer tips |MCB</title>{" "}
      <meta property="og:title" content="First time home buyer tips |MCB" />
      <meta
        property="og:description"
        content="MCB can help you make the right decision on your first home. Find out all you need to know with these first-time home-buyer tips!"
      />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/loans/home-loan/first-time-home-buyer-tips"
      />
      <link
        rel="canonical"
        href="/personal/loans/home-loan/first-time-home-buyer-tips"
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
                    First-Time Homebuyer Tips
                  </h1>
                  <p
                    className="lead line-height-2 text-4 pe-5 mb-4 pb-2"
                    style={{ color: "#ffffff!important" }}
                  >
                    If you’re thinking about buying or building your first home,
                    it’s important to make an informed decision.
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
                    <h2>Know your budget</h2>
                    <p>
                      Making sure you can meet your future home payments is
                      probably the most important part of successful home
                      ownership.
                    </p>
                    <div>
                      <br />
                    </div>
                    <ul>
                      <li>The first step is to save for a deposit</li>
                      <li>
                        The ideal deposit should be 25% of the value of the home
                      </li>
                      <li>
                        Your total borrowings should not exceed 40% of monthly
                        revenue
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                      <a
                        href="https://www.mcb.mu/en/borrow/app/?product=HOME"
                        target="_blank"
                        data-sf-ec-immutable=""
                      >
                        Calculate how much you can borrow
                      </a>
                    </p>
                    <p>
                      After you’ve worked out how much you can borrow to buy or
                      build your first home, you also need to research your
                      utilities. Ask your real estate agent to find out what the
                      home&#39;s energy bills have typically been. No nasty
                      surprises that way. Be sure to budget for the cost of
                      moving in, as well as any repairs or maintenance costs.
                      Think about upkeep and landscaping, too. Have you budgeted
                      for the finishing touches – decorating, furnishing,
                      appliances, security and so on?
                    </p>
                    <p>
                      <a
                        target="_blank"
                        href="../../offers-and-promotions.html"
                      >
                        Explore our partner discounts
                      </a>
                    </p>
                    <div>
                      <br />
                    </div>
                    <h2>Work out what you need to build</h2>
                    <p>
                      While purchasing a plot of land, don’t forget to think
                      about the important facets of your daily life, that is
                      work, schools, shops, commuting. You’ll need a
                      professional architect to draw up some plans. What
                      construction company are you going to use? Have you
                      registered for a building permit? You’ll need electricity
                      and water on site before you start building, so get in
                      touch with the Central Water Authority (CWA) and Central
                      Electricity Board (CEB). Have you budgeted for the
                      finishing touches – lighting, flooring, decorating,
                      security, air con, eco-friendly utilities and furniture
                      and appliances?
                    </p>
                    <div>
                      <br />
                    </div>
                    <h2>
                      How to choose the right plot of land, apartment or house?
                    </h2>
                    <p>
                      Once you have spotted a promising plot of land for your
                      new home or found the house that you like, it’s good to:
                    </p>
                    <ul>
                      <li>Explore the entire site at different times of day</li>
                      <li>
                        Examine the lie of the land/orientation of the
                        property’s main windows and doors, based on wind
                        direction and light
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                      The shape and other characteristics of the site will
                      influence your choices regarding the architecture and
                      layout of your home. Other aspects to look out for are
                      earth features like hills, rocks, trees, dominant
                      architectural styles, appropriate routes of access to the
                      site and whether the house is north or south-facing.
                    </p>
                    <div>
                      <br />
                    </div>
                    <h2>Choosing the right architect</h2>
                    <p>
                      It’s fundamental to establish a relationship of mutual
                      trust between you and your architect, so be very clear
                      from the start about the home you want to build to suit
                      your lifestyle and budget. It is best that your architect
                      is located near the place of your future construction so
                      that regular site visits are possible.
                    </p>
                    <p>
                      An architect can give you expert advice on design and
                      better optimisation of space. The work will be carried out
                      in accordance with building regulations and standards, and
                      you can work out your budget/spend accurately.
                    </p>
                    <div>
                      <br />
                    </div>
                    <h2>How to get the authorisation to build</h2>
                    <p>
                      When you apply for a building permit, complete the
                      appropriate forms and go to your municipality with your
                      identity card. Your registration must be accompanied by
                      all the documents indicated on the forms to be considered.
                      The registration section of the Planning service can help
                      you with any questions regarding the building permit.
                    </p>
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
        <Footer />
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/loans/home-loan/first-time-home-buyer-tips by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 07:17:07 GMT */}
    </>
  );
};

export default FirstTimeHomeBuyerTips;
