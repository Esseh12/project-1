import Header from "./Header";
import { Link } from "react-router-dom";

const InstitutionalHeader = () => {
  // active current-page-active
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
                  <Link
                    className="nav-link "
                    to="/institutional/mcb-at-a-glance"
                    target="_self"
                  >
                    MCB at a glance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/institutional/our-geographical-presence"
                    target="_self"
                  >
                    Our geographical presence
                  </Link>
                </li>
                <li className="nav-item dropdown has-megamenu ">
                  <Link
                    className="nav-link"
                    to="/institutional/our-solutions"
                    target="_self"
                    id="navbarDropdownMenuLink2-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our solutions&nbsp;
                    <i className="fas fa-chevron-down" />
                  </Link>
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
                                  <Link
                                    className="d-flex flex-column "
                                    to="/institutional/our-solutions/bank-of-banks"
                                    target="_self"
                                  >
                                    <strong>Bank of Banks</strong>
                                    <small></small>
                                  </Link>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <Link
                                    className="d-flex flex-column "
                                    to="/institutional/our-solutions/correspondent-banking"
                                    target="_self"
                                  >
                                    <strong>Correspondent Banking</strong>
                                    <small></small>
                                  </Link>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <Link
                                    className="d-flex flex-column "
                                    to="/institutional/our-solutions/risk-sharing"
                                    target="_self"
                                  >
                                    <strong>Risk Sharing</strong>
                                    <small></small>
                                  </Link>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <Link
                                    className="d-flex flex-column "
                                    to="/institutional/our-solutions/syndications"
                                    target="_self"
                                  >
                                    <strong>Syndications</strong>
                                    <small></small>
                                  </Link>
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
                  <Link
                    className="nav-link "
                    to="/institutional/events"
                    target="_self"
                  >
                    Events
                  </Link>
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
