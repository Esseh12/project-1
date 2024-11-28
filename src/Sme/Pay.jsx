import { Helmet } from "react-helmet-async";
import SmeHeader from "../Components/Sme-header";
import Footer from "../Components/Footer";

const Pay = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/sme/pay by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:42:42 GMT */}
        <meta name="title" content="Streamline Your SME Payments | MCB" />
        <meta
          name="description"
          content="Manage your cash flow and streamline payments with MCB's SME payment solutions. Discover business cards, payroll services, and secure online payment options."
        />
        <title>Streamline Your SME Payments | MCB</title>
        <meta
          property="og:title"
          content="Streamline Your SME Payments | MCB"
        />
        <meta
          property="og:description"
          content="Manage your cash flow and streamline payments with MCB's SME payment solutions. Discover business cards, payroll services, and secure online payment options."
        />
        <meta property="og:url" content="https://mcb.mu/sme/pay" />
        <link rel="canonical" href="/sme/pay" />
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
        {/* End Google Tag Manager (noscript) */}
        {/* Header */}
        <SmeHeader />
        {/* Header */}
        <div role="main" className="main no-banner-spacing"></div>
        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/sme/pay by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:42:50 GMT */}
    </>
  );
};
export default Pay;
