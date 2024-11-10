import { useEffect } from "react";
import Header from "../components/Header";
import NavMenu from "./OffersAndPromotions/OfferNavMenu";
import Footer from "../components/Footer";

const HomeOffers = () => {
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:10:44 GMT */}
      <meta name="title" content="Home Offers" />
      <title>Home Offers</title>{" "}
      <meta property="og:title" content="Home Offers" />
      <meta
        property="og:url"
        content="https://mcb.mu/personal/offers-and-promotions/home-offers"
      />
      <link rel="canonical" href="/home-offers" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          <div className="container py-2 mt-50 mb-70">
            <div className=" sort-destination-loader-showing mt-4 pt-2">
              <div className="row portfolio-list sort-destination">
                <div className="col-sm-6 col-lg-3 isotope-item">
                  <div className="portfolio-item">
                    <a href="home-offers/Home/rey-lenferna">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/585x330px_reylenferna70fc.jpg?sfvrsn=c515b459_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Rey &amp; Lenferna
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
                    <a href="home-offers/Home/Teco-Ltd">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/Teco-Ltd-585x3307629.jpg?sfvrsn=cc322cf3_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">Teco Ltd</span>
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
                    <a href="home-offers/Home/Entrepot-de-la-Pierre.html">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/entrepot-de-la-pierre2240.jpeg?sfvrsn=93d93ddd_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Entrepôt de la Pierre
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
                    <a href="home-offers/Home/RAISON-HOME">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/raison-home9ca2.jpeg?sfvrsn=c2c404ef_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              RAISON HOME
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
                    <a href="home-offers/Home/VH-Home-Decorations">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/vh-home-decorations3a35.jpeg?sfvrsn=b3994cac_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              VH Home Decorations
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
                    <a href="home-offers/Home/Ashley-Homestore">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/ashley-homestore-hl82c0.jpg?sfvrsn=596b78e7_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Ashley Homestore
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
                    <a href="home-offers/Home/Tempur-Mauritius">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/tempur-hl8406.jpg?sfvrsn=a8eabf0a_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Tempur Mauritius
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
                    <a href="home-offers/Home/ELECTRICAL.MU">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/electrical.mu9de8.png?sfvrsn=dcdd70c6_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              ELECTRICAL.MU
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
                    <a href="home-offers/Home/Leal-Energie-Ltd.html">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/leal-energie44a8.jpeg?sfvrsn=d58f2560_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Leal Energie Ltd
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
                    <a href="home-offers/Home/Duraco-Ltd">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/duraco_tcm11-655577e9.jpg?sfvrsn=8945fa97_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">Duraco Ltd</span>
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
                    <a href="home-offers/Home/Profilage-Ocean-Indien">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/profilageed66.jpg?sfvrsn=8b1f2211_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Profilage Océan Indien
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
                    <a href="home-offers/Home/Lising">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/lising064c.jpg?sfvrsn=e4e55ab5_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">Lising</span>
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
                    <a href="home-offers/Home/Quality-Decor">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/quality-decor_tcm11-65667351.jpg?sfvrsn=c786f03e_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Quality Decor
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
                    <a href="home-offers/Home/Furniture.mu">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/furniture-mu-hlec96.jpg?sfvrsn=2c181b99_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Furniture.mu
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
                    <a href="home-offers/Home/Deco-B">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/Deco-B0c4f.jpg?sfvrsn=3d8afe2a_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">Deco-B</span>
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
                    <a href="home-offers/Home/Mauvilac">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/585x330px_mauvilac5255.jpg?sfvrsn=b01e11ef_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">Mauvilac</span>
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
                    <a href="home-offers/Home/Associated-Textile-Services">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/associated-textilese11f.jpeg?sfvrsn=d91cb9b1_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Associated Textile Services
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
                    <a href="home-offers/Home/Dragon-Electronics">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/dragon-electronics-hl-v2eb2d.jpg?sfvrsn=ae167c01_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Dragon Electronics
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
                    <a href="home-offers/Home/Around-The-Pool">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/around-the-pool-v2-resized2851.jpg?sfvrsn=32024d6b_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Around The Pool
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
                    <a href="home-offers/Home/Galeries-Fokeerbux">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/galeries-fokeerbux-585x330px74c1.jpg?sfvrsn=8e1f581b_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Galeries Fokeerbux
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
                    <a href="home-offers/Home/Febal-Casa">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/Febalcasabfe2.jpg?sfvrsn=25907e89_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">Febal Casa</span>
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
                    <a href="home-offers/Home/Roche-Bobois.html">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/roche-bobois-hl-22dab.jpg?sfvrsn=a423b7e3_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Roche Bobois
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
                    <a href="home-offers/Home/MYSA-Maison">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/lifestyle/mysa-home9e89.jpeg?sfvrsn=ab111409_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              MYSA Maison
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
                    <a href="home-offers/Home/Sofap-Inspirations-Store">
                      <span className="thumb-info thumb-info-lighten border-radius-0">
                        <span className="thumb-info-wrapper border-radius-0">
                          <span
                            className="owl-carousel owl-theme dots-inside m-0"
                            data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                          >
                            <span>
                              <img
                                src="../../images/mcb/offers/home/sofap-hlb5f0.jpg?sfvrsn=a595cf5d_1"
                                className="img-fluid border-radius-0"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="thumb-info-title">
                            <span className="thumb-info-inner">
                              Sofap Inspirations Store
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:22:07 GMT */}
    </>
  );
};
export default HomeOffers;
