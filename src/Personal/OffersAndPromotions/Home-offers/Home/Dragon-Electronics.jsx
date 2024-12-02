import { Helmet } from "react-helmet-async";
import PersonalHeader from "../../../../Components/Personal-header";
import NavMenu from "../../OfferNavMenu";
import Footer from "../../../../Components/Footer";

const DragonElectronics = () => {
  const navItems = [
    {
      text: "Lifestyle Offers",
      href: "/personal/offers-and-promotions",
    },
    { text: "Home Offers", href: "/personal/home-offers", isActive: true },
    { text: "Banking Promotions", href: "/personal/banking" },
    {
      text: "American Express® Membership Rewards®",
      href: "/personal/american-express-membership-rewards-offers",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers/Home/Dragon-Electronics by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:56:20 GMT */}
        <meta name="title" content="Dragon Electronics" />
        <meta
          name="description"
          content='<p>Enjoy <strong>10%</strong> discount.</p><br><p><strong>Conditions:</strong></p><ul class=""><li><span class=""></span><span class="">The offer is valid on cash purchases and hire purchases.</span></li><li><span class=""></span><span class="">Payment needs to be made with an MCB card or via MCB Juice.</span></li><li><span class=""></span><span class="">The discount is not applicable on commercial products and services. The discount cannot be cumulated with other discounts/promotions of Dragon Electronics. You may choose either the 10% discount or any better discount/offer. However, both cannot be cumulated.</span></li></ul><br><p>You can either shop in Dragon Electronics outlets or online on <a href="" target="" title="">www.dragonelectronics.mu</a></p><ul class=""><li><span class=""></span><span class="">Bagatelle Mall | T: 468-8928 / 5919 3085</span></li><li><span class=""></span><span class="">Chemin Grenier | T: 622 2282 / 5919 3295</span></li><li><span class=""></span><span class="">Curepipe, Arcade Salaffa | T: 676 1302 / 5252 6711</span></li><li><span class=""></span><span class="">Flacq Coeur de Ville | T: 413 0822 / 5943 9678</span></li><li><span class=""></span><span class="">Grand Baie La Croisette | T: 269 6180 / 5256 2818</span></li><li><span class=""></span><span class="">Mahï¿½bourg | T: 631 4900 / 5919 3977</span></li><li><span class=""></span><span class="">Phoenix, Le Valentina Shopping Mall | T: 606 5609 / 5919 3163</span></li><li><span class=""></span><span class="">Port Louis, La Chaussï¿½e Street | T: 212-1820 / 5252 6724</span></li><li><span class=""></span><span class="">Quatre Bornes | T: 424 9630 / 5252 6739</span></li><li><span class=""></span><span class="">Roche Bois | T: 241 3127 / 5509 4094</span></li><li><span class=""></span><span class="">Rose Hill, Les Galeries Evershine | T: 464 3369 / 5252 6740</span></li><li><span class=""></span><span class="">Riviï¿½re Noire, Ruisseau Crï¿½ole | T: 484 0406 / 5862 7998</span></li></ul><div><div><div><br><p>To benefit from the discount when you shop online, please contact the Customer Relationship Team:</p><ul class=""><li><span class=""></span><span class="">Christine Adolphe | T: 5252 6721</span></li><li><span class=""></span><span class="">Sanjana Katonah-Bhantoo | T: 5862 7993</span></li><li><span class=""></span><span class="">Natasha Sunasee Joyekurun | T: 5252 6712</span></li></ul><p>ï¿½ï¿½</p></div></div></div>'
        />
        <title>Dragon Electronics</title>
        <meta property="og:title" content="Dragon Electronics" />
        <meta
          property="og:description"
          content='<p>Enjoy <strong>10%</strong> discount.</p><br><p><strong>Conditions:</strong></p><ul class=""><li><span class=""></span><span class="">The offer is valid on cash purchases and hire purchases.</span></li><li><span class=""></span><span class="">Payment needs to be made with an MCB card or via MCB Juice.</span></li><li><span class=""></span><span class="">The discount is not applicable on commercial products and services. The discount cannot be cumulated with other discounts/promotions of Dragon Electronics. You may choose either the 10% discount or any better discount/offer. However, both cannot be cumulated.</span></li></ul><br><p>You can either shop in Dragon Electronics outlets or online on <a href=__.html target="" title="">www.dragonelectronics.mu</a></p><ul class=""><li><span class=""></span><span class="">Bagatelle Mall | T: 468-8928 / 5919 3085</span></li><li><span class=""></span><span class="">Chemin Grenier | T: 622 2282 / 5919 3295</span></li><li><span class=""></span><span class="">Curepipe, Arcade Salaffa | T: 676 1302 / 5252 6711</span></li><li><span class=""></span><span class="">Flacq Coeur de Ville | T: 413 0822 / 5943 9678</span></li><li><span class=""></span><span class="">Grand Baie La Croisette | T: 269 6180 / 5256 2818</span></li><li><span class=""></span><span class="">Mahï¿½bourg | T: 631 4900 / 5919 3977</span></li><li><span class=""></span><span class="">Phoenix, Le Valentina Shopping Mall | T: 606 5609 / 5919 3163</span></li><li><span class=""></span><span class="">Port Louis, La Chaussï¿½e Street | T: 212-1820 / 5252 6724</span></li><li><span class=""></span><span class="">Quatre Bornes | T: 424 9630 / 5252 6739</span></li><li><span class=""></span><span class="">Roche Bois | T: 241 3127 / 5509 4094</span></li><li><span class=""></span><span class="">Rose Hill, Les Galeries Evershine | T: 464 3369 / 5252 6740</span></li><li><span class=""></span><span class="">Riviï¿½re Noire, Ruisseau Crï¿½ole | T: 484 0406 / 5862 7998</span></li></ul><div><div><div><br><p>To benefit from the discount when you shop online, please contact the Customer Relationship Team:</p><ul class=""><li><span class=""></span><span class="">Christine Adolphe | T: 5252 6721</span></li><li><span class=""></span><span class="">Sanjana Katonah-Bhantoo | T: 5862 7993</span></li><li><span class=""></span><span class="">Natasha Sunasee Joyekurun | T: 5252 6712</span></li></ul><p>ï¿½ï¿½</p></div></div></div>'
        />
        <meta
          property="og:url"
          content="https://mcb.mu/personal/offers-and-promotions/home-offers/Home/Dragon-Electronics"
        />
        <link
          rel="canonical"
          href="/personal/offers-and-promotions/home-offers/Home/Dragon-Electronics"
        />
      </Helmet>
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* HEADER COMPONENT */}
        <PersonalHeader />
        {/* HEADER COMPONENT */}
        <div role="main" className="main no-banner-spacing">
          {/* reusable nav menu component */}
          <NavMenu items={navItems} />
          {/* End NavMenu */}
          <div className="container locate-us-block">
            <div className="row ">
              <div className="col-lg-12">
                <h1>Dragon Electronics</h1>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="row pt-4 mt-2 mb-5">
              <div className="col-md-7 mb-4 mb-md-0 order-2 order-md-1 order-lg-1">
                <div className="tabs tabs-bottom tabs-center tabs-simple">
                  <ul
                    className="nav nav-tabs justify-content-start"
                    role="tablist"
                  >
                    <li className="nav-item active" role="presentation">
                      <a
                        className="nav-link active"
                        href="#tabsNavigationSimple1"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Description
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="tabsNavigationSimple1"
                      role="tabpanel"
                    >
                      <div className="text-start">
                        <h4>Description</h4>
                        <p>
                          Enjoy <strong>10%</strong> discount.
                        </p>
                        <br />
                        <p>
                          <strong>Conditions:</strong>
                        </p>
                        <ul className="">
                          <li>
                            <span className="" />
                            <span className="">
                              The offer is valid on cash purchases and hire
                              purchases.
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Payment needs to be made with an MCB card or via
                              MCB Juice.
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              The discount is not applicable on commercial
                              products and services. The discount cannot be
                              cumulated with other discounts/promotions of
                              Dragon Electronics. You may choose either the 10%
                              discount or any better discount/offer. However,
                              both cannot be cumulated.
                            </span>
                          </li>
                        </ul>
                        <br />
                        <p>
                          You can either shop in Dragon Electronics outlets or
                          online on{" "}
                          <a href="#" target="" title="">
                            www.dragonelectronics.mu
                          </a>
                        </p>
                        <ul className="">
                          <li>
                            <span className="" />
                            <span className="">
                              Bagatelle Mall | T: 468-8928 / 5919 3085
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Chemin Grenier | T: 622 2282 / 5919 3295
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Curepipe, Arcade Salaffa | T: 676 1302 / 5252 6711
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Flacq Coeur de Ville | T: 413 0822 / 5943 9678
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Grand Baie La Croisette | T: 269 6180 / 5256 2818
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Mahï¿½bourg | T: 631 4900 / 5919 3977
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Phoenix, Le Valentina Shopping Mall | T: 606 5609
                              / 5919 3163
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Port Louis, La Chaussï¿½e Street | T: 212-1820 /
                              5252 6724
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Quatre Bornes | T: 424 9630 / 5252 6739
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Roche Bois | T: 241 3127 / 5509 4094
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Rose Hill, Les Galeries Evershine | T: 464 3369 /
                              5252 6740
                            </span>
                          </li>
                          <li>
                            <span className="" />
                            <span className="">
                              Riviï¿½re Noire, Ruisseau Crï¿½ole | T: 484 0406 /
                              5862 7998
                            </span>
                          </li>
                        </ul>
                        <div>
                          <div>
                            <div>
                              <br />
                              <p>
                                To benefit from the discount when you shop
                                online, please contact the Customer Relationship
                                Team:
                              </p>
                              <ul className="">
                                <li>
                                  <span className="" />
                                  <span className="">
                                    Christine Adolphe | T: 5252 6721
                                  </span>
                                </li>
                                <li>
                                  <span className="" />
                                  <span className="">
                                    Sanjana Katonah-Bhantoo | T: 5862 7993
                                  </span>
                                </li>
                                <li>
                                  <span className="" />
                                  <span className="">
                                    Natasha Sunasee Joyekurun | T: 5252 6712
                                  </span>
                                </li>
                              </ul>
                              <p>ï¿½ï¿½</p>
                            </div>
                          </div>
                        </div>
                        <p>
                          <strong>Validity:</strong> Sunday, 31 December 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 order-1 mb-5 order-md-2 order-lg-2">
                <div className="portfolio-item">
                  <span className="thumb-info thumb-info-lighten border-radius-0">
                    <span
                      className="owl-carousel owl-theme dots-inside m-0"
                      data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                    >
                      <span>
                        <img
                          src="../../../../images/mcb/offers/home/dragon-electronics-hl-v2eb2d.jpg?sfvrsn=ae167c01_1"
                          className="img-fluid border-radius-0"
                          alt=""
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer component */}
        <Footer />
        {/* End Footer */}
      </div>
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */} {/* Demo */} {/* Theme Custom */}{" "}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/personal/offers-and-promotions/home-offers/Home/Dragon-Electronics by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 09:56:21 GMT */}
    </>
  );
};
export default DragonElectronics;
