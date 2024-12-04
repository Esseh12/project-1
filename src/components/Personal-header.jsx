import { useEffect } from "react";
import { Link } from "react-router-dom";

const PersonalHeader = () => {
  useEffect(() => {
    // External scripts to be loaded dynamically
    const scripts = [
      "/ResourcePackages/MCBMU/assets/dist/vendor/plugins/js/plugins.min7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/theme7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/views/view.contact7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/demos/demo-business-consulting-27306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/custom7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/theme.init7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/bankgurantee7306.js",
      "/ResourcePackages/MCB/assets/dist/js/anychart/anychart-ui.min7306.js",
      "/ResourcePackages/MCB/assets/dist/js/anychart/anychart-stock.min7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/forexchartData7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/forexchart7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/iban7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/forexdata7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/forexCalculator7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/gmap/handlebars.min7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/gmap/jquery.storelocator7306.js",
      "/ResourcePackages/MCBMU/assets/dist/js/gmap/map7306.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    });

    // Cleanup scripts on component unmount
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script && script.parentNode === document.body) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <header id="header">
      {" "}
      <div className="mobile-menu d-block d-lg-none d-xl-none">
        {" "}
        <div className="main-navigation">
          {" "}
          <div className="navbar-level">
            {" "}
            <div className="container">
              {" "}
              <div className="row">
                {" "}
                <div className="col-lg-12">
                  {" "}
                  <div className="univers">
                    {" "}
                    <div className="logo logo-mobile">
                      <Link to="/">
                        <img
                          src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                          //sf-size={2255}
                          data-sf-ec-immutable=""
                          alt=""
                          width={40}
                          className="sf-immutable-selected"
                        />
                      </Link>{" "}
                    </div>{" "}
                    <div className="univers-option">
                      <div className="btn-group">
                        <Link
                          className="nav-link px-3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-ib" style={{ fontSize: 20 }} />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <div className="title">
                            <h4>Internet Banking</h4>
                          </div>
                          <ul className="buttons">
                            <li className="btn-primary">
                              <Link
                                to="/T001/banking"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Login
                              </Link>
                            </li>
                          </ul>
                          <ul className="more-links mt-4">
                            <li>
                              <Link to="/security-centre">
                                <i className="icon-chevron-right" /> Protect
                                yourself online
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>{" "}
                      <Link className="ma5menu__toggle" type="button">
                        {" "}
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 0 100 100"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="burger-wrapper"
                        >
                          {" "}
                          <g
                            id="Artboard-Copy-2"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                          >
                            {" "}
                            <g
                              id="Group"
                              transform="translate(12.000000, 29.000000)"
                              fillRule="nonzero"
                              strokeWidth={4}
                            >
                              {" "}
                              <path
                                className="line"
                                id="line-middle"
                                d="M13,20 L63,20"
                                stroke="#ffffff"
                                strokeLinejoin="round"
                              />{" "}
                              <path
                                className="line"
                                id="line-top"
                                d="M63,1 L13.347708,1 C4.449236,1 0,4.16666667 0,10.5 C0,16.8333333 4.449236,20 13.347708,20 L59,20"
                                stroke="#ffffff"
                              />{" "}
                              <path
                                className="line"
                                id="line-bottom"
                                d="M42,68 L75,68 C81.6666667,67 85,63.8333333 85,58.5 C85,53.1666667 81.6666667,50 75,49 L30,49"
                                transform="translate(-13.000000, -29.000000)"
                                stroke="#ffffff"
                              />{" "}
                            </g>{" "}
                          </g>{" "}
                        </svg>{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container">
          {" "}
          {/* mobile menu toggle button end */}{" "}
          <div style={{ display: "none" }}>
            {/* source for mobile menu start */}
            <ul className="site-menu">
              <li className='"active"'>
                <Link to="/" target="_self" id="navbarDropdownMenuLink0-1">
                  Personal
                </Link>
                <ul>
                  <li>
                    <Link to="/personal/accounts-packages">
                      Accounts &amp; Packages{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link to="/personal/accounts-packages/standard-savings-account">
                          Standard savings account
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/accounts-packages/mcb-rupys">
                          MCB Rupys
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/accounts-packages/standard-current-account">
                          Standard current account
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/accounts-packages/foreign-currency-account">
                          Foreign currency account
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/accounts-packages/instakit">
                          Instakit
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/accounts-packages/pack-1825">
                          Pack 18.25
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/accounts-packages/neo">NEO</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/personal/loans">Loans </Link>
                    <ul>
                      <li>
                        <Link to="/personal/loans/educational-loan">
                          Educational loan
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/loans/personal-loan">
                          Personal loan
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/loans/home-loan">Home loan</Link>
                      </li>
                      <li>
                        <Link to="/personal/loans/green-loan">Green loan</Link>
                      </li>
                      <li>
                        <Link to="/personal/loans/personal-overdrafts">
                          Personal overdrafts
                        </Link>
                      </li>
                      <li>
                        <Link to="https://mcbleasing.mu/">Car lease</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/personal/cards">Cards </Link>
                    <ul>
                      <li>
                        <Link to="/personal/cards/mcb-debit-card">
                          MCB debit card
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/mastercard-primo-credit-card">
                          Mastercard Primo credit card
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/classic-credit-card">
                          Classic credit card
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/gold-credit-card">
                          Gold credit card
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/american-express">
                          American Express®{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/personal/cards/american-express/american-express-green">
                              American Express® Green
                            </Link>
                          </li>
                          <li>
                            <Link to="/personal/cards/american-express/american-express-gold">
                              American Express® Gold
                            </Link>
                          </li>
                          <li>
                            <Link to="/personal/cards/american-express/membership-rewards">
                              Membership Rewards®
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/personal/cards/visa-platinum">
                          Visa Platinum
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/visa-signature">
                          Visa Signature
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/compare-our-credit-cards">
                          Compare our credit cards
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/prepaid-cards">
                          Prepaid cards{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/personal/cards/prepaid-cards/visa-prepaid-card">
                              VISA prepaid card
                            </Link>
                          </li>
                          <li>
                            <Link to="/personal/cards/prepaid-cards/unionpay-prepaid-card">
                              UnionPay prepaid card
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/personal/cards/travel-insurance">
                          Travel insurance
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/personal/investments">Investments </Link>
                    <ul>
                      <li>
                        <Link to="/personal/investments/mcb-mutual-funds">
                          MCB Mutual Funds
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/investments/stockbroking">
                          Stockbroking
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/investments/education-plan">
                          Education plan
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/investments/retirement-plan">
                          Retirement plan
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/investments/life-insurance">
                          Life insurance
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/investments/fixed-deposit">
                          Fixed deposit
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/personal/ways-to-bank">Ways to bank </Link>
                    <ul>
                      <li>
                        <Link to="https://juice.mu/">MCB Juice</Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/internet-banking">
                          Internet banking
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/sms-banking">
                          SMS banking
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/mcb-refill">
                          MCB Refill
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/atms">ATMs</Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/in-branch-banking">
                          In-branch banking
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/bill-payments">
                          Pay my bills
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/international-transfers">
                          International transfers{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/personal/ways-to-bank/international-transfers/international-payment">
                              International payment
                            </Link>
                          </li>
                          <li>
                            <Link to="/personal/ways-to-bank/international-transfers/moneygram">
                              MoneyGram
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/personal/ways-to-bank/e-statements">
                          E-Statements
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/personal/existing-customers">
                      Existing customers{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link to="https://juice.mu/">Get MCB Juice</Link>
                      </li>
                      <li>
                        <Link to="/personal/existing-customers/log-in-to-internet-banking">
                          Log in to Internet Banking
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/offers-and-promotions">
                          Offers &amp; promotions
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/cards/american-express/membership-rewards">
                          American Express® Membership Rewards® programme
                        </Link>
                      </li>
                      <li>
                        <Link to="/personal/help-centre">
                          Go to help center
                        </Link>
                      </li>
                      <li>
                        <Link to="/security-centre">Go to security center</Link>
                      </li>
                      <li>
                        <Link to="/personal/existing-customers/update-your-personal-profile">
                          Update your personal profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/file-a-complaint">File a complaint</Link>
                      </li>
                      <li>
                        <Link to="/locate-us">Find your nearest branch</Link>
                      </li>
                      <li>
                        <Link to="/rates-fees">
                          View interest rates, fees and charges
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/sme" target="_self" id="navbarDropdownMenuLink1-1">
                  SME
                </Link>
                <ul>
                  <li>
                    <Link to="/sme/bank">Bank </Link>
                    <ul>
                      <li>
                        <Link to="/sme/bank/business-account">
                          Business Account
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/bank/tailor-made-solutions">
                          Tailor-made Solutions{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="https://www.mcbmicrofinance.mu/">
                              MCB Microfinance
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/sme/bank/transact-anytime-anywhere">
                          Transact anytime, anywhere{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/sme/bank/transact-anytime-anywhere/internet-banking">
                              Internet Banking
                            </Link>
                          </li>
                          <li>
                            <Link to="/sme/bank/transact-anytime-anywhere/atm">
                              ATM
                            </Link>
                          </li>
                          <li>
                            <Link to="/sme/bank/transact-anytime-anywhere/e-statements">
                              E-Statements
                            </Link>
                          </li>
                          <li>
                            <Link to="/sme/bank/transact-anytime-anywhere/juicepro">
                              JuicePro
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/sme/borrow">Borrow </Link>
                    <ul>
                      <li>
                        <Link to="/sme/borrow/loans">Loans</Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/overdrafts">Overdrafts</Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/leasing">Leasing</Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/trade-finance">
                          Trade Finance
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/sustainable-loan">
                          Sustainable Loan
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/factoring">Factoring</Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/bank-guarantees">
                          Bank Guarantees
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/borrow/lokal-is-beautiful">
                          Lokal is Beautiful
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/sme/pay">Pay </Link>
                    <ul>
                      <li>
                        <Link to="/sme/pay/cards">Cards </Link>
                        <ul>
                          <li>
                            <Link to="/sme/pay/cards/business-card">
                              Business Card
                            </Link>
                          </li>
                          <li>
                            <Link to="/sme/pay/cards/business-deposit-card">
                              Business Deposit Card
                            </Link>
                          </li>
                          <li>
                            <Link to="/sme/pay/cards/fleetman-card">
                              Fleetman Card
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/sme/pay/payroll-services">
                          Payroll Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/pay/cheques">Cheques</Link>
                      </li>
                      <li>
                        <Link to="/sme/pay/electronic-payments">
                          Electronic Payments{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/sme/pay/electronic-payments/electronic-transfer">
                              Electronic Transfer
                            </Link>
                          </li>
                          <li>
                            <Link to="/sme/pay/electronic-payments/e-commerce-solutions">
                              E-Commerce Solutions
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/sme/sme-connect">SME Connect </Link>
                    <ul>
                      <li>
                        <Link to="/sme/sme-connect/start-your-business">
                          Start Your Business
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/sme-connect/manage-your-business">
                          Manage Your Business
                        </Link>
                      </li>
                      <li>
                        <Link to="/sme/sme-connect/speaker-series">
                          Speaker Series
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/corporate"
                  target="_self"
                  id="navbarDropdownMenuLink2-1"
                >
                  Corporate
                </Link>
                <ul>
                  <li>
                    <Link to="/corporate/what-we-do">What we do </Link>
                    <ul>
                      <li>
                        <Link to="/corporate/what-we-do/corporate-banking">
                          Corporate Banking{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/what-we-do/corporate-banking/our-success-stories">
                              Our success stories
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/what-we-do/corporate-banking/become-a-client">
                              Become a client
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/what-we-do/global-business">
                          Global Business{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/what-we-do/global-business/become-a-client">
                              Become a client
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/what-we-do/global-business/investing-in-mauritius">
                              Investing in Mauritius
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/what-we-do/global-business/custody-services">
                              Custody Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/finance-lending/structured-finance/energy-commodities">
                          Energy &amp; Commodities Financing
                        </Link>
                      </li>
                      <li>
                        <Link to="/institutional">Institutional Banking</Link>
                      </li>
                      <li>
                        <Link to="/sme">SME Banking</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/corporate/payment-cash">
                      Payment &amp; Cash{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link to="/corporate/payment-cash/pay">Pay </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/payment-cash/pay/domestic-international-transfers">
                              Domestic &amp; International transfers{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link to="/corporate/payment-cash/pay/domestic-international-transfers/swift-gpi">
                                  SWIFT gpi
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/pay/internet-banking-pro-smartapprove">
                              Internet Banking Pro &amp; SmartApprove App
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/pay/bulk-payments">
                              Bulk Payments
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/pay/corporate-card">
                              Corporate Card
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/pay/fleetman-card">
                              Fleetman Card
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/pay/swift-connectivity">
                              SWIFT Connectivity
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/pay/drop-collect">
                              Drop &amp; Collect
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/payment-cash/collect">
                          Collect{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/payment-cash/collect/direct-debit-bill-payment">
                              Direct Debit &amp; Bill Payment
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/collect/cash-deposit-solutions">
                              Cash Deposit Solutions
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/collect/e-commerce">
                              E-commerce{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link to="/corporate/payment-cash/collect/e-commerce/online-payment-gateway">
                                  Online Payment Gateway
                                </Link>
                              </li>
                              <li>
                                <Link to="/corporate/payment-cash/collect/e-commerce/merchant-services">
                                  Merchant Services
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/collect/point-of-sale-solutions">
                              Point of Sale Solutions
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/collect/mobile-banking">
                              Mobile Banking
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/payment-cash/monitor">
                          Monitor{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/payment-cash/monitor/e-statements">
                              E-Statements
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/monitor/reporting-services-ib-dashboard">
                              Reporting Services &amp; IB Dashboard
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/payment-cash/optimise">
                          Optimise{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/payment-cash/optimise/cash-pooling-services">
                              Cash Pooling Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/payment-cash/optimise/fx-money-market-services">
                              FX &amp; Money Market Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/corporate/finance-lending">
                      Finance &amp; Lending{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link to="/corporate/finance-lending/corporate-lending">
                          Corporate Lending{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/overdraft-working-capital">
                              Overdraft &amp; Working Capital
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/revolving-credit">
                              Revolving Credit
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/import-loan">
                              Import Loan
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/export-loan">
                              Export Loan
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/term-loan">
                              Term Loan
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/sustainable-loan">
                              Sustainable Loan
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/corporate-lending/guarantees">
                              Guarantees
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/finance-lending/supply-chain-finance">
                          Supply Chain Finance{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/finance-lending/supply-chain-finance/global-trade-portal">
                              Global Trade Portal
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/supply-chain-finance/trade-finance">
                              Trade Finance{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link to="/corporate/finance-lending/supply-chain-finance/trade-finance/trade-finance-forms">
                                  Trade Finance Forms
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/supply-chain-finance/credit-protection">
                              Credit Protection
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/supply-chain-finance/invoice-factoring">
                              Invoice Factoring
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/finance-lending/structured-finance">
                          Structured Finance{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/finance-lending/structured-finance/acquisition-financing">
                              Acquisition Financing
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/structured-finance/property-financing">
                              Property Financing
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/structured-finance/project-financing">
                              Project Financing
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/structured-finance/energy-commodities">
                              Energy &amp; Commodities{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link to="/corporate/finance-lending/structured-finance/energy-commodities/our-success-stories">
                                  Our Success Stories
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/structured-finance/cross-border-financing">
                              Cross-border Financing
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/finance-lending/structured-finance/syndicated-financing">
                              Syndicated Financing
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/finance-lending/asset-finance">
                          Asset Finance{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/finance-lending/asset-finance/mcb-leasing">
                              MCB Leasing
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/corporate/investment-advisory">
                      Investment &amp; Advisory{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link to="/corporate/investment-advisory/global-markets">
                          Global Markets{" "}
                        </Link>
                        <ul>
                          <li>
                            <Link to="/corporate/investment-advisory/global-markets/financial-markets-summary">
                              Financial Markets summary
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/investment-advisory/global-markets/global-markets-solutions">
                              Global Markets Solutions
                            </Link>
                          </li>
                          <li>
                            <Link to="/corporate/investment-advisory/global-markets/direct-access-to-markets">
                              Direct access to markets
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/corporate/investment-advisory/capital-markets">
                          Capital Markets
                        </Link>
                      </li>
                      <li>
                        <Link to="/corporate/investment-advisory/securities-services">
                          Securities Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/institutional"
                  target="_self"
                  id="navbarDropdownMenuLink3-1"
                >
                  Institutional
                </Link>
                <ul>
                  <li>
                    <Link to="/institutional/mcb-at-a-glance">
                      MCB at a glance
                    </Link>
                  </li>
                  <li>
                    <Link to="/institutional/our-geographical-presence">
                      Our geographical presence
                    </Link>
                  </li>
                  <li>
                    <Link to="/institutional/our-solutions">
                      Our solutions{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link to="/institutional/our-solutions/bank-of-banks">
                          Bank of Banks
                        </Link>
                      </li>
                      <li>
                        <Link to="/institutional/our-solutions/correspondent-banking">
                          Correspondent Banking
                        </Link>
                      </li>
                      <li>
                        <Link to="/institutional/our-solutions/risk-sharing">
                          Risk Sharing
                        </Link>
                      </li>
                      <li>
                        <Link to="/institutional/our-solutions/syndications">
                          Syndications
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/institutional/events">Events</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/rates-fees" target="_self">
                  Rates &amp; Fees
                </Link>
              </li>
            </ul>
            {/* ma5-mobile-menu generated by js start */}
            <nav
              id="js-ma5menu"
              className="ma5menu"
              itemScope=""
              itemType="http://schema.org/SiteNavigationElement"
            >
              <div
                className="ma5menu__header"
                style={{
                  marginTop: "-30px",
                }}
              >
                <Link className="ma5menu__home" to="/" tabIndex={-1}>
                  <span className="ma5menu__logo">
                    <img
                      src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                      alt="MCB logo"
                    />
                  </span>
                </Link>
              </div>
              <ul
                data-ma5order="ma5-ul"
                className="ma5menu__panel--active lvl-0"
              >
                <li data-ma5order="ma5-li-1">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <Link to="/">Personal</Link>
                  <ul data-ma5order="ma5-ul-1" className="lvl-1">
                    <div className="ma5menu__leave">
                      <span className="ma5menu__btn--leave">
                        <i className="icon-twotone-arrow" />
                      </span>
                      Personal
                    </div>
                    <li data-ma5order="ma5-li-1-1">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/personal/accounts-packages">
                        Accounts &amp; Packages{" "}
                      </Link>
                      <ul data-ma5order="ma5-ul-1-1" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Accounts &amp; Packages{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-1-1">
                          <Link to="/personal/accounts-packages/standard-savings-account">
                            Standard savings account
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-1-2">
                          <Link to="/personal/accounts-packages/mcb-rupys">
                            MCB Rupys
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-1-3">
                          <Link to="/personal/accounts-packages/standard-current-account">
                            Standard current account
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-1-4">
                          <Link to="/personal/accounts-packages/foreign-currency-account">
                            Foreign currency account
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-1-5">
                          <Link to="/personal/accounts-packages/instakit">
                            Instakit
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-1-6">
                          <Link to="/personal/accounts-packages/pack-1825">
                            Pack 18.25
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-1-7">
                          <Link to="/personal/accounts-packages/neo">NEO</Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-2">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/personal/loans">Loans </Link>
                      <ul data-ma5order="ma5-ul-1-2" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Loans{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-2-1">
                          <Link to="/personal/loans/educational-loan">
                            Educational loan
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-2-2">
                          <Link to="/personal/loans/personal-loan">
                            Personal loan
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-2-3">
                          <Link to="/personal/loans/home-loan">Home loan</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-2-4">
                          <Link to="/personal/loans/green-loan">
                            Green loan
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-2-5">
                          <Link to="/personal/loans/personal-overdrafts">
                            Personal overdrafts
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-2-6">
                          <Link to="https://mcbleasing.mu/">Car lease</Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/personal/cards">Cards </Link>
                      <ul data-ma5order="ma5-ul-1-3" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Cards{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-3-1">
                          <Link to="/personal/cards/mcb-debit-card">
                            MCB debit card
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-2">
                          <Link to="/personal/cards/mastercard-primo-credit-card">
                            Mastercard Primo credit card
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-3">
                          <Link to="/personal/cards/classic-credit-card">
                            Classic credit card
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-4">
                          <Link to="/personal/cards/gold-credit-card">
                            Gold credit card
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-5">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/personal/cards/american-express">
                            American Express®{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-1-3-5" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              American Express®{" "}
                            </div>
                            <li data-ma5order="ma5-li-1-3-5-1">
                              <Link to="/personal/cards/american-express/american-express-green">
                                American Express® Green
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-1-3-5-2">
                              <Link to="/personal/cards/american-express/american-express-gold">
                                American Express® Gold
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-1-3-5-3">
                              <Link to="/personal/cards/american-express/membership-rewards">
                                Membership Rewards®
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-3-6">
                          <Link to="/personal/cards/visa-platinum">
                            Visa Platinum
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-7">
                          <Link to="/personal/cards/visa-signature">
                            Visa Signature
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-8">
                          <Link to="/personal/cards/compare-our-credit-cards">
                            Compare our credit cards
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-3-9">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/personal/cards/prepaid-cards">
                            Prepaid cards{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-1-3-9" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Prepaid cards{" "}
                            </div>
                            <li data-ma5order="ma5-li-1-3-9-1">
                              <Link to="/personal/cards/prepaid-cards/visa-prepaid-card">
                                VISA prepaid card
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-1-3-9-2">
                              <Link to="/personal/cards/prepaid-cards/unionpay-prepaid-card">
                                UnionPay prepaid card
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-3-10">
                          <Link to="/personal/cards/travel-insurance">
                            Travel insurance
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-4">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/personal/investments">Investments </Link>
                      <ul data-ma5order="ma5-ul-1-4" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Investments{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-4-1">
                          <Link to="/personal/investments/mcb-mutual-funds">
                            MCB Mutual Funds
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-4-2">
                          <Link to="/personal/investments/stockbroking">
                            Stockbroking
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-4-3">
                          <Link to="/personal/investments/education-plan">
                            Education plan
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-4-4">
                          <Link to="/personal/investments/retirement-plan">
                            Retirement plan
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-4-5">
                          <Link to="/personal/investments/life-insurance">
                            Life insurance
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-4-6">
                          <Link to="/personal/investments/fixed-deposit">
                            Fixed deposit
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-5">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/personal/ways-to-bank">Ways to bank </Link>
                      <ul data-ma5order="ma5-ul-1-5" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Ways to bank{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-5-1">
                          <Link to="https://juice.mu/">MCB Juice</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-2">
                          <Link to="/personal/ways-to-bank/internet-banking">
                            Internet banking
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-3">
                          <Link to="/personal/ways-to-bank/sms-banking">
                            SMS banking
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-4">
                          <Link to="/personal/ways-to-bank/mcb-refill">
                            MCB Refill
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-5">
                          <Link to="/personal/ways-to-bank/atms">ATMs</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-6">
                          <Link to="/personal/ways-to-bank/in-branch-banking">
                            In-branch banking
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-7">
                          <Link to="/personal/ways-to-bank/bill-payments">
                            Pay my bills
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-5-8">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/personal/ways-to-bank/international-transfers">
                            International transfers{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-1-5-8" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              International transfers{" "}
                            </div>
                            <li data-ma5order="ma5-li-1-5-8-1">
                              <Link to="/personal/ways-to-bank/international-transfers/international-payment">
                                International payment
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-1-5-8-2">
                              <Link to="/personal/ways-to-bank/international-transfers/moneygram">
                                MoneyGram
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-5-9">
                          <Link to="/personal/ways-to-bank/e-statements">
                            E-Statements
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-6">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/personal/existing-customers">
                        Existing customers{" "}
                      </Link>
                      <ul data-ma5order="ma5-ul-1-6" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Existing customers{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-6-1">
                          <Link to="https://juice.mu/">Get MCB Juice</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-2">
                          <Link to="/personal/existing-customers/log-in-to-internet-banking">
                            Log in to Internet Banking
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-3">
                          <Link to="/personal/offers-and-promotions">
                            Offers &amp; promotions
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-4">
                          <Link to="/personal/cards/american-express/membership-rewards">
                            American Express® Membership Rewards® programme
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-5">
                          <Link to="/personal/help-centre">
                            Go to help center
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-6">
                          <Link to="/security-centre">
                            Go to security center
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-7">
                          <Link to="/personal/existing-customers/update-your-personal-profile">
                            Update your personal profile
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-8">
                          <Link to="/contact-us">Contact us</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-9">
                          <Link to="/file-a-complaint">File a complaint</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-10">
                          <Link to="/locate-us">Find your nearest branch</Link>
                        </li>
                        <li data-ma5order="ma5-li-1-6-11">
                          <Link to="/rates-fees">
                            View interest rates, fees and charges
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-2">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <Link to="/sme">SME</Link>
                  <ul data-ma5order="ma5-ul-2" className="lvl-1">
                    <div className="ma5menu__leave">
                      <span className="ma5menu__btn--leave">
                        <i className="icon-twotone-arrow" />
                      </span>
                      SME
                    </div>
                    <li data-ma5order="ma5-li-2-1">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/sme/bank">Bank </Link>
                      <ul data-ma5order="ma5-ul-2-1" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Bank{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-1-1">
                          <Link to="/sme/bank/business-account">
                            Business Account
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-1-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/sme/bank/tailor-made-solutions">
                            Tailor-made Solutions{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-2-1-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Tailor-made Solutions{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-1-2-1">
                              <Link to="https://www.mcbmicrofinance.mu/">
                                MCB Microfinance
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-2-1-3">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/sme/bank/transact-anytime-anywhere">
                            Transact anytime, anywhere{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-2-1-3" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Transact anytime, anywhere{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-1-3-1">
                              <Link to="/sme/bank/transact-anytime-anywhere/internet-banking">
                                Internet Banking
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-2-1-3-2">
                              <Link to="/sme/bank/transact-anytime-anywhere/atm">
                                ATM
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-2-1-3-3">
                              <Link to="/sme/bank/transact-anytime-anywhere/e-statements">
                                E-Statements
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-2-1-3-4">
                              <Link to="/sme/bank/transact-anytime-anywhere/juicepro">
                                JuicePro
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-2-2">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/sme/borrow">Borrow </Link>
                      <ul data-ma5order="ma5-ul-2-2" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Borrow{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-2-1">
                          <Link to="/sme/borrow/loans">Loans</Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-2">
                          <Link to="/sme/borrow/overdrafts">Overdrafts</Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-3">
                          <Link to="/sme/borrow/leasing">Leasing</Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-4">
                          <Link to="/sme/borrow/trade-finance">
                            Trade Finance
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-5">
                          <Link to="/sme/borrow/sustainable-loan">
                            Sustainable Loan
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-6">
                          <Link to="/sme/borrow/factoring">Factoring</Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-7">
                          <Link to="/sme/borrow/bank-guarantees">
                            Bank Guarantees
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-2-8">
                          <Link to="/sme/borrow/lokal-is-beautiful">
                            Lokal is Beautiful
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-2-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/sme/pay">Pay </Link>
                      <ul data-ma5order="ma5-ul-2-3" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Pay{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-3-1">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/sme/pay/cards">Cards </Link>
                          <ul data-ma5order="ma5-ul-2-3-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Cards{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-3-1-1">
                              <Link to="/sme/pay/cards/business-card">
                                Business Card
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-2-3-1-2">
                              <Link to="/sme/pay/cards/business-deposit-card">
                                Business Deposit Card
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-2-3-1-3">
                              <Link to="/sme/pay/cards/fleetman-card">
                                Fleetman Card
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-2-3-2">
                          <Link to="/sme/pay/payroll-services">
                            Payroll Services
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-3-3">
                          <Link to="/sme/pay/cheques">Cheques</Link>
                        </li>
                        <li data-ma5order="ma5-li-2-3-4">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/sme/pay/electronic-payments">
                            Electronic Payments{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-2-3-4" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Electronic Payments{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-3-4-1">
                              <Link to="/sme/pay/electronic-payments/electronic-transfer">
                                Electronic Transfer
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-2-3-4-2">
                              <Link to="/sme/pay/electronic-payments/e-commerce-solutions">
                                E-Commerce Solutions
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-2-4">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/sme/sme-connect">SME Connect </Link>
                      <ul data-ma5order="ma5-ul-2-4" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          SME Connect{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-4-1">
                          <Link to="/sme/sme-connect/start-your-business">
                            Start Your Business
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-4-2">
                          <Link to="/sme/sme-connect/manage-your-business">
                            Manage Your Business
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-2-4-3">
                          <Link to="/sme/sme-connect/speaker-series">
                            Speaker Series
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-3">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <Link to="/corporate">Corporate</Link>
                  <ul data-ma5order="ma5-ul-3" className="lvl-1">
                    <div className="ma5menu__leave">
                      <span className="ma5menu__btn--leave">
                        <i className="icon-twotone-arrow" />
                      </span>
                      Corporate
                    </div>
                    <li data-ma5order="ma5-li-3-1">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/corporate/what-we-do">What we do </Link>
                      <ul data-ma5order="ma5-ul-3-1" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          What we do{" "}
                        </div>
                        <li data-ma5order="ma5-li-3-1-1">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/what-we-do/corporate-banking">
                            Corporate Banking{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-1-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Corporate Banking{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-1-1-1">
                              <Link to="/corporate/what-we-do/corporate-banking/our-success-stories">
                                Our success stories
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-1-1-2">
                              <Link to="/corporate/what-we-do/corporate-banking/become-a-client">
                                Become a client
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-1-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/what-we-do/global-business">
                            Global Business{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-1-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Global Business{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-1-2-1">
                              <Link to="/corporate/what-we-do/global-business/become-a-client">
                                Become a client
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-1-2-2">
                              <Link to="/corporate/what-we-do/global-business/investing-in-mauritius">
                                Investing in Mauritius
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-1-2-3">
                              <Link to="/corporate/what-we-do/global-business/custody-services">
                                Custody Services
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-1-3">
                          <Link to="/corporate/finance-lending/structured-finance/energy-commodities">
                            Energy &amp; Commodities Financing
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-3-1-4">
                          <Link to="/institutional">Institutional Banking</Link>
                        </li>
                        <li data-ma5order="ma5-li-3-1-5">
                          <Link to="/sme">SME Banking</Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-3-2">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/corporate/payment-cash">
                        Payment &amp; Cash{" "}
                      </Link>
                      <ul data-ma5order="ma5-ul-3-2" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Payment &amp; Cash{" "}
                        </div>
                        <li data-ma5order="ma5-li-3-2-1">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/payment-cash/pay">Pay </Link>
                          <ul data-ma5order="ma5-ul-3-2-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Pay{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-1-1">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <Link to="/corporate/payment-cash/pay/domestic-international-transfers">
                                Domestic &amp; International transfers{" "}
                              </Link>
                              <ul
                                data-ma5order="ma5-ul-3-2-1-1"
                                className="lvl-4"
                              >
                                <div className="ma5menu__leave">
                                  <span className="ma5menu__btn--leave">
                                    <i className="icon-twotone-arrow" />
                                  </span>
                                  Domestic &amp; International transfers{" "}
                                </div>
                                <li data-ma5order="ma5-li-3-2-1-1-1">
                                  <Link to="/corporate/payment-cash/pay/domestic-international-transfers/swift-gpi">
                                    SWIFT gpi
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-2">
                              <Link to="/corporate/payment-cash/pay/internet-banking-pro-smartapprove">
                                Internet Banking Pro &amp; SmartApprove App
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-3">
                              <Link to="/corporate/payment-cash/pay/bulk-payments">
                                Bulk Payments
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-4">
                              <Link to="/corporate/payment-cash/pay/corporate-card">
                                Corporate Card
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-5">
                              <Link to="/corporate/payment-cash/pay/fleetman-card">
                                Fleetman Card
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-6">
                              <Link to="/corporate/payment-cash/pay/swift-connectivity">
                                SWIFT Connectivity
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-7">
                              <Link to="/corporate/payment-cash/pay/drop-collect">
                                Drop &amp; Collect
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-2-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/payment-cash/collect">
                            Collect{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-2-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Collect{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-2-1">
                              <Link to="/corporate/payment-cash/collect/direct-debit-bill-payment">
                                Direct Debit &amp; Bill Payment
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-2">
                              <Link to="/corporate/payment-cash/collect/cash-deposit-solutions">
                                Cash Deposit Solutions
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-3">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <Link to="/corporate/payment-cash/collect/e-commerce">
                                E-commerce{" "}
                              </Link>
                              <ul
                                data-ma5order="ma5-ul-3-2-2-3"
                                className="lvl-4"
                              >
                                <div className="ma5menu__leave">
                                  <span className="ma5menu__btn--leave">
                                    <i className="icon-twotone-arrow" />
                                  </span>
                                  E-commerce{" "}
                                </div>
                                <li data-ma5order="ma5-li-3-2-2-3-1">
                                  <Link to="/corporate/payment-cash/collect/e-commerce/online-payment-gateway">
                                    Online Payment Gateway
                                  </Link>
                                </li>
                                <li data-ma5order="ma5-li-3-2-2-3-2">
                                  <Link to="/corporate/payment-cash/collect/e-commerce/merchant-services">
                                    Merchant Services
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-4">
                              <Link to="/corporate/payment-cash/collect/point-of-sale-solutions">
                                Point of Sale Solutions
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-5">
                              <Link to="/corporate/payment-cash/collect/mobile-banking">
                                Mobile Banking
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-2-3">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/payment-cash/monitor">
                            Monitor{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-2-3" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Monitor{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-3-1">
                              <Link to="/corporate/payment-cash/monitor/e-statements">
                                E-Statements
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-3-2">
                              <Link to="/corporate/payment-cash/monitor/reporting-services-ib-dashboard">
                                Reporting Services &amp; IB Dashboard
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-2-4">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/payment-cash/optimise">
                            Optimise{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-2-4" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Optimise{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-4-1">
                              <Link to="/corporate/payment-cash/optimise/cash-pooling-services">
                                Cash Pooling Services
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-2-4-2">
                              <Link to="/corporate/payment-cash/optimise/fx-money-market-services">
                                FX &amp; Money Market Services
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-3-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/corporate/finance-lending">
                        Finance &amp; Lending{" "}
                      </Link>
                      <ul data-ma5order="ma5-ul-3-3" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Finance &amp; Lending{" "}
                        </div>
                        <li data-ma5order="ma5-li-3-3-1">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/finance-lending/corporate-lending">
                            Corporate Lending{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-3-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Corporate Lending{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-1-1">
                              <Link to="/corporate/finance-lending/corporate-lending/overdraft-working-capital">
                                Overdraft &amp; Working Capital
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-2">
                              <Link to="/corporate/finance-lending/corporate-lending/revolving-credit">
                                Revolving Credit
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-3">
                              <Link to="/corporate/finance-lending/corporate-lending/import-loan">
                                Import Loan
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-4">
                              <Link to="/corporate/finance-lending/corporate-lending/export-loan">
                                Export Loan
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-5">
                              <Link to="/corporate/finance-lending/corporate-lending/term-loan">
                                Term Loan
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-6">
                              <Link to="/corporate/finance-lending/corporate-lending/sustainable-loan">
                                Sustainable Loan
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-7">
                              <Link to="/corporate/finance-lending/corporate-lending/guarantees">
                                Guarantees
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-3-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/finance-lending/supply-chain-finance">
                            Supply Chain Finance{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-3-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Supply Chain Finance{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-2-1">
                              <Link to="/corporate/finance-lending/supply-chain-finance/global-trade-portal">
                                Global Trade Portal
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-2-2">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <Link to="/corporate/finance-lending/supply-chain-finance/trade-finance">
                                Trade Finance{" "}
                              </Link>
                              <ul
                                data-ma5order="ma5-ul-3-3-2-2"
                                className="lvl-4"
                              >
                                <div className="ma5menu__leave">
                                  <span className="ma5menu__btn--leave">
                                    <i className="icon-twotone-arrow" />
                                  </span>
                                  Trade Finance{" "}
                                </div>
                                <li data-ma5order="ma5-li-3-3-2-2-1">
                                  <Link to="/corporate/finance-lending/supply-chain-finance/trade-finance/trade-finance-forms">
                                    Trade Finance Forms
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-3-2-3">
                              <Link to="/corporate/finance-lending/supply-chain-finance/credit-protection">
                                Credit Protection
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-2-4">
                              <Link to="/corporate/finance-lending/supply-chain-finance/invoice-factoring">
                                Invoice Factoring
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-3-3">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/finance-lending/structured-finance">
                            Structured Finance{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-3-3" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Structured Finance{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-3-1">
                              <Link to="/corporate/finance-lending/structured-finance/acquisition-financing">
                                Acquisition Financing
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-2">
                              <Link to="/corporate/finance-lending/structured-finance/property-financing">
                                Property Financing
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-3">
                              <Link to="/corporate/finance-lending/structured-finance/project-financing">
                                Project Financing
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-4">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <Link to="/corporate/finance-lending/structured-finance/energy-commodities">
                                Energy &amp; Commodities{" "}
                              </Link>
                              <ul
                                data-ma5order="ma5-ul-3-3-3-4"
                                className="lvl-4"
                              >
                                <div className="ma5menu__leave">
                                  <span className="ma5menu__btn--leave">
                                    <i className="icon-twotone-arrow" />
                                  </span>
                                  Energy &amp; Commodities{" "}
                                </div>
                                <li data-ma5order="ma5-li-3-3-3-4-1">
                                  <Link to="/corporate/finance-lending/structured-finance/energy-commodities/our-success-stories">
                                    Our Success Stories
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-5">
                              <Link to="/corporate/finance-lending/structured-finance/cross-border-financing">
                                Cross-border Financing
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-6">
                              <Link to="/corporate/finance-lending/structured-finance/syndicated-financing">
                                Syndicated Financing
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-3-4">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/finance-lending/asset-finance">
                            Asset Finance{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-3-4" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Asset Finance{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-4-1">
                              <Link to="/corporate/finance-lending/asset-finance/mcb-leasing">
                                MCB Leasing
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-3-4">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/corporate/investment-advisory">
                        Investment &amp; Advisory{" "}
                      </Link>
                      <ul data-ma5order="ma5-ul-3-4" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Investment &amp; Advisory{" "}
                        </div>
                        <li data-ma5order="ma5-li-3-4-1">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <Link to="/corporate/investment-advisory/global-markets">
                            Global Markets{" "}
                          </Link>
                          <ul data-ma5order="ma5-ul-3-4-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Global Markets{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-4-1-1">
                              <Link to="/corporate/investment-advisory/global-markets/financial-markets-summary">
                                Financial Markets summary
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-4-1-2">
                              <Link to="/corporate/investment-advisory/global-markets/global-markets-solutions">
                                Global Markets Solutions
                              </Link>
                            </li>
                            <li data-ma5order="ma5-li-3-4-1-3">
                              <Link to="/corporate/investment-advisory/global-markets/direct-access-to-markets">
                                Direct access to markets
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-4-2">
                          <Link to="/corporate/investment-advisory/capital-markets">
                            Capital Markets
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-3-4-3">
                          <Link to="/corporate/investment-advisory/securities-services">
                            Securities Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-4">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <Link to="/institutional">Institutional</Link>
                  <ul data-ma5order="ma5-ul-4" className="lvl-1">
                    <div className="ma5menu__leave">
                      <span className="ma5menu__btn--leave">
                        <i className="icon-twotone-arrow" />
                      </span>
                      Institutional
                    </div>
                    <li data-ma5order="ma5-li-4-1">
                      <Link to="/institutional/mcb-at-a-glance">
                        MCB at a glance
                      </Link>
                    </li>
                    <li data-ma5order="ma5-li-4-2">
                      <Link to="/institutional/our-geographical-presence">
                        Our geographical presence
                      </Link>
                    </li>
                    <li data-ma5order="ma5-li-4-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <Link to="/institutional/our-solutions">
                        Our solutions{" "}
                      </Link>
                      <ul data-ma5order="ma5-ul-4-3" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Our solutions{" "}
                        </div>
                        <li data-ma5order="ma5-li-4-3-1">
                          <Link to="/institutional/our-solutions/bank-of-banks">
                            Bank of Banks
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-4-3-2">
                          <Link to="/institutional/our-solutions/correspondent-banking">
                            Correspondent Banking
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-4-3-3">
                          <Link to="/institutional/our-solutions/risk-sharing">
                            Risk Sharing
                          </Link>
                        </li>
                        <li data-ma5order="ma5-li-4-3-4">
                          <Link to="/institutional/our-solutions/syndications">
                            Syndications
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-4-4">
                      <Link to="/institutional/events">Events</Link>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-5">
                  <Link to="/rates-fees">Rates &amp; Fees</Link>
                </li>
              </ul>
            </nav>
            {/* ma5-mobile-menu generated by js end */}
            {/* source for mobile menu end */}{" "}
            {/* source for mobile menu footer start */}
            {/* source for mobile menu footer end */}{" "}
          </div>{" "}
        </div>{" "}
        {/* Modal level one */}{" "}
      </div>{" "}
      <div className="desktop-menu d-none d-lg-block d-xl-block header-home header-home-top">
        {" "}
        <div className="nav-container">
          {" "}
          <div className="top-header">
            {" "}
            <div className="container-fluid">
              {" "}
              <div className="row">
                {" "}
                <div className="col-lg-12">
                  {" "}
                  <div className="d-flex justify-content-between">
                    <ul id="nav" className="nav-content ">
                      <li className="active">
                        <Link to="/" target="_self">
                          Personal
                        </Link>
                      </li>
                      <li className="">
                        <Link to="https://private.mcb.mu/" target="_blank">
                          Private
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/sme" target="_self">
                          SME
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/corporate" target="_self">
                          Corporate
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/institutional" target="_self">
                          Institutional
                        </Link>
                      </li>
                      <li className="">
                        <Link to="https://mcbgroup.com/" target="_blank">
                          MCB Group
                        </Link>
                      </li>
                    </ul>
                    <div className="link-icon d-flex flex-row">
                      <div className="link-icon d-flex flex-row">
                        <ul className="mx-2">
                          <li>
                            <Link to="/contact-us">
                              {/*<i class="icon-phone"></i>*/}
                              <i className="fas fa-thin fa-file-lines text-light" />
                              <span>Contact us</span>
                            </Link>
                          </li>
                        </ul>
                        <ul className="mx-2">
                          <li>
                            <Link to="/locate-us">
                              {" "}
                              <i className="icon-locate-us" />
                              <span>Find a branch</span>{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="navigation">
            {" "}
            <div className="container-fluid">
              {" "}
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                {" "}
                <div className="collapse navbar-collapse " id="main_nav">
                  {" "}
                  {/* Logo */}{" "}
                  <div
                    className="logo"
                    style={{
                      visibility: "visible",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Link className="navbar-brand main" to="#"></Link>
                    <Link to="/">
                      <img
                        src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                        //sf-size={2255}
                        data-sf-ec-immutable=""
                        alt=""
                        width={40}
                        className="sf-immutable-selected"
                      />
                    </Link>
                  </div>{" "}
                  {/* Second Level Navigation */}
                  <div
                    className="ms-auto me-auto main-nav"
                    style={{ visibility: "visible" }}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown has-megamenu ">
                            <Link
                              className="nav-link"
                              to="/personal/accounts-packages"
                              target="_self"
                              id="navbarDropdownMenuLink0-2"
                              data-bs-toggle="dropdown"
                            >
                              Accounts &amp; Packages&nbsp;
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                              <button
                                type="button"
                                className="btn-close-dropdown-menu"
                              >
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
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/standard-savings-account"
                                              target="_self"
                                            >
                                              <strong>
                                                Standard savings account
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/mcb-rupys"
                                              target="_self"
                                            >
                                              <strong>MCB Rupys</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/standard-current-account"
                                              target="_self"
                                            >
                                              <strong>
                                                Standard current account
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/foreign-currency-account"
                                              target="_self"
                                            >
                                              <strong>
                                                Foreign currency account
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/instakit"
                                              target="_self"
                                            >
                                              <strong>Instakit</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/pack-1825"
                                              target="_self"
                                            >
                                              <strong>Pack 18.25</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/accounts-packages/neo"
                                              target="_self"
                                            >
                                              <strong>NEO</strong>
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
                          <li className="nav-item dropdown has-megamenu ">
                            <Link
                              className="nav-link"
                              to="/personal/loans"
                              target="_self"
                              id="navbarDropdownMenuLink1-2"
                              data-bs-toggle="dropdown"
                            >
                              Loans&nbsp;
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                              <button
                                type="button"
                                className="btn-close-dropdown-menu"
                              >
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
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/loans/educational-loan"
                                              target="_self"
                                            >
                                              <strong>Educational loan</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/loans/personal-loan"
                                              target="_self"
                                            >
                                              <strong>Personal loan</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/loans/home-loan"
                                              target="_self"
                                            >
                                              <strong>Home loan</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/loans/green-loan"
                                              target="_self"
                                            >
                                              <strong>Green loan</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/loans/personal-overdrafts"
                                              target="_self"
                                            >
                                              <strong>
                                                Personal overdrafts
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="https://mcbleasing.mu/"
                                              target="_blank"
                                            >
                                              <strong>Car lease</strong>
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
                          <li className="nav-item dropdown has-megamenu ">
                            <Link
                              className="nav-link"
                              to="/personal/cards"
                              target="_self"
                              id="navbarDropdownMenuLink2-2"
                              data-bs-toggle="dropdown"
                            >
                              Cards&nbsp;
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                              <button
                                type="button"
                                className="btn-close-dropdown-menu"
                              >
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
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/mcb-debit-card"
                                              target="_self"
                                            >
                                              <strong>MCB debit card</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/mastercard-primo-credit-card"
                                              target="_self"
                                            >
                                              <strong>
                                                Mastercard Primo credit card
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/classic-credit-card"
                                              target="_self"
                                            >
                                              <strong>
                                                Classic credit card
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/gold-credit-card"
                                              target="_self"
                                            >
                                              <strong>Gold credit card</strong>
                                              <small></small>
                                            </Link>
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
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/cards/american-express/american-express-green"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    American Express® Green
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/cards/american-express/american-express-gold"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    American Express® Gold
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/cards/american-express/membership-rewards"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Membership Rewards®
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/visa-platinum"
                                              target="_self"
                                            >
                                              <strong>Visa Platinum</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/visa-signature"
                                              target="_self"
                                            >
                                              <strong>Visa Signature</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/compare-our-credit-cards"
                                              target="_self"
                                            >
                                              <strong>
                                                Compare our credit cards
                                              </strong>
                                              <small></small>
                                            </Link>
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
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/cards/prepaid-cards/visa-prepaid-card"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    VISA prepaid card
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/cards/prepaid-cards/unionpay-prepaid-card"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    UnionPay prepaid card
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/travel-insurance"
                                              target="_self"
                                            >
                                              <strong>Travel insurance</strong>
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
                          <li className="nav-item dropdown has-megamenu ">
                            <Link
                              className="nav-link"
                              to="/personal/investments"
                              target="_self"
                              id="navbarDropdownMenuLink3-2"
                              data-bs-toggle="dropdown"
                            >
                              Investments&nbsp;
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                              <button
                                type="button"
                                className="btn-close-dropdown-menu"
                              >
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
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/investments/mcb-mutual-funds"
                                              target="_self"
                                            >
                                              <strong>MCB Mutual Funds</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/investments/stockbroking"
                                              target="_self"
                                            >
                                              <strong>Stockbroking</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/investments/education-plan"
                                              target="_self"
                                            >
                                              <strong>Education plan</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/investments/retirement-plan"
                                              target="_self"
                                            >
                                              <strong>Retirement plan</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/investments/life-insurance"
                                              target="_self"
                                            >
                                              <strong>Life insurance</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/investments/fixed-deposit"
                                              target="_self"
                                            >
                                              <strong>Fixed deposit</strong>
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
                          <li className="nav-item dropdown has-megamenu ">
                            <Link
                              className="nav-link"
                              to="/personal/ways-to-bank"
                              target="_self"
                              id="navbarDropdownMenuLink4-1"
                              data-bs-toggle="dropdown"
                            >
                              Ways to bank&nbsp;
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                              <button
                                type="button"
                                className="btn-close-dropdown-menu"
                              >
                                <i className="icon-close-menu-main" />
                                Close
                              </button>
                              <div className="container-fluid py-5 px-5">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <div className="content">
                                      <h2 className="sub-title">
                                        Ways to bank
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="menu-list">
                                      <ul>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="https://juice.mu/"
                                              target="_self"
                                            >
                                              <strong>MCB Juice</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/internet-banking"
                                              target="_self"
                                            >
                                              <strong>Internet banking</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/sms-banking"
                                              target="_self"
                                            >
                                              <strong>SMS banking</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/mcb-refill"
                                              target="_self"
                                            >
                                              <strong>MCB Refill</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/atms"
                                              target="_self"
                                            >
                                              <strong>ATMs</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/in-branch-banking"
                                              target="_self"
                                            >
                                              <strong>In-branch banking</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/bill-payments"
                                              target="_self"
                                            >
                                              <strong>Pay my bills</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>
                                              International transfers
                                            </strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink47-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/ways-to-bank/international-transfers/international-payment"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    International payment
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <Link
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  to="/personal/ways-to-bank/international-transfers/moneygram"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    MoneyGram
                                                  </div>
                                                  <small></small>
                                                </Link>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/ways-to-bank/e-statements"
                                              target="_self"
                                            >
                                              <strong>E-Statements</strong>
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
                          <li className="nav-item dropdown has-megamenu ">
                            <Link
                              className="nav-link"
                              to="/personal/existing-customers"
                              target="_self"
                              id="navbarDropdownMenuLink5-1"
                              data-bs-toggle="dropdown"
                            >
                              Existing customers&nbsp;
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                              <button
                                type="button"
                                className="btn-close-dropdown-menu"
                              >
                                <i className="icon-close-menu-main" />
                                Close
                              </button>
                              <div className="container-fluid py-5 px-5">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <div className="content">
                                      <h2 className="sub-title">
                                        Existing customers
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-9">
                                    <div className="menu-list">
                                      <ul>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="https://juice.mu/"
                                              target="_blank"
                                            >
                                              <strong>Get MCB Juice</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/T001/banking"
                                              target="_blank"
                                            >
                                              <strong>
                                                Log in to Internet Banking
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/offers-and-promotions"
                                              target="_self"
                                            >
                                              <strong>
                                                Offers &amp; promotions
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/cards/american-express/membership-rewards"
                                              target="_self"
                                            >
                                              <strong>
                                                American Express® Membership
                                                Rewards® programme
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/personal/help-centre"
                                              target="_self"
                                            >
                                              <strong>Go to help center</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/security-centre"
                                              target="_self"
                                            >
                                              <strong>
                                                Go to security center
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="https://app.mcb.mu/app/banking/ways-to-bank/update-your-profile"
                                              target="_blank"
                                            >
                                              <strong>
                                                Update your personal profile
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/contact-us"
                                              target="_self"
                                            >
                                              <strong>Contact us</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/file-a-complaint"
                                              target="_self"
                                            >
                                              <strong>File a complaint</strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/locate-us"
                                              target="_self"
                                            >
                                              <strong>
                                                Find your nearest branch
                                              </strong>
                                              <small></small>
                                            </Link>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <Link
                                              className="d-flex flex-column "
                                              to="/rates-fees"
                                              target="_self"
                                            >
                                              <strong>
                                                View interest rates, fees and
                                                charges
                                              </strong>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Side Button */}
                  <ul
                    className="navbar-nav button"
                    style={{ visibility: "visible" }}
                  >
                    {/* Internet Banking */}
                    <li className="nav-item ib">
                      <div className="btn-group">
                        <Link
                          className="nav-link px-3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-ib" style={{ fontSize: 20 }} />
                          <small
                            style={{ lineHeight: "10px", fontSize: "80%" }}
                            className=""
                          >
                            Internet Banking
                          </small>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <div className="title">
                            <h4>Internet Banking</h4>
                          </div>
                          <ul className="buttons">
                            <li className="btn-primary">
                              <Link
                                to="/T001/banking"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Login
                              </Link>
                            </li>
                          </ul>
                          <ul className="more-links mt-4">
                            <li>
                              <Link to="/security-centre">
                                <i className="icon-chevron-right" /> Protect
                                yourself online
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>{" "}
                </div>{" "}
              </nav>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default PersonalHeader;
