import { useEffect } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import NavMenu from "../OfferNavMenu";

const MyFitnessPal = () => {
  const navItems = [
    {
      text: "Lifestyle Offers",
      href: "/personal/offers-and-promotions",
      isActive: true,
    },
    { text: "Home Offers", href: "/personal/home-offers" },
    { text: "Banking Promotions", href: "/personal/banking.html" },
    {
      text: "American Express® Membership Rewards®",
      href: "/personal/american-express-membership-rewards-offers",
    },
  ];

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
        if (script && script.parentNode === document.body) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/Lifestyle/My-Fitness-Pal by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:23:41 GMT */}
      <meta name="title" content="My Fitness Pal" />
      <meta
        name="description"
        content='<p><strong>Start your free 3-month trial</strong> (subject to auto renewal) with your American Express card.</p><br><p><strong>Note:</strong>ï¿½</p><ul class=""><li><span class=""></span><span class="">Thisï¿½ offer is made by MyFitnessPal and it is for a 3-month free trial period to MyFitnessPalï¿½s Premium subscription plan, which will automatically renew as a monthly subscription at the then-current rate (currently $29.97 plus any applicable taxes).</span></li><li><span class=""></span><span class="">Offer eligibility is limited to Cardmembers with a Consumer American Express Card issued by a third party.</span></li></ul>'
      />
      <title>My Fitness Pal</title>
      <meta property="og:title" content="My Fitness Pal" />
      <meta
        property="og:description"
        content='<p><strong>Start your free 3-month trial</strong> (subject to auto renewal) with your American Express card.</p><br><p><strong>Note:</strong>ï¿½</p><ul class=""><li><span class=""></span><span class="">Thisï¿½ offer is made by MyFitnessPal and it is for a 3-month free trial period to MyFitnessPalï¿½s Premium subscription plan, which will automatically renew as a monthly subscription at the then-current rate (currently $29.97 plus any applicable taxes).</span></li><li><span class=""></span><span class="">Offer eligibility is limited to Cardmembers with a Consumer American Express Card issued by a third party.</span></li></ul>'
      />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/offers-and-promotions/Lifestyle/My-Fitness-Pal"
      />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="/My-Fitness-Pal" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <div id="dtRTwdI-rQiKLFvNlhJwu_ptPTi2SJRsFNInusvSEpY0" />
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="tRTwdI-rQiKLFvNlhJwu_ptPTi2SJRsFNInusvSEpY0"
          data-hostname="c3991d45a5a44d94b4be9d674555dfaf.svc.dynamics.com"
        />
        {/* reUsable header component */}
        <Header />
        <div role="main" className="main no-banner-spacing">
          {/* reusable navmenu */}
          <NavMenu items={navItems} />
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <h1>My Fitness Pal</h1>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="row pt-4 mt-2 mb-5">
              <div className="col-md-7 mb-4 mb-md-0 order-2 order-md-1 order-lg-1">
                <div className="tabs tabs-bottom tabs-center tabs-simple">
                  <ul
                    className="nav nav-tabs justify-content-start"
                    role="tablist"
                  >
                    <li className="nav-item active" role="presentation">
                      <a
                        className="nav-link active"
                        href="#tabsNavigationSimple1"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Description
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="tabsNavigationSimple1"
                      role="tabpanel"
                    >
                      <div className="text-start">
                        <h4>Description</h4>
                        <p>
                          <strong>Start your free 3-month trial</strong>{" "}
                          (subject to auto renewal) with your American Express
                          card.
                        </p>
                        <br />
                        <p>
                          <strong>Note:</strong>ï¿½
                        </p>
                        <ul className="">
                          <li>
                            <span className="" />
                            <span className="">
                              Thisï¿½ offer is made by MyFitnessPal and it is
                              for a 3-month free trial period to
                              MyFitnessPalï¿½s Premium subscription plan, which
                              will automatically renew as a monthly subscription
                              at the then-current rate (currently $29.97 plus
                              any applicable taxes).
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Offer eligibility is limited to Cardmembers with a
                              Consumer American Express Card issued by a third
                              party.
                            </span>
                          </li>
                        </ul>
                        <p>
                          <strong>Validity:</strong> Sunday, 31 December 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 order-1 mb-5 order-md-2 order-lg-2">
                <div className="portfolio-item">
                  <span className="thumb-info thumb-info-lighten border-radius-0">
                    <span
                      className="owl-carousel owl-theme dots-inside m-0"
                      data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                    >
                      <span>
                        <img
                          src="../../../images/mcb/offers/lifestyle/myfitness-pal1c6a.jpeg?sfvrsn=8d417e4a_1"
                          className="img-fluid border-radius-0"
                          alt=""
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/Lifestyle/My-Fitness-Pal by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:23:41 GMT */}
    </>
  );
};
export default MyFitnessPal;
