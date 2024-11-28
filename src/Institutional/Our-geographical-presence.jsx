import { Helmet } from "react-helmet-async";
import InstitutionalHeader from "../Components/Institutional-header";
import Footer from "../Components/Footer";

const OurGeographicalPresence = () => {
  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/institutional/our-geographical-presence by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:51:44 GMT */}
        <meta
          name="title"
          content="Our Geographical Presence | Institutional Banking | MCB	"
        />
        <meta
          name="description"
          content="Explore MCB's extensive global reach with a presence in key regions and countries, connecting you to a world of financial opportunities."
        />
        <title>Our Geographical Presence | Institutional Banking | MCB</title>
        <meta
          property="og:title"
          content="Our Geographical Presence | Institutional Banking | MCB"
        />
        <meta
          property="og:description"
          content="Explore MCB's extensive global reach with a presence in key regions and countries, connecting you to a world of financial opportunities."
        />
        <meta
          property="og:url"
          content="https://mcb.mu/institutional/our-geographical-presence"
        />
        <link rel="canonical" href="/our-geographical-presence" />
      </Helmet>
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {/* Header */}
        <InstitutionalHeader />
        {/* Header */}
        <div role="main" className="main no-banner-spacing">
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <div className="bh-sl-container mx-0 px-0">
                  <div
                    className="bh-sl-filters-container wrapper-filter  d-flex justify-content-between align-items-center bg-color-light-scale-4"
                    style={{ display: "none" }}
                  >
                    <div className="wrapper">
                      <nav className="nav nav-tabs" id="nav-tab" role="tablist">
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
                                    defaultValue="branch-cash-withdrawal"
                                  />{" "}
                                  Cash Withdrawal
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="branch"
                                    defaultValue="branch-foreign-currency-transaction"
                                  />{" "}
                                  Foreign Currency Transaction
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="branch"
                                    defaultValue="branch-instant-cash-deposit"
                                  />{" "}
                                  Instant Cash Deposit
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="branch"
                                    defaultValue="branch-night-safe"
                                  />{" "}
                                  Night Safe
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
                                    defaultValue="atm-instant-cash-deposit"
                                  />{" "}
                                  Cash deposit
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bh-sl-map-container" className="bh-sl-map-container">
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
        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>{" "}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/institutional/our-geographical-presence by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:51:44 GMT */}
    </>
  );
};
export default OurGeographicalPresence;
