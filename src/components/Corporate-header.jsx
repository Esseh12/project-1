import { useEffect } from "react";

const CorporateHeader = () => {
  useEffect(() => {
    // External scripts to be loaded dynamically
    const scripts = [
      // "/ResourcePackages/MCBMU/assets/dist/js/ma5-menu7306.js",
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
      "ResourcePackages/MCBMU/assets/dist/js/gmap/jquery.storelocator7306.js",
      "ResourcePackages/MCBMU/assets/dist/js/gmap/map7306.js",
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
                      <a href="index.html">
                        <img
                          src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                          //sf-size={2255}
                          data-sf-ec-immutable=""
                          alt=""
                          width={40}
                          className="sf-immutable-selected"
                        />
                      </a>{" "}
                    </div>{" "}
                    <div className="univers-option">
                      <div className="btn-group">
                        <a
                          className="nav-link px-3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-ib" style={{ fontSize: 20 }} />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <div className="title">
                            <h4>Internet Banking</h4>
                          </div>
                          <ul className="buttons">
                            <li className="btn-primary">
                              <a
                                href="/T001/banking.html"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Login
                              </a>
                            </li>
                          </ul>
                          <ul className="more-links mt-4">
                            <li>
                              <a href="security-centre.html">
                                <i className="icon-chevron-right" /> Protect
                                yourself online
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>{" "}
                      <a className="ma5menu__toggle" type="button">
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
                      </a>{" "}
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
              <li>
                <a
                  href="index.html"
                  target="_self"
                  id="navbarDropdownMenuLink0-1"
                >
                  Personal
                </a>
                <ul>
                  <li>
                    <a href="personal/accounts-packages.html">
                      Accounts &amp; Packages{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="personal/accounts-packages/standard-savings-account.html">
                          Standard savings account
                        </a>
                      </li>
                      <li>
                        <a href="personal/accounts-packages/mcb-rupys.html">
                          MCB Rupys
                        </a>
                      </li>
                      <li>
                        <a href="personal/accounts-packages/standard-current-account.html">
                          Standard current account
                        </a>
                      </li>
                      <li>
                        <a href="personal/accounts-packages/foreign-currency-account.html">
                          Foreign currency account
                        </a>
                      </li>
                      <li>
                        <a href="personal/accounts-packages/instakit.html">
                          Instakit
                        </a>
                      </li>
                      <li>
                        <a href="personal/accounts-packages/pack-1825.html">
                          Pack 18.25
                        </a>
                      </li>
                      <li>
                        <a href="personal/accounts-packages/neo.html">NEO</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="personal/loans.html">Loans </a>
                    <ul>
                      <li>
                        <a href="personal/loans/educational-loan.html">
                          Educational loan
                        </a>
                      </li>
                      <li>
                        <a href="personal/loans/personal-loan.html">
                          Personal loan
                        </a>
                      </li>
                      <li>
                        <a href="personal/loans/home-loan.html">Home loan</a>
                      </li>
                      <li>
                        <a href="personal/loans/green-loan.html">Green loan</a>
                      </li>
                      <li>
                        <a href="personal/loans/personal-overdrafts.html">
                          Personal overdrafts
                        </a>
                      </li>
                      <li>
                        <a href="https://mcbleasing.mu/">Car lease</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="personal/cards.html">Cards </a>
                    <ul>
                      <li>
                        <a href="personal/cards/mcb-debit-card.html">
                          MCB debit card
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/mastercard-primo-credit-card.html">
                          Mastercard Primo credit card
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/classic-credit-card.html">
                          Classic credit card
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/gold-credit-card.html">
                          Gold credit card
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/american-express.html">
                          American Express®{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="personal/cards/american-express/american-express-green.html">
                              American Express® Green
                            </a>
                          </li>
                          <li>
                            <a href="personal/cards/american-express/american-express-gold.html">
                              American Express® Gold
                            </a>
                          </li>
                          <li>
                            <a href="personal/cards/american-express/membership-rewards.html">
                              Membership Rewards®
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="personal/cards/visa-platinum.html">
                          Visa Platinum
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/visa-signature.html">
                          Visa Signature
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/compare-our-credit-cards.html">
                          Compare our credit cards
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/prepaid-cards.html">
                          Prepaid cards{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="personal/cards/prepaid-cards/visa-prepaid-card.html">
                              VISA prepaid card
                            </a>
                          </li>
                          <li>
                            <a href="personal/cards/prepaid-cards/unionpay-prepaid-card.html">
                              UnionPay prepaid card
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="personal/cards/travel-insurance.html">
                          Travel insurance
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="personal/investments.html">Investments </a>
                    <ul>
                      <li>
                        <a href="personal/investments/mcb-mutual-funds.html">
                          MCB Mutual Funds
                        </a>
                      </li>
                      <li>
                        <a href="personal/investments/stockbroking.html">
                          Stockbroking
                        </a>
                      </li>
                      <li>
                        <a href="personal/investments/education-plan.html">
                          Education plan
                        </a>
                      </li>
                      <li>
                        <a href="personal/investments/retirement-plan.html">
                          Retirement plan
                        </a>
                      </li>
                      <li>
                        <a href="personal/investments/life-insurance.html">
                          Life insurance
                        </a>
                      </li>
                      <li>
                        <a href="personal/investments/fixed-deposit.html">
                          Fixed deposit
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="personal/ways-to-bank.html">Ways to bank </a>
                    <ul>
                      <li>
                        <a href="https://juice.mu/">MCB Juice</a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/internet-banking.html">
                          Internet banking
                        </a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/sms-banking.html">
                          SMS banking
                        </a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/mcb-refill.html">
                          MCB Refill
                        </a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/atms.html">ATMs</a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/in-branch-banking.html">
                          In-branch banking
                        </a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/bill-payments.html">
                          Pay my bills
                        </a>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/international-transfers.html">
                          International transfers{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="personal/ways-to-bank/international-transfers/international-payment.html">
                              International payment
                            </a>
                          </li>
                          <li>
                            <a href="personal/ways-to-bank/international-transfers/moneygram.html">
                              MoneyGram
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="personal/ways-to-bank/e-statements.html">
                          E-Statements
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="personal/existing-customers.html">
                      Existing customers{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="https://juice.mu/">Get MCB Juice</a>
                      </li>
                      <li>
                        <a href="personal/existing-customers/log-in-to-internet-banking.html">
                          Log in to Internet Banking
                        </a>
                      </li>
                      <li>
                        <a href="personal/offers-and-promotions.html">
                          Offers &amp; promotions
                        </a>
                      </li>
                      <li>
                        <a href="personal/cards/american-express/membership-rewards.html">
                          American Express® Membership Rewards® programme
                        </a>
                      </li>
                      <li>
                        <a href="personal/help-centre.html">
                          Go to help center
                        </a>
                      </li>
                      <li>
                        <a href="security-centre.html">Go to security center</a>
                      </li>
                      <li>
                        <a href="personal/existing-customers/update-your-personal-profile.html">
                          Update your personal profile
                        </a>
                      </li>
                      <li>
                        <a href="personal/contact-us.html">Contact us</a>
                      </li>
                      <li>
                        <a href="file-a-complaint.html">File a complaint</a>
                      </li>
                      <li>
                        <a href="locate-us.html">Find your nearest branch</a>
                      </li>
                      <li>
                        <a href="rates-fees.html">
                          View interest rates, fees and charges
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="sme.html"
                  target="_self"
                  id="navbarDropdownMenuLink1-1"
                >
                  SME
                </a>
                <ul>
                  <li>
                    <a href="sme/bank.html">Bank </a>
                    <ul>
                      <li>
                        <a href="sme/bank/business-account.html">
                          Business Account
                        </a>
                      </li>
                      <li>
                        <a href="sme/bank/tailor-made-solutions.html">
                          Tailor-made Solutions{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="https://www.mcbmicrofinance.mu/">
                              MCB Microfinance
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="sme/bank/transact-anytime-anywhere.html">
                          Transact anytime, anywhere{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="sme/bank/transact-anytime-anywhere/internet-banking.html">
                              Internet Banking
                            </a>
                          </li>
                          <li>
                            <a href="sme/bank/transact-anytime-anywhere/atm.html">
                              ATM
                            </a>
                          </li>
                          <li>
                            <a href="sme/bank/transact-anytime-anywhere/e-statements.html">
                              E-Statements
                            </a>
                          </li>
                          <li>
                            <a href="sme/bank/transact-anytime-anywhere/juicepro.html">
                              JuicePro
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="sme/borrow.html">Borrow </a>
                    <ul>
                      <li>
                        <a href="sme/borrow/loans.html">Loans</a>
                      </li>
                      <li>
                        <a href="sme/borrow/overdrafts.html">Overdrafts</a>
                      </li>
                      <li>
                        <a href="sme/borrow/leasing.html">Leasing</a>
                      </li>
                      <li>
                        <a href="sme/borrow/trade-finance.html">
                          Trade Finance
                        </a>
                      </li>
                      <li>
                        <a href="sme/borrow/sustainable-loan.html">
                          Sustainable Loan
                        </a>
                      </li>
                      <li>
                        <a href="sme/borrow/factoring.html">Factoring</a>
                      </li>
                      <li>
                        <a href="sme/borrow/bank-guarantees.html">
                          Bank Guarantees
                        </a>
                      </li>
                      <li>
                        <a href="sme/borrow/lokal-is-beautiful.html">
                          Lokal is Beautiful
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="sme/pay.html">Pay </a>
                    <ul>
                      <li>
                        <a href="sme/pay/cards.html">Cards </a>
                        <ul>
                          <li>
                            <a href="sme/pay/cards/business-card.html">
                              Business Card
                            </a>
                          </li>
                          <li>
                            <a href="sme/pay/cards/business-deposit-card.html">
                              Business Deposit Card
                            </a>
                          </li>
                          <li>
                            <a href="sme/pay/cards/fleetman-card.html">
                              Fleetman Card
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="sme/pay/payroll-services.html">
                          Payroll Services
                        </a>
                      </li>
                      <li>
                        <a href="sme/pay/cheques.html">Cheques</a>
                      </li>
                      <li>
                        <a href="sme/pay/electronic-payments.html">
                          Electronic Payments{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="sme/pay/electronic-payments/electronic-transfer.html">
                              Electronic Transfer
                            </a>
                          </li>
                          <li>
                            <a href="sme/pay/electronic-payments/e-commerce-solutions.html">
                              E-Commerce Solutions
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="sme/sme-connect.html">SME Connect </a>
                    <ul>
                      <li>
                        <a href="sme/sme-connect/start-your-business.html">
                          Start Your Business
                        </a>
                      </li>
                      <li>
                        <a href="sme/sme-connect/manage-your-business.html">
                          Manage Your Business
                        </a>
                      </li>
                      <li>
                        <a href="sme/sme-connect/speaker-series.html">
                          Speaker Series
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='"active"'>
                <a
                  href="corporate.html"
                  target="_self"
                  id="navbarDropdownMenuLink2-1"
                >
                  Corporate
                </a>
                <ul>
                  <li>
                    <a href="corporate/what-we-do.html">What we do </a>
                    <ul>
                      <li>
                        <a href="corporate/what-we-do/corporate-banking.html">
                          Corporate Banking{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/what-we-do/corporate-banking/our-success-stories.html">
                              Our success stories
                            </a>
                          </li>
                          <li>
                            <a href="corporate/what-we-do/corporate-banking/become-a-client.html">
                              Become a client
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/what-we-do/global-business.html">
                          Global Business{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/what-we-do/global-business/become-a-client.html">
                              Become a client
                            </a>
                          </li>
                          <li>
                            <a href="corporate/what-we-do/global-business/investing-in-mauritius.html">
                              Investing in Mauritius
                            </a>
                          </li>
                          <li>
                            <a href="corporate/what-we-do/global-business/custody-services.html">
                              Custody Services
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/finance-lending/structured-finance/energy-commodities.html">
                          Energy &amp; Commodities Financing
                        </a>
                      </li>
                      <li>
                        <a href="institutional.html">Institutional Banking</a>
                      </li>
                      <li>
                        <a href="sme.html">SME Banking</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="corporate/payment-cash.html">
                      Payment &amp; Cash{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="corporate/payment-cash/pay.html">Pay </a>
                        <ul>
                          <li>
                            <a href="corporate/payment-cash/pay/domestic-international-transfers.html">
                              Domestic &amp; International transfers{" "}
                            </a>
                            <ul>
                              <li>
                                <a href="corporate/payment-cash/pay/domestic-international-transfers/swift-gpi.html">
                                  SWIFT gpi
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/pay/internet-banking-pro-smartapprove.html">
                              Internet Banking Pro &amp; SmartApprove App
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/pay/bulk-payments.html">
                              Bulk Payments
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/pay/corporate-card.html">
                              Corporate Card
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/pay/fleetman-card.html">
                              Fleetman Card
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/pay/swift-connectivity.html">
                              SWIFT Connectivity
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/pay/drop-collect.html">
                              Drop &amp; Collect
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/payment-cash/collect.html">
                          Collect{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/payment-cash/collect/direct-debit-bill-payment.html">
                              Direct Debit &amp; Bill Payment
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/collect/cash-deposit-solutions.html">
                              Cash Deposit Solutions
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/collect/e-commerce.html">
                              E-commerce{" "}
                            </a>
                            <ul>
                              <li>
                                <a href="corporate/payment-cash/collect/e-commerce/online-payment-gateway.html">
                                  Online Payment Gateway
                                </a>
                              </li>
                              <li>
                                <a href="corporate/payment-cash/collect/e-commerce/merchant-services.html">
                                  Merchant Services
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/collect/point-of-sale-solutions.html">
                              Point of Sale Solutions
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/collect/mobile-banking.html">
                              Mobile Banking
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/payment-cash/monitor.html">
                          Monitor{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/payment-cash/monitor/e-statements.html">
                              E-Statements
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/monitor/reporting-services-ib-dashboard.html">
                              Reporting Services &amp; IB Dashboard
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/payment-cash/optimise.html">
                          Optimise{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/payment-cash/optimise/cash-pooling-services.html">
                              Cash Pooling Services
                            </a>
                          </li>
                          <li>
                            <a href="corporate/payment-cash/optimise/fx-money-market-services.html">
                              FX &amp; Money Market Services
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="corporate/finance-lending.html">
                      Finance &amp; Lending{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="corporate/finance-lending/corporate-lending.html">
                          Corporate Lending{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/overdraft-working-capital.html">
                              Overdraft &amp; Working Capital
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/revolving-credit.html">
                              Revolving Credit
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/import-loan.html">
                              Import Loan
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/export-loan.html">
                              Export Loan
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/term-loan.html">
                              Term Loan
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/sustainable-loan.html">
                              Sustainable Loan
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/corporate-lending/guarantees.html">
                              Guarantees
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/finance-lending/supply-chain-finance.html">
                          Supply Chain Finance{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/finance-lending/supply-chain-finance/global-trade-portal.html">
                              Global Trade Portal
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/supply-chain-finance/trade-finance.html">
                              Trade Finance{" "}
                            </a>
                            <ul>
                              <li>
                                <a href="corporate/finance-lending/supply-chain-finance/trade-finance/trade-finance-forms.html">
                                  Trade Finance Forms
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/supply-chain-finance/credit-protection.html">
                              Credit Protection
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/supply-chain-finance/invoice-factoring.html">
                              Invoice Factoring
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/finance-lending/structured-finance.html">
                          Structured Finance{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/finance-lending/structured-finance/acquisition-financing.html">
                              Acquisition Financing
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/structured-finance/property-financing.html">
                              Property Financing
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/structured-finance/project-financing.html">
                              Project Financing
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/structured-finance/energy-commodities.html">
                              Energy &amp; Commodities{" "}
                            </a>
                            <ul>
                              <li>
                                <a href="corporate/finance-lending/structured-finance/energy-commodities/our-success-stories.html">
                                  Our Success Stories
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/structured-finance/cross-border-financing.html">
                              Cross-border Financing
                            </a>
                          </li>
                          <li>
                            <a href="corporate/finance-lending/structured-finance/syndicated-financing.html">
                              Syndicated Financing
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/finance-lending/asset-finance.html">
                          Asset Finance{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/finance-lending/asset-finance/mcb-leasing.html">
                              MCB Leasing
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="corporate/investment-advisory.html">
                      Investment &amp; Advisory{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="corporate/investment-advisory/global-markets.html">
                          Global Markets{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="corporate/investment-advisory/global-markets/financial-markets-summary.html">
                              Financial Markets summary
                            </a>
                          </li>
                          <li>
                            <a href="corporate/investment-advisory/global-markets/global-markets-solutions.html">
                              Global Markets Solutions
                            </a>
                          </li>
                          <li>
                            <a href="corporate/investment-advisory/global-markets/direct-access-to-markets.html">
                              Direct access to markets
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="corporate/investment-advisory/capital-markets.html">
                          Capital Markets
                        </a>
                      </li>
                      <li>
                        <a href="corporate/investment-advisory/securities-services.html">
                          Securities Services
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="institutional.html"
                  target="_self"
                  id="navbarDropdownMenuLink3-1"
                >
                  Institutional
                </a>
                <ul>
                  <li>
                    <a href="institutional/mcb-at-a-glance.html">
                      MCB at a glance
                    </a>
                  </li>
                  <li>
                    <a href="institutional/our-geographical-presence.html">
                      Our geographical presence
                    </a>
                  </li>
                  <li>
                    <a href="institutional/our-solutions.html">
                      Our solutions{" "}
                    </a>
                    <ul>
                      <li>
                        <a href="institutional/our-solutions/bank-of-banks.html">
                          Bank of Banks
                        </a>
                      </li>
                      <li>
                        <a href="institutional/our-solutions/correspondent-banking.html">
                          Correspondent Banking
                        </a>
                      </li>
                      <li>
                        <a href="institutional/our-solutions/risk-sharing.html">
                          Risk Sharing
                        </a>
                      </li>
                      <li>
                        <a href="institutional/our-solutions/syndications.html">
                          Syndications
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="institutional/events.html">Events</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="rates-fees.html" target="_self">
                  Rates &amp; Fees
                </a>
              </li>
            </ul>
            {/* ma5-mobile-menu generated by js start */}
            <nav
              id="js-ma5menu"
              className="ma5menu"
              itemScope=""
              itemType="http://schema.org/SiteNavigationElement"
            >
              <div className="ma5menu__header">
                <a className="ma5menu__home" href="/" tabIndex={-1}>
                  <span className="ma5menu__logo">
                    <img
                      src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                      alt="MCB logo"
                    />
                  </span>
                </a>
              </div>
              <ul
                data-ma5order="ma5-ul"
                className="ma5menu__panel--active lvl-0"
              >
                <li data-ma5order="ma5-li-1">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <a href="index.html">Personal</a>
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
                      <a href="personal/accounts-packages.html">
                        Accounts &amp; Packages{" "}
                      </a>
                      <ul data-ma5order="ma5-ul-1-1" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Accounts &amp; Packages{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-1-1">
                          <a href="personal/accounts-packages/standard-savings-account.html">
                            Standard savings account
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-1-2">
                          <a href="personal/accounts-packages/mcb-rupys.html">
                            MCB Rupys
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-1-3">
                          <a href="personal/accounts-packages/standard-current-account.html">
                            Standard current account
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-1-4">
                          <a href="personal/accounts-packages/foreign-currency-account.html">
                            Foreign currency account
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-1-5">
                          <a href="personal/accounts-packages/instakit.html">
                            Instakit
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-1-6">
                          <a href="personal/accounts-packages/pack-1825.html">
                            Pack 18.25
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-1-7">
                          <a href="personal/accounts-packages/neo.html">NEO</a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-2">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="personal/loans.html">Loans </a>
                      <ul data-ma5order="ma5-ul-1-2" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Loans{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-2-1">
                          <a href="personal/loans/educational-loan.html">
                            Educational loan
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-2-2">
                          <a href="personal/loans/personal-loan.html">
                            Personal loan
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-2-3">
                          <a href="personal/loans/home-loan.html">Home loan</a>
                        </li>
                        <li data-ma5order="ma5-li-1-2-4">
                          <a href="personal/loans/green-loan.html">
                            Green loan
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-2-5">
                          <a href="personal/loans/personal-overdrafts.html">
                            Personal overdrafts
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-2-6">
                          <a href="https://mcbleasing.mu/">Car lease</a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="personal/cards.html">Cards </a>
                      <ul data-ma5order="ma5-ul-1-3" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Cards{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-3-1">
                          <a href="personal/cards/mcb-debit-card.html">
                            MCB debit card
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-2">
                          <a href="personal/cards/mastercard-primo-credit-card.html">
                            Mastercard Primo credit card
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-3">
                          <a href="personal/cards/classic-credit-card.html">
                            Classic credit card
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-4">
                          <a href="personal/cards/gold-credit-card.html">
                            Gold credit card
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-5">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="personal/cards/american-express.html">
                            American Express®{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-1-3-5" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              American Express®{" "}
                            </div>
                            <li data-ma5order="ma5-li-1-3-5-1">
                              <a href="personal/cards/american-express/american-express-green.html">
                                American Express® Green
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-1-3-5-2">
                              <a href="personal/cards/american-express/american-express-gold.html">
                                American Express® Gold
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-1-3-5-3">
                              <a href="personal/cards/american-express/membership-rewards.html">
                                Membership Rewards®
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-3-6">
                          <a href="personal/cards/visa-platinum.html">
                            Visa Platinum
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-7">
                          <a href="personal/cards/visa-signature.html">
                            Visa Signature
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-8">
                          <a href="personal/cards/compare-our-credit-cards.html">
                            Compare our credit cards
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-3-9">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="personal/cards/prepaid-cards.html">
                            Prepaid cards{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-1-3-9" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Prepaid cards{" "}
                            </div>
                            <li data-ma5order="ma5-li-1-3-9-1">
                              <a href="personal/cards/prepaid-cards/visa-prepaid-card.html">
                                VISA prepaid card
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-1-3-9-2">
                              <a href="personal/cards/prepaid-cards/unionpay-prepaid-card.html">
                                UnionPay prepaid card
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-3-10">
                          <a href="personal/cards/travel-insurance.html">
                            Travel insurance
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-4">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="personal/investments.html">Investments </a>
                      <ul data-ma5order="ma5-ul-1-4" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Investments{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-4-1">
                          <a href="personal/investments/mcb-mutual-funds.html">
                            MCB Mutual Funds
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-4-2">
                          <a href="personal/investments/stockbroking.html">
                            Stockbroking
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-4-3">
                          <a href="personal/investments/education-plan.html">
                            Education plan
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-4-4">
                          <a href="personal/investments/retirement-plan.html">
                            Retirement plan
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-4-5">
                          <a href="personal/investments/life-insurance.html">
                            Life insurance
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-4-6">
                          <a href="personal/investments/fixed-deposit.html">
                            Fixed deposit
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-5">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="personal/ways-to-bank.html">Ways to bank </a>
                      <ul data-ma5order="ma5-ul-1-5" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Ways to bank{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-5-1">
                          <a href="https://juice.mu/">MCB Juice</a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-2">
                          <a href="personal/ways-to-bank/internet-banking.html">
                            Internet banking
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-3">
                          <a href="personal/ways-to-bank/sms-banking.html">
                            SMS banking
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-4">
                          <a href="personal/ways-to-bank/mcb-refill.html">
                            MCB Refill
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-5">
                          <a href="personal/ways-to-bank/atms.html">ATMs</a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-6">
                          <a href="personal/ways-to-bank/in-branch-banking.html">
                            In-branch banking
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-7">
                          <a href="personal/ways-to-bank/bill-payments.html">
                            Pay my bills
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-5-8">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="personal/ways-to-bank/international-transfers.html">
                            International transfers{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-1-5-8" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              International transfers{" "}
                            </div>
                            <li data-ma5order="ma5-li-1-5-8-1">
                              <a href="personal/ways-to-bank/international-transfers/international-payment.html">
                                International payment
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-1-5-8-2">
                              <a href="personal/ways-to-bank/international-transfers/moneygram.html">
                                MoneyGram
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-5-9">
                          <a href="personal/ways-to-bank/e-statements.html">
                            E-Statements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-1-6">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="personal/existing-customers.html">
                        Existing customers{" "}
                      </a>
                      <ul data-ma5order="ma5-ul-1-6" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Existing customers{" "}
                        </div>
                        <li data-ma5order="ma5-li-1-6-1">
                          <a href="https://juice.mu/">Get MCB Juice</a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-2">
                          <a href="personal/existing-customers/log-in-to-internet-banking.html">
                            Log in to Internet Banking
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-3">
                          <a href="personal/offers-and-promotions.html">
                            Offers &amp; promotions
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-4">
                          <a href="personal/cards/american-express/membership-rewards.html">
                            American Express® Membership Rewards® programme
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-5">
                          <a href="personal/help-centre.html">
                            Go to help center
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-6">
                          <a href="security-centre.html">
                            Go to security center
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-7">
                          <a href="personal/existing-customers/update-your-personal-profile.html">
                            Update your personal profile
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-8">
                          <a href="personal/contact-us.html">Contact us</a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-9">
                          <a href="file-a-complaint.html">File a complaint</a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-10">
                          <a href="locate-us.html">Find your nearest branch</a>
                        </li>
                        <li data-ma5order="ma5-li-1-6-11">
                          <a href="rates-fees.html">
                            View interest rates, fees and charges
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-2">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <a href="sme.html">SME</a>
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
                      <a href="sme/bank.html">Bank </a>
                      <ul data-ma5order="ma5-ul-2-1" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Bank{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-1-1">
                          <a href="sme/bank/business-account.html">
                            Business Account
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-1-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="sme/bank/tailor-made-solutions.html">
                            Tailor-made Solutions{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-2-1-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Tailor-made Solutions{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-1-2-1">
                              <a href="https://www.mcbmicrofinance.mu/">
                                MCB Microfinance
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-2-1-3">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="sme/bank/transact-anytime-anywhere.html">
                            Transact anytime, anywhere{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-2-1-3" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Transact anytime, anywhere{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-1-3-1">
                              <a href="sme/bank/transact-anytime-anywhere/internet-banking.html">
                                Internet Banking
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-2-1-3-2">
                              <a href="sme/bank/transact-anytime-anywhere/atm.html">
                                ATM
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-2-1-3-3">
                              <a href="sme/bank/transact-anytime-anywhere/e-statements.html">
                                E-Statements
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-2-1-3-4">
                              <a href="sme/bank/transact-anytime-anywhere/juicepro.html">
                                JuicePro
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-2-2">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="sme/borrow.html">Borrow </a>
                      <ul data-ma5order="ma5-ul-2-2" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Borrow{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-2-1">
                          <a href="sme/borrow/loans.html">Loans</a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-2">
                          <a href="sme/borrow/overdrafts.html">Overdrafts</a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-3">
                          <a href="sme/borrow/leasing.html">Leasing</a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-4">
                          <a href="sme/borrow/trade-finance.html">
                            Trade Finance
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-5">
                          <a href="sme/borrow/sustainable-loan.html">
                            Sustainable Loan
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-6">
                          <a href="sme/borrow/factoring.html">Factoring</a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-7">
                          <a href="sme/borrow/bank-guarantees.html">
                            Bank Guarantees
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-2-8">
                          <a href="sme/borrow/lokal-is-beautiful.html">
                            Lokal is Beautiful
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-2-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="sme/pay.html">Pay </a>
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
                          <a href="sme/pay/cards.html">Cards </a>
                          <ul data-ma5order="ma5-ul-2-3-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Cards{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-3-1-1">
                              <a href="sme/pay/cards/business-card.html">
                                Business Card
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-2-3-1-2">
                              <a href="sme/pay/cards/business-deposit-card.html">
                                Business Deposit Card
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-2-3-1-3">
                              <a href="sme/pay/cards/fleetman-card.html">
                                Fleetman Card
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-2-3-2">
                          <a href="sme/pay/payroll-services.html">
                            Payroll Services
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-3-3">
                          <a href="sme/pay/cheques.html">Cheques</a>
                        </li>
                        <li data-ma5order="ma5-li-2-3-4">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="sme/pay/electronic-payments.html">
                            Electronic Payments{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-2-3-4" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Electronic Payments{" "}
                            </div>
                            <li data-ma5order="ma5-li-2-3-4-1">
                              <a href="sme/pay/electronic-payments/electronic-transfer.html">
                                Electronic Transfer
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-2-3-4-2">
                              <a href="sme/pay/electronic-payments/e-commerce-solutions.html">
                                E-Commerce Solutions
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-2-4">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="sme/sme-connect.html">SME Connect </a>
                      <ul data-ma5order="ma5-ul-2-4" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          SME Connect{" "}
                        </div>
                        <li data-ma5order="ma5-li-2-4-1">
                          <a href="sme/sme-connect/start-your-business.html">
                            Start Your Business
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-4-2">
                          <a href="sme/sme-connect/manage-your-business.html">
                            Manage Your Business
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-2-4-3">
                          <a href="sme/sme-connect/speaker-series.html">
                            Speaker Series
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-3">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <a href="corporate.html">Corporate</a>
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
                      <a href="corporate/what-we-do.html">What we do </a>
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
                          <a href="corporate/what-we-do/corporate-banking.html">
                            Corporate Banking{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-1-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Corporate Banking{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-1-1-1">
                              <a href="corporate/what-we-do/corporate-banking/our-success-stories.html">
                                Our success stories
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-1-1-2">
                              <a href="corporate/what-we-do/corporate-banking/become-a-client.html">
                                Become a client
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-1-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/what-we-do/global-business.html">
                            Global Business{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-1-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Global Business{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-1-2-1">
                              <a href="corporate/what-we-do/global-business/become-a-client.html">
                                Become a client
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-1-2-2">
                              <a href="corporate/what-we-do/global-business/investing-in-mauritius.html">
                                Investing in Mauritius
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-1-2-3">
                              <a href="corporate/what-we-do/global-business/custody-services.html">
                                Custody Services
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-1-3">
                          <a href="corporate/finance-lending/structured-finance/energy-commodities.html">
                            Energy &amp; Commodities Financing
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-3-1-4">
                          <a href="institutional.html">Institutional Banking</a>
                        </li>
                        <li data-ma5order="ma5-li-3-1-5">
                          <a href="sme.html">SME Banking</a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-3-2">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="corporate/payment-cash.html">
                        Payment &amp; Cash{" "}
                      </a>
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
                          <a href="corporate/payment-cash/pay.html">Pay </a>
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
                              <a href="corporate/payment-cash/pay/domestic-international-transfers.html">
                                Domestic &amp; International transfers{" "}
                              </a>
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
                                  <a href="corporate/payment-cash/pay/domestic-international-transfers/swift-gpi.html">
                                    SWIFT gpi
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-2">
                              <a href="corporate/payment-cash/pay/internet-banking-pro-smartapprove.html">
                                Internet Banking Pro &amp; SmartApprove App
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-3">
                              <a href="corporate/payment-cash/pay/bulk-payments.html">
                                Bulk Payments
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-4">
                              <a href="corporate/payment-cash/pay/corporate-card.html">
                                Corporate Card
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-5">
                              <a href="corporate/payment-cash/pay/fleetman-card.html">
                                Fleetman Card
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-6">
                              <a href="corporate/payment-cash/pay/swift-connectivity.html">
                                SWIFT Connectivity
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-1-7">
                              <a href="corporate/payment-cash/pay/drop-collect.html">
                                Drop &amp; Collect
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-2-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/payment-cash/collect.html">
                            Collect{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-2-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Collect{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-2-1">
                              <a href="corporate/payment-cash/collect/direct-debit-bill-payment.html">
                                Direct Debit &amp; Bill Payment
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-2">
                              <a href="corporate/payment-cash/collect/cash-deposit-solutions.html">
                                Cash Deposit Solutions
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-3">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <a href="corporate/payment-cash/collect/e-commerce.html">
                                E-commerce{" "}
                              </a>
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
                                  <a href="corporate/payment-cash/collect/e-commerce/online-payment-gateway.html">
                                    Online Payment Gateway
                                  </a>
                                </li>
                                <li data-ma5order="ma5-li-3-2-2-3-2">
                                  <a href="corporate/payment-cash/collect/e-commerce/merchant-services.html">
                                    Merchant Services
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-4">
                              <a href="corporate/payment-cash/collect/point-of-sale-solutions.html">
                                Point of Sale Solutions
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-2-5">
                              <a href="corporate/payment-cash/collect/mobile-banking.html">
                                Mobile Banking
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-2-3">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/payment-cash/monitor.html">
                            Monitor{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-2-3" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Monitor{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-3-1">
                              <a href="corporate/payment-cash/monitor/e-statements.html">
                                E-Statements
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-3-2">
                              <a href="corporate/payment-cash/monitor/reporting-services-ib-dashboard.html">
                                Reporting Services &amp; IB Dashboard
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-2-4">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/payment-cash/optimise.html">
                            Optimise{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-2-4" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Optimise{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-2-4-1">
                              <a href="corporate/payment-cash/optimise/cash-pooling-services.html">
                                Cash Pooling Services
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-2-4-2">
                              <a href="corporate/payment-cash/optimise/fx-money-market-services.html">
                                FX &amp; Money Market Services
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-3-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="corporate/finance-lending.html">
                        Finance &amp; Lending{" "}
                      </a>
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
                          <a href="corporate/finance-lending/corporate-lending.html">
                            Corporate Lending{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-3-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Corporate Lending{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-1-1">
                              <a href="corporate/finance-lending/corporate-lending/overdraft-working-capital.html">
                                Overdraft &amp; Working Capital
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-2">
                              <a href="corporate/finance-lending/corporate-lending/revolving-credit.html">
                                Revolving Credit
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-3">
                              <a href="corporate/finance-lending/corporate-lending/import-loan.html">
                                Import Loan
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-4">
                              <a href="corporate/finance-lending/corporate-lending/export-loan.html">
                                Export Loan
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-5">
                              <a href="corporate/finance-lending/corporate-lending/term-loan.html">
                                Term Loan
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-6">
                              <a href="corporate/finance-lending/corporate-lending/sustainable-loan.html">
                                Sustainable Loan
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-1-7">
                              <a href="corporate/finance-lending/corporate-lending/guarantees.html">
                                Guarantees
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-3-2">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/finance-lending/supply-chain-finance.html">
                            Supply Chain Finance{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-3-2" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Supply Chain Finance{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-2-1">
                              <a href="corporate/finance-lending/supply-chain-finance/global-trade-portal.html">
                                Global Trade Portal
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-2-2">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <a href="corporate/finance-lending/supply-chain-finance/trade-finance.html">
                                Trade Finance{" "}
                              </a>
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
                                  <a href="corporate/finance-lending/supply-chain-finance/trade-finance/trade-finance-forms.html">
                                    Trade Finance Forms
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-3-2-3">
                              <a href="corporate/finance-lending/supply-chain-finance/credit-protection.html">
                                Credit Protection
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-2-4">
                              <a href="corporate/finance-lending/supply-chain-finance/invoice-factoring.html">
                                Invoice Factoring
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-3-3">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/finance-lending/structured-finance.html">
                            Structured Finance{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-3-3" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Structured Finance{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-3-1">
                              <a href="corporate/finance-lending/structured-finance/acquisition-financing.html">
                                Acquisition Financing
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-2">
                              <a href="corporate/finance-lending/structured-finance/property-financing.html">
                                Property Financing
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-3">
                              <a href="corporate/finance-lending/structured-finance/project-financing.html">
                                Project Financing
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-4">
                              <span className="ma5menu__btn--enter">
                                <i className="icon-chevron-right" />
                              </span>
                              <a href="corporate/finance-lending/structured-finance/energy-commodities.html">
                                Energy &amp; Commodities{" "}
                              </a>
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
                                  <a href="corporate/finance-lending/structured-finance/energy-commodities/our-success-stories.html">
                                    Our Success Stories
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-5">
                              <a href="corporate/finance-lending/structured-finance/cross-border-financing.html">
                                Cross-border Financing
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-3-3-6">
                              <a href="corporate/finance-lending/structured-finance/syndicated-financing.html">
                                Syndicated Financing
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-3-4">
                          <span className="ma5menu__btn--enter">
                            <i className="icon-chevron-right" />
                          </span>
                          <a href="corporate/finance-lending/asset-finance.html">
                            Asset Finance{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-3-4" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Asset Finance{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-3-4-1">
                              <a href="corporate/finance-lending/asset-finance/mcb-leasing.html">
                                MCB Leasing
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-3-4">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="corporate/investment-advisory.html">
                        Investment &amp; Advisory{" "}
                      </a>
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
                          <a href="corporate/investment-advisory/global-markets.html">
                            Global Markets{" "}
                          </a>
                          <ul data-ma5order="ma5-ul-3-4-1" className="lvl-3">
                            <div className="ma5menu__leave">
                              <span className="ma5menu__btn--leave">
                                <i className="icon-twotone-arrow" />
                              </span>
                              Global Markets{" "}
                            </div>
                            <li data-ma5order="ma5-li-3-4-1-1">
                              <a href="corporate/investment-advisory/global-markets/financial-markets-summary.html">
                                Financial Markets summary
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-4-1-2">
                              <a href="corporate/investment-advisory/global-markets/global-markets-solutions.html">
                                Global Markets Solutions
                              </a>
                            </li>
                            <li data-ma5order="ma5-li-3-4-1-3">
                              <a href="corporate/investment-advisory/global-markets/direct-access-to-markets.html">
                                Direct access to markets
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ma5order="ma5-li-3-4-2">
                          <a href="corporate/investment-advisory/capital-markets.html">
                            Capital Markets
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-3-4-3">
                          <a href="corporate/investment-advisory/securities-services.html">
                            Securities Services
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-4">
                  <span className="ma5menu__btn--enter">
                    <i className="icon-chevron-right" />
                  </span>
                  <a href="institutional.html">Institutional</a>
                  <ul data-ma5order="ma5-ul-4" className="lvl-1">
                    <div className="ma5menu__leave">
                      <span className="ma5menu__btn--leave">
                        <i className="icon-twotone-arrow" />
                      </span>
                      Institutional
                    </div>
                    <li data-ma5order="ma5-li-4-1">
                      <a href="institutional/mcb-at-a-glance.html">
                        MCB at a glance
                      </a>
                    </li>
                    <li data-ma5order="ma5-li-4-2">
                      <a href="institutional/our-geographical-presence.html">
                        Our geographical presence
                      </a>
                    </li>
                    <li data-ma5order="ma5-li-4-3">
                      <span className="ma5menu__btn--enter">
                        <i className="icon-chevron-right" />
                      </span>
                      <a href="institutional/our-solutions.html">
                        Our solutions{" "}
                      </a>
                      <ul data-ma5order="ma5-ul-4-3" className="lvl-2">
                        <div className="ma5menu__leave">
                          <span className="ma5menu__btn--leave">
                            <i className="icon-twotone-arrow" />
                          </span>
                          Our solutions{" "}
                        </div>
                        <li data-ma5order="ma5-li-4-3-1">
                          <a href="institutional/our-solutions/bank-of-banks.html">
                            Bank of Banks
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-4-3-2">
                          <a href="institutional/our-solutions/correspondent-banking.html">
                            Correspondent Banking
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-4-3-3">
                          <a href="institutional/our-solutions/risk-sharing.html">
                            Risk Sharing
                          </a>
                        </li>
                        <li data-ma5order="ma5-li-4-3-4">
                          <a href="institutional/our-solutions/syndications.html">
                            Syndications
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li data-ma5order="ma5-li-4-4">
                      <a href="institutional/events.html">Events</a>
                    </li>
                  </ul>
                </li>
                <li data-ma5order="ma5-li-5">
                  <a href="rates-fees.html">Rates &amp; Fees</a>
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
      <div className="desktop-menu d-none d-lg-block d-xl-block header-home">
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
                      <li className="">
                        <a href="index.html" target="_self">
                          Personal
                        </a>
                      </li>
                      <li className="">
                        <a href="https://private.mcb.mu/" target="_blank">
                          Private
                        </a>
                      </li>
                      <li className="">
                        <a href="sme.html" target="_self">
                          SME
                        </a>
                      </li>
                      <li className="active">
                        <a href="corporate.html" target="_self">
                          Corporate
                        </a>
                      </li>
                      <li className="">
                        <a href="institutional.html" target="_self">
                          Institutional
                        </a>
                      </li>
                      <li className="">
                        <a href="https://mcbgroup.com/" target="_blank">
                          MCB Group
                        </a>
                      </li>
                    </ul>
                    <div className="link-icon d-flex flex-row">
                      <div className="link-icon d-flex flex-row">
                        <ul className="mx-2">
                          <li>
                            <a href="corporate/contact-us.html">
                              {/*<i class="icon-phone"></i>*/}
                              <i className="fas fa-thin fa-file-lines text-light" />
                              <span>Contact us</span>
                            </a>
                          </li>
                        </ul>
                      </div>{" "}
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
                  <div className="logo" style={{ visibility: "visible" }}>
                    {" "}
                    <a className="navbar-brand main" href="#"></a>
                    <a href="index.html">
                      <img
                        src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                        //sf-size={2255}
                        data-sf-ec-immutable=""
                        alt=""
                        width={40}
                        className="sf-immutable-selected"
                      />
                    </a>
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
                            <a
                              className="nav-link dropdown-toggle"
                              href="corporate/what-we-do.html"
                              target="_self"
                              id="navbarDropdownMenuLink0-2"
                              data-bs-toggle="dropdown"
                            >
                              What we do&nbsp;
                              {/* <i className="fas fa-chevron-down" /> */}
                            </a>
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
                                      <h2 className="sub-title">What we do</h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="menu-list">
                                      <ul>
                                        <li className="">
                                          <span>
                                            <strong>Corporate Banking</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink00-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/what-we-do/corporate-banking/our-success-stories.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Our success stories
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/what-we-do/corporate-banking/become-a-client.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Become a client
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>Global Business</strong>
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
                                                  href="corporate/what-we-do/global-business/become-a-client.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Become a client
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/what-we-do/global-business/investing-in-mauritius.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Investing in Mauritius
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/what-we-do/global-business/custody-services.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Custody Services
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
                                              href="corporate/finance-lending/structured-finance/energy-commodities.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Energy &amp; Commodities
                                                Financing
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="institutional.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Institutional Banking
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="sme.html"
                                              target="_self"
                                            >
                                              <strong>SME Banking</strong>
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
                              className="nav-link dropdown-toggle"
                              href="corporate/payment-cash.html"
                              target="_self"
                              id="navbarDropdownMenuLink1-2"
                              data-bs-toggle="dropdown"
                            >
                              Payment &amp; Cash&nbsp;
                              {/* <i className="fas fa-chevron-down" /> */}
                            </a>
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
                                        Payment &amp; Cash
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="menu-list">
                                      <ul>
                                        <li className="">
                                          <span>
                                            <strong>Pay</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink10-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/domestic-international-transfers.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Domestic &amp; International
                                                    transfers
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/internet-banking-pro-smartapprove.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Internet Banking Pro &amp;
                                                    SmartApprove App
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/bulk-payments.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Bulk Payments
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/corporate-card.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Corporate Card
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/fleetman-card.html"
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
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/swift-connectivity.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    SWIFT Connectivity
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/pay/drop-collect.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Drop &amp; Collect
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>Collect</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink11-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/collect/direct-debit-bill-payment.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Direct Debit &amp; Bill
                                                    Payment
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/collect/cash-deposit-solutions.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Cash Deposit Solutions
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/collect/e-commerce.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    E-commerce
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/collect/point-of-sale-solutions.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Point of Sale Solutions
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/collect/mobile-banking.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Mobile Banking
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>Monitor</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink12-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/monitor/e-statements.html"
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
                                                  href="corporate/payment-cash/monitor/reporting-services-ib-dashboard.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Reporting Services &amp; IB
                                                    Dashboard
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>Optimise</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink13-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/optimise/cash-pooling-services.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Cash Pooling Services
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/payment-cash/optimise/fx-money-market-services.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    FX &amp; Money Market
                                                    Services
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
                              className="nav-link dropdown-toggle"
                              href="corporate/finance-lending.html"
                              target="_self"
                              id="navbarDropdownMenuLink2-2"
                              data-bs-toggle="dropdown"
                            >
                              Finance &amp; Lending&nbsp;
                              {/* <i className="fas fa-chevron-down" /> */}
                            </a>
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
                                        Finance &amp; Lending
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="menu-list">
                                      <ul>
                                        <li className="">
                                          <span>
                                            <strong>Corporate Lending</strong>
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
                                                  href="corporate/finance-lending/corporate-lending/overdraft-working-capital.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Overdraft &amp; Working
                                                    Capital
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/corporate-lending/revolving-credit.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Revolving Credit
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/corporate-lending/import-loan.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Import Loan
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/corporate-lending/export-loan.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Export Loan
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/corporate-lending/term-loan.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Term Loan
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/corporate-lending/sustainable-loan.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Sustainable Loan
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/corporate-lending/guarantees.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Guarantees
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>
                                              Supply Chain Finance
                                            </strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink21-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="http://trade.mcb.mu/"
                                                  target="_blank"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Global Trade Portal
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/supply-chain-finance/trade-finance.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Trade Finance
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/supply-chain-finance/credit-protection.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Credit Protection
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/supply-chain-finance/invoice-factoring.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Invoice Factoring
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>Structured Finance</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink22-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/structured-finance/acquisition-financing.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Acquisition Financing
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/structured-finance/property-financing.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Property Financing
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/structured-finance/project-financing.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Project Financing
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/structured-finance/energy-commodities.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Energy &amp; Commodities
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/structured-finance/cross-border-financing.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Cross-border Financing
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/finance-lending/structured-finance/syndicated-financing.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Syndicated Financing
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="">
                                          <span>
                                            <strong>Asset Finance</strong>
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
                                                  href="corporate/finance-lending/asset-finance/mcb-leasing.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    MCB Leasing
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
                              className="nav-link dropdown-toggle"
                              href="corporate/investment-advisory.html"
                              target="_self"
                              id="navbarDropdownMenuLink3-2"
                              data-bs-toggle="dropdown"
                            >
                              Investment &amp; Advisory&nbsp;
                              {/* <i className="fas fa-chevron-down" /> */}
                            </a>
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
                                        Investment &amp; Advisory
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="menu-list">
                                      <ul>
                                        <li className="">
                                          <span>
                                            <strong>Global Markets</strong>
                                            <small></small>
                                          </span>
                                          <ul
                                            className="submenu"
                                            aria-labelledby="navbarDropdownMenuLink30-1"
                                          >
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/investment-advisory/global-markets/financial-markets-summary.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Financial Markets summary
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/investment-advisory/global-markets/global-markets-solutions.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Global Markets Solutions
                                                  </div>
                                                  <small></small>
                                                </a>
                                              </span>
                                            </li>
                                            <li className="text-3 w-100  ">
                                              <span>
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="corporate/investment-advisory/global-markets/direct-access-to-markets.html"
                                                  target="_self"
                                                >
                                                  <div className="d-flex">
                                                    <i className="fas fa-chevron-right text-2 me-1" />
                                                    Direct access to markets
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
                                              href="corporate/investment-advisory/capital-markets.html"
                                              target="_self"
                                            >
                                              <strong>Capital Markets</strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="corporate/investment-advisory/securities-services.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Securities Services
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
                  {/* Side Button */}
                  <ul
                    className="navbar-nav button"
                    style={{ visibility: "visible" }}
                  >
                    {/* Internet Banking */}
                    <li className="nav-item ib">
                      <div className="btn-group">
                        <a
                          className="nav-link px-3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-ib" style={{ fontSize: 20 }} />
                          <small
                            style={{ lineHeight: 10, fontSize: "80%" }}
                            className=""
                          >
                            Internet Banking
                          </small>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <div className="title">
                            <h4>Internet Banking</h4>
                          </div>
                          <ul className="buttons">
                            <li className="btn-primary">
                              <a
                                href="/T001/banking.html"
                                className="dropdown-item"
                                target="_blank"
                              >
                                Login
                              </a>
                            </li>
                          </ul>
                          <ul className="more-links mt-4">
                            <li>
                              <a href="security-centre.html">
                                <i className="icon-chevron-right" /> Protect
                                yourself online
                              </a>
                            </li>
                            {/* <li><a href="https://ib.mcb.mu/T001/process.jsp"><i class="icon-chevron-right"></i> Register</a></li> */}
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

export default CorporateHeader;
