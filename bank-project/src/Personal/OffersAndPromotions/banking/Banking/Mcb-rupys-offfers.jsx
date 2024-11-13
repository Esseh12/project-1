import PersonalHeader from "../../../../Components/Personal-header";
import NavMenu from "../../OfferNavMenu";
import Footer from "../../../../Components/Footer";

const McbrupysOffers = () => {
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

  return (
    <>
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/banking/Banking/mcb-rupys-offfers by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:56:26 GMT */}
      <meta name="title" content="MCB Rupys offers" />
      <title>MCB Rupys offers</title>
      <meta property="og:title" content="MCB Rupys offers" />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/offers-and-promotions/banking/Banking/mcb-rupys-offfers"
      />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="mcb-rupys-offfers" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* Header component */}
        <PersonalHeader />
        {/* End Header component */}
        <div role="main" className="main no-banner-spacing">
          {/* Navigation Menu */}
          <NavMenu items={navItems} />
          {/* End Navigation Menu */}
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <h1>MCB Rupys offers</h1>
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
                  ></ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="tabsNavigationSimple1"
                      role="tabpanel"
                    >
                      <div className="text-start">
                        <h4>Description</h4>
                        <p>
                          <strong>Validity:</strong> Sunday, 30 June 2024
                        </p>
                        <a
                          href="../../../../docs/mcb/offers/banking/mcb-rupys-offers2566.pdf?sfvrsn=afdaf034_4"
                          className=" btn btn-gray-ca me-4 py-3 mt-3 w-100-mobile"
                        >
                          MCB Rupys&#39; offers <i className="icon-pdf-down" />
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
                          src="../../../../images/mcb/offers/banking/mcb-20rupys-20generique-20visual4914.jpg?sfvrsn=3bb74c65_1"
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
        {/* Footer Component */}
        <Footer />
        {/* End Footer Component */}
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/banking/Banking/mcb-rupys-offfers by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:56:26 GMT */}
    </>
  );
};
export default McbrupysOffers;
