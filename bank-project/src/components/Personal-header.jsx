import Header from "./Header";

const PersonalHeader = () => {
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
                <li className="nav-item dropdown has-megamenu ">
                  <a
                    className="nav-link"
                    //dropdown-toggle
                    href="../accounts-packages.html"
                    target="_self"
                    id="navbarDropdownMenuLink0-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Accounts &amp; Packages&nbsp;
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
                            <h2 className="sub-title">
                              Accounts &amp; Packages
                            </h2>
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
                                    href="../accounts-packages/standard-savings-account.html"
                                    target="_self"
                                  >
                                    <strong>Standard savings account</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../accounts-packages/mcb-rupys.html"
                                    target="_self"
                                  >
                                    <strong>MCB Rupys</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../accounts-packages/standard-current-account.html"
                                    target="_self"
                                  >
                                    <strong>Standard current account</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../accounts-packages/foreign-currency-account.html"
                                    target="_self"
                                  >
                                    <strong>Foreign currency account</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../accounts-packages/instakit.html"
                                    target="_self"
                                  >
                                    <strong>Instakit</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../accounts-packages/pack-1825.html"
                                    target="_self"
                                  >
                                    <strong>Pack 18.25</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../accounts-packages/neo.html"
                                    target="_self"
                                  >
                                    <strong>NEO</strong>
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
                    href="../loans.html"
                    target="_self"
                    id="navbarDropdownMenuLink1-2"
                    data-bs-toggle="dropdown"
                  >
                    Loans&nbsp;
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
                            <h2 className="sub-title">Loans</h2>
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
                                    href="../loans/educational-loan.html"
                                    target="_self"
                                  >
                                    <strong>Educational loan</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../loans/personal-loan.html"
                                    target="_self"
                                  >
                                    <strong>Personal loan</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../loans/home-loan.html"
                                    target="_self"
                                  >
                                    <strong>Home loan</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../loans/green-loan.html"
                                    target="_self"
                                  >
                                    <strong>Green loan</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../loans/personal-overdrafts.html"
                                    target="_self"
                                  >
                                    <strong>Personal overdrafts</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="https://mcbleasing.mu/"
                                    target="_blank"
                                  >
                                    <strong>Car lease</strong>
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
                <li className="nav-item dropdown has-megamenu active">
                  <a
                    className="nav-link"
                    href="../cards.html"
                    target="_self"
                    id="navbarDropdownMenuLink2-2"
                    data-bs-toggle="dropdown"
                  >
                    Cards&nbsp;
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
                            <h2 className="sub-title">Cards</h2>
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
                                    href="mcb-debit-card.html"
                                    target="_self"
                                  >
                                    <strong>MCB debit card</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="mastercard-primo-credit-card.html"
                                    target="_self"
                                  >
                                    <strong>
                                      Mastercard Primo credit card
                                    </strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="classic-credit-card.html"
                                    target="_self"
                                  >
                                    <strong>Classic credit card</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="gold-credit-card.html"
                                    target="_self"
                                  >
                                    <strong>Gold credit card</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <strong>American Express®</strong>
                                  <small></small>
                                </span>
                                <ul
                                  className="submenu"
                                  aria-labelledby="navbarDropdownMenuLink24-1"
                                >
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="american-express/american-express-green.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          American Express® Green
                                        </div>
                                        <small></small>
                                      </a>
                                    </span>
                                  </li>
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="american-express/american-express-gold.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          American Express® Gold
                                        </div>
                                        <small></small>
                                      </a>
                                    </span>
                                  </li>
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="american-express/membership-rewards.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          Membership Rewards®
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
                                    href="visa-platinum.html"
                                    target="_self"
                                  >
                                    <strong>Visa Platinum</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="visa-signature.html"
                                    target="_self"
                                  >
                                    <strong>Visa Signature</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="compare-our-credit-cards.html"
                                    target="_self"
                                  >
                                    <strong>Compare our credit cards</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <strong>Prepaid cards</strong>
                                  <small></small>
                                </span>
                                <ul
                                  className="submenu"
                                  aria-labelledby="navbarDropdownMenuLink28-1"
                                >
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="prepaid-cards/visa-prepaid-card.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          VISA prepaid card
                                        </div>
                                        <small></small>
                                      </a>
                                    </span>
                                  </li>
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="prepaid-cards/unionpay-prepaid-card.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          UnionPay prepaid card
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
                                    href="travel-insurance.html"
                                    target="_self"
                                  >
                                    <strong>Travel insurance</strong>
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
                    href="../investments.html"
                    target="_self"
                    id="navbarDropdownMenuLink3-2"
                    data-bs-toggle="dropdown"
                  >
                    Investments&nbsp;
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
                            <h2 className="sub-title">Investments</h2>
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
                                    href="../investments/mcb-mutual-funds.html"
                                    target="_self"
                                  >
                                    <strong>MCB Mutual Funds</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../investments/stockbroking.html"
                                    target="_self"
                                  >
                                    <strong>Stockbroking</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../investments/education-plan.html"
                                    target="_self"
                                  >
                                    <strong>Education plan</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../investments/retirement-plan.html"
                                    target="_self"
                                  >
                                    <strong>Retirement plan</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../investments/life-insurance.html"
                                    target="_self"
                                  >
                                    <strong>Life insurance</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../investments/fixed-deposit.html"
                                    target="_self"
                                  >
                                    <strong>Fixed deposit</strong>
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
                    href="../ways-to-bank.html"
                    target="_self"
                    id="navbarDropdownMenuLink4-1"
                    data-bs-toggle="dropdown"
                  >
                    Ways to bank&nbsp;
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
                            <h2 className="sub-title">Ways to bank</h2>
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
                                    href="https://juice.mu/"
                                    target="_self"
                                  >
                                    <strong>MCB Juice</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../ways-to-bank/internet-banking.html"
                                    target="_self"
                                  >
                                    <strong>Internet banking</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../ways-to-bank/sms-banking.html"
                                    target="_self"
                                  >
                                    <strong>SMS banking</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../ways-to-bank/mcb-refill.html"
                                    target="_self"
                                  >
                                    <strong>MCB Refill</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../ways-to-bank/atms.html"
                                    target="_self"
                                  >
                                    <strong>ATMs</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../ways-to-bank/in-branch-banking.html"
                                    target="_self"
                                  >
                                    <strong>In-branch banking</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../ways-to-bank/bill-payments.html"
                                    target="_self"
                                  >
                                    <strong>Pay my bills</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <strong>International transfers</strong>
                                  <small></small>
                                </span>
                                <ul
                                  className="submenu"
                                  aria-labelledby="navbarDropdownMenuLink47-1"
                                >
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="../ways-to-bank/international-transfers/international-payment.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          International payment
                                        </div>
                                        <small></small>
                                      </a>
                                    </span>
                                  </li>
                                  <li className="text-3 w-100  ">
                                    <span>
                                      <a
                                        className="d-flex flex-column text-1 line-height-2 "
                                        href="../ways-to-bank/international-transfers/moneygram.html"
                                        target="_self"
                                      >
                                        <div className="d-flex">
                                          <i className="fas fa-chevron-right text-2 me-1" />
                                          MoneyGram
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
                                    href="../ways-to-bank/e-statements.html"
                                    target="_self"
                                  >
                                    <strong>E-Statements</strong>
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
                    href="../existing-customers.html"
                    target="_self"
                    id="navbarDropdownMenuLink5-1"
                    data-bs-toggle="dropdown"
                  >
                    Existing customers&nbsp;
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
                            <h2 className="sub-title">Existing customers</h2>
                            <p className="sub-description"></p>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="menu-list">
                            <ul>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="https://juice.mu/"
                                    target="_blank"
                                  >
                                    <strong>Get MCB Juice</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="/T001/banking.html"
                                    target="_blank"
                                  >
                                    <strong>Log in to Internet Banking</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../offers-and-promotions.html"
                                    target="_self"
                                  >
                                    <strong>Offers &amp; promotions</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="american-express/membership-rewards.html"
                                    target="_self"
                                  >
                                    <strong>
                                      American Express® Membership Rewards®
                                      programme
                                    </strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../help-centre.html"
                                    target="_self"
                                  >
                                    <strong>Go to help center</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../../security-centre.html"
                                    target="_self"
                                  >
                                    <strong>Go to security center</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="https://app.mcb.mu/app/banking/ways-to-bank/update-your-profile"
                                    target="_blank"
                                  >
                                    <strong>
                                      Update your personal profile
                                    </strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../contact-us.html"
                                    target="_self"
                                  >
                                    <strong>Contact us</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../../file-a-complaint.html"
                                    target="_self"
                                  >
                                    <strong>File a complaint</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../../locate-us.html"
                                    target="_self"
                                  >
                                    <strong>Find your nearest branch</strong>
                                    <small></small>
                                  </a>
                                </span>
                              </li>
                              <li className="">
                                <span>
                                  <a
                                    className="d-flex flex-column "
                                    href="../../rates-fees.html"
                                    target="_self"
                                  >
                                    <strong>
                                      View interest rates, fees and charges
                                    </strong>
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
    </>
  );
};
export default PersonalHeader;
