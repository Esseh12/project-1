// import { Link } from "react-router-dom";
// import { useState } from "react";

const MobileMenu = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the 'active' class
  // const toggleMenu = () => {
  //   setMenuOpen((prevState) => !prevState);
  // };

  return (
    // <div className="mobile-menu d-block d-lg-none d-xl-none">
    //   <div className="main-navigation">
    //     <div className="navbar-level">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-12">
    //             <div className="univers">
    //               <div className="logo logo-mobile">
    //                 <Link to="/">
    //                   <img
    //                     src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
    //                     alt="MCB Logo"
    //                     width={40}
    //                     className="sf-immutable-selected"
    //                   />
    //                 </Link>
    //               </div>
    //               <div className="univers-option">
    //                 <div className="btn-group">
    //                   <a className="nav-link px-3" data-bs-toggle="dropdown">
    //                     <i className="icon-ib" style={{ fontSize: 20 }} />
    //                   </a>
    //                   <div className="dropdown-menu dropdown-menu-end">
    //                     <h4>Internet Banking</h4>
    //                     <ul className="buttons">
    //                       <li className="btn-primary">
    //                         <a
    //                           href="/T001/banking.html"
    //                           className="dropdown-item"
    //                           target="_blank"
    //                           rel="noopener noreferrer"
    //                         >
    //                           Login
    //                         </a>
    //                       </li>
    //                     </ul>
    //                     <ul className="more-links mt-4">
    //                       <li>
    //                         <Link to="/security-centre">
    //                           <i className="icon-chevron-right" /> Protect
    //                           yourself online
    //                         </Link>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //                 <a className="ma5menu__toggle" type="button">
    //                   <svg
    //                     width="40px"
    //                     height="40px"
    //                     viewBox="0 0 100 100"
    //                     version="1.1"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     xmlnsXlink="http://www.w3.org/1999/xlink"
    //                     // className={`burger-wrapper ${
    //                     //   menuOpen ? "active" : "" // Dynamically add 'active' class
    //                     // }`}
    //                     // onClick={(e) => {
    //                     //   // Inline toggle logic
    //                     //   e.stopPropagation();
    //                     //   toggleMenu();
    //                     // }}
    //                     className="burger-wrapper"
    //                   >
    //                     <g
    //                       id="Artboard-Copy-2"
    //                       stroke="none"
    //                       strokeWidth="1"
    //                       fill="none"
    //                       fillRule="evenodd"
    //                       strokeLinecap="round"
    //                     >
    //                       <g
    //                         id="Group"
    //                         transform="translate(12.000000, 29.000000)"
    //                         fillRule="nonzero"
    //                         strokeWidth="4"
    //                       >
    //                         <path
    //                           className="line"
    //                           id="line-middle"
    //                           d="M13,20 L63,20"
    //                           stroke="#ffffff"
    //                           strokeLinejoin="round"
    //                         ></path>
    //                         <path
    //                           className="line"
    //                           id="line-top"
    //                           d="M63,1 L13.347708,1 C4.449236,1 0,4.16666667 0,10.5 C0,16.8333333 4.449236,20 13.347708,20 L59,20"
    //                           stroke="#ffffff"
    //                         ></path>
    //                         <path
    //                           className="line"
    //                           id="line-bottom"
    //                           d="M42,68 L75,68 C81.6666667,67 85,63.8333333 85,58.5 C85,53.1666667 81.6666667,50 75,49 L30,49"
    //                           transform="translate(-13.000000, -29.000000)"
    //                           stroke="#ffffff"
    //                         ></path>
    //                       </g>
    //                     </g>
    //                   </svg>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <header id="header">
      <div className="mobile-menu d-block d-lg-none d-xl-none">
        <div className="main-navigation">
          <div className="navbar-level">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="univers">
                    <div className="logo logo-mobile">
                      <a href="index.html">
                        <img
                          src="images/mcb/default-album/logo-mcb-caravelle-red.svg"
                          // sf-size={2255}
                          data-sf-ec-immutable=""
                          alt=""
                          width={40}
                          className="sf-immutable-selected"
                        />
                      </a>
                    </div>
                    <div className="univers-option">
                      <div className="btn-group">
                        <a
                          className="nav-link px-3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-ib" style={{ fontSize: 20 }} />
                          {/* <small style="
                  line-height: 10px; font-size: 80%;
              " class="">Internet Banking
          </small> */}
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
                            {/* <li class="mt-3 btn-primary"><a href="https://identity.mcb.mu/auth/realms/mcb-customers/protocol/openid-connect/auth?client_id=mcb-nind-ib&redirect_uri=https%3A%2F%2Fibpro.mcb.mu%2Fmcb-corporate-ib-web-app%2Fselect-context&state=bfb38828-8768-42e7-8a44-03afbad14dcf&response_mode=fragment&response_type=code%20id_token%20token&scope=openid&nonce=f68e6652-25f9-473c-8c13-b3942e58b9a9&code_challenge=U5wHps7VQhTorF79Lfdx-YHB_CFPwhgBOWtRTjWnXHo&code_challenge_method=S256" class="dropdown-item" target="_blank">Business</a></li> */}
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
                          <g
                            id="Artboard-Copy-2"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                          >
                            <g
                              id="Group"
                              transform="translate(12.000000, 29.000000)"
                              fillRule="nonzero"
                              strokeWidth={4}
                            >
                              <path
                                className="line"
                                id="line-middle"
                                d="M13,20 L63,20"
                                stroke="#ffffff"
                                strokeLinejoin="round"
                              />
                              <path
                                className="line"
                                id="line-top"
                                d="M63,1 L13.347708,1 C4.449236,1 0,4.16666667 0,10.5 C0,16.8333333 4.449236,20 13.347708,20 L59,20"
                                stroke="#ffffff"
                              />
                              <path
                                className="line"
                                id="line-bottom"
                                d="M42,68 L75,68 C81.6666667,67 85,63.8333333 85,58.5 C85,53.1666667 81.6666667,50 75,49 L30,49"
                                transform="translate(-13.000000, -29.000000)"
                                stroke="#ffffff"
                              />
                            </g>
                          </g>
                        </svg>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {" "}
          {/* mobile menu toggle button end */}
          <div style={{ display: "none" }}>
            {/* style={{ display: "none" }} */}
            {/* source for mobile menu start */}
            <ul className="site-menu">
              <li className='"active"'>
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
                          Bank Of Africa Rupys
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
                          American Express®
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
                      {/* <li >

          <a href="https://juice.mu/">


              Get MCB Juice

          </a>
      </li> */}
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
                      {/* <li >

          <a href="personal/existing-customers/update-your-personal-profile.html">


              Update your personal profile

          </a>
      </li> */}
                      <li>
                        <a href="personal/contact-us.html">Contact us</a>
                      </li>
                      <li>
                        <a href="file-a-complaint.html">File a complaint</a>
                      </li>
                      {/* <li >

          <a href="locate-us.html">


              Find your nearest branch

          </a>
      </li> */}
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
              <li>
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
                          Corporate Banking
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
                              E-commerce
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
                          Asset Finance
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
            {/* source for mobile menu end */}{" "}
            {/* source for mobile menu footer start */}
            {/* source for mobile menu footer end */}
          </div>
        </div>{" "}
        {/* Modal level one */}
      </div>
      <div className=" desktop-menu d-none d-lg-block d-xl-block header-home">
        <div className="nav-container">
          <div className="top-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between">
                    <ul id="nav" className="nav-content ">
                      <li className="active">
                        <a href="index.html" target="_self">
                          Personal
                        </a>
                      </li>
                      {/* <li class="">
  <a href ="https://private.mcb.mu/" target="_blank">Private</a>
    </li> */}
                      <li className="">
                        <a href="sme.html" target="_self">
                          SME
                        </a>
                      </li>
                      <li className="">
                        <a href="corporate.html" target="_self">
                          Corporate
                        </a>
                      </li>
                      <li className="">
                        <a href="institutional.html" target="_self">
                          Institutional
                        </a>
                      </li>
                      {/* <li class="">
  <a href ="https://mcbgroup.com/" target="_blank">MCB Group</a>
    </li> */}
                    </ul>
                    <div className="link-icon d-flex flex-row">
                      <div className="link-icon d-flex flex-row">
                        {/*<ul class="mx-2">

		<li>

			<a href="#">

				<i class="icon-become-customer"></i><span>Become a customer</span>

			</a>

		</li>

	</ul>*/}
                        <ul className="mx-2">
                          <li>
                            <a href="personal/contact-us.html">
                              {/*<i class="icon-phone"></i>*/}
                              <i className="fas fa-thin fa-file-lines text-light" />
                              <span>Contact us</span>
                            </a>
                          </li>
                        </ul>
                        {/* <ul class="mx-2">
    <li>
<a href="locate-us.html"> <i class="icon-locate-us"></i><span>Find a branch</span> </a>
    </li>
  </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation ">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="collapse navbar-collapse " id="main_nav">
                  {" "}
                  {/* Logo */}
                  <div className="logo">
                    {" "}
                    <a className="navbar-brand main" href="#"></a>
                    <a href="index.html">
                      <img
                        src="images/mcb/default-album/logo-mcb-caravelle-red.svg"
                        //sf-size={2255}
                        data-sf-ec-immutable=""
                        alt=""
                        width={40}
                        className="sf-immutable-selected"
                      />
                    </a>
                  </div>{" "}
                  {/* Second Level Navigation */}
                  <div className="ms-auto me-auto main-nav">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown has-megamenu ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="personal/accounts-packages.html"
                              target="_self"
                              id="navbarDropdownMenuLink0-2"
                              data-bs-toggle="dropdown"
                            >
                              Accounts &amp; Packages&nbsp;
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
                                              href="personal/accounts-packages/standard-savings-account.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Standard savings account
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/accounts-packages/mcb-rupys.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Bank Of Africa Rupys
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/accounts-packages/standard-current-account.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Standard current account
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/accounts-packages/foreign-currency-account.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Foreign currency account
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/accounts-packages/instakit.html"
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
                                              href="personal/accounts-packages/pack-1825.html"
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
                                              href="personal/accounts-packages/neo.html"
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
                              className="nav-link dropdown-toggle"
                              href="personal/loans.html"
                              target="_self"
                              id="navbarDropdownMenuLink1-2"
                              data-bs-toggle="dropdown"
                            >
                              Loans&nbsp;
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
                                              href="personal/loans/educational-loan.html"
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
                                              href="personal/loans/personal-loan.html"
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
                                              href="personal/loans/home-loan.html"
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
                                              href="personal/loans/green-loan.html"
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
                                              href="personal/loans/personal-overdrafts.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Personal overdrafts
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        {/* <li class="">
          <span>
              <a class="d-flex flex-column " href="https://mcbleasing.mu/" target="_blank">
                  <strong>Car lease</strong>

                  <small>
                      
                  </small>
              </a>
          </span>
      </li> */}
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
                              href="personal/cards.html"
                              target="_self"
                              id="navbarDropdownMenuLink2-2"
                              data-bs-toggle="dropdown"
                            >
                              Cards&nbsp;
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
                                              href="personal/cards/mcb-debit-card.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Bank Of Africa debit card
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/cards/mastercard-primo-credit-card.html"
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
                                              href="personal/cards/classic-credit-card.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Classic credit card
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/cards/gold-credit-card.html"
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
                                                  href="personal/cards/american-express/american-express-green.html"
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
                                                  href="personal/cards/american-express/american-express-gold.html"
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
                                                  href="personal/cards/american-express/membership-rewards.html"
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
                                              href="personal/cards/visa-platinum.html"
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
                                              href="personal/cards/visa-signature.html"
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
                                              href="personal/cards/compare-our-credit-cards.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Compare our credit cards
                                              </strong>
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
                                                  href="personal/cards/prepaid-cards/visa-prepaid-card.html"
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
                                                  href="personal/cards/prepaid-cards/unionpay-prepaid-card.html"
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
                                              href="personal/cards/travel-insurance.html"
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
                              className="nav-link dropdown-toggle"
                              href="personal/investments.html"
                              target="_self"
                              id="navbarDropdownMenuLink3-2"
                              data-bs-toggle="dropdown"
                            >
                              Investments&nbsp;
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
                                              href="personal/investments/mcb-mutual-funds.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Bank Of Africa Mutual Funds
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/investments/stockbroking.html"
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
                                              href="personal/investments/education-plan.html"
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
                                              href="personal/investments/retirement-plan.html"
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
                                              href="personal/investments/life-insurance.html"
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
                                              href="personal/investments/fixed-deposit.html"
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
                              className="nav-link dropdown-toggle"
                              href="personal/ways-to-bank.html"
                              target="_self"
                              id="navbarDropdownMenuLink4-1"
                              data-bs-toggle="dropdown"
                            >
                              Ways to bank&nbsp;
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
                                        Ways to bank
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="menu-list">
                                      <ul>
                                        {/* <li class="">
          <span>
              <a class="d-flex flex-column " href="https://juice.mu/" target="_self">
                  <strong>MCB Juice</strong>

                  <small>
                      
                  </small>
              </a>
          </span>
      </li> */}
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/ways-to-bank/internet-banking.html"
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
                                              href="personal/ways-to-bank/sms-banking.html"
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
                                              href="personal/ways-to-bank/mcb-refill.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Bank Of Africa Refill
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/ways-to-bank/atms.html"
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
                                              href="personal/ways-to-bank/in-branch-banking.html"
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
                                              href="personal/ways-to-bank/bill-payments.html"
                                              target="_self"
                                            >
                                              <strong>Pay my bills</strong>
                                              <small></small>
                                            </a>
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
                                                <a
                                                  className="d-flex flex-column text-1 line-height-2 "
                                                  href="personal/ways-to-bank/international-transfers/international-payment.html"
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
                                                  href="personal/ways-to-bank/international-transfers/moneygram.html"
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
                                              href="personal/ways-to-bank/e-statements.html"
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
                              className="nav-link dropdown-toggle"
                              href="personal/existing-customers.html"
                              target="_self"
                              id="navbarDropdownMenuLink5-1"
                              data-bs-toggle="dropdown"
                            >
                              Existing customers&nbsp;
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
                                        Existing customers
                                      </h2>
                                      <p className="sub-description"></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-9">
                                    <div className="menu-list">
                                      <ul>
                                        {/* <li class="">
          <span>
              <a class="d-flex flex-column " href="https://juice.mu/" target="_blank">
                  <strong>Get MCB Juice</strong>

                  <small>
                      
                  </small>
              </a>
          </span>
      </li> */}
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="/T001/banking.html"
                                              target="_blank"
                                            >
                                              <strong>
                                                Log in to Internet Banking
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/offers-and-promotions.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Offers &amp; promotions
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/cards/american-express/membership-rewards.html"
                                              target="_self"
                                            >
                                              <strong>
                                                American Express® Membership
                                                Rewards® programme
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/help-centre.html"
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
                                              href="security-centre.html"
                                              target="_self"
                                            >
                                              <strong>
                                                Go to security center
                                              </strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        {/* <li class="">
          <span>
              <a class="d-flex flex-column " href="https://app.mcb.mu/app/banking/ways-to-bank/update-your-profile" target="_blank">
                  <strong>Update your personal profile</strong>

                  <small>
                      
                  </small>
              </a>
          </span>
      </li> */}
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="personal/contact-us.html"
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
                                              href="file-a-complaint.html"
                                              target="_self"
                                            >
                                              <strong>File a complaint</strong>
                                              <small></small>
                                            </a>
                                          </span>
                                        </li>
                                        {/* <li class="">
          <span>
              <a class="d-flex flex-column " href="locate-us.html" target="_self">
                  <strong>Find your nearest branch</strong>

                  <small>
                      
                  </small>
              </a>
          </span>
      </li> */}
                                        <li className="">
                                          <span>
                                            <a
                                              className="d-flex flex-column "
                                              href="rates-fees.html"
                                              target="_self"
                                            >
                                              <strong>
                                                View interest rates, fees and
                                                charges
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
                  <ul className="navbar-nav button">
                    {/*<li class="nav-item search">

		<a type="button" class="search nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

			<i class="icon-search-new"></i>

		</a>

	</li>*/}
                    {/* Become a customer */}
                    {/* <li class="nav-item search">

		<a href="https://www.mcb.mu/en/personal/onboarding/home" class=" btn btn-primary btn-apply-online me-4 mt-3 w-100-mobile btn-floating is-visible" target="_blank" style="
			    display: flex;
			    flex-direction: row;
			    align-content: center;
			    align-items: center;
			    border-radius: 0px;
			    background: #e9e9e9;
			    border-color: #e9e9e9;
				height: 100%;
				margin-top: 0!important;
				margin-right: 0!important;
				color: #c72b2b;
			">Become a customer<i class="fas fa-angle-right icons ms-1" style="position: relative; top: 2px;"></i> </a>

	</li> */}
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
                            {/* <li class="mt-3 btn-primary"><a href="https://identity.mcb.mu/auth/realms/mcb-customers/protocol/openid-connect/auth?client_id=mcb-nind-ib&redirect_uri=https%3A%2F%2Fibpro.mcb.mu%2Fmcb-corporate-ib-web-app%2Fselect-context&state=bfb38828-8768-42e7-8a44-03afbad14dcf&response_mode=fragment&response_type=code%20id_token%20token&scope=openid&nonce=f68e6652-25f9-473c-8c13-b3942e58b9a9&code_challenge=U5wHps7VQhTorF79Lfdx-YHB_CFPwhgBOWtRTjWnXHo&code_challenge_method=S256" class="dropdown-item" target="_blank">Business</a></li> */}
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
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
