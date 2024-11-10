import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LocateUs = () => {
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
      {/* Mirrored from mcb.mu/locate-us by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:38:48 GMT */}
      <meta name="title" content="Locate us | Institutional Banking | MCB" />
      <meta
        name="description"
        content="Find MCB Institutional Banking Branches and ATMs - Your Local & Global Financial Connection. Locate us for dedicated support."
      />
      <title>Locate us | Institutional Banking | MCB</title>
      <meta
        property="og:title"
        content="Locate us | Institutional Banking | MCB"
      />
      <meta
        property="og:description"
        content="Find MCB Institutional Banking Branches and ATMs - Your Local & Global Financial Connection. Locate us for dedicated support."
      />
      <link rel="canonical" href="/locate-us" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}{" "}
        {/* REUSABLE HEADER CONTAINER */}
        <Header />
        <div role="main" className="main no-banner-spacing">
          <div className="row" data-sf-element="Row">
            <div
              id="Main_C001_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div className="container locate-us-block">
                <div className="row ">
                  <div className="col-lg-12">
                    <h1>Locate us</h1>
                    <div className="bh-sl-container mx-0 px-0">
                      <div className="bh-sl-filters-container wrapper-filter  d-flex justify-content-between align-items-center bg-color-light-scale-4">
                        <div className="wrapper">
                          <nav
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active bh-sl-reset branch"
                              id="nav-branch-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-branch"
                              type="button"
                              role="tab"
                              aria-controls="nav-branch"
                              aria-selected="true"
                            >
                              <span>Branch</span>
                            </button>
                            <button
                              className="nav-link  bh-sl-reset atm"
                              id="nav-atm-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-atm"
                              type="button"
                              role="tab"
                              aria-controls="nav-atm"
                              aria-selected="false"
                            >
                              <span>ATM</span>
                            </button>
                            <div className="tab"></div>
                          </nav>
                        </div>
                        <div className="tab-content w-50" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-branch"
                            role="tabpanel"
                            aria-labelledby="nav-branch-tab"
                          >
                            <div
                              className="dropdown w-100 bh-sl-filters"
                              id="branch-filter"
                            >
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuBranches"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Branch Type
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-light"
                                aria-labelledby="dropdownMenuBranches"
                              >
                                <ul>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="branch-branch"
                                      />{" "}
                                      Branch
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="branch-instant-atm"
                                      />{" "}
                                      Instant ATM
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="cash-withdrawal"
                                      />{" "}
                                      Cash Withdrawal
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="branch-cheque-deposit"
                                      />{" "}
                                      Cheque Deposit
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="branch-cash-atm"
                                      />{" "}
                                      Cash ATM
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="instant-cash-deposit"
                                      />{" "}
                                      Instant Cash Deposit
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="branch-kiosk"
                                      />{" "}
                                      Kiosk
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="atm-kiosk"
                                      />{" "}
                                      Kiosk
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="branch"
                                        defaultValue="branch-businessbanking"
                                      />{" "}
                                      Business Banking
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-atm"
                            role="tabpanel"
                            aria-labelledby="nav-atm-tab"
                          >
                            <div
                              className="dropdown w-100 bh-sl-filters"
                              id="atm-filter"
                            >
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuAtm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                ATM Type
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-light"
                                aria-labelledby="dropdownMenuAtm"
                              >
                                <ul>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="atm"
                                        defaultValue="atm-cashatm"
                                      />{" "}
                                      Cash withdrawal
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="atm"
                                        defaultValue="atm-cheque-deposit"
                                      />{" "}
                                      Cheque Deposit
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="atm"
                                        defaultValue="atm-instantatm"
                                      />{" "}
                                      Instant cash deposit
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="atm"
                                        defaultValue="atm-branch"
                                      />{" "}
                                      Cash withdrawal
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="atm"
                                        defaultValue="atm-foreignatm"
                                      />{" "}
                                      Foreign ATM
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="atm"
                                        defaultValue="atm-dual-forex-atm"
                                      />{" "}
                                      Dual Forex ATM
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="bh-sl-map-container"
                        className="bh-sl-map-container"
                      >
                        <div id="bh-sl-map" className="bh-sl-map" />
                        <div className="bh-sl-loc-list">
                          <ul className="list" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* REUSABLE FOOTER CONTAINER */}
        <Footer />
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/locate-us by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:39:06 GMT */}
    </>
  );
};
export default LocateUs;
