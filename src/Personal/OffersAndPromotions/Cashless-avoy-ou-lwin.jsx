import { useEffect } from "react";
import Header from "../../Components/Header";
import NavMenu from "../OffersAndPromotions/OfferNavMenu";
import Footer from "../../Components/Footer";

const CashlessAvoyOuLwin = () => {
  const navItems = [
    {
      text: "Lifestyle Offers",
      href: "/personal/offers-and-promotions",
      isActive: true,
    },
    { text: "Home Offers", href: "/personal/home-offers" },
    { text: "Banking Promotions", href: "/personal/banking" },
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/cashless-avoy-ou-lwin by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:52:12 GMT */}
      <meta name="title" content="CASHLESS AVOY OU LWIN" />
      <meta
        name="description"
        content='<p>Go cashless! Stand a chance to win <strong>a "Travel Voucher" of Rs 500,000 for the trip of your choice</strong>, or one of <strong>10 vouchers of Rs 50,000</strong>.</p><p>Until 15 January 2024, get entries to the campaign lucky draw when paying with an MCB card or via the &apos;Scan to pay&apos; and &apos;Pay Merchant&apos; features of MCB Juice.</p><ul class="list"><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 card or “Scan to Pay” or “Pay merchant” payment = 1 entry</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 contactless payment (“Touch &amp; Pay”) = 2 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 new eligible credit card purchased/acquired = 5 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 new Visa Business debit card purchased/acquired = 5 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">Any eligible payment made on Thursdays = 2 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 payment during the promotional period with an eligible card that has not been used between 1 April and 30 September 2023 = 2 entries</span><span class="con-label"></span></li></ul><p><strong>Applicable to:</strong> All MCB Cards, MCB Juice
                      <br></p>'
      />
      <title>CASHLESS AVOY OU LWIN</title>
      <meta name="robots" content="noindex" />
      <meta property="og:title" content="CASHLESS AVOY OU LWIN" />
      <meta
        property="og:description"
        content='<p>Go cashless! Stand a chance to win <strong>a "Travel Voucher" of Rs 500,000 for the trip of your choice</strong>, or one of <strong>10 vouchers of Rs 50,000</strong>.</p><p>Until 15 January 2024, get entries to the campaign lucky draw when paying with an MCB card or via the &apos;Scan to pay&apos; and &apos;Pay Merchant&apos; features of MCB Juice.</p><ul class="list"><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 card or “Scan to Pay” or “Pay merchant” payment = 1 entry</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 contactless payment (“Touch &amp; Pay”) = 2 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 new eligible credit card purchased/acquired = 5 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 new Visa Business debit card purchased/acquired = 5 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">Any eligible payment made on Thursdays = 2 entries</span></li><li><span class="icon--arrow-right icon--small"></span><span class="con-label">1 payment during the promotional period with an eligible card that has not been used between 1 April and 30 September 2023 = 2 entries</span><span class="con-label"></span></li></ul><p><strong>Applicable to:</strong> All MCB Cards, MCB Juice
                      <br></p>'
      />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/Banking/cashless-avoy-ou-lwin"
      />
      <link rel="canonical" href="/cashless-avoy-ou-lwin" />
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
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <h1>CASHLESS AVOY OU LWIN</h1>
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
                          Go cashless! Stand a chance to win{" "}
                          <strong>
                            a &#34;Travel Voucher&#34; of Rs 500,000 for the
                            trip of your choice
                          </strong>
                          , or one of <strong>10 vouchers of Rs 50,000</strong>.
                        </p>
                        <p>
                          Until 15 January 2024, get entries to the campaign
                          lucky draw when paying with an MCB card or via the
                          &#39;Scan to pay&#39; and &#39;Pay Merchant&#39;
                          features of MCB Juice.
                        </p>
                        <ul className="list">
                          <li>
                            <span className="icon--arrow-right icon--small" />
                            <span className="con-label">
                              1 card or “Scan to Pay” or “Pay merchant” payment
                              = 1 entry
                            </span>
                          </li>
                          <li>
                            <span className="icon--arrow-right icon--small" />
                            <span className="con-label">
                              1 contactless payment (“Touch &amp; Pay”) = 2
                              entries
                            </span>
                          </li>
                          <li>
                            <span className="icon--arrow-right icon--small" />
                            <span className="con-label">
                              1 new eligible credit card purchased/acquired = 5
                              entries
                            </span>
                          </li>
                          <li>
                            <span className="icon--arrow-right icon--small" />
                            <span className="con-label">
                              1 new Visa Business debit card purchased/acquired
                              = 5 entries
                            </span>
                          </li>
                          <li>
                            <span className="icon--arrow-right icon--small" />
                            <span className="con-label">
                              Any eligible payment made on Thursdays = 2 entries
                            </span>
                          </li>
                          <li>
                            <span className="icon--arrow-right icon--small" />
                            <span className="con-label">
                              1 payment during the promotional period with an
                              eligible card that has not been used between 1
                              April and 30 September 2023 = 2 entries
                            </span>
                            <span className="con-label" />
                          </li>
                        </ul>
                        <p>
                          <strong>Applicable to:</strong> All MCB Cards, MCB
                          Juice
                          <br />
                        </p>
                        <p>
                          <strong>Validity:</strong> Monday, 15 January 2024
                        </p>
                        <a
                          href="../../docs/mcb/offers/banking/mcb-eoy-2023-campaign---terms-and-conditions_vf13ee.pdf?sfvrsn=b333eeff_3"
                          className=" btn btn-gray-ca me-4 py-3 mt-3 w-100-mobile"
                        >
                          View Terms and conditions{" "}
                          <i className="icon-pdf-down" />{" "}
                        </a>
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
                          src="../../images/mcb/offers/banking/EOY-2023---CASHLESS-AVOY-OU-LWIN---V222d2.jpg?sfvrsn=ec0de8f5_2"
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/cashless-avoy-ou-lwin by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:52:14 GMT */}
    </>
  );
};
export default CashlessAvoyOuLwin;
