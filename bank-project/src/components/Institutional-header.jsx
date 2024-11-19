import Header from "./Header";

const InstitutionalHeader = () => {
  return (
    <>
      <Header>
        {/* Second Level Navigation */}
        <div
          className="ms-auto me-auto main-nav"
          style={{ visibility: "visible" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="/institutional/mcb-at-a-glance"
                    target="_self"
                  >
                    MCB at a glance
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="/institutional/our-geographical-presence"
                    target="_self"
                  >
                    Our geographical presence
                  </a>
                </li>
                <li className="nav-item dropdown has-megamenu ">
                  <a
                    className="nav-link"
                    href="/institutional/our-solutions"
                    target="_self"
                    id="navbarDropdownMenuLink2-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our solutions&nbsp;
                    <i className="fas fa-chevron-down" />
                  </a>
                  <div className="dropdown-menu megamenu" role="menu">
                    <button type="button" className="btn-close-dropdown-menu">
                      <i className="icon-close-menu-main" />
                      Close
                    </button>
                    <div className="container-fluid py-5 px-5">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="content">
                            <h2 className="sub-title">Our solutions</h2>
                            <p className="sub-description"></p>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="menu-list">
                            <ul>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="/institutional/our-solutions/bank-of-banks"
                                    target="_self"
                                  >
                                    <strong>Bank of Banks</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="/institutional/our-solutions/correspondent-banking"
                                    target="_self"
                                  >
                                    <strong>Correspondent Banking</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="/institutional/our-solutions/risk-sharing"
                                    target="_self"
                                  >
                                    <strong>Risk Sharing</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="/institutional/our-solutions/syndications"
                                    target="_self"
                                  >
                                    <strong>Syndications</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="/institutional/events"
                    target="_self"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
export default InstitutionalHeader;
