import { Helmet } from "react-helmet-async";
import SmeHeader from "../Components/Sme-header";
import Footer from "../Components/Footer";

const Bank = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/sme/bank by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:40:28 GMT */}
        <meta name="title" content="Everyday banking for SMEs | MCB	" />
        <meta
          name="description"
          content="Learn how our dedicated team of experts can, with a fresh customized approach, enhance your business banking experience!"
        />
        <title>Everyday banking for SMEs | MCB</title>
        <meta property="og:title" content="Everyday banking for SMEs | MCB" />
        <meta
          property="og:description"
          content="Learn how our dedicated team of experts can, with a fresh customized approach, enhance your business banking experience!"
        />
        <meta property="og:url" content="https://mcb.mu/sme/bank" />
        <link rel="canonical" href="/sme/bank" />
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
      {/* Mirrored from mcb.mu/sme/bank by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:40:31 GMT */}
    </>
  );
};
export default Bank;
