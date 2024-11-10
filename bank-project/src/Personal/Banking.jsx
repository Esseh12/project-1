import { useEffect } from "react";
import Header from "../components/Header";
import NavMenu from "./OffersAndPromotions/OfferNavMenu";
import Footer from "../components/Footer";

const Banking = () => {
  const navItems = [
    {
      text: "Lifestyle Offers",
      href: "/personal/offers-and-promotions",
    },
    { text: "Home Offers", href: "/personal/home-offers" },
    { text: "Banking Promotions", href: "/personal/banking", isActive: true },
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/banking by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:22:08 GMT */}
      <meta name="title" content="Banking Offers" />
      <title>Banking Offers</title>{" "}
      <meta property="og:title" content="Banking Offers" />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/offers-and-promotions/banking"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="/banking" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */} {/* reusable header */}
        <Header />
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          <div className="container py-2 mt-50 mb-70">
            <div className=" sort-destination-loader-showing mt-4 pt-2">
              <div className="row portfolio-list sort-destination">
                <div className="col-sm-6 col-lg-3 isotope-item">
                  <div className="portfolio-item">
                    <a href="banking/Banking/enjoy-up-to-8-off-on-booking.com-with-visa">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/banking/Visa---Booking.com-Promo-2023-2024_Website-Banner_585x330f71c.jpg?sfvrsn=2a432b5b_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Enjoy up to 8% off on Booking.com with Visa
                            </span>
                          </span>
                          <span className="thumb-info-action">
                            <span className="thumb-info-action-icon bg-dark opacity-8">
                              <i className="fas fa-plus" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 isotope-item">
                  <div className="portfolio-item">
                    <a href="banking/Banking/contactless-campaign-2023">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/banking/visa-festive-contactless-campaign-2023-website-585-x-330-pxd2d1.jpg?sfvrsn=5f368b29_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Unlock amazing experiences at Casela, Star Cinemas
                              and Gravity Max
                            </span>
                          </span>
                          <span className="thumb-info-action">
                            <span className="thumb-info-action-icon bg-dark opacity-8">
                              <i className="fas fa-plus" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 isotope-item">
                  <div className="portfolio-item">
                    <a href="banking/Banking/cashless-avoy-ou-lwin">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/banking/EOY-2023---CASHLESS-AVOY-OU-LWIN---V222d2.jpg?sfvrsn=ec0de8f5_2"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              CASHLESS AVOY OU LWIN
                            </span>
                          </span>
                          <span className="thumb-info-action">
                            <span className="thumb-info-action-icon bg-dark opacity-8">
                              <i className="fas fa-plus" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 isotope-item">
                  <div className="portfolio-item">
                    <a href="banking/Banking/mcb-rupys-offfers">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/banking/mcb-20rupys-20generique-20visual4914.jpg?sfvrsn=3bb74c65_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              MCB Rupys offers
                            </span>
                          </span>
                          <span className="thumb-info-action">
                            <span className="thumb-info-action-icon bg-dark opacity-8">
                              <i className="fas fa-plus" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/banking by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:23:40 GMT */}
    </>
  );
};
export default Banking;
