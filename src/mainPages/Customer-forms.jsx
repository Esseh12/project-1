import { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CustomerForms = () => {
  useEffect(() => {
    // External scripts to be loaded dynamically
    const scripts = [
      "ResourcePackages/MCBMU/assets/dist/vendor/plugins/js/plugins.min7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/theme7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/views/view.contact7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/demos/demo-business-consulting-27306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/custom7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/ma5-menu7306.js?package=MCBMU",
      "ResourcePackages/MCBMU/assets/dist/js/theme.init7306.js?package=MCBMU",
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
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <meta name="title" content="Oops! Page not found" />
      <meta name="description" /> <meta charSet="utf-8" />{" "}
      <meta name="viewport" content="width=device-width, initial-scale=1" />{" "}
      {/* Favicon */}{" "}
      <link
        rel="shortcut icon"
        href="/ResourcePackages/MCBMU/assets/dist/images/favicon.ico"
        type="image/x-icon"
      />{" "}
      {/* <link rel="apple-touch-icon" href="/ResourcePackages/MCBMU/assets/dist/images/favicon.ico"> */}{" "}
      {/* Mobile Metas */}{" "}
      {/*<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no">*/}{" "}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
      />{" "}
      {/* Web Fonts  */}{" "}
      {/*<link id="googleFonts" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet" type="text/css">*/}{" "}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />{" "}
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />{" "}
      {/* Vendor CSS */}{" "}
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/bootstrap/css/bootstrap.min.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/fontawesome-free/css/all.min.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/animate/animate.compat.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/simple-line-icons/css/simple-line-icons.min.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/owl.carousel/assets/owl.carousel.min.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/owl.carousel/assets/owl.theme.default.min.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/vendor/magnific-popup/magnific-popup.min.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/theme.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/theme-elements.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/theme-blog.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/theme-shop.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/demos/demo-business-consulting-2.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/skins/skin-business-consulting-2.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/custom.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/menu_style/assets/css/ma5-menu.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/ResourcePackages/MCBMU/assets/dist/css/style-new.css?package=MCBMU"
        rel="stylesheet"
        type="text/css"
      />{" "}
      {/* Theme CSS */} {/* Demo CSS */} {/* Skin CSS */}
      {/* Theme Custom CSS */} {/* Head Libs */}
      <title>Oops! Page not found</title>
      <meta property="og:title" content="Oops! Page not found" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mcb.mu/error-pages/404" />
      <meta property="og:site_name" content="MCB Mauritius" />
      <link rel="canonical" href="https://mcb.mu/error-pages/404" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* Reusable header component */}
        <Header />
        <div role="main" className="main">
          <div
            className="owl-carousel owl-carousel-top-banner owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-vertical-center dots-align-right dots-orientation-portrait custom-dots-style-1 show-dots-hover show-dots-xs nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover mb-0"
            data-plugin-options="{'autoplayTimeout': 36000000}"
            data-dynamic-height="['650px','650px','650px','550px','500px']"
            style={{ height: 650 }}
          >
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div
                  className="owl-item position-relative overlay overlay-show overlay-op-3"
                  style={{
                    backgroundImage:
                      "url(https://mcb.mu/images/mcb/default-album/search-banner-error-404.jpeg?sfvrsn=4229b3f3_0)",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                >
                  <div className="container position-relative z-index-3 h-100">
                    <div className="row align-items-center h-100">
                      <div className="col pb-4">
                        <h1
                          className="text-color-light w-50 w-100-mobile font-weight-medium text-12 line-height-2 mb-2 appear-animation text-decoration-none"
                          data-appear-animation="fadeInUpShorter"
                          data-appear-animation-delay={500}
                          data-plugin-options="{'minWindowWidth': 0}"
                        >
                          Oops! Page not found
                        </h1>
                        <div className="description">
                          <p>
                            This page might still be in the dark right now but
                            don’t worry, we are working actively to help you see
                            the light soon.
                          </p>
                        </div>
                      </div>
                    </div>
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
    </>
  );
};
export default CustomerForms;
