import PersonalHeader from "../../Components/Personal-header";
import NavMenu from "./OfferNavMenu";
import OfferCard from "../Personal-components/OfferCard";
import Footer from "../../Components/Footer";

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

  const offers = [
    {
      link: "/personal/offers-and-promotions/banking/enjoy-up-to-8-off-on-booking-com-with-visa",
      images: [
        "/images/mcb/offers/banking/Visa---Booking.com-Promo-2023-2024_Website-Banner_585x330f71c.jpg?sfvrsn=2a432b5b_1",
      ],
      title: "Enjoy up to 8% off on Booking.com with Visa",
    },
    {
      link: "/personal/offers-and-promotions/banking/contactless-campaign-2023",
      images: [
        "/images/mcb/offers/banking/visa-festive-contactless-campaign-2023-website-585-x-330-pxd2d1.jpg?sfvrsn=5f368b29_1",
      ],
      title:
        "Unlock amazing experiences at Casela, Star Cinemas and Gravity Max",
    },
    {
      link: "/personal/offers-and-promotions/banking/cashless-avoy-ou-lwin",
      images: [
        "/images/mcb/offers/banking/EOY-2023---CASHLESS-AVOY-OU-LWIN---V222d2.jpg?sfvrsn=ec0de8f5_2",
      ],
      title: "CASHLESS AVOY OU LWIN",
    },
    {
      link: "/personal/offers-and-promotions/banking/mcb-rupys-offfers",
      images: [
        "/images/mcb/offers/banking/mcb-20rupys-20generique-20visual4914.jpg?sfvrsn=3bb74c65_1",
      ],
      title: "MCB Rupys offers",
    },
  ];

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
        {/* End Google Tag Manager (noscript) */}
        {/* reusable header */}
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
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/banking by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:23:40 GMT */}
    </>
  );
};
export default Banking;
