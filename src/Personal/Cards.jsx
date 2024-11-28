import { Helmet } from "react-helmet-async";
import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const PersonalCards = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/personal/cards by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:34:10 GMT */}
        <meta name="title" content="Cards | MCB" />
        <meta
          name="description"
          content="Get great benefits and flexibility with our range of credit and debit cards. Choose from our Primo Credit Card, Classic, Gold or American Express credit card."
        />
        <title>Cards | MCB</title>{" "}
        <meta property="og:title" content="Cards | MCB" />
        <meta
          property="og:description"
          content="Get great benefits and flexibility with our range of credit and debit cards. Choose from our Primo Credit Card, Classic, Gold or American Express credit card."
        />
        <meta property="og:url" content="https://mcb.mu/personal/cards" />
        <link rel="canonical" href="/personal/cards" />
      </Helmet>
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */} {/* Personal HEADER */}
        <PersonalHeader />
        {/* Personal HEADER */}
        <div role="main no-banner-spacing" className="main"></div>{" "}
        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/cards by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:34:13 GMT */}
    </>
  );
};
export default PersonalCards;
