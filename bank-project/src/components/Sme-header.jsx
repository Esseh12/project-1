import Header from "./Header";

const SmeHeader = () => {
  return (
    <Header>
      <div
        className="ms-auto me-auto main-nav"
        style={{ visibility: "visible" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <ul className="navbar-nav">
              <li className="nav-item dropdown has-megamenu ">
                <a
                  className="nav-link"
                  href="sme/bank.html"
                  target="_self"
                  id="navbarDropdownMenuLink0-2"
                  data-bs-toggle="dropdown"
                >
                  Bank&nbsp;
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
                          <h2 className="sub-title">Bank</h2>
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
                                  href="sme/bank/business-account.html"
                                  target="_self"
                                >
                                  <strong>Business Account</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <strong>Tailor-made Solutions</strong>
                                <small></small>
                              </span>
                              <ul
                                className="submenu"
                                aria-labelledby="navbarDropdownMenuLink01-1"
                              >
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="https://www.mcbmicrofinance.mu/"
                                      target="_blank"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        MCB Microfinance
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li className="">
                              <span>
                                <strong>Transact anytime, anywhere</strong>
                                <small></small>
                              </span>
                              <ul
                                className="submenu"
                                aria-labelledby="navbarDropdownMenuLink02-1"
                              >
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/bank/transact-anytime-anywhere/internet-banking.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        Internet Banking
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/bank/transact-anytime-anywhere/atm.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        ATM
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/bank/transact-anytime-anywhere/e-statements.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        E-Statements
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/bank/transact-anytime-anywhere/juicepro.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        JuicePro
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown has-megamenu ">
                <a
                  className="nav-link"
                  href="sme/borrow.html"
                  target="_self"
                  id="navbarDropdownMenuLink1-2"
                  data-bs-toggle="dropdown"
                >
                  Borrow&nbsp;
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
                          <h2 className="sub-title">Borrow</h2>
                          <p className="sub-description"></p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="menu-list">
                          <ul>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/loans.html"
                                  target="_self"
                                >
                                  <strong>Loans</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/overdrafts.html"
                                  target="_self"
                                >
                                  <strong>Overdrafts</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/leasing.html"
                                  target="_self"
                                >
                                  <strong>Leasing</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/trade-finance.html"
                                  target="_self"
                                >
                                  <strong>Trade Finance</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/sustainable-loan.html"
                                  target="_self"
                                >
                                  <strong>Sustainable Loan</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/factoring.html"
                                  target="_self"
                                >
                                  <strong>Factoring</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/bank-guarantees.html"
                                  target="_self"
                                >
                                  <strong>Bank Guarantees</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/borrow/lokal-is-beautiful.html"
                                  target="_self"
                                >
                                  <strong>Lokal is Beautiful</strong>
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
              <li className="nav-item dropdown has-megamenu ">
                <a
                  className="nav-link"
                  href="sme/pay.html"
                  target="_self"
                  id="navbarDropdownMenuLink2-2"
                  data-bs-toggle="dropdown"
                >
                  Pay&nbsp;
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
                          <h2 className="sub-title">Pay</h2>
                          <p className="sub-description"></p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="menu-list">
                          <ul>
                            <li className="">
                              <span>
                                <strong>Cards</strong>
                                <small></small>
                              </span>
                              <ul
                                className="submenu"
                                aria-labelledby="navbarDropdownMenuLink20-1"
                              >
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/pay/cards/business-card.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        Business Card
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/pay/cards/business-deposit-card.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        Business Deposit Card
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/pay/cards/fleetman-card.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        Fleetman Card
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/pay/payroll-services.html"
                                  target="_self"
                                >
                                  <strong>Payroll Services</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/pay/cheques.html"
                                  target="_self"
                                >
                                  <strong>Cheques</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <strong>Electronic Payments</strong>
                                <small></small>
                              </span>
                              <ul
                                className="submenu"
                                aria-labelledby="navbarDropdownMenuLink23-1"
                              >
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/pay/electronic-payments/electronic-transfer.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        Electronic Transfer
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                                <li className="text-3 w-100  ">
                                  <span>
                                    <a
                                      className="d-flex flex-column text-1 line-height-2 "
                                      href="sme/pay/electronic-payments/e-commerce-solutions.html"
                                      target="_self"
                                    >
                                      <div className="d-flex">
                                        <i className="fas fa-chevron-right text-2 me-1" />
                                        E-Commerce Solutions
                                      </div>
                                      <small></small>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown has-megamenu ">
                <a
                  className="nav-link"
                  href="sme/sme-connect.html"
                  target="_self"
                  id="navbarDropdownMenuLink3-2"
                  data-bs-toggle="dropdown"
                >
                  SME Connect&nbsp;
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
                          <h2 className="sub-title">SME Connect</h2>
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
                                  href="sme/sme-connect/start-your-business.html"
                                  target="_self"
                                >
                                  <strong>Start Your Business</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/sme-connect/manage-your-business.html"
                                  target="_self"
                                >
                                  <strong>Manage Your Business</strong>
                                  <small></small>
                                </a>
                              </span>
                            </li>
                            <li className="">
                              <span>
                                <a
                                  className="d-flex flex-column "
                                  href="sme/sme-connect/speaker-series.html"
                                  target="_self"
                                >
                                  <strong>Speaker Series</strong>
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
            </ul>
          </div>
        </div>
      </div>
    </Header>
  );
};
export default SmeHeader;
