import { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import NavMenu from "../OfferNavMenu";

const ShoeConnection = () => {
  const navItems = [
    {
      text: "Lifestyle Offers",
      href: "/personal/offers-and-promotions",
      isActive: true,
    },
    { text: "Home Offers", href: "../home-offers.html" },
    { text: "Banking Promotions", href: "../banking.html" },
    {
      text: "American Express® Membership Rewards®",
      href: "../american-express-membership-rewards-offers.html",
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/Lifestyle/Shoe-Connection by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:23:40 GMT */}
      <meta name="title" content="Shoe Connection" />
      <meta
        name="description"
        content='<p>Enjoy <strong>5%</strong> discount.</p><br><p><strong>Condition:</strong>ï¿½</p><ul class=""><li><span class=""></span><span class="">The offer is not applicable on any other promotion or discount.</span></li></ul><br><p><strong>Contact details:</strong></p><ul class=""><li><span class=""></span><span class="">Heritage Court, 27 Emmanuel Anquetil Street, Port Louis | T: 217 6888</span></li><li><span class=""></span><span class="">Newton Tower, Sir William Newton Street Port Louis | T: 213 5758</span></li><li><span class=""></span><span class="">St Jean Road, Quatre Bornes (Next to Absa Bank) | T: 424 5758</span></li></ul><p>ï¿½ ï¿½</p>'
      />
      <title>Shoe Connection</title>{" "}
      <meta property="og:title" content="Shoe Connection" />
      <meta
        property="og:description"
        content='<p>Enjoy <strong>5%</strong> discount.</p><br><p><strong>Condition:</strong>ï¿½</p><ul class=""><li><span class=""></span><span class="">The offer is not applicable on any other promotion or discount.</span></li></ul><br><p><strong>Contact details:</strong></p><ul class=""><li><span class=""></span><span class="">Heritage Court, 27 Emmanuel Anquetil Street, Port Louis | T: 217 6888</span></li><li><span class=""></span><span class="">Newton Tower, Sir William Newton Street Port Louis | T: 213 5758</span></li><li><span class=""></span><span class="">St Jean Road, Quatre Bornes (Next to Absa Bank) | T: 424 5758</span></li></ul><p>ï¿½ ï¿½</p>'
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/offers-and-promotions/Lifestyle/Shoe-Connection"
      />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="/Shoe-Connection" />
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
        <Header />
        <div role="main" className="main no-banner-spacing">
          <NavMenu items={navItems} />
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <h1>Shoe Connection</h1>
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
                          Enjoy <strong>5%</strong> discount.
                        </p>
                        <br />
                        <p>
                          <strong>Condition:</strong>ï¿½
                        </p>
                        <ul className="">
                          <li>
                            <span className="" />
                            <span className="">
                              The offer is not applicable on any other promotion
                              or discount.
                            </span>
                          </li>
                        </ul>
                        <br />
                        <p>
                          <strong>Contact details:</strong>
                        </p>
                        <ul className="">
                          <li>
                            <span className="" />
                            <span className="">
                              Heritage Court, 27 Emmanuel Anquetil Street, Port
                              Louis | T: 217 6888
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Newton Tower, Sir William Newton Street Port Louis
                              | T: 213 5758
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              St Jean Road, Quatre Bornes (Next to Absa Bank) |
                              T: 424 5758
                            </span>
                          </li>
                        </ul>
                        <p>ï¿½ ï¿½</p>
                        <p>
                          <strong>Validity:</strong> Thursday, 01 February 2024
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
                          src="../../../images/mcb/offers/lifestyle/shoe-connection-sd-2-20220459.jpg?sfvrsn=5dc5ea31_1"
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
        </div>{" "}
        <Footer />
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/Lifestyle/Shoe-Connection by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:23:40 GMT */}
    </>
  );
};
export default ShoeConnection;
