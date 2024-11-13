import PersonalHeader from "../../../../Components/Personal-header";
import NavMenu from "../../OfferNavMenu";
import Footer from "../../../../Components/Footer";

const FurnitureMu = () => {
  const navItems = [
    {
      text: "Lifestyle Offers",
      href: "/personal/offers-and-promotions",
    },
    { text: "Home Offers", href: "/personal/home-offers", isActive: true },
    { text: "Banking Promotions", href: "/personal/banking" },
    {
      text: "American Express® Membership Rewards®",
      href: "/personal/american-express-membership-rewards-offers",
    },
  ];

  return (
    <>
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers/Home/Furniture.mu by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:56:19 GMT */}
      <meta name="title" content="Furniture.mu" />
      <meta
        name="description"
        content='<p><strong>5%</strong> discount on any solid teak furniture.</p><br><p><strong>Contact:</strong>ï¿½</p><ul class=""><li><span class=""></span><span class="">Industrial Zone, Riche Terre | T: 5860 3003</span></li><li><span class=""></span><span class="">Block B, Phoenix Central | T: 660 1920</span></li></ul><div>ï¿½ ï¿½</div>'
      />
      <title>Furniture.mu</title>
      <meta property="og:title" content="Furniture.mu" />
      <meta
        property="og:description"
        content='<p><strong>5%</strong> discount on any solid teak furniture.</p><br><p><strong>Contact:</strong>ï¿½</p><ul class=""><li><span class=""></span><span class="">Industrial Zone, Riche Terre | T: 5860 3003</span></li><li><span class=""></span><span class="">Block B, Phoenix Central | T: 660 1920</span></li></ul><div>ï¿½ ï¿½</div>'
      />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/offers-and-promotions/home-offers/Home/Furniture.mu"
      />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="Furniture.mu" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* HEADER COMPONENT */}
        <PersonalHeader />
        {/* HEADER COMPONENT */}
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          {/* End NavMenu */}
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <h1>Furniture.mu</h1>
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
                          <strong>5%</strong> discount on any solid teak
                          furniture.
                        </p>
                        <br />
                        <p>
                          <strong>Contact:</strong>ï¿½
                        </p>
                        <ul className="">
                          <li>
                            <span className="" />
                            <span className="">
                              Industrial Zone, Riche Terre | T: 5860 3003
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Block B, Phoenix Central | T: 660 1920
                            </span>
                          </li>
                        </ul>
                        <div>ï¿½ ï¿½</div>
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
                          src="../../../../images/mcb/offers/home/furniture-mu-hlec96.jpg?sfvrsn=2c181b99_1"
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
        {/* FOOTER COMPOENENT */}
        <Footer />
        {/* FOOTER COMPOENENT */}
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers/Home/Furniture.mu by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:56:19 GMT */}
    </>
  );
};
export default FurnitureMu;
