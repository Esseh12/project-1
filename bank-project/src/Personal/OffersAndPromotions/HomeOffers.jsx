import PersonalHeader from "../../Components/Personal-header";
import NavMenu from "./OfferNavMenu";
import OfferCard from "../Personal-components/OfferCard";
import Footer from "../../Components/Footer";

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

  const offers = [
    {
      link: "/personal/offers-and-promotions/home-offers/Home/rey-lenferna",
      images: [
        "/images/mcb/offers/home/585x330px_reylenferna70fc.jpg?sfvrsn=c515b459_1",
      ],
      title: "Rey & Lenferna",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/teco-ltd",
      images: [
        "/images/mcb/offers/home/Teco-Ltd-585x3307629.jpg?sfvrsn=cc322cf3_1",
      ],
      title: "Teco Ltd",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/entrepot-de-la-pierre",
      images: [
        "/images/mcb/offers/home/entrepot-de-la-pierre2240.jpeg?sfvrsn=93d93ddd_1",
      ],
      title: "Entrepôt de la Pierre",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/raison-home",
      images: [
        "/images/mcb/offers/home/raison-home9ca2.jpeg?sfvrsn=c2c404ef_1",
      ],
      title: "RAISON HOME",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/vh-home-decorations",
      images: [
        "/images/mcb/offers/home/vh-home-decorations3a35.jpeg?sfvrsn=b3994cac_1",
      ],
      title: "VH Home Decorations",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/ashley-homestore",
      images: [
        "/images/mcb/offers/home/ashley-homestore-hl82c0.jpg?sfvrsn=596b78e7_1",
      ],
      title: "Ashley Homestore",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/tempur-mauritius",
      images: ["/images/mcb/offers/home/tempur-hl8406.jpg?sfvrsn=a8eabf0a_1"],
      title: "Tempur Mauritius",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/electrical-mu",
      images: [
        "/images/mcb/offers/home/electrical.mu9de8.png?sfvrsn=dcdd70c6_1",
      ],
      title: "ELECTRICAL.MU",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/leal-energie-ltd",
      images: [
        "/images/mcb/offers/home/leal-energie44a8.jpeg?sfvrsn=d58f2560_1",
      ],
      title: "Leal Energie Ltd",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/duraco-ltd",
      images: [
        "/images/mcb/offers/home/duraco_tcm11-655577e9.jpg?sfvrsn=8945fa97_1",
      ],
      title: "Duraco Ltd",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/profilage-ocean-indien",
      images: ["/images/mcb/offers/home/profilageed66.jpg?sfvrsn=8b1f2211_1"],
      title: "Profilage Océan Indien",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/lising",
      images: ["/images/mcb/offers/home/lising064c.jpg?sfvrsn=e4e55ab5_1"],
      title: "Lising",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/quality-decor",
      images: [
        "/images/mcb/offers/home/quality-decor_tcm11-65667351.jpg?sfvrsn=c786f03e_1",
      ],
      title: "Quality Decor",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/furniture-mu",
      images: [
        "/images/mcb/offers/home/furniture-mu-hlec96.jpg?sfvrsn=2c181b99_1",
      ],
      title: "Furniture.mu",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/deco-b",
      images: ["/images/mcb/offers/home/Deco-B0c4f.jpg?sfvrsn=3d8afe2a_1"],
      title: "Deco-B",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/mauvilac",
      images: [
        "/images/mcb/offers/home/585x330px_mauvilac5255.jpg?sfvrsn=b01e11ef_1",
      ],
      title: "Mauvilac",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/associated-textile-services",
      images: [
        "/images/mcb/offers/home/associated-textilese11f.jpeg?sfvrsn=d91cb9b1_1",
      ],
      title: "Associated Textile Services",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/dragon-electronics",
      images: [
        "/images/mcb/offers/home/dragon-electronics-hl-v2eb2d.jpg?sfvrsn=ae167c01_1",
      ],
      title: "Dragon Electronics",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/around-the-pool",
      images: [
        "/images/mcb/offers/home/around-the-pool-v2-resized2851.jpg?sfvrsn=32024d6b_1",
      ],
      title: "Around The Pool",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/galeries-fokeerbux",
      images: [
        "/images/mcb/offers/home/galeries-fokeerbux-585x330px74c1.jpg?sfvrsn=8e1f581b_1",
      ],
      title: "Galeries Fokeerbux",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/febalcasa",
      images: ["/images/mcb/offers/home/Febalcasabfe2.jpg?sfvrsn=25907e89_1"],
      title: "Febal Casa",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/roche-bobois",
      images: [
        "/images/mcb/offers/home/roche-bobois-hl-22dab.jpg?sfvrsn=a423b7e3_1",
      ],
      title: "Roche Bobois",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/mysa-maison",
      images: [
        "/images/mcb/offers/lifestyle/mysa-home9e89.jpeg?sfvrsn=ab111409_1",
      ],
      title: "MYSA Maison",
    },
    {
      link: "/personal/offers-and-promotions/home-offers/home/sofap-inspirations-store",
      images: ["/images/mcb/offers/home/sofap-hlb5f0.jpg?sfvrsn=a595cf5d_1"],
      title: "Sofap Inspirations Store",
    },
  ];

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
        {/* HEADER COMPONENT */}
        <PersonalHeader />
        {/* END OF HEADER COMPONENT */}
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          <div className="container py-2 mt-50 mb-70">
            <div className=" sort-destination-loader-showing mt-4 pt-2">
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:22:07 GMT */}
    </>
  );
};
export default HomeOffers;
