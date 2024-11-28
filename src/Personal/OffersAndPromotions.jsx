import { Helmet } from "react-helmet-async";
import NavMenu from "./OffersAndPromotions/OfferNavMenu";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";
import OfferCard from "./Personal-components/OfferCard";

const OffersAndPromotions = () => {
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

  const offers = [
    {
      link: "/personal/offers-and-promotions/lifestyle/kairali-spa",
      images: [
        "/images/mcb/offers/lifestyle/KAIRALI-SPAe26e.jpg?sfvrsn=4cdb330b_1",
      ],
      title: "KAIRALI SPA",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/albert-trading-ltd",
      images: [
        "/images/mcb/offers/lifestyle/Alberttradingcoverb567.png?sfvrsn=5bb0efb6_1",
      ],
      title: "Albert Trading Ltd",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/shoe-connection",
      images: [
        "/images/mcb/offers/lifestyle/shoe-connection-sd-2-20220459.jpg?sfvrsn=5dc5ea31_1",
      ],
      title: "Shoe Connection",
    },
    {
      link: "offers-and-promotions/Lifestyle/Phydra.html",
      images: ["/images/mcb/offers/lifestyle/phydra7e62.png?sfvrsn=36adca4_1"],
      title: "Phydra",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/mysa-home",
      images: [
        "/images/mcb/offers/lifestyle/mysa-home9e89.jpeg?sfvrsn=ab111409_1",
      ],
      title: "Mysa Home",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/rv7-perfumery",
      images: [
        "/images/mcb/offers/lifestyle/RV7_Perfumeryc4de.png?sfvrsn=b003c6b3_1",
      ],
      title: "RV7 Perfumery",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/my-fitness-pal",
      images: [
        "/images/mcb/offers/lifestyle/myfitness-pal1c6a.jpeg?sfvrsn=8d417e4a_1",
      ],
      title: "My Fitness Pal",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/la-vallee-des-couleurs-nature-park",
      images: [
        "/images/mcb/offers/lifestyle/La-Vallee-des-Couleursc442.jpeg?sfvrsn=28f96e87_1",
      ],
      title: "La Vallée des Couleurs Nature Park",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/iron-lion-gym-apparel",
      images: [
        "/images/mcb/offers/lifestyle/iron-lion-gym-apparel06c6.jpeg?sfvrsn=3dd8b0f9_1",
      ],
      title: "Iron Lion Gym Apparel",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/suhotoo-optics",
      images: [
        "/images/mcb/offers/lifestyle/Suhotoo_optics8758.png?sfvrsn=f5136b17_1",
      ],
      title: "Suhotoo Optics",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/roche-bobois-special-deal",
      images: [
        "/images/mcb/offers/lifestyle/Roche-Bobois-Special-deal3dbc.jpeg?sfvrsn=61e62b3b_1",
      ],
      title: "Roche Bobois Special deal",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/sofap-home",
      images: [
        "/images/mcb/offers/lifestyle/Sofap2023ec2b.jpg?sfvrsn=f5bd3a6b_1",
      ],
      title: "Sofap Home",
    },
    {
      link: "/personal/offers-and-promotions/lifestyle/well-case-ltd",
      images: [
        "/images/mcb/offers/lifestyle/Well-Case-Ltd214a.png?sfvrsn=8654c0c8_1",
      ],
      title: "Well Case Ltd",
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="title" content="Offers and promotions" />
        <title>Offers and promotions</title>{" "}
        <meta property="og:title" content="Offers and promotions" />
        <meta
          property="og:url"
          content="https://mcb.mu/personal/offers-and-promotions"
        />
        <link rel="canonical" href="/offers-and-promotions.html" />
      </Helmet>
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
        {/* REUSABLE HEADER COMPONENT */}
        <PersonalHeader />
        {/* REUSABLE HEADER COMPONENT */}
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          {/* reusable nav menu component */}
          <div className="container py-2 mt-50 mb-70">
            <div className=" sort-destination-loader-showing mt-4 pt-2">
              <div className="row mb-70">
                <div className="col-lg-12">
                  <div className="wrapper-filter d-flex justify-content-between align-items-center bg-color-light-scale-4">
                    <div className="wrapper">
                      <nav className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active bh-sl-reset product"
                          rel="product"
                          id="nav-product-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-product"
                          type="button"
                          role="tab"
                          aria-controls="nav-product"
                          aria-selected="true"
                        >
                          <span>Filter by product</span>
                        </button>
                        <button
                          className="nav-link  bh-sl-reset category"
                          rel="category"
                          id="nav-category-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-category"
                          type="button"
                          role="tab"
                          aria-controls="nav-category"
                          aria-selected="false"
                        >
                          <span>Choose a category</span>
                        </button>
                        <div className="tab"></div>
                      </nav>
                    </div>
                    <div className="tab-content w-50" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-product"
                        role="tabpanel"
                        aria-labelledby="nav-product-tab"
                      >
                        <div
                          className="dropdown bh-sl-filters"
                          id="product-filter"
                        >
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenuProduct"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Filter offers
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownMenuProduct"
                          >
                            <div className="tags"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-category"
                        role="tabpanel"
                        aria-labelledby="nav-category-tab"
                      >
                        <div
                          className="dropdown bh-sl-filters"
                          id="category-filter"
                        >
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenuCategory"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Filter offers
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownMenuCategory"
                          >
                            <div className="tags"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row portfolio-list sort-destination">
                {offers.map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/offers-and-promotions by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:38:34 GMT */}
    </>
  );
};

export default OffersAndPromotions;
